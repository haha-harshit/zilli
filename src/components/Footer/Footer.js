import { useEffect, useState } from "react";
import { FREEPIK_URL } from "../../utils/constants";
import { FLATICON_URL } from "../../utils/constants";

const Footer = (props) => {

  const [isNetworkStatus, setIsNetworkStatus] = useState()
  console.log(props.isConnectionResult, "footer");

  let displayOffline = <h1>offline</h1>
  let displayOnline = <h1>Online</h1>
  // let displayOnline = () => {
  //   setTimeout(() => {
  //     return (<h1>Back Online</h1>)
  //   }, timeout);
  // }

  let network_status;
  
  // if(!props.isConnectionResult){
  //   displayOffline
  // }
  
  useEffect(()=>{
    const networkStatus = () => {
      if(!props.isConnectionResult){
        let statusBox = document.getElementById('display_network_status');
        statusBox.innerHTML = "Offline";
        // setIsNetworkStatus(<h1>Offline</h1>)
      }else{
        // setIsNetworkStatus(<h1>Online</h1>)
        let statusBox = document.getElementById('display_network_status');
        statusBox.innerHTML = "Online";
        setTimeout(() => {
          statusBox.style.display = 'none'
        }, 1500);
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
            {isNetworkStatus}
          </div>

        </footer>
      </div>
    </div>
  );
};

export default Footer;
