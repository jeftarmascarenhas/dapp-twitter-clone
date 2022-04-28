import { useEffect, useState } from "react";

export const useMetaMask = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  const connectMetaMask = async () => {
    if (!isMetaMaskInstalled()) {
      alert("You need install MetaMask");
    }
    try {
      const accountsData = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accountsData && accountsData.length) {
        setAccounts(accountsData);
        setIsConnected(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (accounts && accounts.length) return;
    const checkConnect = async () => {
      try {
        const accountsData = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accountsData && accountsData.length) {
          const [current] = accountsData;
          setCurrentAccount(current);
          setAccounts(accountsData);
          setIsConnected(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkConnect();
  }, [accounts]);

  useEffect(() => {
    if (isMetaMaskInstalled()) {
      window.ethereum.on("accountsChanged", function (accounts) {
        setCurrentAccount(accounts[0]);
      });
    }
  }, []);

  return { isConnected, currentAccount, connectMetaMask };
};
