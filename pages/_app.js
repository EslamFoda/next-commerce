import Nav from "../comp/layout/nav";
import Footer from "../comp/layout/footer";
import { AppWrapper } from "../context/AppContext";
import "../styles/globals.css";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  return (
    <AppWrapper>
      {pathname === "/checkout" ? null : <Nav />}
      <Component {...pageProps} />
      {pathname === "/checkout" ? null : <Footer />}
    </AppWrapper>
  );
}

export default MyApp;
