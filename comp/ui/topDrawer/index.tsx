import { Fragment } from "react";

import { XIcon } from "@heroicons/react/solid";
import { Dialog, Transition } from "@headlessui/react";
type DrawerProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Drawer({ children, isOpen, setIsOpen }: DrawerProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        unmount={false}
        onClose={() => setIsOpen(false)}
        className="fixed z-30 inset-0 overflow-y-auto"
      >
        <div className="flex w-full">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-in duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-30"
            leave="transition-opacity ease-out duration-300"
            leaveFrom="opacity-30"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="z-40 fixed inset-0 bg-black" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <div
              className={`flex flex-col justify-between bg-white z-50
             w-full  py-4  text-left
             align-middle shadow-xl `}
            >
              <div>
                <div className="self-center px-6 pb-4 border-solid border-b transition-all border-b-gray-border">
                  <span
                    className="flex justify-between items-center gap-2"
                   
                  >
                    <span className="text-gray text-sm">What are you Looking for?</span>
                    <XIcon  onClick={() => setIsOpen(!isOpen)} className="w-3 h-3 hover:text-primary-hover cursor-pointer" /> 
                  </span>
                </div>
                <div className="px-6">{children}</div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
