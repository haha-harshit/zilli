
const Search = (props) => {
  return (
    <div className="search-box">
      <input type="text" className="search-input" placeholder="Seach for restaurant, cuisine or a dish" value={props.searchText} onChange={(e)=>props.setSearchText(e.target.value)}></input>
      <button type="submit" className="submit-search">Search</button>
    </div>
  );
};

export default Search;
