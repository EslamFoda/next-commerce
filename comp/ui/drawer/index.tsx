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
        <div className="flex w-3/4 h-screen">
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
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div
              className={`flex flex-col justify-between bg-white z-50

                          w-full max-w-sm py-4 overflow-hidden text-left

                          align-middle shadow-xl `}
            >
              <div>
                <div className="self-center px-6 pb-4 border-solid border-b cursor-pointer hover:text-primary-hover transition-all border-b-gray-border">
                  <span
                    className="flex items-center gap-2"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <XIcon className="w-3 h-3" /> Close
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
