import CollectionMiddle from "./Collection Component/CollectionMiddle";
import CollectionRight from "./Collection Component/CollectionRight";
import CollectionLeft from "./Collection Component/collectionLeft";

function Collection() {
  const collectionMiddleImage = [
    "Group 88.svg",
    "Group 88(1).svg",
    "Group 88(2).svg",
  ];

  const collectionRightDetails = [
    {
      image: "unsplash_k0rVudBoB4c.svg",
      title: "CryptoFunks",
      number: "19,769.39",
      percentage: "+26.52%",
      verify: "yes",
      color: "green",
    },
    {
      image: "unsplash_fT49QnFucQ8.svg",
      title: "Cryptix",
      number: "2,769.39",
      percentage: "+10.52%",
      verify: "no",
      color: "red",
    },
    {
      image: "unsplash_5MTf9XyVVgM.svg",
      title: "Frensware",
      number: "9,232.39",
      percentage: "+2.52%",
      verify: "no",
      color: "green",
    },
    {
      image: "unsplash_WjIB-6UxA5Q.svg",
      title: "PunkArt",
      number: "3,769.39",
      percentage: "+1.52%",
      verify: "yes",
      color: "green",
    },
    {
      image: "unsplash_zkNT5mikUuo.svg",
      title: "Art Crypto",
      number: "10,769.39",
      percentage: "+2.52%",
      verify: "no",
      color: "red",
    },
  ];

  return (
    <div className="grid grid-cols-3 max-w-custom mx-auto py-32 gap-6">
      <CollectionLeft />
      <CollectionMiddle collectionMiddleImage={collectionMiddleImage} />
      <CollectionRight collectionRightDetails={collectionRightDetails} />
    </div>
  );
}

export default Collection;
