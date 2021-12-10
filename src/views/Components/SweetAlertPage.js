import React from "react";
// react component used to create charts
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

function SweetAlertPage() {
  const [alert, setAlert] = React.useState(null);
  // to stop the warning of calling setState of unmounted component
  React.useEffect(() => {
    return function cleanup() {
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  }, []);
  const basicAlert = () => {
    setAlert(
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" }}
        title="Here's a message!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnBsStyle="info"
      />
    );
  };
  const titleAndTextAlert = () => {
    setAlert(
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" }}
        title="Here's a message!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnBsStyle="info"
      >
        It's pretty, isn't it?
      </SweetAlert>
    );
  };
  const successAlert = () => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Good job!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnBsStyle="info"
      >
        You clicked the button!
      </SweetAlert>
    );
  };
  const htmlAlert = () => {
    setAlert(
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" }}
        title="HTML example"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnBsStyle="info"
      >
        You can use <b>bold</b> text,{" "}
        <a
          href="https://www.creative-tim.com/?ref=lbdpr-sweetalert-page"
          target="_blank"
        >
          links
        </a>{" "}
        and other HTML tags
      </SweetAlert>
    );
  };
  const warningWithConfirmMessage = () => {
    setAlert(
      <SweetAlert
        warning
        style={{ display: "block", marginTop: "-100px" }}
        title="Are you sure?"
        onConfirm={() => successDelete()}
        onCancel={() => hideAlert()}
        confirmBtnBsStyle="info"
        cancelBtnBsStyle="danger"
        confirmBtnText="Yes, delete it!"
        cancelBtnText="Cancel"
        showCancel
      >
        You will not be able to recover this imaginary file!
      </SweetAlert>
    );
  };
  const warningWithConfirmAndCancelMessage = () => {
    setAlert(
      <SweetAlert
        warning
        style={{ display: "block", marginTop: "-100px" }}
        title="Are you sure?"
        onConfirm={() => successDelete()}
        onCancel={() => cancelDetele()}
        confirmBtnBsStyle="info"
        cancelBtnBsStyle="danger"
        confirmBtnText="Yes, delete it!"
        cancelBtnText="Cancel"
        showCancel
      >
        You will not be able to recover this imaginary file!
      </SweetAlert>
    );
  };
  const autoCloseAlert = () => {
    setAlert(
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" }}
        title="Auto close alert!"
        onConfirm={() => hideAlert()}
        showConfirm={false}
      >
        I will close in 2 seconds.
      </SweetAlert>
    );
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const inputAlert = () => {
    setAlert(
      <SweetAlert
        input
        showCancel
        style={{ display: "block", marginTop: "-100px" }}
        title="Input something"
        onConfirm={(e) => inputConfirmAlert(e)}
        onCancel={() => hideAlert()}
        confirmBtnBsStyle="info"
        cancelBtnBsStyle="danger"
      />
    );
  };
  const inputConfirmAlert = (e) => {
    setAlert(
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" }}
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnBsStyle="info"
        title={
          <p>
            You entered: <b>{e}</b>
          </p>
        }
      />
    );
  };
  const successDelete = () => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "-100px" }}
        title="Deleted!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnBsStyle="info"
      >
        Your imaginary file has been deleted.
      </SweetAlert>
    );
  };
  const cancelDetele = () => {
    setAlert(
      <SweetAlert
        danger
        style={{ display: "block", marginTop: "-100px" }}
        title="Cancelled"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnBsStyle="info"
      >
        Your imaginary file is safe :)
      </SweetAlert>
    );
  };
  const hideAlert = () => {
    setAlert(null);
  };
  return (
    <>
      {alert}
      <Container fluid>
        <Card className="card-plain">
          <h4 className="title">Sweet Alert 2</h4>
          <p className="category">
            <span>
              A beautiful plugin, that replace the classic alert. Handcrafted by
              our friend{" "}
              <a href="https://github.com/djorg83" target="_blank">
                Daniel Jorgensen
              </a>
              . Please check out the{" "}
              <a
                href="https://github.com/djorg83/react-bootstrap-sweetalert"
                target="_blank"
              >
                full documentation
              </a>
              .
            </span>
          </p>
          <br></br>
          <br></br>
          <div className="places-sweet-alerts">
            <Row>
              <Col md="3">
                <Card>
                  <Card.Body className="text-center">
                    <h5>Basic example</h5>
                    <Button
                      className="btn-fill"
                      onClick={basicAlert}
                      variant="default"
                    >
                      Try me!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <Card.Body className="text-center">
                    <h5>A title with a text under</h5>
                    <Button
                      className="btn-fill"
                      onClick={titleAndTextAlert}
                      variant="default"
                    >
                      Try me!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <Card.Body className="text-center">
                    <h5>A success message</h5>
                    <Button
                      className="btn-fill"
                      onClick={successAlert}
                      variant="default"
                    >
                      Try me!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <Card.Body className="text-center">
                    <h5>Custom HTML description</h5>
                    <Button
                      className="btn-fill"
                      onClick={htmlAlert}
                      variant="default"
                    >
                      Try me!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <Card.Body className="text-center">
                    <h5>
                      A warning message, with a function attached to the
                      "Confirm" Button...
                    </h5>
                    <Button
                      className="btn-fill"
                      onClick={warningWithConfirmMessage}
                      variant="default"
                    >
                      Try me!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <Card.Body className="text-center">
                    <h5>
                      ...and by passing a parameter, you can execute something
                      else for "Cancel"
                    </h5>
                    <Button
                      className="btn-fill"
                      onClick={warningWithConfirmAndCancelMessage}
                      variant="default"
                    >
                      Try me!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <Card.Body className="text-center">
                    <h5>A message with auto close timer set to 2 seconds</h5>
                    <Button
                      className="btn-fill"
                      onClick={autoCloseAlert}
                      variant="default"
                    >
                      Try me!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="3">
                <Card>
                  <Card.Body className="text-center">
                    <h5>Modal window with input field</h5>
                    <Button
                      className="btn-fill"
                      onClick={inputAlert}
                      variant="default"
                    >
                      Try me!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Card>
      </Container>
    </>
  );
}

export default SweetAlertPage;
