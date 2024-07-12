import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState();
  const [location, setLocation] = useState();
  const [sortOption, setSortOption] = useState("Best Match");

  const getClass = (sortByOption)=>{
    if(sortByOption===sortOption)  
      return styles.active;
    return '';
  }

  const handleClickOnSortOptions = (sortByOption)=>{
    setSortOption(sortByOption)
  }

  const handleClickOnSearchItem = (e)=>{
    setSearchItem(e.target.value)
  }

  const handleClickOnLocation = (e)=>{
    setLocation(e.target.value)
  }

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li className={getClass(sortByOption)} key={sortByOptionValue} onClick={()=>handleClickOnSortOptions(sortByOption)}>{sortByOption}</li>;
    });
  };

  const handleSubmitSearch = ()=>{
    console.log(`Searching for ${searchItem} at ${location} for ${sortOption}`);
    alert(`Searching for ${searchItem} at ${location} for ${sortOption}`);

  }

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input placeholder="Search Businesses" onChange={handleClickOnSearchItem}value={searchItem}/>
        <input placeholder="Where?" onChange={handleClickOnLocation}  value={location}/>
      </div>
      <div className={styles.SearchBarSubmit}>
        <a onClick={handleSubmitSearch}>Let's Go</a>
      </div>
    </div>
  );
};

export default SearchBar;
