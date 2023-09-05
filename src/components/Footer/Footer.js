import { useEffect, useState } from "react";
import { FREEPIK_URL } from "../../utils/constants";
import { FLATICON_URL } from "../../utils/constants";

import {footer_style} from "../../utils/css/footer.css"

const Footer = (props) => {
  const [isCount, setIsCount] = useState(0);
  const [isNetworkText, setIsNetworkText] = useState("");

  const offlineStatusDisplay = () => {
    setIsNetworkText("No internet connectivity! Check your network")
  }

  const onlineStatusDisplay = () => {
    setIsNetworkText("Back Online")
    setTimeout(() => {
      setIsNetworkText("")
    }, 2500);
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
    <div className="footerSection">
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
          {isNetworkText.length > 0 ? 
            <div id="display_network_status" style={footer_style}>
              {isNetworkText == "No internet connectivity! Check your network"
                ?
                <div style={{backgroundColor: "rgb(191, 41, 56)", padding: "0.1rem", paddingBottom: "0.2rem"}}>{isNetworkText}</div>
                :
                <div style={{backgroundColor: "rgb(36, 150, 63)", padding: "0.1rem", paddingBottom: "0.2rem"}}>{isNetworkText}</div>
              }
            </div>
          :
          "" 
          }
          
        </footer>
      </div>
    </div>
  );
};

export default Footer;
