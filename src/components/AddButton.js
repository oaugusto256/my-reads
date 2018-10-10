import React from "react";
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AddButton = (props) => {
  return (
    <div className="button-section">
      <Link to='/search' className="button-add add">
        <FaPlus size={20} />
      </Link>
    </div>
  );
};

export default AddButton;
