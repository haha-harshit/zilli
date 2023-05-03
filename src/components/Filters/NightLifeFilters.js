import filterStyle from "../../utils/css/Filters.css";

export const Distance = () => {
  return (
    <>
      <div style={filterStyle} className="distance-filter filter">
        <div className="distance-filter-btn">Distance</div>
      </div>
    </>
  );
};

export const PubsAndBars = () => {
  return (
    <>
      <div style={filterStyle} className="pubs-and-bars filter">
        <div className="pubs-and-bars-filter-btn">Pubs & Bars</div>
      </div>
    </>
  );
};
