import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { GooglePlayButton, AppStoreButton } from "react-mobile-app-button";

function Bottom() {
  return (
    <div className="container container-bottom">
      <Row xs={1} md={2} lg={2} className="g-4">
        <Col>
          <div className="botttom-image">
            <img
              src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/57382e9feb53d08237fa988a570efdff1602d6ff-912x1267.png?w=650&q=80&fit=max&auto=format"
              width="60%"
            ></img>
          </div>
        </Col>
        <Col>
          <div className="bottom-title">
            <h1>
              Save $$$
              <br /> With offers on demand
            </h1>
            <div className="dl-btn">
              <AppStoreButton theme={"dark"} />
              <GooglePlayButton theme={"dark"} />
            </div>
            <br />
            <p>
              Apple and the Apple logo are trademarks of Apple Inc., registered
              in the U.S. and other countries. App Store is a service mark of
              Apple Inc. Google Play is a trademark of Google Inc. Terms apply.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Bottom;
