import React from "react";
import Tweet from "../tweet/tweet";

const Twitters = ({ twitters = [], loading }) => {
  if (loading) {
    return <div className="loading">Loading</div>;
  }
  return (
    <div>
      {!!twitters.length &&
        !loading &&
        twitters.map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)}
    </div>
  );
};

export default Twitters;
