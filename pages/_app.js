import Header from "../components/header";
import "../styles/globals.css";
import "../styles/layout.css";
import Footer from "../components/footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  console.log(Component);

  //function defined in the about component is checked here and layout is applied
  if (Component.getLayout)
    return Component.getLayout(
      <>
      {/* Head is updated here */}
        <Head>
          <title>Next Mics</title>
          <meta name="Home" content="nice head" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  // global layout for all the pages under _app
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
