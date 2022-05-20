import React from "react";
import truncateAddress from "../../utils/truncate-address";

const donation = ["0.01", "0.03", "0.05"];

const Tweet = ({ tweet, setTipToAuthor, avatar }) => {
  const handleTipToAuthor = (donateValue) => {
    setTipToAuthor(tweet.id, donateValue);
  };

  return (
    <>
      <div className="divide" />
      <div className="tweet">
        <img className="tweet-author-avatar" src={avatar} />
        <div>
          <div className="tweet-author">
            <span
              className="author-address text-ellipsis"
              title={tweet.authorAddress}
            >
              {truncateAddress(tweet.authorAddress)}
            </span>
          </div>
          <div className="tweet-content">
            {tweet.text}
            {!!tweet.image && (
              <img src={`https://ipfs.io/ipfs/${tweet.image}`} alt="" />
            )}
          </div>
          <div className="donation">
            {donation.map((donate) => (
              <button
                className="donation-item"
                key={donate}
                onClick={() => handleTipToAuthor(donate)}
              >
                <span>{donate}(eth)</span>
                <svg
                  className="icon"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 122.88 108.05"
                >
                  <title>cash-flow</title>
                  <path d="M2.05,44.88a2,2,0,0,0-1.72.8c-.86,1.26.13,2.52.94,3.44,2.31,2.64,8.9,11.35,10.14,12.82a2,2,0,0,0,3.14,0c1.22-1.41,7.66-9.71,10.13-12.38.86-1,2.14-2.3,1.23-3.68a2.05,2.05,0,0,0-1.7-.83L18,45a44.5,44.5,0,0,1,84.66-8.1l8.81-3.66A54,54,0,0,0,8.28,44.94l-6.23-.06ZM56.33,31.11V25.9h8.76V31A71.91,71.91,0,0,1,77,32.65V42q-3.15-.24-7.09-.39t-7.16-.15a22,22,0,0,0-3.43.24c-4.6.74-4.65,6.78,1.3,6.78H65.1a17.69,17.69,0,0,1,8,1.61,11.19,11.19,0,0,1,4.79,4.36,12.1,12.1,0,0,1,1.62,6.27v2q0,5.74-2.27,8.78a11.05,11.05,0,0,1-6.44,4.08,27.19,27.19,0,0,1-5.69,1v5.65H56.33V76.54A63.13,63.13,0,0,1,44.4,74.87V65.54c5.19.41,10.49.55,15.69.55a18.86,18.86,0,0,0,3.77-.31c4.64-.93,3.89-6.17-.55-6.17H59.68q-7.95,0-12.06-3.09T43.51,46.16v-2q0-6.66,4.52-10a16,16,0,0,1,8.3-3.09Zm58.6,31.09A54,54,0,0,1,10.28,71.11l9-3a44.51,44.51,0,0,0,85.91-5.71l-6.5.14A2,2,0,0,1,97,61.77c-1-1.35.29-2.74,1.12-3.71,2.39-2.75,8.58-11.24,9.75-12.69a2,2,0,0,1,1.55-.79,2,2,0,0,1,1.59.73c1.29,1.43,8.14,9.94,10.53,12.51.83.89,1.86,2.12,1,3.4a2,2,0,0,1-1.7.86l-5.95.12Z" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tweet;
