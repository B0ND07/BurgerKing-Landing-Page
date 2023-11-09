import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import {
    GooglePlayButton,
    AppStoreButton,
    AppGalleryButton,
    ButtonsContainer,
  } from "react-mobile-app-button";


function Bottom() {
  return (
    <div className='container' style={{paddingTop:"50px",display:"flex"}}>
        {/* <div className='botttom-image'>
            <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/57382e9feb53d08237fa988a570efdff1602d6ff-912x1267.png?w=650&q=80&fit=max&auto=format" width="60%" style={{transform: "rotate(360deg)",marginLeft:"120px"}}></img>
        </div>

        <div className='bottom-title'>
            <h1>Save $$$<br/> With offers on demand</h1>
            <div style={{display:"flex",gap:"20px"}}>
        <AppStoreButton theme={"dark"}/> 
        <GooglePlayButton theme={"dark"}/>
            </div><br />
            <p>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</p>
        </div> */}

      <Row xs={1} md={2} lg={2} className="g-4">
          <Col>
          <div className='botttom-image'>
            <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/57382e9feb53d08237fa988a570efdff1602d6ff-912x1267.png?w=650&q=80&fit=max&auto=format" width="60%" style={{transform: "rotate(360deg)",marginLeft:"120px"}}></img>
        </div>
          </Col>
          <Col>
          <div className='bottom-title'>
            <h1>Save $$$<br/> With offers on demand</h1>
            <div style={{display:"flex",gap:"20px"}}>
        <AppStoreButton theme={"dark"}/> 
        <GooglePlayButton theme={"dark"}/>
            </div><br />
            <p>Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply.</p>
        </div>

          
          
          </Col>
      </Row>



    </div>
  )
}

export default Bottom