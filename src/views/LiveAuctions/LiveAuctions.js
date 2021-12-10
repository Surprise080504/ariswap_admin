import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ENV } from '../../config/config';
import { beforeAuctions, getAuctions } from './liveAuctions.action';
import FullPageLoader from 'components/FullPageLoader/FullPageLoader';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import { Button, Card, Form, Table, Container, Row, Col, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import collectionDefaultImg from '../../assets/img/placeholder.jpg'

const LiveAuctions = (props) => {
    const [auctions, setAuctions] = useState(null)
    const [pagination, setPagination] = useState(null)
    const [actionModal, setActionModal] = useState(false)
    const [modalType, setModalType] = useState(0)
    const [auction, setAuction] = useState(null)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        window.scroll(0, 0)
        props.getAuctions()
    }, [])

    useEffect(() => {
        if (props.auctions.getAuctionsAuth) {
            const { auctions, pagination } = props.auctions
            setAuctions(auctions)
            setPagination(pagination)
            props.beforeAuctions()
        }

    }, [props.auctions.getAuctionsAuth])

    useEffect(() => {
        if (auctions) {
            setLoader(false)
        }
    }, [auctions])

    // when an error is received
    useEffect(() => {
        if (props.error.error)
            setLoader(false)
    }, [props.error.error])

    // set modal type
    const setModal = (type = 0, auctionId = null) => {
        setActionModal(!actionModal)
        setModalType(type)
        setLoader(false)
        if (type === 3 && auctionId)
            getAuction(auctionId)
    }

    const getAuction = async (auctionId) => {
        setLoader(true)
        const auctionData = await auctions.find((elem) => String(elem._id) === String(auctionId))
        if (auctionData)
            setAuction({ ...auctionData })
        setLoader(false)
    }

    const onPageChange = async (page) => {
        setLoader(true)
        const qs = ENV.objectToQueryString({ page })
        props.getCollections(qs)
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
                                        <Card.Title as="h4">Auctions</Card.Title>
                                        <p className="card-collection">List of Auctions</p>
                                        <br></br>
                                    </Card.Header>
                                    <Card.Body className="table-full-width">
                                        <Table className="table-bigboy">
                                            <thead>
                                                <tr>
                                                    <th className="text-center">#</th>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Owner</th>
                                                    <th>Start Date</th>
                                                    <th>End Date</th>
                                                    <th className="text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    auctions && auctions.length ?
                                                        auctions.map((item, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td className="text-center">{pagination && ((pagination.limit * pagination.page) - pagination.limit) + index + 1}</td>
                                                                    <td>
                                                                        <div>
                                                                            <img src={item.nft.image} width="150" height="125" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        {item.nft.name}
                                                                    </td>
                                                                    <td>
                                                                        {item.owner.username}
                                                                        <div>
                                                                            ({item.owner.email})
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        {item.startDate}
                                                                    </td>

                                                                    <td>
                                                                        {item.endDate}
                                                                    </td>
                                                                    <td className="td-actions float-right">
                                                                        <OverlayTrigger
                                                                            overlay={
                                                                                <Tooltip id="tooltip-897993903">
                                                                                    View
                                                                                </Tooltip>
                                                                            }
                                                                            placement="left"
                                                                        >
                                                                            <Button
                                                                                className="btn-link btn-icon"
                                                                                type="button"
                                                                                variant="info"
                                                                                onClick={() => setModal(3, item._id)}
                                                                            >
                                                                                <i className="fas fa-image"></i>
                                                                            </Button>
                                                                        </OverlayTrigger>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                        :
                                                        <tr><td colSpan="7" className="text-center">No Auction found</td></tr>
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

                        {
                            modalType > 0 && auctions &&
                            <Modal className="modal-primary" onHide={() => setActionModal(!actionModal)} show={actionModal}>
                                <Modal.Header className="justify-content-center">
                                    <Row>{modalType === 1 ? 'Add' : modalType === 2 ? 'Edit' : ''} Auction</Row>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group>
                                            <label>Image: </label>
                                            <div>
                                                <img src={auction?.image ? auction?.image : collectionDefaultImg} width="200" height="150" />
                                            </div>
                                        </Form.Group>

                                        <Form.Group>
                                            <label>Name: {auction?.name}</label>
                                        </Form.Group>

                                        <Form.Group>
                                            <label>Owner: {auction.owner.username}({auction.owner.email})</label>
                                        </Form.Group>

                                        <Form.Group>
                                            <label>Start Date: {auction?.auctionStartDate}</label>
                                        </Form.Group>

                                        <Form.Group>
                                            <label>End Date: {auction?.auctionEndDate}</label>
                                        </Form.Group>
                                        

                                    </Form>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button
                                        className="btn btn-close"
                                        onClick={() => setActionModal(!actionModal)}
                                        variant="link"
                                    >
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        }
                    </Container>
            }
        </>
    )
}

const mapStateToProps = state => ({
    auctions: state.auctions,
    error: state.error
});

export default connect(mapStateToProps, { beforeAuctions, getAuctions })(LiveAuctions);
