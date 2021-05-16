import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import Footer from "./Footer";
import Nav from "./Nav";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
