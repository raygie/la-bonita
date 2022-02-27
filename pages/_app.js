import Layout from "../components/Layout";
import "../styles/globals.css";

// * Root of Website

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
