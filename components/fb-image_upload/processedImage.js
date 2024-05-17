import React from "react";

const ProcessedImage = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="Processed Image" className="rounded-lg" />
    </div>
  );
};

export default ProcessedImage;
