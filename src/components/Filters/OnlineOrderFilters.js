import { useState, useEffect } from "react";
import filterStyle from "../../utils/css/Filters.css";

export const RatingAbove4 = (props) => {

  const [color4, setColor4] = useState("#9c9c9c");
  const [backgroundColor4, setBackgroundColor4] = useState("#fff");
  const [borderColor4, setBorderColor4] = useState("#cfcfcf");
  const above4ColorHandle = () => {
    const activeBgColor4 =
      backgroundColor4 === "#fff" ? "rgb(255, 79, 95)" : "#fff";
    const activeColor4 =
      color4 === "#9c9c9c" ? "rgb(255, 255, 255)" : "#9c9c9c";
    const activeBorderColor4 =
      borderColor4 === "#cfcfcf" ? "rgb(255, 79, 95)" : "#cfcfcf";
    setColor4(activeColor4);
    setBackgroundColor4(activeBgColor4);
    setBorderColor4(activeBorderColor4);
  };

  const styles4 = {
    border: "0.01rem solid rgb(207, 207, 207)",
    color: color4,
    backgroundColor: backgroundColor4,
    borderColor: borderColor4,
    borderRadius: "0.5rem",
    padding: "0.8rem",
    cursor: "pointer",
    fontSize: "0.9rem",
    marginRight: "1rem",
    lineHeight: "0.5rem",
    height: "0.6rem",
    alignSelf: "center",
  };

  return (
    <>
      <div
        style={styles4}
        className="rating-4-plus-filter"
        onClick={() => {
          if (props.list.length > 0) {
            setTimeout(() => {
              above4ColorHandle();
              props.setIsLoading(true);
            }, 100)
            setTimeout(() => {
              props.setIsLoading(false);
              if (!props.isAbove4FilterOn) {
                if (props.isPureVegFilterOn) {
                  props.setFilteredList(
                    props.filteredList.filter(
                      (res) => res.info.avgRating >= 4.0
                    )
                  );
                } else {
                  props.setFilteredList(
                    props.resList.filter((res) => res.info.avgRating >= 4.0)
                  );
                }

                props.setIsAbove4FilterOn(true);
              } else {
                if (props.isPureVegFilterOn) {
                  props.setFilteredList(
                    props.resList.filter((res) => res.info.veg == true)
                  );
                } else {
                  props.setFilteredList([]);
                }
                props.setIsAbove4FilterOn(false);
              }
            }, 1500);
          }
        }}
      >
        <div className="rating-4-plus-filter-btn">Rating: 4.0+</div>
      </div>
    </>
  );
};

export const PureVeg = (props) => {
  const [colorVEG, setColorVEG] = useState("#9c9c9c");
  const [backgroundColorVEG, setBackgroundColorVEG] = useState("#fff");
  const [borderColorVEG, setBorderColorVEG] = useState("#cfcfcf");
  const VEGColorHandle = () => {
    const activeBgColorVEG =
      backgroundColorVEG === "#fff" ? "rgb(255, 79, 95)" : "#fff";
    const activeColorVEG =
      colorVEG === "#9c9c9c" ? "rgb(255, 255, 255)" : "#9c9c9c";
    const activeBorderColorVEG =
      borderColorVEG === "#cfcfcf" ? "rgb(255, 79, 95)" : "#cfcfcf";
    setColorVEG(activeColorVEG);
    setBackgroundColorVEG(activeBgColorVEG);
    setBorderColorVEG(activeBorderColorVEG);
  };

  const stylesVEG = {
    border: "0.01rem solid rgb(207, 207, 207)",
    color: colorVEG,
    backgroundColor: backgroundColorVEG,
    borderColor: borderColorVEG,
    borderRadius: "0.5rem",
    padding: "0.8rem",
    cursor: "pointer",
    fontSize: "0.9rem",
    marginRight: "1rem",
    lineHeight: "0.5rem",
    height: "0.6rem",
    alignSelf: "center",
  };

  return (
    <>
      <div
        style={stylesVEG}
        className="pure-veg-filter"
        onClick={() => {
          if (props.list.length > 0) {
            setTimeout(() => {
              VEGColorHandle();
              props.setIsLoading(true);
            }, 100)
            setTimeout(() => {
              props.setIsLoading(false);
              if (!props.isPureVegFilterOn) {
                if (props.isAbove4FilterOn) {
                  props.setFilteredList(
                    props.filteredList.filter((res) => res.info.veg == true)
                  );
                } else {
                  props.setFilteredList(
                    props.resList.filter((res) => res.info.veg == true)
                  );
                }
                props.setIsPureVegFilterOn(true);
              } else {
                if (props.isAbove4FilterOn) {
                  props.setFilteredList(
                    props.resList.filter((res) => res.info.avgRating >= 4.0)
                  );
                } else {
                  props.setFilteredList([]);
                }
                props.setIsPureVegFilterOn(false);
              }
            }, 1500);
          }
        }}
      >
        <div className="pure-veg-filter-btn">Pure Veg</div>
      </div>
    </>
  );
};

// export const NonVeg = () => {
//   return (
//     <>
//       <div style={filterStyle} className="non-veg-filter">
//         <div className="non-veg-filter-btn">Non Veg</div>
//       </div>
//     </>
//   );
// };
