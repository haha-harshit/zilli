// COMPONENT AND STATE IMPORTS
import { useState, useEffect } from "react";
import { NonVeg, PureVeg, RatingAbove4 } from "../Filters/OnlineOrderFilters";
import OfferingTab from "../OfferingTab/OfferingTab";
import ResCard from "../Cards/ResCards/ResCard";
import Shimmer from "../ShimmerUI/Shimmer";
import {mock_id} from "../../utils/mockData";

// URL IMPORTS
import { RES_API_URL } from "../../utils/constants";
// STYLE IMPORTS
import filterStyle from "../../utils/css/Filters.css";
import { tabListStyle } from "../../utils/css/OfferingTab.css";
import { OrderOnlineStyle } from "../../utils/css/OrderOnline.css";
import { resStyle } from "../../utils/css/resCard.css";
import { useResList } from "../../utils/customHooks/useFetchApi";


const OrderOnline = (props) => {
  // const [resList, setResList] = useState([]);
  const [isAbove4FilterOn, setIsAbove4FilterOn] = useState(false);
  const [isPureVegFilterOn, setIsPureVegFilterOn] = useState(false);
  const [isNonVegFilterOn, setIsNonVegFilterOn] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const [list, setList] = useState();

  let resList = useResList()

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(RES_API_URL);

  //   const json = await data.json();
  //   setResList(json?.restaurants);
  //   // console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  // };

  let loadingDiv = Array(10).fill(<Shimmer />)

  let list;
  if (filteredList.length < 1) {
    if (resList?.length === 0) {
      list = Array(10).fill(<Shimmer />)
    } else {
      list = resList?.map((restaurant) => (
        <ResCard resData={restaurant} key={restaurant?.info?.id} />
      ));
      if (list === undefined) {
        list =  
          <div>
            <h1>No restaurants delivering in your area 😭</h1>
          </div>
      }
    }
  } 
  if(filteredList.length > 1) {
    list = filteredList?.map((restaurant) => (
      <ResCard resData={restaurant} key={restaurant?.info?.id} />
    ));
  }

  if(props.searchText.length > 0){
    let afterSearchList=[]
    if(filteredList.length > 1){
      setFilteredList(filteredList.filter((res)=> res?.info?.name.toLowerCase().includes(props.searchText.toLowerCase())))
      console.log(filteredList.map((result) => result.info.name))
    }else{
      // setResList(resList.filter((res) => res.data.name === props.searchText))
      // console.log(resList.filter((res)=> res.data.name === props.searchText))
      // let flag
      console.log(props.searchText)
      resList?.map((res)=>res?.info?.name.toLowerCase().includes(props.searchText.toLowerCase()) ? afterSearchList.push(res?.info?.name) : "")
      console.log(afterSearchList)
      // if(res.data.name.includes(props.searchText)){
      //   console.log(res)
      // }
      // console.log(resList)
      // resList.map((res) => ( res.data.name.includes(props.searchText) ? console.log(res.data.name, "complete") : "" ))
      resList = afterSearchList
    }
  }

  return (
    <>
      <div className="section">
        <div style={tabListStyle} className="offering-tab-list">
          <OfferingTab />
        </div>

        <div className="filter-section">
          <RatingAbove4
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            list={list}
            setFilteredList={setFilteredList}
            filteredList={filteredList}
            resList={resList}
            setIsAbove4FilterOn={setIsAbove4FilterOn}
            isAbove4FilterOn={isAbove4FilterOn}
            setIsPureVegFilterOn={setIsPureVegFilterOn}
            isPureVegFilterOn={isPureVegFilterOn}
          />
          <PureVeg
          isLoading={isLoading}
          setIsLoading={setIsLoading}
            list={list}
            setFilteredList={setFilteredList}
            filteredList={filteredList}
            resList={resList}
            setIsAbove4FilterOn={setIsAbove4FilterOn}
            isAbove4FilterOn={isAbove4FilterOn}
            setIsPureVegFilterOn={setIsPureVegFilterOn}
            isPureVegFilterOn={isPureVegFilterOn}
          />
          <NonVeg
            resList={resList}
            // setResList={setResList}
            setIsNonVegFilterOn={setIsNonVegFilterOn}
            isNonVegFilterOn={isNonVegFilterOn}
          />
        </div>

        <div style={OrderOnlineStyle} className="order-in-location-layout">
          <h1>Order food online in NIT - 3, Faridabad, India</h1>
        </div>

        <div style={resStyle} className="res-container">
          {isLoading ? loadingDiv : list}
        </div>
      </div>
    </>
  );
};

export default OrderOnline;
