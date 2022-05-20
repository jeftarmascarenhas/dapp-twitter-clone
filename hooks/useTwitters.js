import { useEffect, useCallback, useState } from "react";
import Web3 from "web3";
import UseWeb3 from "./useWeb3";

import TwittersChain from "../contracts/TwittersChain.json";
import TwittersChainAddress from "../contracts/TwittersChain-address.json";

export const useTwitters = (currentAccount) => {
  const [loading, setLoading] = useState(false);
  const [twitters, setTwitters] = useState([]);
  const { contract } = UseWeb3({
    contractABI: TwittersChain.abi,
    contractAddress: TwittersChainAddress.TwitterChain,
  });

  const getTwitters = useCallback(async () => {
    try {
      setLoading(true);

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

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }, [contract]);

  const createTweet = async ({ text, authorName, imageHash }) => {
    try {
      await contract.methods.createTweet(text, authorName, imageHash).send({
        from: currentAccount,
      });

      getTwitters();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const setTipToAuthor = async (id, value) => {
    try {
      const valeuToWei = Web3.utils.toWei(value, "ether");
      console.log(id, value);
      await contract.methods.setTipToAuthor(id, valeuToWei).send({
        from: currentAccount,
        value: valeuToWei,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (contract && contract._address) {
      getTwitters();
    }
  }, [contract, getTwitters]);

  return { twitters, loading, createTweet, setTipToAuthor };
};
