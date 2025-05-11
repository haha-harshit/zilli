const FastDeliverySort = (props) => {
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
              if(!props.isFastDeliverySortOn){
                // props.setFilteredList(
                //   props.resList.filter
                // )
                console.log("sort action yet");
              }
  
            })
          }
        }}
        >
        Fast Delivery
      </div>
      </>
    )
  }

export default FastDeliverySort;