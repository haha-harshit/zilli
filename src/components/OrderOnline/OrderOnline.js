// COMPONENT AND STATE IMPORTS
import { useState, useEffect } from "react";
import { NonVeg, PureVeg, RatingAbove4 } from "../Filters/OnlineOrderFilters";
import OfferingTab from "../OfferingTab/OfferingTab";
import ResCard from "../Cards/ResCards/ResCard";

// URL IMPORTS
import { RES_API_URL } from "../../utils/constants";
// STYLE IMPORTS
import filterStyle from "../../utils/css/Filters.css";
import { tabListStyle } from "../../utils/css/OfferingTab.css";
import { OrderOnlineStyle } from "../../utils/css/OrderOnline.css";
import { resStyle } from "../../utils/css/resCard.css";

const OrderOnline = () => {
  const [resList, setResList] = useState([]);
  const [isAbove4FilterOn, setIsAbove4FilterOn] = useState(false);
  const [isPureVegFilterOn, setIsPureVegFilterOn] = useState(false);
  const [isNonVegFilterOn, setIsNonVegFilterOn] = useState(false);
  const [filteredList, setFilteredList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const [list, setList] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API_URL);

    const json = await data.json();
    setResList(json?.data?.cards[2]?.data?.data?.cards);
  };

  let loadingDiv = ( <div className="res-card-layout">
  <h1>Loading...</h1>
</div>);

  let list;
  if (filteredList.length < 1) {
    if (resList?.length === 0) {
      list =  
        <div className="res-card-layout">
          <h1>Loading...</h1>
        </div>
    } else {
      list = resList?.map((restaurant) => (
        <ResCard resData={restaurant} key={restaurant.data.id} />
      ));
      if (list === undefined) {
        list =  
          <div className="">
            <h1>No restaurants delivering in your area 😭</h1>
          </div>
      }
    }
  } 
  if(filteredList.length > 1) {
    list = filteredList?.map((restaurant) => (
      <ResCard resData={restaurant} key={restaurant.data.id} />
    ));
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
            setResList={setResList}
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
