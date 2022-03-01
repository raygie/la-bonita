import Link from "next/link";
import Image from "next/image";

import "../styles/Nav.module.css";
import logo from "../public/lb-logo.png";
import facebook from "../public/assets/facebook.png";
import instagram from "../public/assets/instagram.png";
import twitter from "../public/assets/twitter.png";
import shopee from "../public/assets/shopee.png";
// * Navigation Bar
const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-2 px-6 h-24 w-full bg-gray-900 text-white z-40 relative border-dashed">
      <div>
        <Link href="/">
          <div className="flex justify-between items-center">
            <div>
              <Image src={logo} alt="logo" width={60} height={60} />
            </div>
            <div className="text-2xl font-bold">
              <div
                className="rotate-90 w-6
               font-serif"
              >
                LA
              </div>
              <div className="font-serif pl-1">Bonita.</div>
            </div>
          </div>
        </Link>
        <span></span>
      </div>

      <div className="py-5">
        <ul className="inline-flex text-lg font-serif font-semibold ">
          <li className="px-4  hover:text-baseColor">
            <Link href="/product">Products</Link>
          </li>
          <li className="px-4  hover:text-baseColor">
            <Link href="/about">About</Link>
          </li>
          <li className="px-4  hover:text-baseColor">
            <Link href="/review">Reviews</Link>
          </li>
          <li className="px-4 hover:text-baseColor">
            <Link href="/contact">Contact</Link>
          </li>

          <div className="border-l border-slate-200 ml-2 pl-2"></div>
          <div className="px-3">
            <Link href="https://www.facebook.com/LaBonitaCosmeticsByAnafara/">
              <div className="w-8 h-8">
                <Image src={facebook} width={60} height={60} />
              </div>
            </Link>
          </div>
          <div className="px-3">
            <Link href="https://twitter.com/LaAnafara">
              <div className="w-8 h-8">
                <Image src={twitter} width={60} height={60} />
              </div>
            </Link>
          </div>
          <div className="px-3">
            <Link href="https://www.instagram.com/la_bonita_cosmetics/">
              <div className="w-8 h-8">
                <Image src={instagram} width={60} height={60} />
              </div>
            </Link>
          </div>
          <div className="px-3">
            <Link href="https://shopee.ph/anafaracosmetics">
              <div className="w-8 h-8">
                <Image src={shopee} width={60} height={60} />
              </div>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
