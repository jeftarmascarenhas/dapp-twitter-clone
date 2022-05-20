import "../styles/globals.css";
import "../styles/header.css";
import "../styles/home.css";
import "../styles/aside.css";
import "../styles/tweet.css";
import "../styles/preview-img.css";
import TwitterProvider from "../contexts/twitter-provider";

function MyApp({ Component, pageProps }) {
  return (
    <TwitterProvider>
      <Component {...pageProps} />;
    </TwitterProvider>
  );
}

export default MyApp;
