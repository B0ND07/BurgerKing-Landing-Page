import logo from "./pngw.png"
import { FaLocationDot } from 'react-icons/fa6';
import {MdShoppingBag} from 'react-icons/md';
import {IoReorderThreeOutline} from 'react-icons/io5';
import Button from 'react-bootstrap/Button';


import "./App.css"

function Header() {
  return (
    <div className="container">
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
    <div className="availability" style={{display:"flex",flexDirection:"row"}}>
    
      <div className="loc-query" style={{marginTop:"12px",paddingLeft:"16px"}}><FaLocationDot/></div>
      
    <p className="loc-query" style={{fontFamily:"Flame-Regular",fontSize:"16px",color:"rgb(80, 35, 20)",fontWeight:"bold",paddingTop:"15px",paddingLeft:"8px"}}>For availability <a href="fghy"><span style={{color:"rgb(80, 35, 20)",fontFamily:"sans",fontSize:"13px",fontWeight:"bolder",textDecoration:"underline"}}>Choose location</span></a></p>
    
    </div>
    </div>
    

     
  );
}

export default Header;