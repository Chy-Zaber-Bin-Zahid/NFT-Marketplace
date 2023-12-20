import DiscoverLeft from "./DiscoverLeft";
import DiscoverRight from "./DiscoverRight";

function Discover() {
  const threeNumbersAndCategory = [
    { number: 98, category: "Artwork" },
    { number: 12, category: "Auction" },
    { number: 15, category: "Artist" },
  ];

  return (
    <div className="max-w-custom mx-auto grid grid-cols-2 gap-10 py-20">
      <DiscoverLeft threeNumbersAndCategory={threeNumbersAndCategory} />
      <DiscoverRight />
    </div>
  );
}

export default Discover;
