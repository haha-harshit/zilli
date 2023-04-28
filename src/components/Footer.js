import { FREEPIK_URL } from "../utils/constants";
import { FLATICON_URL } from "../utils/constants";

const Footer = () => {
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
        </footer>
      </div>
    </div>
  );
};

export default Footer;
