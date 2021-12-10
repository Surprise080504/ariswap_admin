import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ENV } from '../../config/config';
import { beforeNfts, getNfts, deleteNft } from './nfts.action';
import FullPageLoader from 'components/FullPageLoader/FullPageLoader';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import { Button, Card, Form, Table, Container, Row, Col, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import collectionDefaultImg from '../../assets/img/placeholder.jpg'
import Swal from 'sweetalert2';

const Nfts = (props) => {
    const [nfts, setNfts] = useState(null)
    const [pagination, setPagination] = useState(null)
    const [nftModal, setNftModal] = useState(false)
    const [modalType, setModalType] = useState(0)
    const [nft, setNft] = useState(null)
    const [loader, setLoader] = useState(true)
    const [users,setUsers]=useState([])

    useEffect(() => {
        window.scroll(0, 0)
        props.getNfts()
    }, [])

    useEffect(() => {
        if (props.nfts.getNftsAuth) {
            const { nfts, pagination } = props.nfts
            setNfts(nfts)
            setPagination(pagination)
            props.beforeNfts()
        }

    }, [props.nfts.getNftsAuth])

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
        if (nfts) {
            setLoader(false)
        }
    }, [nfts])

    // when an error is received
    useEffect(() => {
        if (props.error.error)
            setLoader(false)
    }, [props.error.error])

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
        const nftData = await nfts.find((elem) => String(elem._id) === String(nftId))
        if (nftData)
            setNft({ ...nftData })
        setLoader(false)
    }

    const onPageChange = async (page) => {
        setLoader(true)
        const qs = ENV.objectToQueryString({ page })
        props.getNfts(qs)
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
    useEffect(()=>{
        const url = `${process.env.REACT_APP_BASE_URL}user/list`;
        fetch(url, {
            method:'GET',
            headers: {
                'Authorization': ENV.Authorization,
                'x-auth-token': ENV.x_auth_token
            },
        }).then(res => res.json()).then(data => {
            // console.log(data.data.users,"data");
            setUsers(data.data.users)
         
        }).catch(error => {
          
        })
    },[])
const filterCreatorName=(id)=>{
   let result= users.find((item)=>item._id===id)
   console.log(result,"rsult==>");
   return result?.username

}
const filterCreatorMail=(id)=>{
    let result= users.find((item)=>item._id===id)
    return result?.email

}

    console.log(nfts,"nfts==>")
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
                                                    <th>Collection</th>
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
                                                                        {filterCreatorName(nft.userId)}
                                                                        {/* {nft.owner.username} */}
                                                                        <div>
                                                                        {filterCreatorMail(nft.userId)}
                                                                            {/* ({nft.owner.email}) */}
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                    {filterCreatorName(nft.userId)}
                                                                        {/* {nft.creator.username} */}
                                                                        <div>
                                                                        {filterCreatorMail(nft.userId)}
                                                                            {/* ({nft.creator.email}) */}
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
                                                                    <td className="text-center">
                                                                        {nft.collection?.name ? nft.collection.name : 'N/A'}
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
                                                {/* <label className="label-font">Creator: </label><span className="ml-2">{nft.creator.username}({nft.creator.email})</span> */}
                                            </Form.Group>
                                            <Form.Group>
                                                {/* <label className="label-font">Owner: </label><span className="ml-2">{nft.owner.username}({nft.owner.email})</span> */}
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

const mapStateToProps = state => ({
    nfts: state.nfts,
    error: state.error
});

export default connect(mapStateToProps, { beforeNfts, getNfts, deleteNft })(Nfts);
