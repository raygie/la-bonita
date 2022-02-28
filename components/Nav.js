import Link from "next/link";
import Image from "next/image";

import "../styles/Nav.module.css";
import logo from "../public/android-chrome-192x192.png";

// * Navigation Bar Layout
const Nav = () => {
  return (
    // * Navigation Bar
    <nav className="bg-baseColor">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between ">
          <div className="font-bold items-center my-3">
            <Link href="/">
              <div className="inline-flex">
                <Image src={logo} alt="logo" height={40} width={70} />
                <div className="text-3xl">
                  <div className="rotate-90 w-7">LA</div>
                  <div>Bonita.</div>
                </div>
              </div>
            </Link>
          </div>

          <ul className="inline-flex space-x-5 font-semibold text-base items-center">
            <li className="">
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/product">Product</Link>
            </li>
            <li>
              <Link href="/review">Review</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <div className="border-l border-slate-200 ml-6 pl-6">
              <button class=" border bg-blue-500 hover:bg-700 text-white font-bold py-2 px-7 rounded-3xl">
                Browse
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
