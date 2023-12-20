function CollectionLeft() {
  return (
    <div className="flex flex-col gap-8">
      <img
        src="/images/Collection/Collection Left/unsplash_F56Y7dgrAkc.svg"
        alt="First Image"
      />
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <img
            src="/images/Collection/Collection Left/Ellipse 95.svg"
            alt="Man Image"
          />
          <div className="flex flex-col gap-.5 font-sens ">
            <h1 className="font-semibold text-xl">The Futr Abstr</h1>
            <p className="text-md text-collectionLeftP">10 in the stock</p>
          </div>
        </div>
        <div className="font-sans font-semibold">
          <h1 className="mb-1 text-sm text-collectionLeftH font-medium">
            Highest Bid
          </h1>
          <div className="flex gap-3">
            <img
              src="/images/Collection/Collection Left/ethereum 2.svg"
              alt=""
            />
            <p className="text-collectionLeftH">0.25 ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionLeft;
