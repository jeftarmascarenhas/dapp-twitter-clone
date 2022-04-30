import { useState, useRef } from "react";
import PreviewImg from "../preview-img/preview-img";

import { uploadPinata } from "../../utils/uploads";

const TweetEditable = ({ createTweet }) => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState({});
  const editableRef = useRef();

  const handleChangeFile = (event) => {
    const fileUploaded = event.target.files[0];
    setFile(fileUploaded);
  };

  const handleImageClose = () => {
    setFile({});
  };

  const handleCreateTweet = async () => {
    try {
      setLoading(true);
      const { data } = await uploadPinata(file);
      console.log(data);
      const params = {
        text: editableRef.current.innerText,
        authorName: "Jeftar M",
        imageHash: data.IpfsHash,
      };

      createTweet(params);
      editableRef.current.innerText = "";
      handleImageClose();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="content-space flex-base-column mt">
      <div className="flex-base-row">
        <img
          src="https://pbs.twimg.com/profile_images/818775935616974848/nqRfHMIl_x96.jpg"
          className="avatar"
        />
        <div className="flex-base-column flex-1">
          <div
            ref={editableRef}
            contentEditable
            placeholder="What’s happening?"
            className="draft-edit flex-base-column"
            suppressContentEditableWarning
          />
          {!!file.name && (
            <div className="mb">
              <PreviewImg file={file} onClose={handleImageClose} />
            </div>
          )}
          <div className="divide" />
          <div className="publication">
            <label className="btn-icon" htmlFor="upload">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
                <g>
                  <path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"></path>
                  <circle cx="8.868" cy="8.309" r="1.542"></circle>
                </g>
              </svg>
              <input
                id="upload"
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/quicktime,video/webm"
                className="hidden"
                onChange={handleChangeFile}
              />
            </label>
            <button
              disabled={loading}
              className="btn-primary"
              onClick={handleCreateTweet}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetEditable;
