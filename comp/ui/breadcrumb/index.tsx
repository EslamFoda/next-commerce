import Link from "next/link";
const Breadcrumb = ({type,slug}) => {
  return (
    <nav
      className="flex px-5 py-1 text-gray-400 border  bg-gray-200  "
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/">
            <span className="inline-flex cursor-pointer items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-blue-400">
              Home
            </span>
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            /
            <span className="ml-1 cursor-pointer text-sm font-medium text-gray-700  md:ml-2 dark:text-gray-400 dark:hover:text-blue-400">
             {type}
            </span>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            /
            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
             {slug}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
