import filterStyle from "../../utils/css/Filters.css";

export const RatingAbove4 = () => {
  return (
    <>
      <div style={filterStyle} className="rating-4-plus-filter filter">
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
