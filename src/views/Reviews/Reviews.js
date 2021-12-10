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


const Reviews = () => {

    const [tableData, setTableData] = useState([])
    
    useEffect(() => {
        window.scroll(0, 0)
        let jsonRes = [
            {
                user: 'amatassamad',
                seller: 'Misbahkhan',
                product: 'test',
                rating: 5,
                review: 'I like the way it was created'
            },
            {
                user: 'amatassamad',
                seller: 'Misbahkhan',
                product: 'test',
                rating: 2,
                review: 'I like the way it was created'
            },
            {
                user: 'amatassamad',
                seller: 'Misbahkhan',
                product: 'test',
                rating: 1,
                review: 'I like the way it was created'
            },
            {
                user: 'amatassamad',
                seller: 'Misbahkhan',
                product: 'test',
                rating: 5,
                review: 'I like the way it was created'
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
                                <Card.Title className="mb-3">Reviews</Card.Title>
                                
                                
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
                                            <th>Seller</th>
                                            <th>Product</th>
                                            <th>Rating</th>
                                            <th>Review</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tableData ? tableData.map((item, index) => {
                                                let stars = []
                                                for(let i=0; i < item.rating; i++){
                                                  stars.push(<FontAwesomeIcon icon={faStar} color="#f4c006" />) 
                                                }
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.user}</td>
                                                        <td>{item.seller}</td>
                                                        <td>{item.product}</td>
                                                        <td>{stars}</td>
                                                        <td>{item.review}</td>
                                                        
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

export default Reviews
