import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/next/build/manifest.json" />
        <link rel="shortcut icon" type="image/jpg" href="/logo192.png" />
        <script type="text/javascript" src="/next/build/static/js/index.js"></script>
      </Head>
      <Header /> 
      {children}
      <Footer />
    </>
  );
}
