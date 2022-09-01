import Link from "next/link";
import { FC } from "react";
interface Props {
  base:string
  type:string
  slug?:string
}
const Breadcrumb:FC<Props> = ({ base,type, slug }) => {
  return (
    <nav
      className="flex px-5 py-1 text-gray  bg-light-gray"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/">
            <span className="inline-flex cursor-pointer items-center text-xs font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-blue-400">
              {base}
            </span>
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            /
            <Link href={`/collections/${type}`}>
            <span className="ml-1 cursor-pointer text-xs font-medium text-gray-700  md:ml-2 dark:text-gray-400 dark:hover:text-blue-400">
              {type}
            </span>
            
            </Link>
          </div>
        </li>
       {slug && <li aria-current="page">
          <div className="flex items-center">
            /
            <span className="ml-1 text-xs font-medium text-gray-500 md:ml-2 dark:text-gray-400">
              {slug}
            </span>
          </div>
        </li>}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
