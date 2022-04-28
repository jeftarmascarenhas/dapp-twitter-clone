import axios from "axios";

export const uploadPinata = (file = {}) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  const headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_PINATA_JWT}`,
  };

  const data = new FormData();

  data.append("file", file);

  const configs = {
    "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
    maxBodyLength: "Infinity",
    headers,
  };

  return axios.post(url, data, configs);
};
