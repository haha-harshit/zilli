import { useState } from "react";
import filterStyle from "../../utils/css/Filters.css";
import restaurantList from "../../utils/resList";

export const RatingAbove4 = (props) => {
  // const [resList, setResList] = useState(restaurantList);
  // const [isAbove4FilterOn, setIsAbove4FilterOn] = useState(false);
  return (
    <>
      <div
        style={filterStyle}
        className="rating-4-plus-filter filter"
        onClick={() => {
          let filteredList;
          if (!props.isAbove4FilterOn) {
            filteredList = restaurantList.filter(
              (res) => res.data.avgRating > 4.0
            );
            props.setResList(filteredList);
            // setResList(filteredList);
            console.log(filteredList);
            props.setIsAbove4FilterOn(true);
          } else {
            props.setResList(restaurantList);
            // console.log(resList);
            console.log("filter off");
            props.setIsAbove4FilterOn(false);
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
