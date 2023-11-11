import logo from "./pngw.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdShoppingBag } from "react-icons/md";
import { IoReorderThreeOutline } from "react-icons/io5";
import Button from "react-bootstrap/Button";

import "./App.css";

function Header() {
  return (
    <div className="container sticky-nav">
      <div className="navabar">
        <div className="logo-nav">
          <img className="logo-img" src={logo} alt="not found" />
        </div>
        <div className="button-navg">
          <Button className="sign-btn">Sign Up/Sign In</Button>
          <Button className="button-nav">
            <MdShoppingBag /> $0.00
          </Button>
        </div>
      </div>
      <div className="nav-menu">
        <IoReorderThreeOutline size={32} />
      </div>
      <div className="availability">
        <div className="loc-query">
          <FaLocationDot />
        </div>
        <div>
          <p className="loc-icon">
            For availability{" "}
            <a href="fghy">
              <span className="loc-text">Choose location</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
