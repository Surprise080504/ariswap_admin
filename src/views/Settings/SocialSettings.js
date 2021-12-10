import { useState, useEffect } from "react";

import { getSettings, beforeSettings, editSettings } from './settings.action';
import { connect } from 'react-redux';

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import validator from 'validator';

const SocialSettings = (props) => {

  const [links, setLinks] = useState({
    facebook: '',
    twitter: '',
    instagram: '',
    vine: '',
    youtube: ''
  })

  const [msg, setMsg] = useState({
    facebook: '',
    twitter: '',
    instagram: '',
    vine: '',
    youtube: ''
  })

  useEffect(() => {
    window.scroll(0, 0)
    props.getSettings()
  }, [])

  useEffect(() => {
    if (props.settings.settingsAuth) {
      if (props.settings.settings) {
        setLinks(props.settings.settings)
      }
    }
  }, [props.settings.settingsAuth])

  const save = () => {
    if (!validator.isEmpty(links.facebook) && !validator.isEmpty(links.twitter) &&
      !validator.isEmpty(links.instagram) && !validator.isEmpty(links.vine) &&
      !validator.isEmpty(links.youtube)
    ) {
      setMsg({ facebook: '', twitter: '', instagram: '', vine: '', youtube: '' })
      let formData = new FormData()
      for (const key in links)
        formData.append(key, links[key])
      props.editSettings(formData)
    }
    else {
      let facebook = ''
      let twitter = ''
      let instagram = ''
      let vine = ''
      let youtube = ''

      if (validator.isEmpty(links.facebook)) {
        facebook = 'Facebook Link Required'
      }

      if (validator.isEmpty(links.twitter)) {
        twitter = 'Twitter Link Required'
      }

      if (validator.isEmpty(links.instagram)) {
        instagram = 'Instagram Link Required'
      }

      if (validator.isEmpty(links.vine)) {
        vine = 'Vine Link Required'
      }

      if (validator.isEmpty(links.youtube)) {
        youtube = 'YouTube Link Required'
      }
      setMsg({ facebook, twitter, instagram, vine, youtube })
    }
  }


  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Form
              action=""
              className="form-horizontal"
              id="TypeValidation"
              method=""
            >
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Social Settings</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Form.Label column sm="2">
                      Facebook <span className="text-danger">*</span>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Group>
                        <Form.Control
                          type="text"
                          value={links.facebook}
                          onChange={(e) => setLinks({ ...links, facebook: e.target.value })}
                        ></Form.Control>
                        <span className={msg.facebook ? `` : `d-none`}>
                          <label className="pl-1 pt-0 text-danger">{msg.facebook}</label>
                        </span>
                      </Form.Group>
                    </Col>
                  </Row>


                  <Row>
                    <Form.Label column sm="2">
                      Twitter <span className="text-danger">*</span>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Group>
                        <Form.Control
                          type="text"
                          value={links.twitter}
                          onChange={(e) => setLinks({ ...links, twitter: e.target.value })}
                        ></Form.Control>
                        <span className={msg.twitter ? `` : `d-none`}>
                          <label className="pl-1 pt-0 text-danger">{msg.twitter}</label>
                        </span>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Form.Label column sm="2">
                      Instagram <span className="text-danger">*</span>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Group>
                        <Form.Control
                          type="text"
                          value={links.instagram}
                          onChange={(e) => setLinks({ ...links, instagram: e.target.value })}
                        ></Form.Control>
                        <span className={msg.instagram ? `` : `d-none`}>
                          <label className="pl-1 pt-0 text-danger">{msg.instagram}</label>
                        </span>
                      </Form.Group>
                    </Col>
                  </Row>


                  <Row>
                    <Form.Label column sm="2">
                      Vine <span className="text-danger">*</span>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Group>
                        <Form.Control
                          type="text"
                          value={links.vine}
                          onChange={(e) => setLinks({ ...links, vine: e.target.value })}
                        ></Form.Control>
                        <span className={msg.vine ? `` : `d-none`}>
                          <label className="pl-1 pt-0 text-danger">{msg.vine}</label>
                        </span>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Form.Label column sm="2">
                      YouTube <span className="text-danger">*</span>
                    </Form.Label>
                    <Col sm="9">
                      <Form.Group>
                        <Form.Control
                          type="text"
                          value={links.youtube}
                          onChange={(e) => setLinks({ ...links, youtube: e.target.value })}
                        ></Form.Control>
                        <span className={msg.youtube ? `` : `d-none`}>
                          <label className="pl-1 pt-0 text-danger">{msg.youtube}</label>
                        </span>
                      </Form.Group>
                    </Col>
                  </Row>




                </Card.Body>
                <Card.Footer>
                  <Row className="float-right pr-3">
                    <Button
                      variant="info"
                      onClick={save}
                    >
                      Save Settings
                    </Button>
                  </Row>
                </Card.Footer>
              </Card>
            </Form>
          </Col>

        </Row>
      </Container>
    </>
  );
}

const mapStateToProps = state => ({
  settings: state.settings,
  error: state.error
});

export default connect(mapStateToProps, { getSettings, beforeSettings, editSettings })(SocialSettings);
