import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function GridSystem() {
  return (
    <>
      <Container fluid>
        <h4 className="card-card-title">
          XS Grid <small>Always Horizontal</small>
        </h4>
        <Row>
          <Col xs="4">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col xs={4}>...</Col>`}</code>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="4">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col xs={4}>...</Col>`}</code>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="4">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col xs={4}>...</Col>`}</code>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Card.Title as="h4">
          SM Grid <small>Collapsed at 576px</small>
        </Card.Title>
        <Row>
          <Col sm="4">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col sm={4}>...</Col>`}</code>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col sm={4}>...</Col>`}</code>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="4">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col sm={4}>...</Col>`}</code>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Card.Title as="h4">
          MD Grid <small>Collapsed at 768px</small>
        </Card.Title>
        <Row>
          <Col md="4">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col md={4}>...</Col>`}</code>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col md={4}>...</Col>`}</code>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col md={4}>...</Col>`}</code>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Card.Title as="h4">
          LG Grid <small>Collapsed at 992px</small>
        </Card.Title>
        <Row>
          <Col lg="4">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col lg={4}>...</Col>`}</code>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col lg={4}>...</Col>`}</code>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col lg={4}>...</Col>`}</code>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Card.Title as="h4">
          XL Grid <small>Collapsed at 1200px</small>
        </Card.Title>
        <Row>
          <Col xl="4">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col xl={4}>...</Col>`}</code>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="4">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col xl={4}>...</Col>`}</code>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="4">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col xl={4}>...</Col>`}</code>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Card.Title as="h4">
          Mixed Grid <small>Showing different sizes on different screens</small>
        </Card.Title>
        <Row>
          <Col lg="3" sm="6">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col lg="3" sm="6">`}</code>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col lg="3" sm="6">`}</code>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col lg="3" sm="6">`}</code>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col lg="3" sm="6">`}</code>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Card.Title as="h4">
          Offset Grid <small>Adding some space when needed</small>
        </Card.Title>
        <Row>
          <Col md="3">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col md="3">`}</code>
              </Card.Body>
            </Card>
          </Col>
          <Col className="ml-auto" md="3">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col className="ml-auto" md="3">`}</code>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto" md="4">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col className="mx-auto" md="4">`}</code>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mx-auto" md="4">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col className="mx-auto" md="4">`}</code>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mx-auto" md="6">
            <Card>
              <Card.Body className="text-center">
                <code>{`<Col className="mx-auto" md="6">`}</code>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Card.Title as="h4">Paragraphs</Card.Title>
        <Card>
          <Card.Body>
            <Row>
              <Col sm="6">
                <h3>Some card-title Here</h3>
                <p>
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly
                  able to cover it and seemed ready to slide off any moment. His
                  many legs, pitifully thin compared with the size of the rest
                  of him, waved about helplessly as he looked. "What's happened
                  to me?" he thought.
                </p>
              </Col>
              <Col sm="6">
                <h3>Another card-title Here</h3>
                <p>
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly
                  able to cover it and seemed ready to slide off any moment. His
                  many legs, pitifully thin compared with the size of the rest
                  of him, waved about helplessly as he looked. "What's happened
                  to me?" he thought.
                </p>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col sm="4">
                <h3>Some card-title Here</h3>
                <p>
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly
                  able to cover it and seemed ready to slide off any moment.
                </p>
              </Col>
              <Col sm="4">
                <h3>Another card-title Here</h3>
                <p>
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly
                  able to cover it and seemed ready to slide off any moment.
                </p>
              </Col>
              <Col sm="4">
                <h3>Another card-title Here</h3>
                <p>
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly
                  able to cover it and seemed ready to slide off any moment.
                </p>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col sm="4">
                <h3>Some card-title Here</h3>
                <p>
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly
                  able to cover it and seemed ready to slide off any moment.
                </p>
              </Col>
              <Col sm="8">
                <h3>Another card-title Here</h3>
                <p>
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a
                  little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly
                  able to cover it and seemed ready to slide off any moment. One
                  morning, when Gregor Samsa woke from troubled dreams, he found
                  himself transformed in his bed into a horrible vermin. He lay
                  on his armour-like back, and if he lifted his head a little he
                  could see his brown belly, slightly domed and divided by
                  arches into stiff sections. The bedding was hardly able to
                  cover it and seemed ready to slide off any moment.
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {/* end card */}
      </Container>
    </>
  );
}

export default GridSystem;
