import { useState, useEffect } from "react";
import { NonVeg, PureVeg, RatingAbove4 } from "../Filters/OnlineOrderFilters";
import OfferingTab from "../OfferingTab/OfferingTab";
import ResCard from "../Cards/ResCards/ResCard";
import restaurantList from "../../utils/resList";
import OfferCard from "../Cards/OfferingCards/OfferCard";
import offerCardDetails from "../../utils/mockData";

// style imports
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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setResList(json?.data?.cards[2]?.data?.data?.cards);
  };

  let list;
  if (filteredList.length < 1) {
    list = resList?.map((restaurant) => (
      <ResCard resData={restaurant} key={restaurant.data.id} />
    ));
    if (list === undefined) {
      console.log("no res open");
      list = (
        <div>
          <h1>No restaurants delivering in your area 😭</h1>
        </div>
      );
    }
    // } else {
    //   console.log("res open");
    // }
    // console.log(resList);
  } else {
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
            list={list}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
            resList={resList}
            setResList={setResList}
            setIsAbove4FilterOn={setIsAbove4FilterOn}
            isAbove4FilterOn={isAbove4FilterOn}
          />
          <PureVeg
            resList={resList}
            setResList={setResList}
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
          {list}
        </div>
      </div>
    </>
  );
};

export default OrderOnline;
