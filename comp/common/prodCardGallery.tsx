import Image from "next/image";
const ProdCardGallery = ({ selectProd, setSelectedProd, prodImages }) => {
  return (
    <>
      {prodImages?.slice(0, 3).map((prod) => {
        return (
          <div
            style={{
              outline:
                selectProd === prod.url ? "2px solid var(--primary)" : null,
            }}
            onClick={() => {
              setSelectedProd(prod.url);
            }}
            key={prod.id}
            className="relative hover:outline-2 hover:outline hover:outline-blue-300  cursor-pointer h-10 w-10 rounded-md overflow-hidden"
          >
            <Image
              priority={true}
              alt="product image"
              src={prod?.url}
              layout="fill"
              objectFit="cover"
            />
          </div>
        );
      })}
    </>
  );
};

export default ProdCardGallery;
