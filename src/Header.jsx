import logo from "./pngw.png"
import { FaLocationDot } from 'react-icons/fa6';
import {MdShoppingBag} from 'react-icons/md';
import {IoReorderThreeOutline} from 'react-icons/io5';


import "./App.css"

function Header() {
  return (
    <div className="container">
    <div className="navabar">
     
    
      <div className="logo-nav">
      <img className="logo-img" src={logo} alt="not found"/>
      </div>
      <div className="button-navg" style={{float:"right"}}>
      <button>Sign Up/Sign In</button>
      <button style={{backgroundColor:"#502314",width:"75px"}} className="button-nav"><MdShoppingBag/> $0.00</button>
      </div>
    </div>
    <div style={{marginTop:"-40px",paddingLeft:"16px"}}>
      <IoReorderThreeOutline size={32}/>
      </div>
    <div className="availability" style={{display:"flex",flexDirection:"row"}}>
    
      <div style={{marginTop:"12px",paddingLeft:"16px"}}><FaLocationDot/></div>
      
    <p style={{fontFamily:"Flame-Regular",fontSize:"16px",color:"rgb(80, 35, 20)",fontWeight:"bold",paddingTop:"15px",paddingLeft:"8px"}}>For availability <a href="fghy"><span style={{color:"rgb(80, 35, 20)",fontFamily:"sans",fontSize:"13px",fontWeight:"bolder",textDecoration:"underline"}}>Choose location</span></a></p>
    
    </div>
    </div>
    

     
  );
}

export default Header;