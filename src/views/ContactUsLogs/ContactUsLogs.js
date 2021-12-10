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


const ContactUsLogs = () => {

    const [tableData, setTableData] = useState([])
    
    useEffect(() => {
        window.scroll(0, 0)
        let jsonRes = [
            {
                name: 'sdfgsd',
                email: 'saeed@arhamsoft.com',
                phone: '4334534',
                subject: 'sdfg',
                message: 'sdfgsdfgsdfgsd',
                isReplied: 'Already replied',
                date: 'Apr 07,2021'
            },
            {
                name: 'sdfgsd',
                email: 'saeed@arhamsoft.com',
                phone: '4334534',
                subject: 'sdfg',
                message: 'sdfgsdfgsdfgsd',
                isReplied: 'Already replied',
                date: 'Apr 07,2021'
            },
            {
                name: 'sdfgsd',
                email: 'saeed@arhamsoft.com',
                phone: '4334534',
                subject: 'sdfg',
                message: 'sdfgsdfgsdfgsd',
                isReplied: 'Already replied',
                date: 'Apr 07,2021'
            },
            {
                name: 'sdfgsd',
                email: 'saeed@arhamsoft.com',
                phone: '4334534',
                subject: 'sdfg',
                message: 'sdfgsdfgsdfgsd',
                isReplied: 'Already replied',
                date: 'Apr 07,2021'
            },
            {
                name: 'sdfgsd',
                email: 'saeed@arhamsoft.com',
                phone: '4334534',
                subject: 'sdfg',
                message: 'sdfgsdfgsdfgsd',
                isReplied: 'Already replied',
                date: 'Apr 07,2021'
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
                                <Card.Title className="mb-3">Contact Us Logs</Card.Title>
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
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Subject</th>
                                            <th>Message</th>
                                            <th>Is Replied</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tableData ? tableData.map((item, index) => {
                                                
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.name}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.phone}</td>
                                                        <td>{item.subject}</td>
                                                        <td>{item.message}</td>
                                                        <td>{item.isReplied}</td>
                                                        <td>{item.date}</td>
                                                        <td className="td-actions">
                                                            <OverlayTrigger
                                                                href="#pablo"
                                                                overlay={
                                                                    <Tooltip id="tooltip-897993903">
                                                                        View
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Button
                                                                    className="btn-link btn-xs"
                                                                    // onClick={(e) => editCatClick(e)}
                                                                    variant="info"
                                                                >
                                                                    <i className="fas fa-image" index={index}></i>
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
               
               

            </Container>
        </>
    )
}

export default ContactUsLogs
