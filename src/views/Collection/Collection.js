import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ENV } from '../../config/config';
import { beforeCollection, getCollections, getCollection } from './Collection.action';
import { deleteNft, beforeNfts } from '../Nfts/nfts.action';
import FullPageLoader from 'components/FullPageLoader/FullPageLoader';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import { Button, Card, Form, Table, Container, Row, Col, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import collectionDefaultImg from '../../assets/img/placeholder.jpg'
import userDefaultImg from '../../assets/img/placeholder.jpg'
import Swal from 'sweetalert2';

const Collection = (props) => {
    const [collection, setCollection] = useState(null)
    const [pagination, setPagination] = useState(null)
    const [nftModal, setNftModal] = useState(false)
    const [modalType, setModalType] = useState(0)
    const [nfts, setNfts] = useState(null)
    const [nft, setNft] = useState(null)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        window.scroll(0, 0)
        props.getCollection(window.location.pathname.split('/')[3])
    }, [])

    useEffect(() => {
        if (props.collection.getAuth) {
            const { collection, nfts, pagination } = props.collection.collection
            console.log(nfts,"nfts in useFFECT");
            setCollection(collection)
            setPagination(pagination)
            setNfts(nfts)
            setLoader(false)
        }
    }, [props.collection.getAuth])

    useEffect(() => {
        if (props.nfts.nftDelAuth) {
            let filtered = nfts.filter((item) => {
                if (item._id !== props.nfts.nftId)
                    return item
            })
            setNfts(filtered)
            props.beforeNfts()
        }

    }, [props.nfts.nftDelAuth])

    useEffect(() => {
        if (collection) {
            setLoader(false)
        }
    }, [collection])

    useEffect(() => {
        if (nfts) {
            setLoader(false)
        }
    }, [nfts])

    // when an error is received
    useEffect(() => {
        if (props.error.error)
            setLoader(false)
    }, [props.error.error])

    const onPageChange = async (page) => {
        setLoader(true)
        const qs = ENV.objectToQueryString({ page })
        props.getCollection(window.location.pathname.split('/')[3], qs)
    }

    // set modal type
    const setModal = (type = 0, nftId = null) => {
        setNftModal(!nftModal)
        setModalType(type)
        setLoader(false)
        if (type === 3 && nftId)
            getNft(nftId)
    }

    const getNft = async (nftId) => {
        setLoader(true)
        console.log(nfts,"nfts in the function");
        const nftData = await nfts.find((elem) => String(elem._id) === String(nftId))
        if (nftData)
            setNft({ ...nftData })
        setLoader(false)
    }

    const deleteNft = (nftId) => {
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
                props.deleteNft(nftId)
            }
        })
    }
console.log(nfts,"nfts in collections")
console.log(collection,"collection in the test")
    return (
        <>
            {
                loader ?
                    <FullPageLoader />
                    :
                    <Container>
                        <Row>
                            <Col md="12" sm="6">
                                <Card className="pb-4">
                                    <Card.Header>
                                        <Card.Header className="pl-0">
                                            <Card.Title as="h4">Information</Card.Title>
                                        </Card.Header>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col md="4">
                                                <label>Name:</label>
                                                <span> {collection.name}</span>
                                            </Col>
                                            <Col md="4">
                                                <label>URL: </label>
                                                <a href={collection.url ? collection.url : ''} target="_blank"> {collection.url ? collection.url : 'N/A'}</a>
                                            </Col>
                                            <Col md="4">
                                                <label>Category: </label>
                                                <span> {collection.category ? collection.category.name : 'N/A'}</span>
                                            </Col>
                                        </Row>
                                        <Row className="pt-3 pb-3">
                                            <Col md="12">
                                                <label>Description:</label>
                                                <span> {collection.description ? collection.description : 'N/A'}</span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="4">
                                                <label>Username: </label>
                                                <span> {collection.user.username ? collection.user.username : 'N/A'}</span>
                                            </Col>
                                            <Col md="4">
                                                <label>Email: </label>
                                                <span> {collection.user.email ? collection.user.email : 'N/A'}</span>
                                            </Col>
                                        </Row>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="12" sm="6">
                                <Card className="pb-4">
                                    <Card.Header>
                                        <Card.Header className="pl-0">
                                            <Card.Title as="h4">Images</Card.Title>
                                        </Card.Header>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col md="4">
                                                <div className="text-center">
                                                    <label>Logo</label>
                                                    <div>
                                                        <img src={collection.logo ? collection.logo : userDefaultImg} width="200" heigth="150" />
                                                    </div>

                                                </div>
                                            </Col>
                                            <Col md="4">
                                                <div className="text-center">
                                                    <label>Featured Image</label>
                                                    <div>
                                                        <img src={collection.featuredImg ? collection.featuredImg : userDefaultImg} width="200" heigth="150" />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md="4">
                                                <div className="text-center">
                                                    <label>Banner</label>
                                                    <div>
                                                        <img src={collection.banner ? collection.banner : userDefaultImg} width="200" heigth="150" />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>





                        <Row>
                            <Col md="12">
                                <Card className="table-big-boy">
                                    <Card.Header>
                                        <Card.Title as="h4">NFTs</Card.Title>
                                        <p className="card-collection">List of NFTs</p>
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
                                                    <th>Creator</th>
                                                    <th>Price</th>
                                                    <th>Copies</th>
                                                    <th>Status</th>
                                                    <th>Sold</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    nfts && nfts.length ?
                                                        nfts.map((nft, index) => {
                                                            let status = ''
                                                            switch (nft.status) {
                                                                case 1: status = 'Put On Sale';
                                                                    break;
                                                                case 2: status = 'Instant Sale Price';
                                                                    break;
                                                                case 3: status = 'Unlock Purchased';
                                                                    break;
                                                                default: status = ''
                                                            }
                                                            return (
                                                                <tr key={index}>
                                                                    <td className="text-center">{pagination && ((pagination.limit * pagination.page) - pagination.limit) + index + 1}</td>
                                                                    <td>
                                                                        <div>
                                                                            <img src={nft.image} width="100" height="75" style={{ borderRadius: "8px" }} />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        {nft.name}
                                                                    </td>
                                                                    <td>
                                                                        {collection.user.username}
                                                                        <div>
                                                                            ({collection.user.email})
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                           {collection.user.username}
                                                                           <div>
                                                                            ({collection.user.email})
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-center">
                                                                        {nft.currentPrice} {ENV.currency}
                                                                    </td>
                                                                    <td className="text-center">
                                                                        {nft.copies}
                                                                    </td>
                                                                    <td>
                                                                        {status}
                                                                    </td>
                                                                    <td className="text-center">
                                                                        {nft.sold}
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
                                                                                onClick={() => setModal(3, nft._id)}
                                                                            >
                                                                                <i className="fas fa-image"></i>
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
                                                                                onClick={() => deleteNft(nft._id)}
                                                                            >
                                                                                <i className="fas fa-times"></i>
                                                                            </Button>
                                                                        </OverlayTrigger>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                        :
                                                        <tr><td colSpan="7" className="text-center">No NFT found</td></tr>
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
                            modalType > 0 && nfts &&
                            <Modal className="modal-primary" onHide={() => setNftModal(!nftModal)} show={nftModal}>
                                <Modal.Header className="justify-content-center">
                                    <Row className="label-font">{modalType === 1 ? 'Add' : modalType === 2 ? 'Edit' : ''} NFT</Row>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <div className="text-center">
                                            <Form.Group>
                                                <label className="label-font">Image: </label>
                                                <div>
                                                    <img src={nft.image ? nft.image : collectionDefaultImg} width="200" height="200" style={{ borderRadius: "8px" }} />
                                                </div>
                                            </Form.Group>
                                        </div>
                                        <div className="d-flex nft-flex">
                                            <Form.Group>
                                                <label className="label-font">Name: </label><span className="ml-2">{nft.name}</span>
                                            </Form.Group>

                                            <Form.Group>
                                                <label className="label-font">Current Price: </label><span className="ml-2">{nft.currentPrice} {ENV.currency}</span>
                                            </Form.Group>
                                        </div>
                                        <div className="d-flex nft-flex">
                                            <Form.Group>
                                                <label className="label-font">Sold: </label><span className="ml-2">{nft.sold}</span>
                                            </Form.Group>


                                            
                                            <Form.Group>
                                                <label className="label-font">Copies: </label><span className="ml-2">{nft.copies}</span>
                                            </Form.Group>
                                        </div>
                                        <div className="d-flex nft-flex">
                                            <Form.Group>
                                                <label className="label-font">Status: </label><span className="ml-2">{nft.status === 1 ? 'Put On Sale' : nft.status === 2 ? 'Instant Sale Price' : nft.status === 3 ? 'Unlock Purchased' : ''}</span>
                                            </Form.Group>
                                            <Form.Group>
                                                <label className="label-font">Collection: </label><span className="ml-2">{nft.collection?.name ? nft.collection.name : 'N/A'}</span>
                                            </Form.Group>
                                        </div>
                                        <div className="d-flex nft-flex">
                                            <Form.Group>
                                                <label className="label-font">Creator: </label><span className="ml-2">{collection.user.username}({collection.user.email})</span>
                                            </Form.Group>
                                            <Form.Group>
                                                <label className="label-font">Owner: </label><span className="ml-2">{collection.user.username}({collection.user.email})</span>
                                            </Form.Group>
                                        </div>
                                    </Form>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button
                                        className="btn btn-close"
                                        onClick={() => setNftModal(!nftModal)}
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

const mapStateToProps = state => (
    console.log(state,"loging state"),
    {
    collection: state.collection,
    nfts: state.nfts,
    error: state.error
});

export default connect(mapStateToProps, { beforeCollection, getCollections, getCollection, deleteNft, beforeNfts })(Collection);