import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ENV } from '../../config/config';
import { beforeEmail, getEmails } from './EmailTemplates.action';
import FullPageLoader from 'components/FullPageLoader/FullPageLoader';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import { Button, Card, Form, Table, Container, Row, Col, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";


const EmailTemplates = (props) => {
    const [emails, setEmails] = useState(null)
    const [pagination, setPagination] = useState(null)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        window.scroll(0, 0)
        props.getEmails()
    }, [])

    useEffect(() => {
        if (props.email.getAuth) {
            const { emails, pagination } = props.email
            setEmails(emails)
            setPagination(pagination)
            props.beforeEmail()
        }
    }, [props.email.getAuth])

    useEffect(() => {
        if (emails) {
            setLoader(false)
        }
    }, [emails])

    // when an error is received
    useEffect(() => {
        if (props.error.error)
            setLoader(false)
    }, [props.error.error])

    const onPageChange = async (page) => {
        setLoader(true)
        const qs = ENV.objectToQueryString({ page })
        props.getEmails(qs)
    }

    return (
        <>
            {
                loader ?
                    <FullPageLoader />
                    :
                    <Container>
                        <Row>
                            <Col md="12">
                                <Card className="table-big-boy">
                                    <Card.Header>
                                        <Card.Title as="h4">Email Templates</Card.Title>
                                        <p className="card-collection">List Of Email Templates</p>
                                        <br></br>
                                    </Card.Header>
                                    <Card.Body className="table-full-width">
                                        <Table className="table-bigboy">
                                            <thead>
                                                <tr>
                                                    <th className="text-center">#</th>
                                                    <th>Type</th>
                                                    <th>Subject</th>                                      
                                                    <th className="text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    emails && emails.length ?
                                                        emails.map((email, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td className="text-center">{pagination && ((pagination.limit * pagination.page) - pagination.limit) + index + 1}</td>
                                                                    
                                                                    <td className="td-name">
                                                                        {email.type}
                                                                    </td>
                                                                    <td className="td-name">
                                                                        {email.subject}
                                                                    </td>
                                                    
                                                                    <td className="td-actions float-right">
                                                                        <OverlayTrigger
                                                                            overlay={
                                                                                <Tooltip id="tooltip-436082023">
                                                                                    Edit
                                                                                </Tooltip>
                                                                            }
                                                                            placement="left"
                                                                        >
                                                                            <Button
                                                                                className="btn-link btn-icon"
                                                                                type="button"
                                                                                variant="success"
                                                                                onClick={() => {
                                                                                    setLoader(true);
                                                                                    props.history.push(`/email-template/${email._id}`);
                                                                                }}
                                                                            >
                                                                                <i className="fas fa-edit"></i>
                                                                            </Button>
                                                                        </OverlayTrigger>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                        :
                                                        <tr><td colSpan="7" className="text-center">No emails found</td></tr>
                                                }
                                            </tbody>
                                        </Table>
                                        {
                                            pagination &&
                                            <Pagination
                                                className="m-3"
                                                defaultCurrent={1}
                                                pageSize // items per page
                                                current={pagination.page} // current active page
                                                total={pagination.pages} // total pages
                                                onChange={onPageChange}
                                                locale={localeInfo}
                                            />
                                        }
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
            }
        </>
    )
}

const mapStateToProps = state => ({
    email: state.email,
    error: state.error
});

export default connect(mapStateToProps, { beforeEmail, getEmails })(EmailTemplates);