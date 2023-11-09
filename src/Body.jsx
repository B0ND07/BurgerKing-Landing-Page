import React from 'react'
import Container from 'react-bootstrap/Container'; 
import { MdShoppingBag } from 'react-icons/md';
import { GiScooter } from 'react-icons/gi';
import "./App.css"

function Body() {
  return (
    <div className='container' style={{marginTop:"2px",display:"flex"}}>
        <div className='title'>
            <h1 className='heading-1'>Start your BK<sup>®</sup>order.</h1>
            <div className='button-body'>
            <button className='button1'><MdShoppingBag/> Order Pickup</button><br /><br />
            <button className='button2'><GiScooter/> Order Delivery</button>
            </div>
        </div>
        <div className='photo'>
             <img /*style={{maxWidth:"100%",height:"100%"}}*/ src='https://cdn.sanity.io/images/czqk28jt/prod_bk_us/61dc8eae0e6386cb63746d382a0ed9433fcbbaf4-800x450.jpg?w=650&q=90&fit=max&auto=format'/>
        </div>


    </div>
  )
}

export default Body