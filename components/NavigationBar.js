import Link from "next/link";

// * Navigation Bar
const NavigationBar = () => {
  return (
    <>
      <nav className="flex justify-between items-center py-2 px-6 h-24 max-w-full bg-gray-900 text-white z-40 relative border-dashed">
        <div>
          <Link href="/">
            <div className="flex justify-between items-center">
              <div>
                <img src="/lb-logo.png" alt="logo" width="60" height="60" />
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
              <Link href="/Products">Products</Link>
            </li>
            <li className="px-4  hover:text-baseColor">
              <Link href="/About">About</Link>
            </li>
            <li className="px-4  hover:text-baseColor">
              <Link href="/Reviews">Reviews</Link>
            </li>
            <li className="px-4 hover:text-baseColor">
              <Link href="/Contact">Contact</Link>
            </li>

            <div className="border-l border-slate-200 ml-2 pl-2"></div>
            <div className="px-3">
              <a href="https://www.facebook.com/LaBonitaCosmeticsByAnafara/">
                <div className="w-8 h-8">
                  <img
                    src="../assets/icons/facebook.png"
                    width="60"
                    height="60"
                  />
                </div>
              </a>
            </div>
            <div className="px-3">
              <a href="https://twitter.com/LaAnafara">
                <div className="w-8 h-8">
                  <img
                    src="../assets/icons/twitter.png"
                    width="60"
                    height="60"
                  />
                </div>
              </a>
            </div>
            <div className="px-3">
              <a href="https://www.instagram.com/la_bonita_cosmetics/">
                <div className="w-8 h-8">
                  <img
                    src="../assets/icons/instagram.png"
                    width="60"
                    height="60"
                  />
                </div>
              </a>
            </div>
            <div className="px-3">
              <a href="https://shopee.ph/anafaracosmetics">
                <div className="w-8 h-8">
                  <img
                    src="../assets/icons/shopee.png"
                    alt="shopee"
                    width="60"
                    height="60"
                  />
                </div>
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
