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


const Orders = () => {

    const [tableData, setTableData] = useState([])
    
    useEffect(() => {
        window.scroll(0, 0)
        let jsonRes = [
            {
                seller: 'amatassamad',
                buyer: 'Misbahkhan',
                productTitle: 'Wonder',
                priceUsd: 3.00,
                total: 3.00,
                createdAt: '14 Sep, 2021',
                orderStatus: 0
            },
            {
                seller: 'amatassamad',
                buyer: 'Misbahkhan',
                productTitle: 'My Arts',
                priceUsd: 1.00,
                total: 1.00,
                createdAt: '13 Sep, 2021',
                orderStatus: 1
            },
            {
                seller: 'amatassamad',
                buyer: 'Misbahkhan',
                productTitle: 'test',
                priceUsd: 0.31,
                total: 0.31,
                createdAt: '13 Sep, 2021',
                orderStatus: 2
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
                                <Card.Title className="mb-2">Orders</Card.Title>
                                <div className="row">
                                    <div className="col-md-4">
                                        <select className="form-control form-select mb-3" aria-label="Default select example">
                                            <option>-- Select A User --</option>
                                            <option>User 1</option>
                                            <option>User 2</option>
                                            <option>User 3</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4"> 
                                        <select className="form-control form-select mb-3" aria-label="Default select example">
                                            <option>-- Select A Store --</option>
                                            <option>Store 1</option>
                                            <option>Store 2</option>
                                            <option>Store 3</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <select className="form-control form-select mb-3" aria-label="Default select example">
                                            <option>-- Select A Product --</option>
                                            <option>Product 1</option>
                                            <option>Product 2</option>
                                            <option>Product 3</option>
                                        </select>
                                    </div>
                                </div>
                                
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
                                            <th>Seller</th>
                                            <th>Buyer</th>
                                            <th>Product Title</th>
                                            <th>Price Usd</th>
                                            <th>Total</th>
                                            <th>Created At</th>
                                            <th>Order Status</th>
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tableData ? tableData.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.seller}</td>
                                                        <td>{item.buyer}</td>
                                                        <td>{item.productTitle}</td>
                                                        <td>${item.priceUsd}</td>
                                                        <td>${item.total}</td>
                                                        <td>{item.createdAt}</td>
                                                        <td>
                                                            {item.orderStatus === 0 ? 'In Progress': ''}
                                                            {item.orderStatus === 1 ? 'Pending' : ''}
                                                            {item.orderStatus === 2 ? 'Delievered' : ''}
                                                        </td>
                                                        
                                                        <td className="td-actions">
                                                            <OverlayTrigger
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

export default Orders
