import Nav from "../comp/layout/nav";
import { AppWrapper } from "../context/AppContext";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Nav />
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
