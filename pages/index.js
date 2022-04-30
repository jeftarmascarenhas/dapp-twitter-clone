import Head from "next/head";
import Aside from "../components/aside/aside";
import Header from "../components/header/header";
import TopContent from "../components/top-content/top-content";
import TweetEditable from "../components/tweet-editable/tweet-editable";
import Twitters from "../components/twitters/twitters";
import { useMetaMask } from "../hooks/useWallet";
import { useTwitters } from "../hooks/useTwitters";

export default function Home() {
  const { connectMetaMask, isConnected, currentAccount } = useMetaMask();
  const { twitters, loading, createTweet, setTipToAuthor } =
    useTwitters(currentAccount);
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
              <TweetEditable createTweet={createTweet} />
              <Twitters
                twitters={twitters}
                loading={loading}
                setTipToAuthor={setTipToAuthor}
              />
            </div>
            <Aside />
          </div>
        </div>
      </main>
    </div>
  );
}
