import CollectionMiddle from "./Collection Component/CollectionMiddle";
import CollectionLeft from "./Collection Component/collectionLeft";

function Collection() {
  const collectionMiddle = [
    "Group 88.svg",
    "Group 88(1).svg",
    "Group 88(2).svg",
  ];

  return (
    <div className="grid grid-cols-3 max-w-custom mx-auto py-32 gap-6">
      <CollectionLeft />
      <CollectionMiddle collectionMiddle={collectionMiddle} />
    </div>
  );
}

export default Collection;
