import React from "react";

const renderPreview = (file) => {
  const src = URL.createObjectURL(file);
  return src;
};

const PreviewImg = ({ file, onClose }) => {
  return (
    <div className="preview-upload">
      <button className="btn-icon close" onClick={onClose}>
        X
      </button>
      <img className="image" src={renderPreview(file)} alt="preview image" />
    </div>
  );
};

export default PreviewImg;
