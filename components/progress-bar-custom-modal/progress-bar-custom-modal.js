import React from "react";
import "./progress-bar-custom-modal.css";

const ProgressBarCustomModal = ({ isOpen, onClose, children, progress }) => {
  if (!isOpen) return null;

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal">
        <div className="custom-modal-content">
          {children}
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarCustomModal;
