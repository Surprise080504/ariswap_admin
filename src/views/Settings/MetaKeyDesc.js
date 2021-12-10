import {useState, useEffect} from "react";

// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const isRequired = (value) => value !== null && value !== "" && value;

const MetaKeyDesc = () =>{

  useEffect(()=>{
    window.scroll(0, 0)
  }, [])

  const [keyword, setKeyword] = useState("");
  const [keywordState, setKeywordState] = useState(true);

  const [desc, setDesc] = useState("");
  const [descState, setDescState] = useState(true);

  const [time, setTime] = useState("");
  const [timeState, setTimeState] = useState(true);

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
                  <Card.Title as="h4">Meta Keywords & Description</Card.Title>
                </Card.Header>
                <Card.Body>            
                    <Row>
                        <Form.Label column sm="2">
                        Site Keywords <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm="9">
                        <Form.Group
                            className={
                            keywordState ? "has-success" : "has-error"
                            }
                        >
                            <Form.Control
                            as="textarea" rows={5} style={{resize: "none"}}
                            value={keyword}
                            onChange={(e) => {
                                setKeyword(e.target.value);
                                if (isRequired(e.target.value)) {
                                  setKeywordState(true);
                                } else {
                                  setKeywordState(false);
                                }
                            }}
                            ></Form.Control>
                            {keywordState ? null : (
                            <label className="error">
                                This field is required.
                            </label>
                            )}
                        </Form.Group>
                        </Col>
                    </Row>


                    <Row>
                        <Form.Label column sm="2">
                        Site Description <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm="9">
                        <Form.Group
                            className={
                              descState ? "has-success" : "has-error"
                            }
                        >
                            <Form.Control
                            as="textarea" rows={5} style={{resize: "none"}}
                            value={desc}
                            onChange={(e) => {
                                setDesc(e.target.value);
                                if (isRequired(e.target.value)) {
                                    setDescState(true);
                                } else {
                                  setDescState(false);
                                }
                            }}
                            ></Form.Control>
                            {descState ? null : (
                            <label className="error">
                                This field is required.
                            </label>
                            )}
                        </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Form.Label column sm="2">
                        Launch Time <span className="text-danger">*</span>
                        </Form.Label>
                        <Col sm="9">
                        <Form.Group
                            className={timeState ? "has-success" : "has-error"}
                        >
                            <Form.Control
                            name="text"
                            type="time"
                            value={time}
                            onChange={(e) => {
                                setTime(e.target.value);
                                if (isRequired(e.target.value)) {
                                    setTimeState(true);
                                } else {
                                  setTimeState(false);
                                }
                            }}
                            ></Form.Control>
                            {timeState ? null : (
                            <label className="error">
                                This field is required.
                            </label>
                            )}
                        </Form.Group>
                        </Col>
                    </Row>
                    
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button
                    variant="info"
                    onClick={() => {


                    if(
                        keywordState && descState && timeState 
                        && isRequired(keyword) && isRequired(desc) 
                        && isRequired(time)
                    ){
                        let payload = {
                            keyword,
                            desc,
                            time
                        }
                        console.log(payload)
                    }

                      if (!keywordState || !isRequired(keyword)) {
                        setKeywordState(false);
                      } else {
                        setKeywordState(true);
                      }

                      if (!descState || !isRequired(desc)) {
                        setDescState(false);
                      } else {
                        setDescState(true);
                      }

                      if (!timeState || !isRequired(time)) {
                        setTimeState(false);
                      } else {
                        setTimeState(true);
                      }
                                            
                    }}
                  >
                    Save Settings
                  </Button>
                </Card.Footer>
              </Card>
            </Form>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default MetaKeyDesc;
