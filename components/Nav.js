import Link from "next/link";

// Navigation Bar Layout
const Nav = () => {
  return (
    // Navigation Bar
    <nav>
      {/* Logo */}
      <Image></Image>

      {/* Navigation Link Page */}
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
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
      </ul>

      {/* La Bonita Social Media Links & Shopee*/}
      <div>
        <a href="">Facebook</a>
      </div>
      <div>
        <a href="">Twitter</a>
      </div>
      <div>
        <a href="">Instagram</a>
      </div>
      <div>
        <a href="">Shopee</a>
      </div>
    </nav>
  );
};

export default Nav;
