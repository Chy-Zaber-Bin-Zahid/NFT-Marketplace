function Navbar() {
  return (
    <div className="flex justify-between items-center max-w-custom mx-auto mt-8">
      <h1
        className="font-extrabold text-xl font-integral tracking-tighter text-purple cursor-pointer"
      >
        NFTERS
      </h1>
      <div className="flex items-center gap-12 font-sans text-sm font-semibold">
        <h1 className="cursor-pointer">Marketplace</h1>
        <h1 className="cursor-pointer">Resource</h1>
        <h1 className="cursor-pointer">About</h1>
      </div>
      <div className="flex items-center gap-5 font-semibold cursor-pointer text-sm">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="text-white rounded-full px-6 pt-2.5 pb-3 border-2 w-80"
          />
          <img
            className="absolute top-3 right-4"
            src="/public/images/search-normal-1 1.svg"
            alt="Search Icon"
          />
        </div>
        <button
          className="text-white rounded-full px-10 pt-2.5 pb-3 bg-purple hover:bg-violet-800 transition-all duration-300"
        >
          Upload
        </button>
        <button
          className="rounded-full border-2 px-7 pt-2.5 pb-3 text-purple border-purple hover:text-white hover:bg-purple transition-all duration-300"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default Navbar;
