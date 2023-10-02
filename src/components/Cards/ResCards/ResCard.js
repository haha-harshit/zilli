import { CDN_IMG_URL } from "../../../utils/constants";
import { Link } from "react-router-dom";
import star_rating from "../../../utils/images/star_rating.png";
import { useState } from "react";

const ResCard = (props) => {
  const { resData } = props;
  // const [isDefaultBorder, setIsDefaultBorder] = useState("#fbfdff");
  const isDiscounted = "aggregatedDiscountInfoV3" in resData.info;
  let discountInfoMobile;
  let discountInfo;
  let deliveryRange = resData.info.sla.deliveryTime+5;
  
  if (isDiscounted && resData.info.aggregatedDiscountInfoV3.header && resData.info.aggregatedDiscountInfoV3?.subHeader) {

    discountInfoMobile = (
      <>
      <hr className="offer-details-separator m-auto my-[0.5rem] border-dashed border-spacing-12 border-[0.05rem] border-gray-300 sm:hidden"/>

      <div className="discount-info-mobile text-blue-700 text-[0.8rem] font-bold">
        {resData.info.aggregatedDiscountInfoV3?.header +
          " " +
          resData.info.aggregatedDiscountInfoV3?.subHeader}
      </div>
      </>
    )

    discountInfo = (
      <div className="discount-info text-[#ffffff] bg-[#256fef] text-[0.8rem] py-0 px-2 font-normal rounded-tr-[0.3rem] rounded-br-[0.3rem] rounded-bl-[0.1rem]">
        {resData.info.aggregatedDiscountInfoV3?.header +
          " " +
          resData.info.aggregatedDiscountInfoV3?.subHeader}
      </div>
    );
  } else {
    discountInfo = <div className="no-discount-info"></div>;
  }

  const cuisines = resData.info.cuisines.map((cuisine) => cuisine).join(" • ");

  return (
    <>
      <div className="res-card-layout w-[24rem] my-6 border-[0.01rem] border-[#fbfdff] border-solid hover:border-[#e3e3e3] hover:shadow-md rounded-[0.9rem] md:w-[21rem] md:mx-4">
        <div className="res-contents shadow-md rounded-b-[1rem] m-[0.7rem] sm:shadow-none sm:rounded-none">
          <Link className="res-link no-underline" to={"/restaurant/"+resData.info.id} state={{resMainInfo: resData}}>
            <div className="res-card-img-main">
              <img
                className="res-img h-full w-full rounded-tl-[0.9rem] rounded-tr-[0.9rem] sm:rounded-[0.9rem]"
                src={CDN_IMG_URL + resData.info.cloudinaryImageId}
                alt="res-logo"
              />
              <hr></hr>
              <div className="img-header-info hidden sm:mt-[-2.2rem] sm:w-[95%] sm:flex sm:justify-between">
                {discountInfo}
                <div className="delivery-time text-[0.8rem] font-medium bg-[#ffffff80] backdrop-blur-[blur(0.4rem)] rounded-[0.3rem] leading-[1.2rem] py-0 px-2 text-[#363636]">
                  {resData.info.sla.deliveryTime + " min"}
                </div>
              </div>
            </div>

            <div className="res-card-info border-[0.02rem] border-gray-300 border-solid px-[0.5rem] py-[0.8rem] mt-[-0.5rem] rounded-b-2xl sm:mt-5 sm:border-none sm:p-0">
              <div className="res-card-info-body flex flex-col justify-between h-[5.5rem] sm:h-auto">
                <div className="res-card-info-body-head flex justify-between sm:mt-[0.4rem]">
                  <h4 className="res-card-title w-4/5 whitespace-nowrap overflow-hidden text-ellipsis font-bold text-[1.4rem] sm:font-medium sm:text-[1.2rem] text-[#1c1c1c]">{resData.info.name}</h4>
                  <div className="res-rating flex items-baseline bg-[#24963f] text-[#ffffff] rounded-lg py-[0.2rem] px-[0.3rem] font-medium text-[0.875rem]">
                    <div>{resData.info.avgRating}</div>
                    &nbsp;
                    <img className="star_rating h-3 w-3" src={star_rating} alt="" />
                  </div>
                </div>
                <div className="res-card-info-body-subhead flex justify-between sm:mt-[0.4rem]">
                  <h4 className="res-cuisines text-[1rem] text-[#696969] font-[500] sm:font-[400] overflow-hidden text-ellipsis whitespace-nowrap w-[65%]">{cuisines}</h4>
                  <div className="res-costForTwo text-[1rem] text-[#696969] font-[500] sm:font-[400]">
                    <div>
                      {resData.info.costForTwo}
                    </div>
                  </div>
                </div>
                <div className="delivery-time-mob_WRAPPER flex justify-start items-end text-gray-500 font-medium sm:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="delivery-time-mob text-[1rem] ml-[0.2rem]">{resData.info.sla.deliveryTime + "-" + deliveryRange + " min"}</div>
                </div>

              </div>
              
              <div className="dis-info-mob sm:hidden">
              {discountInfoMobile}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ResCard;
