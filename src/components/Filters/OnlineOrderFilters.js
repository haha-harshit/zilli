import filterStyle from "../../utils/css/Filters.css";
import resList from "../../utils/resList";

export const RatingAbove4 = () => {
  let isAbove4Active = false;
  return (
    <>
      <div
        style={filterStyle}
        className="rating-4-plus-filter filter"
        onClick={() => {
          let filteredList;
          if (!isAbove4Active) {
            filteredList = resList.filter((res) => res.data.avgRating > 4.0);
            isAbove4Active = true;
            console.log(filteredList);
          } else {
            filteredList = resList;
            isAbove4Active = false;
            console.log(filteredList);
            console.log("filter off");
          }
        }}
      >
        <div className="rating-4-plus-filter-btn">Rating: 4.0+</div>
      </div>
    </>
  );
};

export const PureVeg = () => {
  return (
    <>
      <div style={filterStyle} className="pure-veg-filter filter">
        <div className="pure-veg-filter-btn">Pure Veg</div>
      </div>
    </>
  );
};

export const NonVeg = () => {
  return (
    <>
      <div style={filterStyle} className="non-veg-filter filter">
        <div className="non-veg-filter-btn">Non Veg</div>
      </div>
    </>
  );
};
