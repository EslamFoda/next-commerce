import { Disclosure, Transition } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import { FC,ReactNode, Component } from "react";
interface Props {
    title:string
    children?: ReactNode[] | Component[] | any[] | any;
}
const MyDisclosure:FC<Props> = ({title,children}) => {
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white">
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between py-2 text-left text-sm font-medium text-font-color hover:text-primary-hover border-0 border-b border-gray-border border-solid">
              <span>{title}</span>
              {open ? (
                <MinusIcon className="h-4 w-4" />
              ) : (
                <PlusIcon className="h-4 w-4" />
              )}
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition duration-300 ease-in-out"
              enterFrom="transform -translate-y-7 opacity-0"
              enterTo="transform translate-y-0 opacity-100"
              leave="transition duration-300  ease-in-out"
              leaveFrom="transform translate-y-0 opacity-100"
              leaveTo="transform -translate-y-6 opacity-0"
            >
              <Disclosure.Panel className=" pt-4 pb-2 text-sm leading-7 text-gray-500">
                 {children}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};
export default MyDisclosure;
