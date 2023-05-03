import filterStyle from "../../utils/css/Filters.css";

export const OutdoorSeating = () => {
  return (
    <>
      <div style={filterStyle} className="outdoor-seating-filter filter">
        <div className="outdoor-seating-filter-btn">Outdoor Seating</div>
      </div>
    </>
  );
};

export const ServesAlcohol = () => {
  return (
    <>
      <div style={filterStyle} className="serves-alcohol-filter filter">
        <div className="serves-alcohol-filter-btn">Serves Alcohol</div>
      </div>
    </>
  );
};
