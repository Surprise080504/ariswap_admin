import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  Form,
  InputGroup,
  Navbar,
  Nav,
  Pagination,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Buttons() {
  return (
    <>
      <Container fluid>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card>
                <Row>
                  <Col md="6">
                    <Card.Header>
                      <Card.Title as="h4">Colors</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Button className="btn-wd mr-1" variant="default">
                        Default
                      </Button>
                      <Button className="btn-wd mr-1" variant="primary">
                        Primary
                      </Button>
                      <Button className="btn-wd mr-1" variant="info">
                        Info
                      </Button>
                      <Button className="btn-wd mr-1" variant="success">
                        Success
                      </Button>
                      <Button className="btn-wd mr-1" variant="warning">
                        Warning
                      </Button>
                      <Button className="btn-wd" variant="danger">
                        Danger
                      </Button>
                    </Card.Body>
                  </Col>
                  <Col md="6">
                    <Card.Header>
                      <Card.Title as="h4">Styles</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Button className="btn-wd mr-1" variant="default">
                        Default
                      </Button>
                      <Button
                        className="btn-outline btn-wd mr-1"
                        variant="default"
                      >
                        Outline
                      </Button>
                      <Button
                        className="btn-round btn-wd mr-1"
                        variant="default"
                      >
                        Fill + Round
                      </Button>
                      <Button
                        className="btn-outline btn-round btn-wd mr-1"
                        variant="default"
                      >
                        Outline + Round
                      </Button>
                      <Button className="btn-simple btn-wd" variant="link">
                        Simple
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <Card.Header>
                      <Card.Title as="h4">Buttons with Label</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Button
                        className="btn-wd btn-outline mr-1"
                        type="button"
                        variant="success"
                      >
                        <span className="btn-label">
                          <i className="fas fa-check"></i>
                        </span>
                        Success
                      </Button>
                      <Button
                        className="btn-wd btn-outline mr-1"
                        type="button"
                        variant="danger"
                      >
                        <span className="btn-label">
                          <i className="fas fa-times"></i>
                        </span>
                        Danger
                      </Button>
                      <Button
                        className="btn-wd btn-outline mr-1"
                        type="button"
                        variant="info"
                      >
                        <span className="btn-label">
                          <i className="fas fa-exclamation"></i>
                        </span>
                        Info
                      </Button>
                      <Button
                        className="btn-wd btn-outline mr-1"
                        type="button"
                        variant="warning"
                      >
                        <span className="btn-label">
                          <i className="fas fa-exclamation-triangle"></i>
                        </span>
                        Warning
                      </Button>
                      <Button
                        className="btn-wd btn-outline mr-1"
                        type="button"
                        variant="default"
                      >
                        <span className="btn-label">
                          <i className="fas fa-arrow-left"></i>
                        </span>
                        Left
                      </Button>
                      <Button
                        className="btn-wd btn-outline"
                        type="button"
                        variant="default"
                      >
                        Right{" "}
                        <span className="btn-label btn-label-right">
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </Button>
                    </Card.Body>
                  </Col>
                  <Col md="6">
                    <Card.Header>
                      <Card.Title as="h4">Sizes</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Button size="lg" variant="default" className="mr-1">
                        Large
                      </Button>
                      <Button variant="default" className="mr-1">
                        Default
                      </Button>
                      <Button size="sm" variant="default">
                        Small
                      </Button>
                      <br></br>
                      <Button
                        className="btn-round mr-1"
                        size="lg"
                        variant="default"
                      >
                        Large
                      </Button>
                      <Button className="btn-round mr-1" variant="default">
                        Default
                      </Button>
                      <Button className="btn-round" size="sm" variant="default">
                        Small
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <Card.Header>
                      <Card.Title as="h4">Button Group</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <ButtonGroup>
                        <Button
                          className="btn-outline"
                          type="button"
                          variant="default"
                        >
                          Left
                        </Button>
                        <Button
                          className="btn-outline"
                          type="button"
                          variant="default"
                        >
                          Middle
                        </Button>
                        <Button
                          className="btn-outline"
                          type="button"
                          variant="default"
                        >
                          Right
                        </Button>
                      </ButtonGroup>
                      <br></br>
                      <br></br>
                      <ButtonGroup className="mr-1">
                        <Button
                          className="btn-outline"
                          type="button"
                          variant="default"
                        >
                          1
                        </Button>
                        <Button
                          className="btn-outline"
                          type="button"
                          variant="default"
                        >
                          2
                        </Button>
                        <Button
                          className="btn-outline"
                          type="button"
                          variant="default"
                        >
                          3
                        </Button>
                        <Button
                          className="btn-outline"
                          type="button"
                          variant="default"
                        >
                          4
                        </Button>
                      </ButtonGroup>
                      <ButtonGroup className="mr-1">
                        <Button
                          className="btn-outline"
                          type="button"
                          variant="default"
                        >
                          5
                        </Button>
                        <Button
                          className="btn-outline"
                          type="button"
                          variant="default"
                        >
                          6
                        </Button>
                        <Button
                          className="btn-outline"
                          type="button"
                          variant="default"
                        >
                          7
                        </Button>
                      </ButtonGroup>
                      <ButtonGroup>
                        <Button
                          className="btn-outline"
                          type="button"
                          variant="default"
                        >
                          8
                        </Button>
                      </ButtonGroup>
                    </Card.Body>
                  </Col>
                  <Col md="6">
                    <Card.Header>
                      <Card.Title as="h4">Pagination</Card.Title>
                    </Card.Header>
                    <Card.Body>
                      <Pagination>
                        <Pagination.Item>«</Pagination.Item>
                        <Pagination.Item>1</Pagination.Item>
                        <Pagination.Item>2</Pagination.Item>
                        <Pagination.Item active>3</Pagination.Item>
                        <Pagination.Item>4</Pagination.Item>
                        <Pagination.Item>5</Pagination.Item>
                        <Pagination.Item>»</Pagination.Item>
                      </Pagination>
                      <Pagination className="pagination pagination-no-border">
                        <Pagination.Item>«</Pagination.Item>
                        <Pagination.Item>1</Pagination.Item>
                        <Pagination.Item>2</Pagination.Item>
                        <Pagination.Item active>3</Pagination.Item>
                        <Pagination.Item>4</Pagination.Item>
                        <Pagination.Item>5</Pagination.Item>
                        <Pagination.Item>»</Pagination.Item>
                      </Pagination>
                    </Card.Body>
                  </Col>
                </Row>
                <Card.Header>
                  <Card.Title as="h4">Social buttons</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col className="social-buttons-demo" md="4" sm="4" xs="8">
                      <h4 className="title">
                        <small>Filled</small>
                      </h4>
                      <Button className="btn-social" variant="twitter">
                        <i className="fab fa-twitter"></i>
                        Connect with Twitter
                      </Button>
                      <br></br>
                      <Button className="btn-social" variant="facebook">
                        <i className="fab fa-facebook-square"></i>
                        Share · 2.2k
                      </Button>
                      <br></br>
                      <Button className="btn-social" variant="google">
                        <i className="fab fa-google-plus-square"></i>
                        Share on Google+
                      </Button>
                      <br></br>
                      <Button className="btn-social" variant="linkedin">
                        <i className="fab fa-linkedin"></i>
                        Connect with Linkedin
                      </Button>
                      <br></br>
                      <Button className="btn-social" variant="pinterest">
                        <i className="fab fa-pinterest"></i>
                        Pint it · 212
                      </Button>
                      <br></br>
                      <Button className="btn-social" variant="youtube">
                        <i className="fab fa-youtube-play"></i>
                        View on Youtube
                      </Button>
                      <br></br>
                      <Button className="btn-social" variant="tumblr">
                        <i className="fab fa-tumblr-square"></i>
                        Repost
                      </Button>
                      <br></br>
                      <Button className="btn-social" variant="github">
                        <i className="fab fa-github"></i>
                        Connect with Github
                      </Button>
                      <br></br>
                      <Button className="btn-social" variant="behance">
                        <i className="fab fa-behance-square"></i>
                        Follow us
                      </Button>
                      <br></br>
                      <Button className="btn-social" variant="dribbble">
                        <i className="fab fa-dribbble"></i>
                        Find us on Dribbble
                      </Button>
                      <br></br>
                      <Button className="btn-social" variant="reddit">
                        <i className="fab fa-reddit"></i>
                        Repost · 232
                      </Button>
                      <br></br>
                      <Button className="btn-social" variant="stumbleupon">
                        <i className="fab fa-stumbleupon"></i>
                        View on StumbleUpon
                      </Button>
                      <br></br>
                    </Col>
                    <Col className="social-buttons-demo" md="2" sm="2" xs="3">
                      <h4 className="title">
                        <small>Light</small>
                      </h4>
                      <Button
                        className="btn-social btn-round btn-outline"
                        variant="twitter"
                      >
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-round btn-outline"
                        variant="facebook"
                      >
                        <i className="fab fa-facebook"></i>
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-round btn-outline"
                        variant="google"
                      >
                        <i className="fab fa-google-plus"></i>
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-round btn-outline"
                        variant="linkedin"
                      >
                        <i className="fab fa-linkedin"></i>
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-round btn-outline"
                        variant="pinterest"
                      >
                        <i className="fab fa-pinterest"></i>
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-round btn-outline"
                        variant="youtube"
                      >
                        <i className="fab fa-youtube"></i>
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-round btn-outline"
                        variant="tumblr"
                      >
                        <i className="fab fa-tumblr"></i>
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-round btn-outline"
                        variant="github"
                      >
                        <i className="fab fa-github"></i>
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-round btn-outline"
                        variant="behance"
                      >
                        <i className="fab fa-behance"></i>
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-round btn-outline"
                        variant="dribbble"
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-round btn-outline"
                        variant="reddit"
                      >
                        <i className="fab fa-reddit"></i>
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-round btn-outline"
                        variant="stumbleupon"
                      >
                        <i className="fab fa-stumbleupon"></i>
                      </Button>
                      <br></br>
                    </Col>
                    <Col className="social-buttons-demo" md="2" sm="2" xs="3">
                      <h4 className="title">
                        <small>Simple</small>
                      </h4>
                      <Button className="btn-social btn-link" variant="twitter">
                        <i className="fab fa-twitter"></i>
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-link"
                        variant="facebook"
                      >
                        <i className="fab fa-facebook-square"></i>
                      </Button>
                      <br></br>
                      <Button className="btn-social btn-link" variant="google">
                        <i className="fab fa-google-plus-square"></i>
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-link"
                        variant="linkedin"
                      >
                        <i className="fab fa-linkedin"></i>
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-link"
                        variant="pinterest"
                      >
                        <i className="fab fa-pinterest"></i>
                      </Button>
                      <br></br>
                      <Button className="btn-social btn-link" variant="youtube">
                        <i className="fab fa-youtube"></i>
                      </Button>
                      <br></br>
                      <Button className="btn-social btn-link" variant="tumblr">
                        <i className="fab fa-tumblr-square"></i>
                      </Button>
                      <br></br>
                      <Button className="btn-social btn-link" variant="github">
                        <i className="fab fa-github"></i>
                      </Button>
                      <br></br>
                      <Button className="btn-social btn-link" variant="behance">
                        <i className="fab fa-behance"></i>
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-link"
                        variant="dribbble"
                      >
                        <i className="fab fa-dribbble"></i>
                      </Button>
                      <br></br>
                      <Button className="btn-social btn-link" variant="reddit">
                        <i className="fab fa-reddit"></i>
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-link"
                        variant="stumbleupon"
                      >
                        <i className="fab fa-stumbleupon"></i>
                      </Button>
                      <br></br>
                    </Col>
                    <Col className="social-buttons-demo" md="3" sm="4" xs="8">
                      <h4 className="title">
                        <small>With Text</small>
                      </h4>
                      <Button className="btn-social btn-link" variant="twitter">
                        <i className="fab fa-twitter"></i>
                        Connect with Twitter
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-link"
                        variant="facebook"
                      >
                        <i className="fab fa-facebook-square"></i>
                        Share · 2.2k
                      </Button>
                      <br></br>
                      <Button className="btn-social btn-link" variant="google">
                        <i className="fab fa-google-plus-square"></i>
                        Share on Google+
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-link"
                        variant="linkedin"
                      >
                        <i className="fab fa-linkedin"></i>
                        Connect with Linkedin
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-link"
                        variant="pinterest"
                      >
                        <i className="fab fa-pinterest"></i>
                        Pint it · 212
                      </Button>
                      <br></br>
                      <Button className="btn-social btn-link" variant="youtube">
                        <i className="fab fa-youtube-play"></i>
                        View on Youtube
                      </Button>
                      <br></br>
                      <Button className="btn-social btn-link" variant="tumblr">
                        <i className="fab fa-tumblr-square"></i>
                        Repost
                      </Button>
                      <br></br>
                      <Button className="btn-social btn-link" variant="github">
                        <i className="fab fa-github"></i>
                        Connect with Github
                      </Button>
                      <br></br>
                      <Button className="btn-social btn-link" variant="behance">
                        <i className="fab fa-behance-square"></i>
                        Follow us
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-link"
                        variant="dribbble"
                      >
                        <i className="fab fa-dribbble"></i>
                        Find us on Dribbble
                      </Button>
                      <br></br>
                      <Button className="btn-social btn-link" variant="reddit">
                        <i className="fab fa-reddit"></i>
                        Repost · 232
                      </Button>
                      <br></br>
                      <Button
                        className="btn-social btn-link"
                        variant="stumbleupon"
                      >
                        <i className="fab fa-stumbleupon"></i>
                        View on StumbleUpon
                      </Button>
                      <br></br>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Buttons;
