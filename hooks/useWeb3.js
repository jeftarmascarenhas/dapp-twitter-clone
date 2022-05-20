import { useEffect, useState, useCallback } from "react";
import Web3 from "web3";

const rinkeby = 4;

const UseWeb3 = ({ contractABI, contractAddress }) => {
  const [contract, setContract] = useState({});

  useEffect(() => {
    if (!contractABI && !contractAddress) return;
    const main = async () => {
      if (!contractABI && !contractAddress) return;
      const web3 = new Web3(window.ethereum);
      const chainId = await web3.eth.getChainId();
      const newContract = new web3.eth.Contract(contractABI, contractAddress);
      setContract(newContract);
      if (chainId !== rinkeby) {
        alert("You need change the Metamask to Rinkeby");
      }
    };
    main();
  }, [contractABI, contractAddress]);

  useEffect(() => {
    const networkChange = async () => {
      const newtWorkId = await ethereum.request({ method: "net_version" });

      if (rinkeby !== newtWorkId) {
        alert("You need change the Metamask to Rinkeby");
        window.location.reload();
      }
    };
    if (window.ethereum) {
      ethereum.on("chainChanged", networkChange);
    }
  }, []);

  return { contract };
};

export default UseWeb3;
