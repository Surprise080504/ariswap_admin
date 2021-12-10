import React from "react";
// react component used to create charts
import ChartistGraph from "react-chartist";
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

function Charts() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">24 Hours Performance</Card.Title>
                <p className="card-category">Line Chart</p>
              </Card.Header>
              <Card.Body>
                <ChartistGraph
                  type="Line"
                  data={{
                    labels: [
                      "6pm",
                      "9pm",
                      "11pm",
                      "2am",
                      "4am",
                      "8am",
                      "2pm",
                      "5pm",
                      "8pm",
                      "11pm",
                      "4am",
                    ],
                    series: [[1, 6, 8, 7, 4, 7, 8, 12, 16, 17, 14]],
                  }}
                  options={{
                    showPoint: false,
                    lineSmooth: true,
                    height: "260px",
                    axisX: {
                      showGrid: false,
                      showLabel: true,
                    },
                    axisY: {
                      offset: 40,
                    },
                    low: 0,
                    high: 16,
                    chartPadding: {
                      right: -18,
                    },
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">NASDAQ: AAPL</Card.Title>
                <p className="card-category">Line Chart with Points</p>
              </Card.Header>
              <Card.Body>
                <ChartistGraph
                  type="Line"
                  data={{
                    labels: [
                      "'07",
                      "'08",
                      "'09",
                      "'10",
                      "'11",
                      "'12",
                      "'13",
                      "'14",
                      "'15",
                    ],
                    series: [
                      [
                        22.2,
                        34.9,
                        42.28,
                        51.93,
                        62.21,
                        80.23,
                        82.12,
                        102.5,
                        107.23,
                      ],
                    ],
                  }}
                  options={{
                    lineSmooth: false,
                    height: "260px",
                    axisY: {
                      offset: 40,
                      labelInterpolationFnc: function (value) {
                        return "$" + value;
                      },
                    },
                    low: 10,
                    high: 110,
                    classNames: {
                      point: "ct-point ct-green",
                      line: "ct-line ct-green",
                    },
                    chartPadding: {
                      right: -25,
                    },
                  }}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">User Behavior</Card.Title>
                <p className="card-category">Multiple Lines Charts</p>
              </Card.Header>
              <Card.Body>
                <ChartistGraph
                  type="Line"
                  data={{
                    labels: [
                      "'06",
                      "'07",
                      "'08",
                      "'09",
                      "'10",
                      "'11",
                      "'12",
                      "'13",
                      "'14",
                      "'15",
                    ],
                    series: [
                      [287, 385, 490, 554, 586, 698, 752, 788, 846, 944],
                      [67, 152, 143, 287, 335, 435, 539, 542, 544, 647],
                      [23, 113, 67, 190, 239, 307, 308, 410, 410, 509],
                    ],
                  }}
                  options={{
                    low: 0,
                    high: 1000,
                    showArea: false,
                    height: "245px",
                    axisX: {
                      showGrid: true,
                    },
                    lineSmooth: true,
                    showLine: true,
                    showPoint: true,
                    chartPadding: {
                      right: -25,
                    },
                  }}
                  responsiveOptions={[
                    [
                      "screen and (max-width: 640px)",
                      {
                        axisX: {
                          labelInterpolationFnc: function (value) {
                            return value[0];
                          },
                        },
                      },
                    ],
                  ]}
                />
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Open <i className="fas fa-circle text-danger"></i>
                  Click <i className="fas fa-circle text-warning"></i>
                  Click Second Time
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Public Preferences</Card.Title>
                <p className="card-category">Pie Chart</p>
              </Card.Header>
              <Card.Body>
                <ChartistGraph
                  type="Pie"
                  data={{
                    labels: ["62%", "32%", "6%"],
                    series: [62, 32, 6],
                  }}
                />
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Open <i className="fas fa-circle text-danger"></i>
                  Bounce <i className="fas fa-circle text-warning"></i>
                  Unsubscribe
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o"></i>
                  Campaign sent 2 days ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Views</Card.Title>
                <p className="card-category">Bar Chart</p>
              </Card.Header>
              <Card.Body>
                <ChartistGraph
                  type="Bar"
                  data={{
                    labels: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "Mai",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ],
                    series: [
                      [
                        542,
                        443,
                        320,
                        780,
                        553,
                        453,
                        326,
                        434,
                        568,
                        610,
                        756,
                        895,
                      ],
                    ],
                  }}
                  options={{
                    seriesBarDistance: 10,
                    classNames: {
                      bar: "ct-bar ct-azure",
                    },
                    axisX: {
                      showGrid: false,
                    },
                  }}
                  responsiveOptions={[
                    [
                      "screen and (max-width: 640px)",
                      {
                        seriesBarDistance: 5,
                        axisX: {
                          labelInterpolationFnc: function (value) {
                            return value[0];
                          },
                        },
                      },
                    ],
                  ]}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Activity</Card.Title>
                <p className="card-category">Multiple Bars Chart</p>
              </Card.Header>
              <Card.Body>
                <ChartistGraph
                  type="Bar"
                  data={{
                    labels: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "Mai",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ],
                    series: [
                      [
                        542,
                        443,
                        320,
                        780,
                        553,
                        453,
                        326,
                        434,
                        568,
                        610,
                        756,
                        895,
                      ],
                      [
                        412,
                        243,
                        280,
                        580,
                        453,
                        353,
                        300,
                        364,
                        368,
                        410,
                        636,
                        695,
                      ],
                    ],
                  }}
                  options={{
                    seriesBarDistance: 10,
                    axisX: {
                      showGrid: false,
                    },
                    height: "245px",
                  }}
                  responsiveOptions={[
                    [
                      "screen and (max-width: 640px)",
                      {
                        seriesBarDistance: 5,
                        axisX: {
                          labelInterpolationFnc: function (value) {
                            return value[0];
                          },
                        },
                      },
                    ],
                  ]}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Charts;
