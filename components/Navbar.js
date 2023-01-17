import Link from "next/link";
import { Fragment } from "react";

export default function Navbar() {
  return (
    <Fragment>
      <nav className="bg-white px-6 py-4 shadow">
        <div className="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between">
          <div className="flex justify-between items-center">
            <div>
              <Link
                className="text-gray-800 text-xl font-bold md:text-2xl"
                href="/"
              >
                Jobs <span className="text-blue-500">Boards Uganda</span>
              </Link>
            </div>
            <div>
              <button
                type="button"
                className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:-mx-4">
            <Link
              className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
              href="/"
            >
              Home
            </Link>
            <Link
              className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
              href="/jobs"
            >
              Jobs
            </Link>
            <Link
              className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
              href="/about"
            >
              About us
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
