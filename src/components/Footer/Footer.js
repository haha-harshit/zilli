import { useEffect, useState } from "react";
import { FREEPIK_URL } from "../../utils/constants";
import { FLATICON_URL } from "../../utils/constants";

const Footer = (props) => {
  const [isCount, setIsCount] = useState(0);
  console.log(props.isConnectionResult, "footer");

  useEffect(()=>{
    const networkStatus = () => {
      if(!props.isConnectionResult){
        setIsCount(1);
        console.log(isCount)
        console.log("changed to offline")
        let statusBox = document.getElementById('display_network_status');
        statusBox.innerHTML = "Your connection seems offline!";
      }
      console.log(isCount)
      if((isCount>0) && (props.isConnectionResult)){
        console.log("back online")
        // setIsNetworkStatus(<h1>Online</h1>)
        let statusBox = document.getElementById('display_network_status');
        statusBox.innerHTML = "Back Online";
        setTimeout(() => {
          statusBox.innerHTML = ""
        }, 2000);
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
          </div>

        </footer>
      </div>
    </div>
  );
};

export default Footer;
