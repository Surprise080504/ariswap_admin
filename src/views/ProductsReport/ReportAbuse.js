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


const ReportAbuse = () => {

    const [tableData, setTableData] = useState([])
    
    useEffect(() => {
        window.scroll(0, 0)
        let jsonRes = [
            {
                title: 'Copyright Infringement',
                desc: 'This listing is stolen content or the user selling this does not own the rights to the content.',
                status: true
            },
            {
                title: 'Other - needs human review',
                desc: 'A problem not listed above that requires action by a moderator. Be specific and detailed!',
                status: false
            },
            {
                title: 'This listing is rude or offensive',
                desc: 'A problem not listed above that requires action by a moderator. Be specific and detailed!',
                status: true
            },
            {
                title: 'Copyright Infringement',
                desc: 'This listing is stolen content or the user selling this does not own the rights to the content.',
                status: true
            },
            {
                title: 'Other - needs human review',
                desc: 'A problem not listed above that requires action by a moderator. Be specific and detailed!',
                status: false
            },
            {
                title: 'This listing is rude or offensive',
                desc: 'A problem not listed above that requires action by a moderator. Be specific and detailed!',
                status: true
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
                                <Card.Title className="mb-2">Report Abuse</Card.Title>
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
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tableData ? tableData.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.title}</td>
                                                        <td>{item.desc}</td>
                                                        <td>{item.status ? `Active`: `Inactive`}</td>
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

export default ReportAbuse
