import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ENV } from '../../config/config';
import { beforeContact, getContacts, updateContact } from './Contacts.action';
import FullPageLoader from 'components/FullPageLoader/FullPageLoader';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import { Button, Card, Form, Table, Container, Row, Col, OverlayTrigger, Tooltip, Modal, InputGroup, DropdownButton, Dropdown, FormControl } from "react-bootstrap";

const Contacts = (props) => {
    const [contacts, setContacts] = useState(null)
    const [pagination, setPagination] = useState(null)
    const [contactModel, setContactModel] = useState(false)
    const [modalType, setModalType] = useState(0)
    const [contact, setContact] = useState(null)
    const [loader, setLoader] = useState(true)
    const [title, setTitle] = useState('Select Status')

    useEffect(() => {
        window.scroll(0, 0)
        props.getContacts()
    }, [])

    useEffect(() => {
        if (props.contacts.contactsAuth) {
            const { contacts, pagination } = props.contacts.contacts
            setContacts(contacts)
            setPagination(pagination)
            props.beforeContact()
        }
    }, [props.contacts.contactsAuth])

    useEffect(() => {
        if (contacts) {
            setLoader(false)
        }
    }, [contacts])

    useEffect(async () => {
        if (props.contacts.updateAuth) {
            setLoader(true)
            const contactData = await contacts.find((elem) => String(elem._id) === String(contact._id))
            contactData.status = contact.status
            if (contactData)
                setContact({ ...contactData })
            setLoader(false)
            props.beforeContact()
        }
    }, [props.contacts.updateAuth])

    // set modal type
    const setModal = (type = 0, contactId = null) => {
        setContactModel(!contactModel)
        setModalType(type)
        setLoader(false)
        if ((type === 2 || type === 3) && contactId)
            getContract(contactId)
    }

    const getContract = async (contactId) => {
        setLoader(true)
        const contactData = await contacts.find((elem) => String(elem._id) === String(contactId))
        if (contactData)
            setContact({ ...contactData })
        setLoader(false)
    }

    const onPageChange = async (page) => {
        setLoader(true)
        const qs = ENV.objectToQueryString({ page })
        props.getContacts(qs)
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
                                        <Card.Title as="h4">Contacts</Card.Title>
                                        <p className="card-user">List Of Contacts</p>
                                        <br></br>
                                    </Card.Header>
                                    <Card.Body className="table-full-width">
                                        <Table className="table-bigboy">
                                            <thead>
                                                <tr>
                                                    <th className="text-center">#</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Subject</th>
                                                    <th className="text-description">Message</th>
                                                    <th>Status</th>
                                                    <th className="text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    contacts && contacts.length ? contacts.map((item, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td className="text-center">{pagination && ((pagination.limit * pagination.page) - pagination.limit) + index + 1}</td>
                                                                <td>
                                                                    {item.name}
                                                                </td>
                                                                <td>
                                                                    {item.email}
                                                                </td>
                                                                <td>
                                                                    {item.subject}
                                                                </td>
                                                                <td>
                                                                    {item.message}
                                                                </td>
                                                                <td>
                                                                    <span className={`text-white p-1 ${item.status === 1 ? `bg-danger` : item.status === 0 ? `bg-warning` : item.status === 2 ? `bg-success` : ``}`}>
                                                                        {item.status === 0 ? 'In Progress' : item.status === 1 ? 'Pending' : item.status === 2 ? 'Closed' : 'N/A'}                                                                        
                                                                    </span>
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
                                                                            onClick={() => setModal(2, item._id)}
                                                                        >
                                                                            <i className="fas fa-image"></i>
                                                                        </Button>
                                                                    </OverlayTrigger>
                                                                    <OverlayTrigger
                                                                        overlay={
                                                                            <Tooltip id="tooltip-897993903">
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
                                                                                setModal(3, item._id);
                                                                                setTitle("Select Status")
                                                                            }
                                                                            }
                                                                        >
                                                                            <i className="fas fa-edit"></i>
                                                                        </Button>
                                                                    </OverlayTrigger>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                        :
                                                        <tr><td colSpan="7" className="text-center">No Contact Found</td></tr>
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
                            modalType > 0 && contact &&
                            <Modal className="modal-primary" onHide={() => setContactModel(!contactModel)} show={contactModel}>
                                <Modal.Header className="justify-content-center">
                                    <Row className="center label-font">{modalType === 3 ? 'Edit' : ''} Contact</Row>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form className="text-left">
                                        <div className="d-flex name-email">
                                            <Form.Group>
                                                <label className="label-font">Name: </label><span className="ml-2">{contact.name}</span>
                                            </Form.Group>
                                            <Form.Group>
                                                <label className="label-font">Email: </label><span className="ml-2">{contact.email}</span>
                                            </Form.Group>
                                        </div>
                                        <div className="d-flex name-email">
                                            <Form.Group>
                                                <label className="label-font">Subject: </label><span className="ml-2">{contact.subject}</span>
                                            </Form.Group>
                                            <Form.Group>
                                                <label className="label-font mb-0">Status:</label><span className={`ml-2 d-inline-block align-top text-white ${contact.status === 1 && modalType === 2 ? `bg-danger p-1` : contact.status === 0 && modalType === 2 ? `bg-warning p-1` : contact.status === 2 && modalType === 2 ? `bg-success p-1` :``}`}>
                                                    {modalType === 2 ?
                                                        (contact.status === 0 ? 'In Progress' : contact.status === 1 ? 'Pending' : contact.status === 2 ? 'Closed' : 'N/A')
                                                        : <InputGroup className="float-right">
                                                            <DropdownButton
                                                                variant="outline-secondary"
                                                                title={title}
                                                                id="status-dropDown"
                                                            >
                                                                <Dropdown.Item onClick={() => {
                                                                    setTitle("In Progress")
                                                                    setContact({ ...contact, status: 0 })
                                                                }}>In Progress</Dropdown.Item>
                                                                <Dropdown.Item onClick={
                                                                    () => {
                                                                        setTitle("Pending")
                                                                        setContact({ ...contact, status: 1 })
                                                                    }
                                                                }>Pending</Dropdown.Item>
                                                                <Dropdown.Item onClick={
                                                                    () => {
                                                                        setTitle("Closed")
                                                                        setContact({ ...contact, status: 2 })
                                                                    }
                                                                }>Closed</Dropdown.Item>
                                                            </DropdownButton>
                                                        </InputGroup>
                                                    }</span>
                                            </Form.Group>
                                        </div>
                                        <div className="d-flex">
                                            <Form.Group>
                                                <label className="label-font">Message: </label><span className="ml-2">{contact.message}</span>
                                            </Form.Group>
                                        </div>
                                    </Form>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button
                                        className="btn btn-close"
                                        onClick={() => setContactModel(!contactModel)}
                                        variant="link"
                                    >
                                        Close
                                    </Button>
                                    {
                                        modalType === 3 ?
                                            <Button
                                                className="btn btn-save"
                                                onClick={() => {
                                                    setContactModel(!contactModel);
                                                    let formData = new FormData()
                                                    for (const key in contact)
                                                        formData.append(key, contact[key])
                                                    props.updateContact(formData);
                                                    setTitle("Select Status");
                                                }
                                                }
                                                variant="link"
                                            >
                                                Update
                                            </Button>
                                            :
                                            ''
                                    }
                                </Modal.Footer>
                            </Modal>
                        }
                    </Container>
            }
        </>
    )
}

const mapStateToProps = state => ({
    contacts: state.contacts,
    error: state.error
});

export default connect(mapStateToProps, { beforeContact, getContacts, updateContact })(Contacts);