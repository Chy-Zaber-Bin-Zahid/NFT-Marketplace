function CollectionMiddle({ collectionMiddleImage }) {
  return (
    <div className="grid grid-cols-2 pr-4 border-r gap-y-10">
      {collectionMiddleImage.map((each, index) => (
        <>
          <img
            src={`/images/Collection/Collection Middle/${collectionMiddleImage[index]}`}
            alt={`Image ${index + 1}`}
            className=" flex justify-self-center"
          />
          <div className="font-sens py-2">
            <h1 className="font-semibold text-xl mb-2">The Futr Abstr</h1>
            <div className="flex justify-between items-center gap-2">
              <img
                src="/images/Collection/Collection Middle/Ellipse 95.svg"
                alt="Man Picture"
              />
              <div className="px-2 py-1 border-2 border-collectionMiddleGreen rounded-lg flex justify-center items-center gap-2">
                <img
                  src="/images/Collection/Collection Middle/Vector.svg"
                  alt="Logo"
                />
                <p className="font-semibold text-collectionMiddleGreen text-sm">
                  0.25 ETH
                </p>
              </div>
              <p className="font-sens text-collectionMiddleGray text-sm">
                1 of 8
              </p>
            </div>
            {index !== 0 ? (
              <button className="rounded-full border-2 px-5 pt-2 pb-2.5 text-purple border-purple hover:text-white hover:bg-purple transition-all duration-300 mt-3">
                Place a bid
              </button>
            ) : (
              <button className="text-white rounded-full px-5 pt-2 pb-2.5 bg-purple hover:bg-violet-800 transition-all duration-300 mt-3">
                Place a bid
              </button>
            )}
          </div>
        </>
      ))}
    </div>
  );
}

export default CollectionMiddle;
