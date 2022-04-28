import React from "react";

const TopContent = ({ isConnected, connectMetaMask }) => {
  return (
    <div className="top-content content-space">
      <h2>Home</h2>
      <button className="btn-secondary" onClick={connectMetaMask}>
        {isConnected ? "Connected" : "Connect"}
      </button>
    </div>
  );
};

export default TopContent;
