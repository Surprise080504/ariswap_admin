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


const Products = () => {

    const [tableData, setTableData] = useState([])
    
    useEffect(() => {
        window.scroll(0, 0)
        let jsonRes = [
            {
                users: "Misbahkhan",
                stores: "Nexus Store",
                category: "Art",
                title: "Royalty Test NFT",
                price: 2,
                viewCount: 0,
                status: true
            },
            {
                users: "amatassamad",
                stores: "Nexus Store",
                category: "Art",
                title: "Wonder world",
                price: 5,
                viewCount: 1,
                status: false
            },
            {
                users: "amatassamad",
                stores: "Nexus Store",
                category: "Art",
                title: "Wonder world",
                price: 0.5,
                viewCount: 4,
                status: true
            },
            {
                users: "amatassamad",
                stores: "Nexus Store",
                category: "Art",
                title: "Wonder world",
                price: 5,
                viewCount: 1,
                status: false
            },
            {
                users: "amatassamad",
                stores: "Nexus Store",
                category: "Art",
                title: "Wonder world",
                price: 0.5,
                viewCount: 4,
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
                                <Card.Title className="mb-2">NFTs</Card.Title>

                                <div className="row">
                                    <div className="col-md-6">
                                        <select className="form-control form-select mb-3" aria-label="Default select example">
                                            <option>-- Select A User --</option>
                                            <option>User 1</option>
                                            <option>User 2</option>
                                            <option>User 3</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <select className="form-control form-select  mb-3" aria-label="Default select example">
                                            <option>-- Select A Store --</option>
                                            <option>Store 1</option>
                                            <option>Store 2</option>
                                            <option>Store 3</option>
                                        </select>
                                    </div>
                                </div>


                                
                                
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
                                            <th>Users</th>
                                            <th>Stores</th>
                                            <th>Category</th>
                                            <th>Title</th>
                                            <th>Price Usd</th>
                                            <th>View Count</th>
                                            <th>Status</th>
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tableData ? tableData.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.users}</td>
                                                        <td>{item.stores}</td>
                                                        <td>{item.category}</td>
                                                        <td>{item.title}</td>
                                                        <td>${item.price}</td>
                                                        <td>{item.viewCount}</td>
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

export default Products
