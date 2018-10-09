import React from "react";
import { FaPlus, FaSearch } from 'react-icons/fa';

const ButtonSection = (props) => {
  return (
    <div className="button-section">
      <button className="button-rounded add">
        <FaPlus />
      </button>
      <button className="button-rounded search">
        <FaSearch />
      </button>
    </div>
  );
};

export default ButtonSection;
