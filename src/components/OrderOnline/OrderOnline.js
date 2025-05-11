// COMPONENT AND STATE IMPORTS
import { useState, useEffect } from "react";
import { NonVeg, PureVeg, RatingAbove4o5, FastDeliverySort } from "../Filters/OnlineOrderFilters";
// import { FastDeliverySort } from "../Sort/FastDeliverySort";
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
  const [isAbove4o5FilterOn, setIsAbove4o5FilterOn] = useState(false);
  // const [isPureVegFilterOn, setIsPureVegFilterOn] = useState(false);
  // const [isNonVegFilterOn, setIsNonVegFilterOn] = useState(false);

  //new Sort added
  const [isFastDeliverySortOn, setIsFastDeliverySortOn] = useState(false);

  const [filteredList, setFilteredList] = useState([]);
  const [sortedList, setSortedList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(()=> {
    console.log(props.isConnectionResult, "later")
  }, [props.isConnectionResult])  
    
  let resList = useResList()

  console.log("usual reslist: ",resList)
  // console.log(resList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  // console.log(resList[0]?.info.id);

  let loadingDiv = Array(10).fill(<Shimmer />)

  let list;
  if (filteredList.length < 1) {

    // for SHIMMER
    if (resList?.length === 0) {
      list = Array(20).fill(<Shimmer />)
    } 
    
    // FOR SORTED LIST
    if(sortedList.length > 1){
      console.log("sorted list after clicking: ", sortedList)
      list = sortedList?.map((restaurant) => (
        <ResCard resData={restaurant} key={restaurant?.info?.id} />
      ))
    } 
    
    // FOR WITHOUT SORTED LIST
    if(sortedList.length<1){
      list = resList?.map((restaurant) => (
        <ResCard resData={restaurant} key={restaurant?.info?.id} />
      ));
      console.log("sorted before clicking:", resList.sort((a,b) => a?.info?.sla?.deliveryTime - b?.info?.sla?.deliveryTime));
      // console.log(props.isFastDeliverySortOn, "fast delivery sort clicked")
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
      <div className="section flex flex-col sm:w-full lg:w-my-width m-auto sm:p-8">
        <div className="offering-tab-list justify-evenly mt-4 fixed bottom-0 w-full bg-slate-50 h-[4rem] sm:mx-[2rem] sm:justify-start sm:sticky sm:top-0 sm:bg-inherit sm:mt-0 sm:z-[0]">
          <OfferingTab />
        </div>

        <div className="filter-section_WRAPPER z-[2] sm:sticky sm:z-[0] top-0">
          <div className="filter-section flex justify-start fixed bg-[#fefefe] border-solid border-b-[0.05rem] border-x-0 border-t-0 border-[#ef4f5f] rounded-b-sm drop-shadow-filter-b w-full px-[2rem] py-[1rem] sm:w-auto sm:sticky sm:top-0">
            <RatingAbove4o5
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              list={list}
              setFilteredList={setFilteredList}
              filteredList={filteredList}
              resList={resList}
              setIsAbove4o5FilterOn={setIsAbove4o5FilterOn}
              isAbove4o5FilterOn={isAbove4o5FilterOn}
              // setIsPureVegFilterOn={setIsPureVegFilterOn}
              // isPureVegFilterOn={isPureVegFilterOn}
            />
            {/* <PureVeg
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
            /> */}

            <FastDeliverySort
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            list={list}
            sortedList={sortedList}
            setSortedList={setSortedList}
            setFilteredList={setFilteredList}
            filteredList={filteredList}
            resList={resList}
            isFastDeliverySortOn={isFastDeliverySortOn}
            setIsFastDeliverySortOn={setIsFastDeliverySortOn}
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
        <div className="order-in-location-layout my-6 px-[2rem] hidden sm:block">
          <h2 className="text-[#1c1c1c]">Top restaurant chains in Gurgaon</h2>
        </div>

        <div className="all-res-banner_WRAPPER flex justify-center mt-[5rem] mb-[-1rem] sm:hidden">
          <div className="all-res-banner text-[#A9A9A9] bg-white z-[1] w-fit p-[1rem] sm:z-[0]">
          ALL RESTAURANTS
          </div>
        </div>

        <hr className="hr-all-res-banner relative top-[-0.6rem] w-[80%] ml-auto mr-auto sm:hidden"></hr>
        
        <div className="res-container flex flex-wrap justify-center pb-[3rem] sm:justify-around sm:mt-0">
          {isLoading ? loadingDiv : list}
        </div>
      </div>
    </>
  );
};

export default OrderOnline;
