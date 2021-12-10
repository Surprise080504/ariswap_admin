import React from "react";

import './ResetPassword.css'

// react-bootstrap components
import { Button, Card, Form, Container, Col } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { beforeAdmin, resetPassword } from '../Admin/Admin.action';

import validator from 'validator';

function ResetPassword(props) {
  const [cardClasses, setCardClasses] = React.useState("card-hidden");
  const [password, setPassword] = React.useState({
    new: '',
    confirm: '',
    _id: window.location.pathname.split('/')[3],
    code: window.location.pathname.split('/')[4]
  })
  const [msg, setMsg] = React.useState({
    new: '',
    confirm: ''
  })

  const Submit = (e) => {
    e.preventDefault()
    if (!validator.isEmpty(password.new) && !validator.isEmpty(password.confirm)) {
      if (password.new === password.confirm) {
        if (validator.isStrongPassword(password.new)) {
          setMsg({ new: '', confirm: '' })
          let formData = new FormData()
          for (const key in password)
            formData.append(key, password[key])
          props.resetPassword(formData)
        }
        else {
          setMsg({ new: 'Password must contain Upper Case, Lower Case, a Special Character, a Number and must be at least 8 characters in length', confirm: '' })
        }
      }
      else {
        setMsg({ new: 'New password & confirm password are not same.', confirm: '' })
      }
    }
    else {
      let passNew = '', passConf = ''
      if (validator.isEmpty(password.new)) {
        passNew = 'Please fill new password field.'
      }
      if (validator.isEmpty(password.confirm)) {
        passConf = "Please fill confirm password field."
      }
      setMsg({ new: passNew, confirm: passConf })
    }
  }


  React.useEffect(() => {
    setTimeout(function () {
      setCardClasses("");
    }, 500);
  });

  React.useEffect(() => {
    if (props.admin.resetPasswordAuth) {
      setPassword({...password, new: '', confirm: ''})
      props.beforeAdmin()
    }
  }, [props.admin.resetPasswordAuth])


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
                    <h3 className="header text-center">Reset Password</h3>
                  </Card.Header>
                  <Card.Body>
                    <Card.Body>
                      <Form.Group>
                        <label>New Password</label>
                        <Form.Control
                          placeholder="Password"
                          value={password.new}
                          onChange={(e) => setPassword({ ...password, new: e.target.value })}
                          type="password"
                        ></Form.Control>
                        <span className={msg.new ? `` : `d-none`}>
                          <label className="pl-1 text-danger">{msg.new}</label>
                        </span>
                      </Form.Group>
                      <Form.Group>
                        <label>Confirm Password</label>
                        <Form.Control
                          placeholder="Password"
                          type="password"
                          value={password.confirm}
                          onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
                        ></Form.Control>
                        <span className={msg.confirm ? `` : `d-none`}>
                          <label className="pl-1 text-danger">{msg.confirm}</label>
                        </span>
                      </Form.Group>
                      <NavLink to="/" className="btn-no-bg float-right" type="submit" variant="warning">
                        Login Page
                      </NavLink>

                    </Card.Body>
                  </Card.Body>
                  <Card.Footer className="ml-auto mr-auto">
                    <Button className="btn-wd" type="submit" variant="warning" onClick={Submit}>
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

export default connect(mapStateToProps, { beforeAdmin, resetPassword })(ResetPassword);
