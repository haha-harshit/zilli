import { CDN_IMG_URL } from "../../../utils/constants";
import { Link } from "react-router-dom";
import star_rating from "../../../utils/images/star_rating.png";
import { useState } from "react";

const ResCard = (props) => {
  const { resData } = props;
  // const [isDefaultBorder, setIsDefaultBorder] = useState("#fbfdff");
  const isDiscounted = "aggregatedDiscountInfoV3" in resData.info;
  let discountInfo;
  
  if (isDiscounted && resData.info.aggregatedDiscountInfoV3.header && resData.info.aggregatedDiscountInfoV3?.subHeader) {
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

  const cuisines = resData.info.cuisines.map((cuisine) => cuisine).join(", ");

  return (
    <>
      <div className="res-card-layout w-[21rem] my-6 mx-4 border-[0.01rem] border-[#fbfdff] border-solid hover:border-[#e3e3e3] hover:shadow-md rounded-[0.9rem]">
        <div className="res-contents m-[0.7rem]">
          <Link className="res-link no-underline" to={"/restaurant/"+resData.info.id} state={{resMainInfo: resData}}>
            <div className="res-card-img-main">
              <img
                className="res-img h-full w-full rounded-[0.9rem]"
                src={CDN_IMG_URL + resData.info.cloudinaryImageId}
                alt="res-logo"
              />
              <div className="img-header-info mt-[-2.2rem] w-[95%] flex justify-between">
                {discountInfo}
                <div className="delivery-time text-[0.8rem] font-medium bg-[#ffffff80] backdrop-blur-[blur(0.4rem)] rounded-[0.3rem] leading-[1.2rem] py-0 px-2 text-[#363636]">
                  {resData.info.sla.deliveryTime + " min"}
                </div>
              </div>
            </div>

            <div className="res-card-info mt-5">
              <div className="res-card-info-body">
                <div className="res-card-info-body-head flex justify-between">
                  <h4 className="res-card-title w-4/5 whitespace-nowrap overflow-hidden text-ellipsis font-medium text-[1.2rem] text-[#1c1c1c]">{resData.info.name}</h4>
                  <div className="res-rating flex items-baseline bg-[#24963f] text-[#ffffff] h-[1.2rem] rounded-lg py-[0.2rem] px-[0.3rem] font-medium text-sm">
                    <div>{resData.info.avgRating}</div>
                    &nbsp;
                    <img className="star_rating h-3 w-3" src={star_rating} alt="" />
                  </div>
                </div>
                <div className="res-card-info-body-subhead flex justify-between mt-[0.4rem]">
                  <h4 className="res-cuisines text-[1rem] text-[#696969] font-[400] overflow-hidden text-ellipsis whitespace-nowrap w-[65%]">{cuisines}</h4>
                  <div className="res-costForTwo text-[1rem] text-[#696969] font-[350]">
                    <div>
                      {resData.info.costForTwo}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ResCard;
