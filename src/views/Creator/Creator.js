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


const ManageArtists = () => {

    const [tableData, setTableData] = useState([])
        
    useEffect(() => {
        window.scroll(0, 0)
        let jsonRes = [
            {
                userName: 'imhassan12',
                email: 'hassan.masood@arhamsoft.com',
                totalProducts: 9,
                status: false
            },
            {
                userName: 'hassan228',
                email: 'hassan.sultan228@gmail.com',
                totalProducts: 5,
                status: true
            },
            {
                userName: 'imhassan12',
                email: 'hassan.masood@arhamsoft.com',
                totalProducts: 9,
                status: false
            },
            {
                userName: 'Angelina',
                email: 'amat.samad@arhamsoft.com',
                totalProducts: 10,
                status: true
            },
            {
                userName: 'ahmedtariqchughtal',
                email: 'amdtrq@gmail.com',
                totalProducts: 0,
                status: true
            },
            {
                userName: 'Angelina',
                email: 'amat.samad@arhamsoft.com',
                totalProducts: 10,
                status: false
            },
            {
                userName: 'hassan228',
                email: 'hassan.sultan228@gmail.com',
                totalProducts: 5,
                status: true
            },
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
                                <Card.Title as="h4">Creators</Card.Title>
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
                                            <th>Artist Name</th>
                                            <th>Email</th>
                                            <th>Total Products</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tableData ? tableData.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.userName}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.totalProducts}</td>
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
               
           

            </Container>
        </>
    )
}

export default ManageArtists
