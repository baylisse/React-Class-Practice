import React from "react";
import './SearchBox.css'
 
const SearchBox = ({className, placeholder, handleInputChange}) => {

  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );

}

export default SearchBox;