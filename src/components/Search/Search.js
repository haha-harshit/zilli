
const Search = (props) => {
  return (
    <div className="search-box flex justify-around self-center w-2/5">

      <input type="text" className="search-input p-search-input inline-block border-1px border-solid border-search-input-white rounded-md box-border h-10 w-25rem"
      placeholder="Seach for restaurant, cuisine or a dish"
      value={props.searchText}
      onChange={(e)=>props.setSearchText(e.target.value)}></input>

      <button type="submit" className="submit-search h-10 p-2 items-center bg-transparent border-0.09rem border-dotted border-gainsboro rounded-md cursor-pointer" onClick={()=>console.log(props.searchText)}>Search</button>

    </div>
  );
};

export default Search;
