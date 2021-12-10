import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ENV } from '../../config/config';
import { beforeUser, getUsers, deleteUser } from './Users.action';
import FullPageLoader from 'components/FullPageLoader/FullPageLoader';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import moment from 'moment';
import Swal from 'sweetalert2';
import { Button, Card, Form, Table, Container, Row, Col, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import userDefaultImg from '../../assets/img/placeholder.jpg'

const Users = (props) => {
    const [users, setUsers] = useState(null)
    const [pagination, setPagination] = useState(null)
    const [userModal, setUserModal] = useState(false)
    const [modalType, setModalType] = useState(0)
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        window.scroll(0, 0)
        props.getUsers()
    }, [])

    useEffect(() => {
        if (props.user.getUserAuth) {
            const { users, pagination } = props.user
            setUsers(users)
            setPagination(pagination)
            props.beforeUser()
        }
    }, [props.user.getUserAuth])

    useEffect(() => {
        if (props.user.deleteUserAuth) {
            let filtered = users.filter((item) =>{
                if(item._id !== props.user.userId)
                    return item
            })
            setUsers(filtered)
            props.beforeUser()
        }
    }, [props.user.deleteUserAuth])

    useEffect(() => {
        if (users) {
            setLoader(false)
        }
    }, [users])

    // when an error is received
    useEffect(() => {
        if (props.error.error)
            setLoader(false)
    }, [props.error.error])

    // set modal type
    const setModal = (type = 0, userId = null) => {
        setUserModal(!userModal)
        setModalType(type)
        setLoader(false)
        // add user
        if (type === 1) {
            let user = {
                name: '', image: '', description: '', status: false
            }
            setUser(user)
        }
        // edit or view user
        else if ((type === 2 || type === 3) && userId)
            getUser(userId)
    }

    const getUser = async (userId) => {
        setLoader(true)
        const userData = await users.find((elem) => String(elem._id) === String(userId))
        if (userData)
            setUser({ ...userData })
        setLoader(false)
    }

    const onPageChange = async (page) => {
        setLoader(true)
        const qs = ENV.objectToQueryString({ page })
        props.getUsers(qs)
    }

    const deleteUser = (userId) => {
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
                props.deleteUser(userId)
            }
        })
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
                                        <Card.Title as="h4">Users</Card.Title>
                                        <p className="card-user">List of Users</p>
                                        {/* <Button
                                            variant="info"
                                            className="float-sm-right"
                                            onClick={() => setModal(1)}>
                                            Add User
                                        </Button> */}
                                        <br></br>
                                    </Card.Header>
                                    <Card.Body className="table-full-width">
                                        <Table className="table-bigboy">
                                            <thead>
                                                <tr>
                                                    <th className="text-center">#</th>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Address</th>
                                                    <th className="text-center">Status</th>
                                                    <th className="text-right">Created At</th>
                                                    <th className="text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    users && users.length ?
                                                        users.map((user, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td className="text-center">{pagination && ((pagination.limit * pagination.page) - pagination.limit) + index + 1}</td>
                                                                    <td>
                                                                        <div>
                                                                            <img alt="User Image" src={user.profileImage ? user.profileImage : userDefaultImg} className="rounded-circle" width="75" height="75" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        {user.username}
                                                                    </td>
                                                                    <td>
                                                                        {user.email}
                                                                    </td>
                                                                    <td>
                                                                        {user.address}
                                                                    </td>
                                                                    <td className="text-center">{user.emailVerified ? 'Verified' : 'Unverified'}</td>
                                                                    <td className="td-number">{moment(user.createdAt).format('DD MMM YYYY')}</td>
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
                                                                                onClick={() => setModal(3, user._id)}
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
                                                                                onClick={() => deleteUser(user._id)}
                                                                            >
                                                                                <i className="fas fa-times"></i>
                                                                            </Button>
                                                                        </OverlayTrigger>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                        :
                                                        <tr><td colSpan="7" className="text-center">No users found</td></tr>
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
                            modalType > 0 && user &&
                            <Modal className="modal-primary" onHide={() => setUserModal(!userModal)} show={userModal}>
                                <Modal.Header className="justify-content-center">
                                    <Row className="center label-font">{modalType === 1 ? 'Add' : modalType === 2 ? 'Edit' : ''} User</Row>
                                </Modal.Header>
                                <Modal.Body>
                                <Form className="text-left">
                                        <div className="text-center">
                                        <Form.Group>
                                            <label className="label-font">Profile Image: </label>
                                            <div>
                                                <img src={user.profileImage ? user.profileImage : userDefaultImg} width="200" height="250" style={{borderRadius: "8px"}} />
                                            </div>
                                        </Form.Group>
                                        </div>
                                        <div className="d-flex name-email">
                                        <Form.Group>
                                            <label className="label-font">Name: </label><span className="ml-2">{user.username}</span>
                                        </Form.Group>
                                        <Form.Group>
                                            <label className="label-font">Email: </label><span className="ml-2">{user.email}</span>
                                        </Form.Group>
                                        </div>
                                        <div className="d-flex name-email">
                                        <Form.Group>
                                            <label className="label-font">Status: </label><span className="ml-2">{user.emailVerified ? 'Verified' : 'Unverified'}</span>
                                        </Form.Group>
                                        <Form.Group>
                                            <label className="label-font">Description:</label><span className="ml-2"> {user.description ? user.description : 'N/A'}</span>
                                        </Form.Group>
                                        </div>
                                        <div className="d-flex name-email">
                                        <Form.Group>
                                            <label className="label-font"l>Facebook: </label><span className="ml-2">{user.facebookLink ? user.facebookLink : 'N/A'}</span>
                                        </Form.Group>
                                        <Form.Group>
                                            <label className="label-font">Twitter: </label><span className="ml-2">{user.twitterLink ? user.twitterLink : 'N/A'}</span>
                                        </Form.Group>
                                        </div>
                                        <div className="d-flex name-email">
                                        <Form.Group>
                                            <label className="label-font">G Plus: </label><span className="ml-2">{user.gPlusLink ? user.gPlusLink : 'N/A'}</span>
                                        </Form.Group>
                                        <Form.Group>
                                            <label className="label-font">Vine: </label><span className="ml-2">{user.vineLink ? user.vineLink : 'N/A'}</span>
                                        </Form.Group>
                                        </div>
                                    </Form>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button
                                        className="btn btn-close"
                                        onClick={() => setUserModal(!userModal)}
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
    user: state.user,
    error: state.error
});

export default connect(mapStateToProps, { beforeUser, getUsers, deleteUser })(Users);