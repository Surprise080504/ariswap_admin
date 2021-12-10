import { useState, useEffect } from 'react'
import SweetAlert from "react-bootstrap-sweetalert";
import ReactPaginate from 'react-paginate';


// react-bootstrap components
import {
    Button,
    Card,
    Form,
    Table,
    Container,
    Row,
    Col,
    OverlayTrigger,
    Tooltip,
    Modal
} from "react-bootstrap";


const CmsPages = () => {

    const [tableData, setTableData] = useState([])
    const [modal, setModal] = useState(false);
    
    
   

    useEffect(() => {
        window.scroll(0, 0)
        let jsonRes = [
            {
                title: "BLITZ MARKETING",
                url: "https://www.google.com",
                order: 0,
                status: true
            },
            {
                title: "Term Of Use",
                url: "https://www.google.com",
                order: 0,
                status: false
            },
            {
                title: "Privacy Policy",
                url: "https://www.google.com",
                order: 0,
                status: true
            },
            {
                title: "Contact Us",
                url: "https://www.google.com",
                order: 0,
                status: true
            },
            {
                title: "About Us",
                url: "https://www.google.com",
                order: 0,
                status: false
            }
        ]
        
        setTableData([...jsonRes]) 
    }, [])


    const onCheckboxToggle = (e) => {
        const index = e.target.id.split('status')[1]
        let temp = tableData
        temp[index].status = !temp[index].status
        setTableData([...temp])     
    }

    
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="strpied-tabled-with-hover">
                            <Card.Header>
                                <Card.Title as="h4">CMS Pages</Card.Title>
                                <Button
                                    variant="info"
                                    className="float-sm-right mr-1"
                                    onClick={() => setModal(!modal)}>
                                    Add CMS Page
                                </Button>
                            </Card.Header>
                            <hr />
                            <Card.Body className="table-responsive p-0">
                                <Button
                                    variant="info"
                                    className="ml-2"
                                    // onClick={() => {fileGeneration("Excel")}}
                                    >
                                    Excel
                                </Button>
                                <Button
                                    variant="info"
                                    className="ml-2"
                                    // onClick={() => {fileGeneration("Pdf")}}
                                    >
                                    Pdf
                                </Button>
                                <Form.Group as={Row} className="mb-3 float-sm-right mr-1 ml-1">
                                    <Form.Label className="mt-3" row>
                                    Search: 
                                    </Form.Label>
                                    <Col md="7" className="mt-1">
                                    <Form.Control type="text" placeholder="Search" />
                                    </Col>
                                    <Col className="mt-1">
                                    <Button
                                        variant="info"
                                        className="float-sm-right mr-1"
                                        onClick={() => {}}>
                                        Submit
                                    </Button>
                                    </Col>
                                </Form.Group>
                                <Table className="table-hover table-striped w-full">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>URL</th>
                                            <th>Order</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tableData ? tableData.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.title}</td>
                                                        <td><a href={item.url} target="_blank">Go To Page</a></td>
                                                        <td>{item.order}</td>
                                                        <td>
                                                            <Form.Check
                                                                type="switch"
                                                                id={`status${index}`}
                                                                className="mb-1"
                                                                checked={item.status}
                                                                onChange={(e) => onCheckboxToggle(e)}
                                                            />
                                                        </td>
                                                        <td className="td-actions">
                                                            <OverlayTrigger
                                                                href="#pablo"
                                                                overlay={
                                                                    <Tooltip id="tooltip-897993903">
                                                                        Edit
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Button
                                                                    className="btn-link btn-xs"
                                                                    // onClick={(e) => editCatClick(e)}
                                                                    variant="success"
                                                                >
                                                                    <i className="fas fa-edit" index={index}></i>
                                                                </Button>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger
                                                                overlay={
                                                                    <Tooltip id="tooltip-481441726">Remove</Tooltip>
                                                                }
                                                            >
                                                                <Button
                                                                    className="btn-link btn-xs"
                                                                    // onClick={(e) => {
                                                                    //     deleteCat(e)}
                                                                    // }
                                                                    variant="danger"
                                                                >
                                                                    <i className="fas fa-times" index={index}></i>
                                                                </Button>
                                                            </OverlayTrigger>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                                : ''
                                        }
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Modal
                className="modal-primary"
                onHide={() => setModal(!modal)}
                show={modal}
                >
                <Modal.Header className="justify-content-center">
                    <div className="modal-profile">
                    <i className="nc-icon nc-simple-add"></i>
                    </div>
                </Modal.Header>
                <Modal.Body>
                <Form>

                  <Form.Group>
                    <label>Title</label>
                    <Form.Control
                      placeholder="Title"
                      type="text"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <label>Description</label>
                    <Form.Control
                      placeholder="Description"
                      as="textarea"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <label>Tracking Code</label>
                    <Form.Control
                      placeholder="Tracking Code"
                      type="text"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <label>Order By</label>
                    <Form.Control
                      placeholder="Order By"
                      type="number"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <label>Meta Title</label>
                    <Form.Control
                      placeholder="Meta Title"
                      type="text"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <label>Meta Keywords</label>
                    <Form.Control
                      placeholder="Meta Keywords"
                      type="text"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <label>Meta Description</label>
                    <Form.Control
                      placeholder="Meta Description"
                      as="textarea"
                    ></Form.Control>
                  </Form.Group>

                  
                  <Form.Group>
                  <label>Header Check</label>
                    <Form.Check>
                            <Form.Check.Label>
                                <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                                ></Form.Check.Input>
                                <span className="form-check-sign"></span>
                                Show In Header
                            </Form.Check.Label>
                    </Form.Check>
                  </Form.Group>

                  <Form.Group>
                  <label>Footer Check</label>
                    <Form.Check>
                            <Form.Check.Label>
                                <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                                ></Form.Check.Input>
                                <span className="form-check-sign"></span>
                                Show In Footer
                            </Form.Check.Label>
                    </Form.Check>
                  </Form.Group>

                  <Form.Group>
                    <label>Status</label>
                            <Form.Check
                            type="switch"
                            className="mb-1 ml-5"  
                            id="status"   
                            />
                  </Form.Group>
                   
                </Form>
                    

                </Modal.Body>
                <div className="modal-footer">
                    <Button
                    className="btn-simple"
                    onClick={() => setModal(!modal)}
                    variant="link"
                    >
                    Close
                    </Button>
                    <Button
                    className="btn-simple"
                    onClick={() => {
                        
                    }}
                    variant="link"
                    >
                    Done
                    </Button>
                </div>
                </Modal>



               
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={1}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    containerClassName={'pagination'}
                    // onPageChange={(e) => pageChangeHandler(e)}
                    activeClassName={'active'}
                />

            </Container>
        </>
    )
}

export default CmsPages
