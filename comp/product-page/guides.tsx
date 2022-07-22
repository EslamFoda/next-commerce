import { Sizeicon,ShippingIcon2,MailIcon } from "../icons";
const Guides = ()=>{
    return (
        <div className="flex justify-between w-full mt-8">
        <div className="flex items-center gap-7">
          <div className="group cursor-pointer flex items-center gap-3">
            <Sizeicon />
            <span className="text-primary text-sm group-hover:text-black">
              size guide
            </span>
          </div>
          <div className="group cursor-pointer flex items-center gap-3">
            <ShippingIcon2 />
            <span className="text-primary text-sm group-hover:text-black">
              Shipping
            </span>
          </div>
        </div>
        <div className="flex gap-4 items-center group cursor-pointer">
          <MailIcon />
          <span className="text-primary text-sm group-hover:text-black">
            Ask about this product
          </span>
        </div>
      </div>
    )
}

export default Guides;