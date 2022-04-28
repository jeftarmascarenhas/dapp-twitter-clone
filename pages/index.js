import Head from "next/head";
import Aside from "../components/aside/aside";
import Header from "../components/header/header";
import TopContent from "../components/top-content/top-content";
import TweetEditable from "../components/tweet-editable/tweet-editable";
import Twitters from "../components/twitters/twitters";
import { useMetaMask } from "../hooks/useWallet";
import { useTwitters } from "../hooks/useTwitters";

export default function Home() {
  const { connectMetaMask, isConnected } = useMetaMask();
  const { twitters, loading } = useTwitters();
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
              <TopContent
                isConnected={isConnected}
                connectMetaMask={connectMetaMask}
              />
              <TweetEditable />
              <Twitters twitters={twitters} loading={loading} />
            </div>
            <Aside />
          </div>
        </div>
      </main>
    </div>
  );
}
