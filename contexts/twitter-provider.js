import { createContext } from "react";
import { useMetaMask } from "../hooks/useWallet";
import { useTwitters } from "../hooks/useTwitters";
import { useMemo } from "react";

export const TwitterContext = createContext();

function TwitterProvider({ children }) {
  const { connectMetaMask, isConnected, currentAccount } = useMetaMask();
  const { twitters, loading, createTweet, setTipToAuthor } =
    useTwitters(currentAccount);

  const value = useMemo(
    () => ({
      connectMetaMask,
      isConnected,
      currentAccount,
      twitters,
      loading,
      createTweet,
      setTipToAuthor,
    }),
    [
      connectMetaMask,
      createTweet,
      currentAccount,
      isConnected,
      loading,
      setTipToAuthor,
      twitters,
    ]
  );
  return (
    <TwitterContext.Provider value={value}>{children}</TwitterContext.Provider>
  );
}

export default TwitterProvider;
