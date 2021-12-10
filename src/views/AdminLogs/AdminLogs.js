import { useState, useEffect } from 'react'
import SweetAlert from "react-bootstrap-sweetalert";
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

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


const AdminLogs = () => {

    const [tableData, setTableData] = useState([])
    
    useEffect(() => {
        window.scroll(0, 0)
        let jsonRes = [
            {
                user: 'Nexus Admin',
                eventName: 'Admin Login',
                date: 'Sep 17,2021'
            },
            {
                user: 'Nexus Admin',
                eventName: 'Admin Login',
                date: 'Sep 16,2021'
            },
            {
                user: 'Nexus Admin',
                eventName: 'Admin Login',
                date: 'Sep 16,2021'
            },
            {
                user: 'Nexus Admin',
                eventName: 'Admin Login',
                date: ' Sep 15,2021'
            },
            {
                user: 'Nexus Admin',
                eventName: 'Admin Login',
                date: ' Sep 14,2021'
            },
            {
                user: 'Nexus Admin',
                eventName: 'Admin Login',
                date: ' Sep 14,2021'
            },
            {
                user: 'Nexus Admin',
                eventName: 'Admin Login',
                date: ' Sep 14,2021'
            },
            {
                user: 'Nexus Admin',
                eventName: 'Admin Login',
                date: ' Sep 14,2021'
            }
        ]
        
        setTableData([...jsonRes]) 
    }, [])
    
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="strpied-tabled-with-hover">
                            <Card.Header>
                                <Card.Title className="mb-3">Admin Logs</Card.Title>
                            </Card.Header>                                
                            <hr />
                            <Card.Body className="table-responsive p-0">
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
                                            <th>User</th>
                                            <th>Event Name</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tableData ? tableData.map((item, index) => {
                                                
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.user}</td>
                                                        <td>{item.eventName}</td>
                                                        <td>{item.date}</td>                                              
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

export default AdminLogs
