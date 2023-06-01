import { Link } from "react-router-dom";

const ResCard = (props) => {
  const { resData } = props;

  return (
    <>
      <div className="res-card-layout">
        <div className="res-contents">
          <Link to={"/" + resData.data.name}>
            <div className="res-card-img-main">
              <img
                className="res-img"
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,g_auto,w_508,h_320,c_fill/" +
                  resData.data.cloudinaryImageId
                }
                alt="res-logo"
              />
            </div>

            <h3 className="res-card-title">{resData.data.name}</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ResCard;
