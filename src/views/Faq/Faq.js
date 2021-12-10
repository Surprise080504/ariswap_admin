import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ENV } from '../../config/config';
import { beforeFaq, getFaqs, deleteFaq } from './Faq.action';
import FullPageLoader from 'components/FullPageLoader/FullPageLoader';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import Swal from 'sweetalert2';
import { Button, Card, Form, Table, Container, Row, Col, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";

const Faq = (props) => {
    const [data, setData] = useState(null)
    const [pagination, setPagination] = useState(null)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        window.scroll(0, 0)
        props.getFaqs()
    }, [])

    useEffect(() => {
        if (props.faqs.getFaqsAuth) {
            let { faqs, pagination } = props.faqs.faqs
            setData(faqs)
            setPagination(pagination)
            props.beforeFaq()
        }
    }, [props.faqs.getFaqsAuth])

    useEffect(() =>{
        if(data){
            setLoader(false)
        }
    }, [data])

    useEffect(()=>{
        if(props.faqs.delFaqAuth){
            let filtered = data.filter((item) => {
                if (item._id !== props.faqs.faq.faqId)
                    return item
            })
            setData(filtered)
            props.beforeFaq()
        }
    }, [props.faqs.delFaqAuth])

    const deleteFAQ = (faqId) => {
        Swal.fire({
            title: 'Are you sure you want to delete?',
            html: 'If you delete an item, it would be permanently lost.',
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then(async (result) => {
            if (result.value) {
                setLoader(true)
                props.deleteFaq(faqId)
            }
        })
    }

    const onPageChange = async (page) => {
        setLoader(true)
        const qs = ENV.objectToQueryString({ page })
        props.getFaqs(qs)
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
                                        <Card.Title as="h4">FAQ</Card.Title>
                                        <p className="card-category">List of FAQs</p>
                                        <Button
                                            variant="info"
                                            className="float-sm-right"
                                            onClick={() => props.history.push(`/add-faq`)}>
                                            Add FAQ
                                        </Button>
                                        <br></br>
                                    </Card.Header>
                                    <Card.Body className="table-full-width">
                                        <Table className="table-bigboy">
                                            <thead>
                                                <tr>
                                                    <th className="text-center">#</th>
                                                    <th>Title</th>
                                                    <th className="text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    data && data.length ?
                                                        data.map((item, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td className="text-center">{pagination && ((pagination.limit * pagination.page) - pagination.limit) + index + 1}</td>
                                                                    <td className="td-name">
                                                                        {item.title}
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
                                                                                onClick={() => props.history.push(`/edit-faq/${item._id}`)}
                                                                            >
                                                                                <i className="fas fa-edit"></i>
                                                                            </Button>
                                                                        </OverlayTrigger>
                                                                        <OverlayTrigger
                                                                            overlay={
                                                                                <Tooltip id="tooltip-334669391">
                                                                                    Delete
                                                                                </Tooltip>
                                                                            }
                                                                            placement="left"
                                                                        >
                                                                            <Button
                                                                                className="btn-link btn-icon"
                                                                                type="button"
                                                                                variant="danger"
                                                                                onClick={() => deleteFAQ(item._id)}
                                                                            >
                                                                                <i className="fas fa-times"></i>
                                                                            </Button>
                                                                        </OverlayTrigger>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                        :
                                                        <tr><td colSpan="7" className="text-center">No FAQ Found</td></tr>
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
    faqs: state.faqs,
    error: state.error
});

export default connect(mapStateToProps, { beforeFaq, getFaqs, deleteFaq })(Faq);