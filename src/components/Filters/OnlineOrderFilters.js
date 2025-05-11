import { useState, useEffect, use } from "react";
import filterStyle from "../../utils/css/Filters.css";

export const RatingAbove4o5 = (props) => {

  const [color4o5, setColor4o5] = useState("#9c9c9c");
  const [backgroundColor4o5, setBackgroundColor4o5] = useState("#fff");
  const [borderColor4o5, setBorderColor4o5] = useState("#cfcfcf");
  const above4o5ColorHandle = () => {
    const activeBgColor4o5 =
      backgroundColor4o5 === "#fff" ? "rgb(255, 79, 95)" : "#fff";
    const activeColor4o5 =
      color4o5 === "#9c9c9c" ? "rgb(255, 255, 255)" : "#9c9c9c";
    const activeBorderColor4o5 =
      borderColor4o5 === "#cfcfcf" ? "rgb(255, 79, 95)" : "#cfcfcf";
    setColor4o5(activeColor4o5);
    setBackgroundColor4o5(activeBgColor4o5);
    setBorderColor4o5(activeBorderColor4o5);
  };

  const styles4o5 = {
    border: "0.01rem solid rgb(207, 207, 207)",
    color: color4o5,
    backgroundColor: backgroundColor4o5,
    borderColor: borderColor4o5,
    borderRadius: "0.5rem",
    padding: "0.8rem",
    cursor: "pointer",
    // fontSize: "0.9rem",
    marginRight: "1rem",
    lineHeight: "0.5rem",
    height: "0.6rem",
    alignSelf: "center",
  };

  return (
    <>
      <div
        style={styles4o5}
        className="rating-4.5-plus-filter sm:text-[0.9rem]"
        onClick={() => {
          if (props.list?.length > 0) {
            setTimeout(() => {
              above4o5ColorHandle();
              props.setIsLoading(true);
            }, 100)
            setTimeout(() => {
              props.setIsLoading(false);
              if (!props.isAbove4o5FilterOn) {
//                 if (props.isPureVegFilterOn) {
//                   props.setFilteredList(
//                     props.filteredList.filter(
//                       (res) => res.info.avgRating >= 4.0
//                     )
//                   );
//                 } else {
                  props.setFilteredList(
                    props.resList.filter((res) => res.info.avgRating >= 4.5)
                  );
                // }

                props.setIsAbove4o5FilterOn(true);
              } else {
//                 if (props.isPureVegFilterOn) {
//                   props.setFilteredList(
//                     props.resList.filter((res) => res.info.veg == true)
//                   );
//                 } else {
                  props.setFilteredList([]);
                // }
                props.setIsAbove4o5FilterOn(false);
              }
            }, 1500);
          }
        }}
      >
         <div className="rating-4-plus-filter-btn">Rating: 4.5+</div>
      </div>
    </>
  );
};

// export const PureVeg = (props) => {
//   const [colorVEG, setColorVEG] = useState("#9c9c9c");
//   const [backgroundColorVEG, setBackgroundColorVEG] = useState("#fff");
//   const [borderColorVEG, setBorderColorVEG] = useState("#cfcfcf");
//   const VEGColorHandle = () => {
//     const activeBgColorVEG =
//       backgroundColorVEG === "#fff" ? "rgb(255, 79, 95)" : "#fff";
//     const activeColorVEG =
//       colorVEG === "#9c9c9c" ? "rgb(255, 255, 255)" : "#9c9c9c";
//     const activeBorderColorVEG =
//       borderColorVEG === "#cfcfcf" ? "rgb(255, 79, 95)" : "#cfcfcf";
//     setColorVEG(activeColorVEG);
//     setBackgroundColorVEG(activeBgColorVEG);
//     setBorderColorVEG(activeBorderColorVEG);
//   };

//   const stylesVEG = {
//     border: "0.01rem solid rgb(207, 207, 207)",
//     color: colorVEG,
//     backgroundColor: backgroundColorVEG,
//     borderColor: borderColorVEG,
//     borderRadius: "0.5rem",
//     padding: "0.8rem",
//     cursor: "pointer",
//     fontSize: "0.9rem",
//     marginRight: "1rem",
//     lineHeight: "0.5rem",
//     height: "0.6rem",
//     alignSelf: "center",
//   };

//   return (
//     <>
//       <div
//         style={stylesVEG}
//         className="pure-veg-filter"
//         onClick={() => {
//           if (props.list?.length > 0) {
//             setTimeout(() => {
//               VEGColorHandle();
//               props.setIsLoading(true);
//             }, 100)
//             setTimeout(() => {
//               props.setIsLoading(false);
//               if (!props.isPureVegFilterOn) {
//                 if (props.isAbove4FilterOn) {
//                   props.setFilteredList(
//                     props.filteredList.filter((res) => res.info.veg == true)
//                   );
//                 } else {
//                   props.setFilteredList(
//                     props.resList.filter((res) => res.info.veg == true)
//                   );
//                 }
//                 props.setIsPureVegFilterOn(true);
//               } else {
//                 if (props.isAbove4FilterOn) {
//                   props.setFilteredList(
//                     props.resList.filter((res) => res.info.avgRating >= 4.0)
//                   );
//                 } else {
//                   props.setFilteredList([]);
//                 }
//                 props.setIsPureVegFilterOn(false);
//               }
//             }, 1500);
//           }else{
//             console.log("no pure veg res");
//             <div>No Pure Veg Res</div>
//           }
//         }}
//       >
//         <div className="pure-veg-filter-btn">Pure Veg</div>
//       </div>
//     </>
//   );
// };


export const FastDeliverySort = (props) => {
  // const [sortL, setSortL] = useState([])
  const [colorFD, setColorFD] = useState("#9c9c9c");
  const [backgroundColorFD, setBackgroundColorFD] = useState("#fff");
  const [borderColorFD, setBorderColorFD] = useState("#cfcfcf");
  const FDColorHandle = () => {
    const activeBgColorFD = 
      backgroundColorFD === "#fff" ? "rgb(255, 79, 95)" : "#fff";
    const activeColorFD = 
      colorFD === "#9c9c9c" ? "rgb(255,255,255)" : "#9c9c9c";
    const activeBorderColorFD =
      borderColorFD === "#cfcfcf" ? "rgb(255, 79, 95)" : "#cfcfcf";

    setColorFD(activeColorFD);
    setBackgroundColorFD(activeBgColorFD);
    setBorderColorFD(activeBorderColorFD);
  };

  const stylesFD = {
    border: "0.01rem solid rgb(207, 207, 207)",
    color: colorFD,
    backgroundColor: backgroundColorFD,
    borderColor: borderColorFD,
    borderRadius: "0.5rem",
    padding: "0.8rem",
    cursor: "pointer",
    fontSize: "0.9rem",
    marginRight: "1rem",
    lineHeight: "0.5rem",
    height: "0.6rem",
    alignSelf: "center",
  };

  return(
    <>
    <div
      style={stylesFD}
      className="fd-filter sm:text-[0.9rem]"
      onClick={() => {
        if (props.list?.length > 0) {
          setTimeout(() => {
            FDColorHandle();
            props.setIsLoading(true);
          }, 100)
          setTimeout(() => {
            props.setIsLoading(false);
            if(props.isFastDeliverySortOn==false){
              props.setSortedList(props.resList.sort((a,b) => a?.info?.sla?.deliveryTime - b?.info?.sla?.deliveryTime))
              props.setIsFastDeliverySortOn(true);
              // console.log("sortL: ", props.sortedList)
              // console.log(props.isFastDeliverySortOn, "sort action on");
            }
            else{
              props.setSortedList([])
              console.log("sort is off");
              props.setIsFastDeliverySortOn(false);
            }
          },1500)
        }
      }}
      >
      Fast Delivery
    </div>
    </>
  )
}



// export const NonVeg = () => {
//   return (
//     <>
//       <div style={filterStyle} className="non-veg-filter">
//         <div className="non-veg-filter-btn">Non Veg</div>
//       </div>
//     </>
//   );
// };
