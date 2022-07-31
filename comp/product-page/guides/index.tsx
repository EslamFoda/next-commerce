import { useState } from "react";
import { Sizeicon, ShippingIcon2, MailIcon } from "../../icons";
import Modal from "../../ui/modal";
import SizeTable from "./sizeTabel";
import ShippingGuide from "./shippingGuide";
import Ask from "./ask";
const Guides = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpen2, setIsOpen2] = useState(false);
  let [isOpen3, setIsOpen3] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const openModal2 = () => {
    setIsOpen2(true);
  };
  const openModal3 = () => {
    setIsOpen3(true);
  };
  return (
    <div className="flex justify-between w-full mt-8">
      <div className="flex items-center gap-7">
        <div
          onClick={openModal}
          className="group cursor-pointer flex items-center gap-3"
        >
          <Sizeicon />
          <span className="text-primary text-sm group-hover:text-black">
            size guide
          </span>
        </div>
        <div
          onClick={openModal2}
          className="group cursor-pointer flex items-center gap-3"
        >
          <ShippingIcon2 />
          <span className="text-primary text-sm group-hover:text-black">
            Shipping
          </span>
        </div>
      </div>
      <div
        onClick={openModal3}
        className="flex gap-4 items-center group cursor-pointer"
      >
        <MailIcon />
        <span className="text-primary text-sm group-hover:text-black">
          Ask about this product
        </span>
      </div>
      <Modal maxWidth="1024px" isOpen={isOpen} setIsOpen={setIsOpen}>
        <h4 className="text-center font-semibold mb-2">SIZE GUIDE</h4>
        <p className="text-center mb-7 text-[#777777] text-sm">
          {" "}
          This is an approximate conversion table to help you find your size.{" "}
        </p>
        <SizeTable />
      </Modal>
      <Modal maxWidth="1024px" isOpen={isOpen2} setIsOpen={setIsOpen2}>
        <ShippingGuide />
      </Modal>
      <Modal maxWidth="576px" isOpen={isOpen3} setIsOpen={setIsOpen3}>
        <Ask />
      </Modal>
    </div>
  );
};

export default Guides;
