import { useEffect, useCallback, useState } from "react";
import UseWeb3 from "./useWeb3";

import TwittersChain from "../contracts/TwittersChain.json";
import TwittersChainAddress from "../contracts/TwittersChain-address.json";

export const useTwitters = () => {
  const [loading, setLoading] = useState(false);
  const [twitters, setTwitters] = useState([]);
  const { contract } = UseWeb3({
    contractABI: TwittersChain.abi,
    contractAddress: TwittersChainAddress.TwitterChain,
  });

  console.log(contract);

  const getTwitters = useCallback(async () => {
    try {
      setLoading(true);
      // const twittersList = [];
      // const tweetCount = await contract.methods.tweetCount().call();

      // for (const i = 1; i <= tweetCount; i++) {
      //   const data = await contract.methods.twitters(i).call();
      //   twittersList.push({
      //     id: data.id,
      //     author: data.author,
      //     authorName: data.authorName,
      //     authorAddress: data.author,
      //     image: data.image,
      //     text: data.text,
      //   });
      // }

      const data = await contract.methods.fetchAllTwitters().call();
      const twittersList = data.map((tweet) => ({
        id: tweet.id,
        author: tweet.author,
        authorName: tweet.authorName,
        authorAddress: tweet.author,
        image: tweet.image,
        text: tweet.text,
      }));

      twittersList.sort((a, b) => b.id - a.id);
      setTwitters(twittersList);
      console.log(twittersList);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }, [contract]);

  useEffect(() => {
    if (contract && contract._address) {
      getTwitters();
    }
  }, [contract, getTwitters]);

  return { twitters, loading };
};
