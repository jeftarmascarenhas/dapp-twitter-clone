import Head from "next/head";
import Aside from "../components/aside/aside";
import Header from "../components/header/header";
import TopContent from "../components/top-content/top-content";
import TweetEditable from "../components/tweet-editable/tweet-editable";
import Twitters from "../components/twitters/twitters";

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Twitter Dapp</title>
        <meta name="description" content="Twitter decentralized with web3.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <div className="main-container">
          <div className="main-content">
            <div className="content">
              <TopContent />
              <TweetEditable />
              <Twitters />
            </div>
            <Aside />
          </div>
        </div>
      </main>
    </div>
  );
}
