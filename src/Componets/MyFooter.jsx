import { Card } from "react-bootstrap";
import instagram from "/assets/kisspng-logo-computer-icons-white-instagram-5b2d14ce9aee38.2719900715296811026346.png";
import facebook from "/assets/kisspng-facebook-computer-icons-logo-facebook-icon-5abb9662f0c326.8914343115222431709862.png";
import X from "/assets/X.png";
import tiktok from "/assets/tiktok.svg";

const MyFooter = () => {
  return (
    <Card className="text-center sfondo ma footer-system ">
      <Card.Header className="text-light test">
        <h3>I nostri Social</h3>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <a href="https://www.instagram.com/capicturevision/">
            <img src={instagram} alt="instagram" className="grandezza insta" />
          </a>

          <a href="https://www.facebook.com/CapictureVision">
            <img src={facebook} alt="facebook" className="grandezza face" />
          </a>
          <a href="https://twitter.com/CapictureVision">
            <img src={X} alt="X" className="grandezza x" />
          </a>
          <a href="https://www.tiktok.com/@capicturevision?_t=8lCRzFCBD6n&_r=1">
            <img src={tiktok} alt="tik tok" className="grandezza tiktok" />
          </a>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default MyFooter;
