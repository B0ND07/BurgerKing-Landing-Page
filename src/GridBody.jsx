import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./App.css";

function GridBody() {
  return (
    <div className="container container-card">
      <Row xs={1} md={2} lg={2} className="g-4">
        <Col>
          <Card className="card-grid">
            <Card.Img
              variant="top"
              src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/bb30c8723ce6024510f21d8a0ca857f6ba585b1b-2000x1000.png?w=650&q=80&fit=max&auto=format"
            />
            <Card.Body>
              <Card.Title>Get ready for the snap</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button>Order Now</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="card-grid">
            <Card.Img
              variant="top"
              src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/3596547d5302379e6661f3f8465ca77e08d345d1-2000x1000.jpg?w=650&q=80&fit=max&auto=format"
            />
            <Card.Body>
              <Card.Title>Woo-hoo! It’s Whopper® Wednesday</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Join Now</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="card-grid">
            <Card.Img
              variant="top"
              src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/db820dbe08df9c9acb0b47a276a1cf3cfe1fbe1f-2000x1000.png?w=650&q=80&fit=max&auto=format"
            />
            <Card.Body>
              <Card.Title>NEW Have-sies™: Your combo, your way</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Join Now</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="card-grid">
            <Card.Img
              variant="top"
              src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/f95735d32a8970cac2a286f919ba1fd2cf2e7020-2000x1000.png?w=650&q=80&fit=max&auto=format"
            />
            <Card.Body>
              <Card.Title>Pick your BK® Wrap Pack</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Order Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GridBody;
