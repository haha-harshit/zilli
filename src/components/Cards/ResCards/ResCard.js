import { CDN_IMG_URL } from "../../../utils/constants";
import { Link } from "react-router-dom";
import star_rating from "../../../utils/images/star_rating.png";

const ResCard = (props) => {
  const { resData } = props;
  const isDiscounted = "aggregatedDiscountInfoV3" in resData.data;
  let discountInfo;
  if (isDiscounted) {
    discountInfo = (
      <div className="discount-info">
        {resData.data.aggregatedDiscountInfoV3.header +
          " " +
          resData.data.aggregatedDiscountInfoV3.subHeader}
      </div>
    );
  } else {
    discountInfo = <div className="no-discount-info"></div>;
  }

  const cuisines = resData.data.cuisines.map((cuisine) => cuisine).join(", ");

  return (
    <>
      <div className="res-card-layout">
        <div className="res-contents">
          <Link className="res-link" to={"/" + resData.data.name}>
            <div className="res-card-img-main">
              <img
                className="res-img"
                src={CDN_IMG_URL + resData.data.cloudinaryImageId}
                alt="res-logo"
              />
              <div className="img-header-info">
                {discountInfo}
                <div className="delivery-time">
                  {resData.data.sla.deliveryTime + " min"}
                </div>
              </div>
            </div>

            <div className="res-card-info">
              <div className="res-card-info-body">
                <div className="res-card-info-body-head">
                  <h4 className="res-card-title">{resData.data.name}</h4>
                  <div className="res-rating">
                    <div>{resData.data.avgRating}</div>
                    &nbsp;
                    <img className="star_rating" src={star_rating} alt="" />
                  </div>
                </div>
                <div className="res-card-info-body-subhead">
                  <h4 className="res-card-cuisines">{cuisines}</h4>
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
