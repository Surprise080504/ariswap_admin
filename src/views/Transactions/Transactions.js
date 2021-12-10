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


const Transactions = () => {

    const [tableData, setTableData] = useState([])
    
    useEffect(() => {
        window.scroll(0, 0)
        let jsonRes = [
            {
                user: 'amatassamad',
                type: 'Transfer',
                transactionOf: 'Product',
                product: 'Wonder world',
                orderId: 1,
                transactionStatus: 'Completed'
            },
            {
                user: 'amatassamad',
                type: 'Mint',
                transactionOf: 'Order',
                product: 'Bright Night',
                orderId: 5,
                transactionStatus: 'Pending'
            },
            {
                user: 'amatassamad',
                type: 'Transfer',
                transactionOf: 'Product',
                product: 'My Arts',
                orderId: 9,
                transactionStatus: 'Completed'
            },

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
                                <Card.Title className="mb-2">Transactions</Card.Title>
                                <div className="row">
                                    <div className="col-md-4">
                                        <select className="form-control form-select" aria-label="Default select example">
                                            <option>-- Select A User --</option>
                                            <option>User 1</option>
                                            <option>User 2</option>
                                            <option>User 3</option>
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
                                            <th>User</th>
                                            <th>Type</th>
                                            <th>Transaction Of</th>
                                            <th>Ad</th>
                                            <th>Product</th>
                                            <th>Order Id</th>
                                            <th>Transaction Status</th>
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tableData ? tableData.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.user}</td>
                                                        <td>{item.type}</td>
                                                        <td>{item.transactionOf}</td>
                                                        <td></td>
                                                        <td>{item.product}</td>
                                                        <td>{item.orderId}</td>
                                                        <td>{item.transactionStatus}</td>
                                                        
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

export default Transactions
