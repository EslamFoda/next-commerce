import { ThinHeart,CompareIcon } from "../icons";
const AddToWishlist = () => {
  return (
    <div className="flex items-center gap-x-7 gap-y-4 flex-wrap my-8">
      <div className="flex cursor-pointer group items-center gap-3">
        <ThinHeart />
        <span className="text-primary text-sm group-hover:text-black">
          ADD TO WISHLIST
        </span>
      </div>
      <div className="flex group cursor-pointer items-center gap-3">
        <CompareIcon />
        <span className="text-primary text-sm group-hover:text-black">
          ADD TO COMPARE
        </span>
      </div>
    </div>
  );
};

export default AddToWishlist;
