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
  Table,
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function ExtendedTables() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="6">
            <Card className="table-with-links">
              <Card.Header>
                <Card.Title as="h4">Table with Links</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width">
                <Table>
                  <thead>
                    <tr>
                      <th className="text-center">#</th>
                      <th>Name</th>
                      <th>Job Position</th>
                      <th className="text-right">Salary</th>
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">1</td>
                      <td>Andrew Mike</td>
                      <td>Develop</td>
                      <td className="text-right">€ 99,225</td>
                      <td className="td-actions text-right">
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-48903503">
                              View Profile..
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="info"
                          >
                            <i className="fas fa-user"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-981231696">
                              Edit Profile..
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="success"
                          >
                            <i className="fas fa-edit"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-255158527">Remove..</Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="danger"
                          >
                            <i className="fas fa-times"></i>
                          </Button>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">2</td>
                      <td>John Doe</td>
                      <td>Design</td>
                      <td className="text-right">€ 89,241</td>
                      <td className="td-actions text-right">
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-150479227">
                              View Profile..
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="info"
                          >
                            <i className="fas fa-user"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-292560270">
                              Edit Profile..
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="success"
                          >
                            <i className="fas fa-edit"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-410038576">Remove..</Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="danger"
                          >
                            <i className="fas fa-times"></i>
                          </Button>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">3</td>
                      <td>Alex Mike</td>
                      <td>Design</td>
                      <td className="text-right">€ 92,144</td>
                      <td className="td-actions text-right">
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-499501367">
                              View Profile..
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="info"
                          >
                            <i className="fas fa-user"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-992502429">
                              Edit Profile..
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="success"
                          >
                            <i className="fas fa-edit"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-421510165">Remove..</Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="danger"
                          >
                            <i className="fas fa-times"></i>
                          </Button>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">4</td>
                      <td>Mike Monday</td>
                      <td>Marketing</td>
                      <td className="text-right">€ 49,990</td>
                      <td className="td-actions text-right">
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-138766123">
                              View Profile..
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="info"
                          >
                            <i className="fas fa-user"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-661894991">
                              Edit Profile..
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="success"
                          >
                            <i className="fas fa-edit"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-629938886">Remove..</Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="danger"
                          >
                            <i className="fas fa-times"></i>
                          </Button>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">5</td>
                      <td>Paul Dickens</td>
                      <td>Communication</td>
                      <td className="text-right">€ 69,201</td>
                      <td className="td-actions text-right">
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-232258380">
                              View Profile..
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="info"
                          >
                            <i className="fas fa-user"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-897993903">
                              Edit Profile..
                            </Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="success"
                          >
                            <i className="fas fa-edit"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          overlay={
                            <Tooltip id="tooltip-481441726">Remove..</Tooltip>
                          }
                        >
                          <Button
                            className="btn-link btn-xs"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            variant="danger"
                          >
                            <i className="fas fa-times"></i>
                          </Button>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card className="table-with-switches">
              <Card.Header>
                <Card.Title as="h4">Table with Switches</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width">
                <Table className="table-striped">
                  <thead>
                    <tr>
                      <th className="text-center">#</th>
                      <th>Name</th>
                      <th>Job Position</th>
                      <th className="text-right">Salary</th>
                      <th className="text-right">Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">1</td>
                      <td>Andrew Mike</td>
                      <td>Develop</td>
                      <td className="text-right">€ 99,225</td>
                      <td className="d-flex justify-content-end">
                        <Form.Check
                          type="switch"
                          id="custom-switch-1"
                          className="mb-1"
                          defaultChecked
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">2</td>
                      <td>John Doe</td>
                      <td>Design</td>
                      <td className="text-right">€ 89,241</td>
                      <td className="d-flex justify-content-end">
                        <Form.Check
                          type="switch"
                          id="custom-switch-2"
                          className="mb-1"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">3</td>
                      <td>Alex Mike</td>
                      <td>Design</td>
                      <td className="text-right">€ 92,144</td>
                      <td className="d-flex justify-content-end">
                        <Form.Check
                          type="switch"
                          id="custom-switch-3"
                          className="mb-1"
                          defaultChecked
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">4</td>
                      <td>Mike Monday</td>
                      <td>Marketing</td>
                      <td className="text-right">€ 49,990</td>
                      <td className="d-flex justify-content-end">
                        <Form.Check
                          type="switch"
                          id="custom-switch-4"
                          className="mb-1"
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="table-big-boy">
              <Card.Header>
                <Card.Title as="h4">Table Big Boy</Card.Title>
                <p className="card-category">A table for content management</p>
                <br></br>
              </Card.Header>
              <Card.Body className="table-full-width">
                <Table className="table-bigboy">
                  <thead>
                    <tr>
                      <th className="text-center">Thumb</th>
                      <th>Blog Title</th>
                      <th className="th-description">Description</th>
                      <th className="text-right">Date</th>
                      <th className="text-right">Views</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="img-container">
                          <img
                            alt="..."
                            src={require("assets/img/blog-1.jpg").default}
                          ></img>
                        </div>
                      </td>
                      <td className="td-name">
                        10 Things that all designers do
                      </td>
                      <td>
                        Most beautiful agenda for the office, really nice paper
                        and black cover. Most beautiful agenda for the office.
                      </td>
                      <td className="td-number">30/08/2016</td>
                      <td className="td-number">1,225</td>
                      <td className="td-actions">
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-618009180">
                              View Post..
                            </Tooltip>
                          }
                          placement="left"
                        >
                          <Button
                            className="btn-link btn-icon"
                            type="button"
                            variant="info"
                          >
                            <i className="far fa-image"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-461494662">
                              Edit Post..
                            </Tooltip>
                          }
                          placement="left"
                        >
                          <Button
                            className="btn-link btn-icon"
                            type="button"
                            variant="success"
                          >
                            <i className="fas fa-edit"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-408856985">
                              Remove Post..
                            </Tooltip>
                          }
                          placement="left"
                        >
                          <Button
                            className="btn-link btn-icon"
                            type="button"
                            variant="danger"
                          >
                            <i className="fas fa-times"></i>
                          </Button>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="img-container">
                          <img
                            alt="..."
                            src={require("assets/img/blog-2.jpg").default}
                          ></img>
                        </div>
                      </td>
                      <td className="td-name">Back to School Offer</td>
                      <td>
                        Design is not just what it looks like and feels like.
                        Design is how it works.
                      </td>
                      <td className="td-number">17/07/2016</td>
                      <td className="td-number">49,302</td>
                      <td className="td-actions">
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-65578954">View Post..</Tooltip>
                          }
                          placement="left"
                        >
                          <Button
                            className="btn-link btn-icon"
                            type="button"
                            variant="info"
                          >
                            <i className="far fa-image"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-38536367">Edit Post..</Tooltip>
                          }
                          placement="left"
                        >
                          <Button
                            className="btn-link btn-icon"
                            type="button"
                            variant="success"
                          >
                            <i className="fas fa-edit"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-220404926">
                              Remove Post..
                            </Tooltip>
                          }
                          placement="left"
                        >
                          <Button
                            className="btn-link btn-icon"
                            type="button"
                            variant="danger"
                          >
                            <i className="fas fa-times"></i>
                          </Button>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="img-container">
                          <img
                            alt="..."
                            src={require("assets/img/blog-3.jpg").default}
                          ></img>
                        </div>
                      </td>
                      <td className="td-name">
                        First Dribbble Meetup in Romania
                      </td>
                      <td>
                        A groundbreaking Retina display. All-flash architecture.
                        Fourth-generation Intel processors.
                      </td>
                      <td className="td-number">23/06/2016</td>
                      <td className="td-number">1,799</td>
                      <td className="td-actions">
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-793736265">
                              View Post..
                            </Tooltip>
                          }
                          placement="left"
                        >
                          <Button
                            className="btn-link btn-icon"
                            type="button"
                            variant="info"
                          >
                            <i className="far fa-image"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-10365564">Edit Post..</Tooltip>
                          }
                          placement="left"
                        >
                          <Button
                            className="btn-link btn-icon"
                            type="button"
                            variant="success"
                          >
                            <i className="fas fa-edit"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-882041852">
                              Remove Post..
                            </Tooltip>
                          }
                          placement="left"
                        >
                          <Button
                            className="btn-link btn-icon"
                            type="button"
                            variant="danger"
                          >
                            <i className="fas fa-times"></i>
                          </Button>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="img-container">
                          <img
                            alt="..."
                            src={require("assets/img/blog-4.jpg").default}
                          ></img>
                        </div>
                      </td>
                      <td className="td-name">
                        How we created our startup with 0$
                      </td>
                      <td>
                        A desk is a generally wooded piece of furniture and a
                        type of useful table often used in a school or office
                        setting for various academic or professional activities
                        ...
                      </td>
                      <td className="td-number">30/06/2016</td>
                      <td className="td-number">23,030</td>
                      <td className="td-actions">
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-662605277">
                              View Post..
                            </Tooltip>
                          }
                          placement="left"
                        >
                          <Button
                            className="btn-link btn-icon"
                            type="button"
                            variant="info"
                          >
                            <i className="far fa-image"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-967132803">
                              Edit Post..
                            </Tooltip>
                          }
                          placement="left"
                        >
                          <Button
                            className="btn-link btn-icon"
                            type="button"
                            variant="success"
                          >
                            <i className="fas fa-edit"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-972344635">
                              Remove Post..
                            </Tooltip>
                          }
                          placement="left"
                        >
                          <Button
                            className="btn-link btn-icon"
                            type="button"
                            variant="danger"
                          >
                            <i className="fas fa-times"></i>
                          </Button>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="img-container">
                          <img
                            alt="..."
                            src={require("assets/img/blog-1.jpg").default}
                          ></img>
                        </div>
                      </td>
                      <td className="td-name">
                        To use or not to use Bootstrap
                      </td>
                      <td>
                        The Office Chair adapts naturally to virtually every
                        body and is a permanent fixture.
                      </td>
                      <td className="td-number">10/05/2016</td>
                      <td className="td-number">13,763</td>
                      <td className="td-actions">
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-960683717">
                              View Post..
                            </Tooltip>
                          }
                          placement="left"
                        >
                          <Button
                            className="btn-link btn-icon"
                            type="button"
                            variant="info"
                          >
                            <i className="far fa-image"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-436082023">
                              Edit Post..
                            </Tooltip>
                          }
                          placement="left"
                        >
                          <Button
                            className="btn-link btn-icon"
                            type="button"
                            variant="success"
                          >
                            <i className="fas fa-edit"></i>
                          </Button>
                        </OverlayTrigger>
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-334669391">
                              Remove Post..
                            </Tooltip>
                          }
                          placement="left"
                        >
                          <Button
                            className="btn-link btn-icon"
                            type="button"
                            variant="danger"
                          >
                            <i className="fas fa-times"></i>
                          </Button>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ExtendedTables;
