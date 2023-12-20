function CollectionRight({ collectionRightDetails }) {
  return (
    <div className="pl-5 pr-4">
      <h1 className="font-integral font-extrabold tracking-tighter text-2xl mb-1">
        TOP COLLECTIONS OVER
      </h1>
      <p className="font-sens text-collectionLastPurple text-xl font-semibold mb-4">
        Last 7 days
      </p>
      {collectionRightDetails.map((each, index) => (
        <div
          key={index}
          className={`flex items-center gap-6 py-4 ${index !== 4 && "border-b"} `}
        >
          <p className="font-sans text-2xl font-semibold">
            {index + 1}
          </p>
          <div className="relative">
            <img
              src={`/public/images/Collection/Collection Right/${each.image}`}
              alt={`Image ${index + 1}`}
            />
            {each.verify === "yes" && (
              <img
                src="/public/images/Collection/Collection Right/Vector.svg"
                alt="Logo Verify"
                className="absolute -top-1.5 -right-1"
              />
            )}
          </div>

          <div className="flex flex-col gap-1 w-28">
            <h1 className="font-sans text-lg">{each.title}</h1>
            <div className="flex gap-1.5 justify-start items-center">
              <img
                src="/public/images/Collection/Collection Right/ethereum 1.svg"
                alt="Logo"
              />
              <p className="font-poppins text-collectionRightGray">
                {each.number}
              </p>
            </div>
          </div>
          <p
            className={` font-semibold font-poppins text-xl ${
              each.color === "green"
                ? "text-collectionRightGreen"
                : "text-collectionRightRed"
            }`}
          >
            {each.percentage}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CollectionRight;
