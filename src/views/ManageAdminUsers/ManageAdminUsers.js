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


const ManageAdminUsers = () => {

    const [tableData, setTableData] = useState([])
    const [adminModal, setAdminModal] = useState(false);
    
    
   

    useEffect(() => {
        window.scroll(0, 0)
        let jsonRes = [
            {
                role: "Super Admin",
                name: "Nexus Admin",
                email: "admin@arhamsoft.com",
                status: true
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
                                <Card.Title as="h4">Manage Admin Users</Card.Title>
                                <Button
                                    variant="info"
                                    className="float-sm-right mr-1"
                                    onClick={() => setAdminModal(!adminModal)}>
                                    Add Admin User
                                </Button>
                            </Card.Header>
                            <hr />
                            <Card.Body className="table-responsive p-0">
                                {/* <Button
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
                                </Button> */}
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
                                            <th>Role</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tableData ? tableData.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.role}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.email}</td>
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
                onHide={() => setAdminModal(!adminModal)}
                show={adminModal}
                >
                <Modal.Header className="justify-content-center">
                    <div className="modal-profile">
                    <i className="nc-icon nc-simple-add"></i>
                    </div>
                </Modal.Header>
                <Modal.Body>
                <Form>

                  <Form.Group>
                    <label>First Name</label>
                    <Form.Control
                      placeholder="First Name"
                      type="text"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <label>Last Name</label>
                    <Form.Control
                      placeholder="Last Name"
                      type="text"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <label>Email</label>
                    <Form.Control
                      placeholder="Email"
                      type="email"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <label>Phone</label>
                    <Form.Control
                      placeholder="Phone"
                      type="text"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <label>Address</label>
                    <Form.Control
                      placeholder="Address"
                      type="text"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <label>Zip</label>
                    <Form.Control
                      placeholder="Zip"
                      type="number"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <label>Country</label>
                    <select className="form-control form-select" aria-label="Default select example">
                        <option>Select Country</option>
                        {
                        require ('countries-cities').getCountries().map((name, index) =>{
                            return(
                                <option value={name} key={index}>{name}</option>
                            )
                        })
                        }
                    </select>
                  </Form.Group>

                  <Form.Group>
                    <label>City</label>
                    <Form.Control
                      placeholder="City"
                      type="text"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <label>Password</label>
                    <Form.Control
                      placeholder="Password"
                      type="password"
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <label>Confirm Password</label>
                    <Form.Control
                      placeholder="Confirm Password"
                      type="password"
                    ></Form.Control>
                  </Form.Group>
                  
                  <Form.Group>
                    <label>Role</label>
                    <Form.Check>
                            <Form.Check.Label>
                                <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                                ></Form.Check.Input>
                                <span className="form-check-sign"></span>
                                Super Admin
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
                    
                    
                  <Form.Group>
                    <label>Profile Image</label>
                    <Form.Control type="file" accept="image/png, image/jpeg" />
                  </Form.Group>


                  
                  
                   
                </Form>
                    

                </Modal.Body>
                <div className="modal-footer">
                    <Button
                    className="btn btn-close"
                    onClick={() => setAdminModal(!adminModal)}
                    variant=""
                    >
                    Close
                    </Button>
                    <Button
                    className="btn btn-done"
                    onClick={() => {
                        
                    }}
                    variant=""
                    >
                    Done
                    </Button>
                </div>
                </Modal>



               
            

            </Container>
        </>
    )
}

export default ManageAdminUsers
