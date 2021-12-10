import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ENV } from '../../config/config';
import { beforeCollection, getCollections } from './Collection.action';
import FullPageLoader from 'components/FullPageLoader/FullPageLoader';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import moment from 'moment';
import { Button, Card, Form, Table, Container, Row, Col, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";


const Collections = (props) => {
    const [collections, setCollections] = useState(null)
    const [pagination, setPagination] = useState(null)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        window.scroll(0, 0)
        props.getCollections()
    }, [])

    useEffect(() => {
        if (props.collection.getAuth) {
            const { collections, pagination } = props.collection
            setCollections(collections)
            setPagination(pagination)
            props.beforeCollection()
        }
    }, [props.collection.getAuth])

    useEffect(() => {
        if (collections) {
            setLoader(false)
        }
    }, [collections])

    // when an error is received
    useEffect(() => {
        if (props.error.error)
            setLoader(false)
    }, [props.error.error])

    // set modal type
    const setModal = (type = 0, collectionId = null) => {
        setLoader(false)
        if (type === 3 && collectionId)
            getCollection(collectionId)
    }

    const getCollection = async (collectionId) => {
        setLoader(true)
        props.history.push(`/collection/${collectionId}`)
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
                                        <Card.Title as="h4">Collections</Card.Title>
                                        <p className="card-collection">List of Collections</p>
                                        <br></br>
                                    </Card.Header>
                                    <Card.Body className="table-full-width">
                                        <Table className="table-bigboy">
                                            <thead>
                                                <tr>
                                                    <th className="text-center">#</th>
                                                    <th>Logo</th>
                                                    <th>Name</th>
                                                    <th>User</th>
                                                    <th>Category</th>
                                                    <th className="text-right">Created At</th>
                                                    <th className="text-right">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    collections && collections.length ?
                                                        collections.map((collection, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td className="text-center">{pagination && ((pagination.limit * pagination.page) - pagination.limit) + index + 1}</td>
                                                                    <td>
                                                                        <div className="img-container">
                                                                            <img alt="Collection logo" src={collection.logo} />
                                                                        </div>
                                                                    </td>
                                                                    <td className="td-name">
                                                                        {collection.name}
                                                                    </td>
                                                                    <td>
                                                                        {collection.user.username}({collection.user.email})
                                                                    </td>
                                                                    <td>
                                                                        {collection.category ? collection.category.name : 'N/A'}
                                                                    </td>
                                                                    <td className="td-number">{moment(collection.createdAt).format('DD MMM YYYY')}</td>
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
                                                                                onClick={() => setModal(3, collection._id)}
                                                                            >
                                                                                <i className="fas fa-image"></i>
                                                                            </Button>
                                                                        </OverlayTrigger>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                        :
                                                        <tr><td colSpan="7" className="text-center">No collections found</td></tr>
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
    collection: state.collection,
    error: state.error
});

export default connect(mapStateToProps, { beforeCollection, getCollections })(Collections);