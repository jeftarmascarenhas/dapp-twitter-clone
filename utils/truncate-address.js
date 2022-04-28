const regex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

const truncateAddress = (address = "") => {
  const match = address.match(regex);
  if (!match) return address;
  return `${match[1]}...${match[2]}`;
};

export default truncateAddress;
