import Nav from "../comp/layout/nav";
import Footer from "../comp/layout/footer"
import { AppWrapper } from "../context/AppContext";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Nav />
      <Component {...pageProps} />
      <Footer/>
    </AppWrapper>
  );
}

export default MyApp;
