// COMPONENT AND STATE IMPORTS
import { useState, useEffect } from "react";
import { NonVeg, PureVeg, RatingAbove4 } from "../Filters/OnlineOrderFilters";
import OfferingTab from "../OfferingTab/OfferingTab";
import ResCard from "../Cards/ResCards/ResCard";
import Shimmer from "../ShimmerUI/Shimmer";
import {mock_id} from "../../utils/mockData";
import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";

// URL IMPORTS
import { RES_API_URL } from "../../utils/constants";
// STYLE IMPORTS
// import filterStyle from "../../utils/css/Filters.css";
// import { tabListStyle } from "../../utils/css/OfferingTab.css";
// import { OrderOnlineStyle } from "../../utils/css/OrderOnline.css";
// import { resStyle } from "../../utils/css/resCard.css";
import { useResList } from "../../utils/customHooks/useFetchApi";


const OrderOnline = (props) => {
  // const [resList, setResList] = useState([]);
  const [isAbove4FilterOn, setIsAbove4FilterOn] = useState(false);
  const [isPureVegFilterOn, setIsPureVegFilterOn] = useState(false);
  const [isNonVegFilterOn, setIsNonVegFilterOn] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(()=> {
    console.log(props.isConnectionResult, "later")
  }, [props.isConnectionResult])
    
  let resList = useResList()

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
      console.log(props.searchText)
      resList?.map((res)=>res?.info?.name.toLowerCase().includes(props.searchText.toLowerCase()) ? afterSearchList.push(res?.info?.name) : "")
      console.log(afterSearchList)
      resList = afterSearchList
    }
  }

  return (
    <>
      <div className="section flex flex-col md:w-my-width m-auto sm:p-8">
        <div className="offering-tab-list justify-evenly mt-4 fixed bottom-0 w-full bg-slate-50 h-[4rem] sm:mx-[2rem] sm:justify-start sm:sticky sm:top-0 sm:bg-inherit sm:mt-0 sm:z-[0]">
          <OfferingTab />
        </div>

        <div className="filter-section_WRAPPER sm:sticky top-0">
          <div className="filter-section flex justify-start fixed z-[3] bg-[#fefefe] border-solid border-b-[0.05rem] border-x-0 border-t-0 border-[#ef4f5f] rounded-b-sm drop-shadow-filter-b w-full px-[2rem] py-[1rem] sm:w-auto sm:sticky sm:top-0 sm:z-[3]">
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
            {/* <NonVeg
              resList={resList}
              // setResList={setResList}
              setIsNonVegFilterOn={setIsNonVegFilterOn}
              isNonVegFilterOn={isNonVegFilterOn}
            /> */}
          </div>
        </div>
        {/* <hr/> */}
        <div className="order-in-location-layout my-6 px-[2rem]">
          <h2 className="text-[#1c1c1c]">Order food online in NIT - 3, Faridabad, India</h2>
        </div>

        <div className="res-container flex flex-wrap justify-center sm:justify-around">
          {isLoading ? loadingDiv : list}
        </div>
      </div>
    </>
  );
};

export default OrderOnline;
