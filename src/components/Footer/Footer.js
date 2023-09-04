import { useEffect, useState } from "react";
import { FREEPIK_URL } from "../../utils/constants";
import { FLATICON_URL } from "../../utils/constants";

const Footer = (props) => {
  const [isCount, setIsCount] = useState(0);
  const [isNetworkText, setIsNetworkText] = useState("");

  const offlineStatusDisplay = () => {
    setIsNetworkText("Your connection seems offline!")
  }

  const onlineStatusDisplay = () => {
    setIsNetworkText("Back Online")
    setTimeout(() => {
      setIsNetworkText("")
    }, 2000);
  }

  useEffect(()=>{
    const networkStatus = () => {
      if(!props.isConnectionResult){
        setIsCount(1);
        offlineStatusDisplay()
      }
      if((isCount>0) && (props.isConnectionResult)){
        onlineStatusDisplay()
      }
    }
    networkStatus();

}, [props.isConnectionResult])

  return (
    <div className="footerSection section">
      <div className="footerSection-main">
        <footer>
          <div>
            {" "}
            Icons made by{" "}
            <a href={FREEPIK_URL} title="Freepik">
              {" "}
              Freepik{" "}
            </a>{" "}
            from{" "}
            <a href={FLATICON_URL} title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          <div id="display_network_status">
            {isNetworkText}
          </div>

        </footer>
      </div>
    </div>
  );
};

export default Footer;
