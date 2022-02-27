import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      {/* Import Navigation Bar */}
      <Nav />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
