import logo from "./pngw.png"
import { FaLocationDot } from 'react-icons/fa6';
import {MdShoppingBag} from 'react-icons/md';
import {IoReorderThreeOutline} from 'react-icons/io5';
import Button from 'react-bootstrap/Button';


import "./App.css"

function Header() {
  return (
    <div className="container sticky-nav">
      <div className="navabar">
     
    
        <div className="logo-nav">
        <img className="logo-img" src={logo} alt="not found"/>
        </div>
        <div className="button-navg" style={{float:"right"}}>
        <Button>Sign Up/Sign In</Button>
        <Button style={{backgroundColor:"#502314",width:"75px"}} className="button-nav cart"><MdShoppingBag/> $0.00</Button>
        </div>
      </div>
      <div style={{marginTop:"-40px",paddingLeft:"16px"}}>
        <IoReorderThreeOutline size={32}/>
        </div>
      <div className="availability">
      
        <div className="loc-query loc-icon" style={{}}><FaLocationDot/></div>
        <div>
        
      <p className="loc-query loc-icon">For availability <a href="fghy"><span className="loc-text">Choose location</span></a></p>
      </div>
        </div>
    </div>
   
    

     
  );
}

export default Header;