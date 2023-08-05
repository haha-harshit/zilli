import { CDN_IMG_URL } from "../../../utils/constants";
import { Link } from "react-router-dom";
import star_rating from "../../../utils/images/star_rating.png";

const ResCard = (props) => {
  const { resData } = props;
  const isDiscounted = "aggregatedDiscountInfoV3" in resData.info;
  let discountInfo;
  
  if (isDiscounted && resData.info.aggregatedDiscountInfoV3.header && resData.info.aggregatedDiscountInfoV3?.subHeader) {
    discountInfo = (
      <div className="discount-info">
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
      <div className="res-card-layout">
        <div className="res-contents">
          <Link className="res-link" to={"/restaurant/"+resData.info.id} >
            <div className="res-card-img-main">
              <img
                className="res-img"
                src={CDN_IMG_URL + resData.info.cloudinaryImageId}
                alt="res-logo"
              />
              <div className="img-header-info">
                {discountInfo}
                <div className="delivery-time">
                  {resData.info.sla.deliveryTime + " min"}
                </div>
              </div>
            </div>

            <div className="res-card-info">
              <div className="res-card-info-body">
                <div className="res-card-info-body-head">
                  <h4 className="res-card-title">{resData.info.name}</h4>
                  <div className="res-rating">
                    <div>{resData.info.avgRating}</div>
                    &nbsp;
                    <img className="star_rating" src={star_rating} alt="" />
                  </div>
                </div>
                <div className="res-card-info-body-subhead">
                  <h4 className="res-cuisines">{cuisines}</h4>
                  <div className="res-costForTwo">
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
