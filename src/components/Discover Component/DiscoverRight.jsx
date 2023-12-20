function DiscoverRight() {
  return (
    <div className="relative flex items-center col-span-2">
      <img
        className="z-20"
        src="/images/Discover/unsplash_E8Ufcyxz514.svg"
        alt="First image"
      />
      <h1 className="absolute z-40 top-6 left-6 font-sans text-white text-xl font-semibold">
        Abstr Gradient NFT
      </h1>
      <div className="flex gap-3 justify-center items-center z-40 absolute top-16 left-6">
        <img src="/images/Discover/Ellipse 95.svg" alt="" />
        <h1 className="font-sans text-white text-sm font-semibold">Arkhan17</h1>
      </div>

      <div className="z-40 absolute bottom-6 left-7 rounded-lg flex gap-28 px-6 py-2 backdrop-filter backdrop-blur-3xl bg-white bg-opacity-30 font-sans">
        <div>
          <h1 className="text-white text-sm">Current bid</h1>
          <div className="flex gap-3 mt-1">
            <img src="/images/Discover/ethereum 2.svg" alt="Logo" />
            <p className="text-white font-semibold">0.25 ETH</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-1">
            <h1 className="text-white text-sm">Ends in</h1>
            <p className="text-white font-semibold" >12<span className="font-medium">h</span> 42<span className="font-medium">m</span> 42<span className="font-medium">s</span></p>
          </div>
        </div>
      </div>
      <img
        src="/images/Discover/unsplash_pVoEPpLw818.svg"
        alt="Second Image"
        className="absolute left-20 z-10"
      />
      <img
        src="/images/Discover/unsplash_tZCrFpSNiIQ.svg"
        alt="Third Image"
        className="absolute left-40"
      />
      <img
        src="/images/Discover/Group 83.svg"
        alt="Circle Image"
        className="absolute z-30 top-custom-top -left-custom-left"
      />
    </div>
  );
}

export default DiscoverRight;
