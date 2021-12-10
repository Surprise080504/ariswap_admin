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
  TabContent,
  TabPane,
  Container,
  Collapse,
  Row,
  Col,
  Tab,
} from "react-bootstrap";

function Panels() {
  const [
    multipleExpandablePanels,
    setMultipleExpandablePanels,
  ] = React.useState([]);
  const [collapsibleAccordion, setCollapsibleAccordion] = React.useState(-1);
  const toggleMultipleExpandablePanels = (event, value) => {
    if (multipleExpandablePanels.includes(value)) {
      setMultipleExpandablePanels(
        multipleExpandablePanels.filter((prop) => prop !== value)
      );
    } else {
      setMultipleExpandablePanels([...multipleExpandablePanels, value]);
    }
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Multiple Expandable Panels</Card.Title>
                <p className="card-category">Bootstrap default style</p>
              </Card.Header>
              <Card.Body>
                <div className="accordions" id="accordion">
                  <Card>
                    <Card.Header>
                      <Card.Title as="h4">
                        <a
                          data-toggle="collapse"
                          aria-expanded={multipleExpandablePanels.includes(1)}
                          href="#pablo"
                          onClick={(e) => toggleMultipleExpandablePanels(e, 1)}
                        >
                          Collapse item 1 <b className="caret"></b>
                        </a>
                      </Card.Title>
                    </Card.Header>
                    <Collapse
                      className="card-collapse"
                      id="collapseOne"
                      in={multipleExpandablePanels.includes(1)}
                    >
                      <Card.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </Card.Body>
                    </Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Card.Title as="h4">
                        <a
                          data-toggle="collapse"
                          aria-expanded={multipleExpandablePanels.includes(2)}
                          href="#pablo"
                          onClick={(e) => toggleMultipleExpandablePanels(e, 2)}
                        >
                          Collapse item 2 <b className="caret"></b>
                        </a>
                      </Card.Title>
                    </Card.Header>
                    <Collapse
                      className="card-collapse"
                      id="collapseTwo"
                      in={multipleExpandablePanels.includes(2)}
                    >
                      <Card.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </Card.Body>
                    </Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Card.Title as="h4">
                        <a
                          data-toggle="collapse"
                          aria-expanded={multipleExpandablePanels.includes(3)}
                          href="#pablo"
                          onClick={(e) => toggleMultipleExpandablePanels(e, 3)}
                        >
                          Collapse item 3 <b className="caret"></b>
                        </a>
                      </Card.Title>
                    </Card.Header>
                    <Collapse
                      className="card-collapse"
                      id="collapseThree"
                      in={multipleExpandablePanels.includes(3)}
                    >
                      <Card.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </Card.Body>
                    </Collapse>
                  </Card>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Collapsible Accordion</Card.Title>
                <p className="card-category">With full width</p>
              </Card.Header>
              <Card.Body className="content-full-width">
                <div className="accordions" id="accordion">
                  <Card>
                    <Card.Header>
                      <Card.Title as="h4">
                        <a
                          aria-expanded={collapsibleAccordion === 1}
                          data-toggle="collapse"
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            collapsibleAccordion === 1
                              ? setCollapsibleAccordion(-1)
                              : setCollapsibleAccordion(1);
                          }}
                        >
                          Accodrion item 1 <b className="caret"></b>
                        </a>
                      </Card.Title>
                    </Card.Header>
                    <Collapse
                      className="card-collapse"
                      id="collapseOneHover"
                      in={collapsibleAccordion === 1}
                    >
                      <Card.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </Card.Body>
                    </Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Card.Title as="h4">
                        <a
                          aria-expanded={collapsibleAccordion === 2}
                          data-toggle="collapse"
                          href="#pablo"
                          onClick={(e) => {
                            e.preventDefault();
                            collapsibleAccordion === 2
                              ? setCollapsibleAccordion(-1)
                              : setCollapsibleAccordion(2);
                          }}
                        >
                          Accodrion item 2 <b className="caret"></b>
                        </a>
                      </Card.Title>
                    </Card.Header>
                    <Collapse
                      className="card-collapse"
                      id="collapseTwoHover"
                      in={collapsibleAccordion === 2}
                    >
                      <Card.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </Card.Body>
                    </Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Card.Title as="h4">
                        <a
                          data-toggle="collapse"
                          href="#pablo"
                          aria-expanded={collapsibleAccordion === 3}
                          onClick={(e) => {
                            e.preventDefault();
                            collapsibleAccordion === 3
                              ? setCollapsibleAccordion(-1)
                              : setCollapsibleAccordion(3);
                          }}
                        >
                          Accodrion item 3 <b className="caret"></b>
                        </a>
                      </Card.Title>
                    </Card.Header>
                    <Collapse
                      className="card-collapse"
                      id="collapseThreeHover"
                      in={collapsibleAccordion === 3}
                    >
                      <Card.Body>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </Card.Body>
                    </Collapse>
                  </Card>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Tabs</Card.Title>
                <p className="card-category">Plain text tabs</p>
              </Card.Header>
              <Card.Body>
                <Tab.Container
                  id="plain-tabs-example"
                  defaultActiveKey="info-plain"
                >
                  <Nav role="tablist" variant="tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="info-plain">Info</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="account-plain">Account</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="style-plain">Style</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="settings-plain">Settings</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="info-plain">
                      Agency is a group of professional individuals looking to
                      create amazing pieces of clothing. We have studied at the
                      best schools of design, we have tailored the suits for the
                      most stylish men in the industry, we are what you need!
                    </Tab.Pane>
                    <Tab.Pane eventKey="account-plain">
                      We are Houses Inc., a group of architects and interior
                      designers based in Chicago and operating for clients
                      worldwide. We’ve been designing stunningly beautiful
                      houses and making clients happy for years.
                    </Tab.Pane>
                    <Tab.Pane eventKey="style-plain">
                      Explore a wide variety of styles, personalise your
                      finishes, and let us design the perfect home for you. It
                      {"'"}s what we do best and you can see proof in the
                      products and reviews below.
                    </Tab.Pane>
                    <Tab.Pane eventKey="settings-plain">
                      Explore a wide Houses Inc., a group of architects and
                      interior designers based in Chicago and operating for
                      clients worldwide. We’ve been designing stunningly
                      beautiful houses and making clients happy for years.
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Tabs &amp; Icons</Card.Title>
                <p className="card-category">Tabs with icons and full width</p>
              </Card.Header>
              <Card.Body className="content-full-width">
                <Tab.Container
                  id="icons-tabs-example"
                  defaultActiveKey="info-icons"
                >
                  <Nav role="tablist" variant="tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="info-icons">
                        <i className="fas fa-info-circle"></i> Info
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="account-icons">
                        <i className="fas fa-user"></i> Account
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="style-icons">
                        <i className="fas fa-cube"></i> Style
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="settings-icons">
                        <i className="fas fa-cog"></i> Settings
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="info-icons">
                      Agency is a group of professional individuals looking to
                      create amazing pieces of clothing. We have studied at the
                      best schools of design, we have tailored the suits for the
                      most stylish men in the industry, we are what you need!
                    </Tab.Pane>
                    <Tab.Pane eventKey="account-icons">
                      We are Houses Inc., a group of architects and interior
                      designers based in Chicago and operating for clients
                      worldwide. We’ve been designing stunningly beautiful
                      houses and making clients happy for years.
                    </Tab.Pane>
                    <Tab.Pane eventKey="style-icons">
                      Explore a wide variety of styles, personalise your
                      finishes, and let us design the perfect home for you. It
                      {"'"}s what we do best and you can see proof in the
                      products and reviews below.
                    </Tab.Pane>
                    <Tab.Pane eventKey="settings-icons">
                      Explore a wide Houses Inc., a group of architects and
                      interior designers based in Chicago and operating for
                      clients worldwide. We’ve been designing stunningly
                      beautiful houses and making clients happy for years.
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <Card.Title as="h4" className="text-center">
              Page Subcategories
            </Card.Title>
            <br></br>
            <Tab.Container
              id="page-subcategories-tabs-example"
              defaultActiveKey="description-page-subcategories"
            >
              <div className="nav-container">
                <Nav
                  role="tablist"
                  variant="tabs"
                  className="justify-content-center border-0 nav-icons"
                >
                  <Nav.Item>
                    <Nav.Link
                      eventKey="description-page-subcategories"
                      className="border-0 bg-transparent"
                    >
                      <i className="nc-icon nc-notes"></i>
                      <br></br>
                      Description
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="location-page-subcategories"
                      className="border-0 bg-transparent"
                    >
                      <i className="nc-icon nc-pin-3"></i>
                      <br></br>
                      Location
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="legal-info-page-subcategories"
                      className="border-0 bg-transparent"
                    >
                      <i className="nc-icon nc-bank"></i>
                      <br></br>
                      Legal Info
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="help-center-page-subcategories"
                      className="border-0 bg-transparent"
                    >
                      <i className="nc-icon nc-support-17"></i>
                      <br></br>
                      Help Center
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <Tab.Content>
                <Tab.Pane eventKey="description-page-subcategories">
                  <Card>
                    <Card.Header>
                      <Card.Title as="h4">Description about product</Card.Title>
                      <p className="card-category">More information here</p>
                    </Card.Header>
                    <Card.Body>
                      <p>
                        Larger, yet dramatically thinner. More powerful, but
                        remarkably power efficient. With a smooth metal surface
                        that seamlessly meets the new Retina HD display.
                      </p>
                      <p>
                        The first thing you notice when you hold the phone is
                        how great it feels in your hand. There are no distinct
                        edges. No gaps. Just a smooth, seamless bond of metal
                        and glass that feels like one continuous surface.
                      </p>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="location-page-subcategories">
                  <Card>
                    <Card.Header>
                      <Card.Title as="h4">Location of product</Card.Title>
                      <p className="category">Here is some text</p>
                    </Card.Header>
                    <Card.Body>
                      <p>
                        Another Text. The first thing you notice when you hold
                        the phone is how great it feels in your hand. The cover
                        glass curves down around the sides to meet the anodized
                        aluminum enclosure in a remarkable, simplified design.
                      </p>
                      <p>
                        Larger, yet dramatically thinner.It’s one continuous
                        form where hardware and software function in perfect
                        unison, creating a new generation of phone that’s better
                        by any measure.
                      </p>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="legal-info-page-subcategories">
                  <Card>
                    <Card.Header>
                      <Card.Title as="h4">Legal items</Card.Title>
                      <p className="category">More information here</p>
                    </Card.Header>
                    <Card.Body>
                      <p>
                        The first thing you notice when you hold the phone is
                        how great it feels in your hand. The cover glass curves
                        down around the sides to meet the anodized aluminum
                        enclosure in a remarkable, simplified design.
                      </p>
                      <p>
                        Larger, yet dramatically thinner.It’s one continuous
                        form where hardware and software function in perfect
                        unison, creating a new generation of phone that’s better
                        by any measure.
                      </p>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                <Tab.Pane eventKey="help-center-page-subcategories">
                  <Card>
                    <Card.Header>
                      <Card.Title as="h4">Help center</Card.Title>
                      <p className="category">More information here</p>
                    </Card.Header>
                    <Card.Body>
                      <p>
                        From the seamless transition of glass and metal to the
                        streamlined profile, every detail was carefully
                        considered to enhance your experience. So while its
                        display is larger, the phone feels just right.
                      </p>
                      <p>
                        Another Text. The first thing you notice when you hold
                        the phone is how great it feels in your hand. The cover
                        glass curves down around the sides to meet the anodized
                        aluminum enclosure in a remarkable, simplified design.
                      </p>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
          {/* end col-md-8 */}
        </Row>
        {/* end row */}
      </Container>
    </>
  );
}

export default Panels;
