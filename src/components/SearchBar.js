import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SearchBar = (props) => {
  return (
    <div className="flex-center">
      <Link to='/' className="button-back">
        <FaChevronLeft size={20} />
      </Link>
      <input 
        type="text" 
        className="search-bar fadeIn animated" 
        placeholder={"Search for a book to add to your bookshelf..."} 
      />
    </div>
  )
}

export default SearchBar;