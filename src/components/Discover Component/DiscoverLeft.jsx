function DiscoverLeft({ threeNumbersAndCategory }) {
  return (
    <div className="py-2">
      <h1 className="font-integral font-extrabold tracking-tighter text-4xl mb-5">
        DISCOVER, AND COLLECT DIGITAL ART NFTS
      </h1>
      <p className="font-sans w-discoverP text-gray-600 mb-8">
        Digital marketplace for crypto collectibles and non-fungible tokens
        (NFTs). Buy, Sell, and discover exclusive digital assets.
      </p>
      <button className="text-white rounded-full font-semibold px-7 pt-2.5 pb-3 bg-purple hover:bg-violet-800 transition-all duration-300 mb-8">
        Explore Now
      </button>
      <div className="flex justify-start items-center gap-6">
        {threeNumbersAndCategory.map((each, index) => (
          <div key={index}>
            <h1 className="font-integral font-extrabold text-4xl leading-none">
              {each.number}
              <span className="font-semibold">K+</span>
            </h1>
            <p className="leading-none text-gray-600">{each.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiscoverLeft;
