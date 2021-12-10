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


const BiddingHistory = () => {

    const [tableData, setTableData] = useState([])
    
    useEffect(() => {
        window.scroll(0, 0)
        let jsonRes = [
            
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
                                <Card.Title className="mb-2">Bidding History</Card.Title>
                                <div className="row">
                                    <div className="col-md-6">
                                        <select className="form-control form-select mb-3" aria-label="Default select example">
                                            <option>-- Select A Bidder --</option>
                                            <option>User 1</option>
                                            <option>User 2</option>
                                            <option>User 3</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
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
                                            <th>Bidder</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Auction Time</th>
                                            <th>Is Winner Bid</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tableData ? tableData.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        
                                                    </tr>
                                                )
                                            })
                                                : ''
                                        }
                                    </tbody>
                                </Table>
                                {
                                    tableData.length === 0 ? <div className="text-center mb-3 text-warning">No data available in table</div> : ''
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
               
               

            </Container>
        </>
    )
}

export default BiddingHistory
