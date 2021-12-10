import React from "react";
// react components used to create a SVG / Vector map
import { VectorMap } from "react-jvectormap";
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

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 200,
  RO: 600,
  RU: 300,
  US: 2920,
};

function VectorMapView() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <Card.Header>
                <Card.Title as="h4" className="text-center">
                  World Map <br></br>
                  <small>
                    Looks great on any resolution. Made by our friends from{" "}
                    <a
                      href="https://github.com/kadoshms/react-jvectormap"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      React jVector Map
                    </a>
                    .
                  </small>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <VectorMap
                  map={"world_mill"}
                  backgroundColor="transparent"
                  zoomOnScroll={false}
                  containerStyle={{
                    width: "100%",
                    height: "280px",
                  }}
                  containerClassName="map map-big"
                  regionStyle={{
                    initial: {
                      fill: "#e4e4e4",
                      "fill-opacity": 0.9,
                      stroke: "none",
                      "stroke-width": 0,
                      "stroke-opacity": 0,
                    },
                  }}
                  series={{
                    regions: [
                      {
                        values: mapData,
                        scale: ["#AAAAAA", "#444444"],
                        normalizeFunction: "polynomial",
                      },
                    ],
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default VectorMapView;
