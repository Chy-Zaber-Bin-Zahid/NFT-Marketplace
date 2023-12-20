function Amazing() {
  return (
    <div className=" bg-gray-100 mt-10 py-36">
      <div className="grid grid-cols-3 max-w-custom mx-auto gap-24">
        <h1 className="font-integral font-extrabold tracking-tighter text-2xl">
          THE AMAZING NFT ART OF THE WORLD HERE
        </h1>
        <div className="flex gap-2 w-72 mx-auto">
          <img
            className="h-fit"
            src="/images/Amazing/card-tick-1 1.svg"
            alt="Card"
          />
          <div className="flex flex-col gap-4">
            <h1 className="font-sans font-semibold ">Fast Transaction</h1>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus imperdiet.
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <img
            className="h-fit"
            src="/images/Amazing/chart-square 2.svg"
            alt="Chart"
          />
          <div className="flex flex-col gap-4">
            <h1 className="font-sans font-semibold ">Growth Transaction</h1>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Amazing;
