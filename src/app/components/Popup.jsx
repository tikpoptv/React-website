import React from "react";
import "./Techstack.css"; // เรียกใช้ไฟล์ CSS จาก Techstack.css

const Popup = ({ description, onClose }) => {
  const handlePopupClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="popup-overlay" onClick={handlePopupClick}>
      <div className="popup">
        <div className="popup-content">{description}</div>
      </div>
    </div>
  );
};

export default Popup;
