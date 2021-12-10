import React from "react";

import './ForgotPassword.css'

// react-bootstrap components
import { Button, Card, Form, Container, Col } from "react-bootstrap";
import validator from 'validator';

import { forgotPassword, beforeAdmin } from '../Admin/Admin.action'
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import { Alert } from "react-bootstrap";


function ForgotPassword(props) {
  const [cardClasses, setCardClasses] = React.useState("card-hidden");
  const [email, setEmail] = React.useState('')
  const [emailCheck, setEmailCheck] = React.useState(false)
  const [msg, setMsg] = React.useState('')

  const resetPassword = (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      setEmailCheck(false)
      props.forgotPassword({ email })
    }
    else {
      setEmailCheck(true)
    }
  }

  React.useEffect(() => {
    setTimeout(function () {
      setCardClasses("");
    }, 500);
  });

  React.useEffect(() => {
    if (props.admin.forgotPasswordAuth) {
      setEmail('')
      setMsg(props.admin.forgotMsg)
      props.beforeAdmin()
    }
  }, [props.admin.forgotPasswordAuth])

  const getAlert = () => {
    if (msg) {
      return (
        <Alert variant="info">
          <span>{msg}</span>
        </Alert>
      )
    }
  }

  return (
    <>
      <div
        className="full-page section-image"
        data-color="black"
        data-image={require("assets/img/full-screen-image-2.jpg").default}
      >
        <div className="content d-flex align-items-center p-0">
          <Container>
            <Col className="mx-auto" lg="4" md="8">
              <Form action="" className="form" method="">
                <Card className={"card-login " + cardClasses}>
                  <Card.Header>
                    <h3 className="header text-center">Forgot Password</h3>
                  </Card.Header>
                  <Card.Body>
                    {getAlert()}
                    <Card.Body>
                      <Form.Group>
                        <label>Email address</label>
                        <Form.Control
                          placeholder="Enter email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <span className={emailCheck ? `` : `d-none`}>
                        <label className="pl-1 text-danger">Email Address Required</label>
                      </span>
                      <div className="d-flex justify-content-between align-items-center">
                        <Form.Check className="pl-0">
                        </Form.Check>
                        <NavLink to="../" className="btn-no-bg" type="submit" variant="warning">
                          Login Page
                        </NavLink>
                      </div>
                    </Card.Body>
                  </Card.Body>
                  <Card.Footer className="ml-auto mr-auto">
                    <Button onClick={resetPassword} className="btn-wd" type="submit" variant="warning">
                      Submit
                    </Button>
                  </Card.Footer>
                </Card>
              </Form>
            </Col>
          </Container>
        </div>
        <div
          className="full-page-background"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/full-screen-image-2.jpg").default +
              ")",
          }}
        ></div>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  admin: state.admin,
  error: state.error
});

export default connect(mapStateToProps, { forgotPassword, beforeAdmin })(ForgotPassword);
