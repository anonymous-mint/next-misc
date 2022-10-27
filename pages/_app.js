import Header from "../components/header";
import "../styles/globals.css";
import "../styles/layout.css";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  console.log(Component);
  if (Component.getLayout)
    return Component.getLayout(<Component {...pageProps} />);
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
