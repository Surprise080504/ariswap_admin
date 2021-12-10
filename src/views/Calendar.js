import React from "react";
// react components used to create a calendar with events on it
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
// dependency plugin for react-big-calendar
import moment from "moment";
// react component used to create alerts
import SweetAlert from "react-bootstrap-sweetalert";
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

const localizer = momentLocalizer(moment);

const today = new Date();
const y = today.getFullYear();
const m = today.getMonth();
const d = today.getDate();

function Calendar() {
  const [alert, setAlert] = React.useState(null);
  const [events, setEvents] = React.useState([
    {
      title: "All Day Event",
      allDay: true,
      start: new Date(y, m, 1),
      end: new Date(y, m, 1),
      color: "default",
    },
    {
      title: "Meeting",
      start: new Date(y, m, d - 1, 10, 30),
      end: new Date(y, m, d - 1, 11, 30),
      allDay: false,
      color: "green",
    },
    {
      title: "Lunch",
      start: new Date(y, m, d + 7, 12, 0),
      end: new Date(y, m, d + 7, 14, 0),
      allDay: false,
      color: "red",
    },
    {
      title: "Nud-pro Launch",
      start: new Date(y, m, d - 2),
      end: new Date(y, m, d - 2),
      allDay: true,
      color: "azure",
    },
    {
      title: "Birthday Party",
      start: new Date(y, m, d + 1, 19, 0),
      end: new Date(y, m, d + 1, 22, 30),
      allDay: false,
      color: "azure",
    },
    {
      title: "Click for Creative Tim",
      start: new Date(y, m, 21),
      end: new Date(y, m, 22),
      color: "orange",
    },
    {
      title: "Click for Google",
      start: new Date(y, m, 21),
      end: new Date(y, m, 22),
      color: "orange",
    },
  ]);
  const selectedEvent = (event) => {
    window.alert(event.title);
  };
  const addNewEventAlert = (slotInfo) => {
    setAlert(
      <SweetAlert
        input
        showCancel
        style={{ display: "block", marginTop: "-100px" }}
        title="Input something"
        onConfirm={(e) => addNewEvent(e, slotInfo)}
        onCancel={() => hideAlert()}
        confirmBtnBsStyle="info"
        cancelBtnBsStyle="danger"
      />
    );
  };
  const addNewEvent = (e, slotInfo) => {
    var newEvents = events;
    newEvents.push({
      title: e,
      start: slotInfo.start,
      end: slotInfo.end,
    });
    setEvents(newEvents);
    setAlert(null);
  };
  const eventColors = (event, start, end, isSelected) => {
    var backgroundColor = "rbc-event-";
    event.color
      ? (backgroundColor = backgroundColor + event.color)
      : (backgroundColor = backgroundColor + "default");
    return {
      className: backgroundColor,
    };
  };
  const hideAlert = () => {
    setAlert(null);
  };
  return (
    <>
      {alert}
      <Container fluid>
        <div className="header text-center">
          <h3 className="title">React Big Calendar</h3>
          <small className="category">
            Handcrafted by our friends from{" "}
            <a
              href="https://github.com/jquense/react-big-calendar"
              rel="noopener noreferrer"
              target="_blank"
            >
              react-big-calendar
            </a>
            . Please checkout their{" "}
            <a
              href="http://jquense.github.io/react-big-calendar/examples/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              full documentation.
            </a>
          </small>
        </div>
        <br></br>
        <Row>
          <Col className="ml-auto mr-auto" md="10">
            <Card className="card-calendar">
              <Card.Body className="p-0">
                <BigCalendar
                  selectable
                  localizer={localizer}
                  events={events}
                  defaultView="month"
                  scrollToTime={new Date(1970, 1, 1, 6)}
                  defaultDate={new Date()}
                  onSelectEvent={(event) => selectedEvent(event)}
                  onSelectSlot={(slotInfo) => addNewEventAlert(slotInfo)}
                  eventPropGetter={eventColors}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Calendar;
