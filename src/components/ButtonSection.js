import React from "react";
import { FaPlus } from 'react-icons/fa';

const ButtonSection = (props) => {
  return (
    <div className="button-section">
      <button className="button-rounded add">
        <FaPlus />
      </button>
    </div>
  );
};

export default ButtonSection;
