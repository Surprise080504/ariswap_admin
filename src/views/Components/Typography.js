import React from "react";

// react-bootstrap components
import {
  Badge,
  Breadcrumb,
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

function Typography() {
  return (
    <>
      <Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item href="#pablo" onClick={(e) => e.preventDefault()}>
            Breadcrumb 1
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#pablo" onClick={(e) => e.preventDefault()}>
            Breadcrumb2
          </Breadcrumb.Item>
          <Breadcrumb.Item aria-current="page" active>
            Current Page
          </Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Light Bootstrap Table Heading</Card.Title>
                <p className="card-category">
                  Created using Roboto Font Family
                </p>
              </Card.Header>
              <Card.Body>
                <div className="typo-line">
                  <h1></h1>
                  <p className="category">Header 1</p>
                  Light Bootstrap Table Heading
                </div>
                <div className="typo-line">
                  <h2></h2>
                  <p className="category">Header 2</p>
                  Light Bootstrap Table Heading
                </div>
                <div className="typo-line">
                  <h3></h3>
                  <p className="category">Header 3</p>
                  Light Bootstrap Table Heading
                </div>
                <div className="typo-line">
                  <h4></h4>
                  <p className="category">Header 4</p>
                  Light Bootstrap Table Heading
                </div>
                <div className="typo-line">
                  <h5></h5>
                  <p className="category">Header 5</p>
                  Light Bootstrap Table Heading
                </div>
                <div className="typo-line">
                  <h6></h6>
                  <p className="category">Header 6</p>
                  Light Bootstrap Table Heading
                </div>
                <div className="typo-line">
                  <p>
                    <span className="category">Paragraph</span>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                  </p>
                </div>
                <div className="typo-line">
                  <p className="category">Quote</p>
                  <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                    </p>
                    <small>Steve Jobs, CEO Apple</small>
                  </blockquote>
                </div>
                <div className="typo-line">
                  <p className="category">Muted Text</p>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet.
                  </p>
                </div>
                <div className="typo-line">
                  {/* there are also "text-info", "text-success", "text-warning", "text-danger" clases for the text */}
                  <p className="category">Coloured Text</p>
                  <p className="text-primary">
                    Text Primary - Light Bootstrap Table Heading and complex
                    bootstrap dashboard you've ever seen on the internet.
                  </p>
                  <p className="text-info">
                    Text Info - Light Bootstrap Table Heading and complex
                    bootstrap dashboard you've ever seen on the internet.
                  </p>
                  <p className="text-success">
                    Text Success - Light Bootstrap Table Heading and complex
                    bootstrap dashboard you've ever seen on the internet.
                  </p>
                  <p className="text-warning">
                    Text Warning - Light Bootstrap Table Heading and complex
                    bootstrap dashboard you've ever seen on the internet.
                  </p>
                  <p className="text-danger">
                    Text Danger - Light Bootstrap Table Heading and complex
                    bootstrap dashboard you've ever seen on the internet.
                  </p>
                </div>
                <div className="typo-line">
                  <h2></h2>
                  <p className="category">Small Tag</p>
                  header with small subcard-title <br></br>
                  <small>".small" is a tag for the headers</small>
                </div>
                <div className="typo-line">
                  <p className="category">Lists</p>
                  <Row>
                    <Col md="3">
                      <h5>Unordered List</h5>
                      <ul>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li className="list-unstyled">
                          <ul>
                            <li>List Item</li>
                            <li>List Item</li>
                            <li>List Item</li>
                          </ul>
                        </li>
                        <li>List Item</li>
                      </ul>
                    </Col>
                    <Col md="3">
                      <h5>Ordered List</h5>
                      <ol>
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                      </ol>
                    </Col>
                    <Col md="3">
                      <h5>Unstyled List</h5>
                      <ul className="list-unstyled">
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                      </ul>
                    </Col>
                    <Col md="3">
                      <h5>Inline List</h5>
                      <ul className="list-inline">
                        <li>List Item</li>
                        <li>List Item</li>
                        <li>List Item</li>
                      </ul>
                    </Col>
                  </Row>
                </div>
                <div className="typo-line">
                  <p className="category">Blockquotes</p>
                  <Row>
                    <Col md="6">
                      <h5>Default Blockquote</h5>
                      <blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer posuere erat a ante.
                        </p>
                      </blockquote>
                    </Col>
                    <Col md="6">
                      <h5>Blockquote with Citation</h5>
                      <blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer posuere erat a ante.
                        </p>
                        <small>
                          Someone famous in{" "}
                          <cite card-title="Source card-title">
                            Source card-title
                          </cite>
                        </small>
                      </blockquote>
                    </Col>
                  </Row>
                </div>
                <div className="typo-line">
                  <p className="category">Code</p>
                  <p>
                    This is <code>.css-class-as-code</code>, an example of an
                    inline code element. Wrap inline code within a{" "}
                    <code>
                      <code>...</code>
                    </code>
                    tag.
                  </p>
                  <pre>
                    1. #This is an example of preformatted text. 2. #Here is
                    another line of code
                  </pre>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Typography;
