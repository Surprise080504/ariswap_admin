import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ENV } from '../../config/config';
import { beforeCategory, getCategories, upsertCategory, deleteCategory } from './Categories.action';
import FullPageLoader from 'components/FullPageLoader/FullPageLoader';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import moment from 'moment';
import $ from 'jquery';
import Swal from 'sweetalert2';
import { Button, Card, Form, Table, Container, Row, Col, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";

const Categories = (props) => {
    const [categories, setCategories] = useState(null)
    const [pagination, setPagination] = useState(null)
    const [catModal, setCatModal] = useState(false)
    const [modalType, setModalType] = useState(0)
    const [category, setCategory] = useState(null)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        window.scroll(0, 0)
        props.getCategories()
    }, [])

    useEffect(() => {
        if (props.category.getCatAuth) {
            const { categories, pagination } = props.category
            setCategories(categories)
            setPagination(pagination)
            props.beforeCategory()
        }
    }, [props.category.getCatAuth])

    useEffect(() => {
        if (categories) {
            setLoader(false)
        }
    }, [categories])

    // when category is created or updated
    useEffect(() => {
        if (props.category.upsertCatAuth) {
            let catRes = props.category.category
            if (catRes.success) {
                if (modalType === 1)
                    setCategories([catRes.category, ...categories])
                else if (modalType === 2) {
                    const index = categories.findIndex((elem) => String(elem._id) === String(catRes.category._id))
                    if (index > -1) {
                        let catData = categories
                        catData[index] = catRes.category
                        setCategories([...catData])
                    }
                }

                setLoader(false)
                setCatModal(!catModal)
            } else
                setLoader(false)

            props.beforeCategory()
        }
    }, [props.category.upsertCatAuth])

    // when category is deleted
    useEffect(() => {
        if (props.category.deleteCatAuth) {
            const catRes = props.category.category
            if (catRes.success && pagination)
                onPageChange(pagination.page)
            props.beforeCategory()
        }
    }, [props.category.deleteCatAuth])

    // when an error is received
    useEffect(() => {
        if (props.error.error)
            setLoader(false)
    }, [props.error.error])

    // set modal type
    const setModal = (type = 0, catId = null) => {
        setCatModal(!catModal)
        setModalType(type)
        setLoader(false)
        // add category
        if (type === 1) {
            let category = {
                name: '', image: '', description: '', status: false
            }
            setCategory(category)
        }
        // edit category
        else if (type === 2 && catId)
            getCategory(catId)
    }

    const onChange = (e) => {
        let { name, value } = e.target

        // if status is provided
        if (name === 'status')
            value = !category.status

        let data = category
        data[name] = value

        setCategory({ ...data })
    }

    const onFileChange = (e) => {
        let file = e.target.files[0]
        let fileId = e.target.id
        if (file)
            if (file.type.includes('image')) {
                let data = category
                data = { ...data, [e.target.name]: file }
                setCategory(data)
                if (file) {
                    var reader = new FileReader()
                    reader.onload = function (e) {
                        $(`#category-${fileId}`).attr('src', e.target.result)
                        $('#category-image-label').html('File selected')
                    }
                    reader.readAsDataURL(file)
                }
            } else {
                // TODO
                // $(`#category-${fileId}`).attr('src', placeholderImg)
                file = {}
            }
    }

    const submit = async () => {
        if (category.name && (category.image || modalType === 2)) {
            setLoader(true)
            var formData = new FormData()
            for (const key in category)
                formData.append(key, category[key])

            props.upsertCategory(`category/${modalType === 1 ? 'create' : 'edit'}`, formData, modalType === 1 ? 'POST' : 'PUT')
        }
    }

    const deleteCategory = (catId) => {
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
                props.deleteCategory(catId)
            }
        })
    }

    const getCategory = async (catId) => {
        setLoader(true)
        const catData = await categories.find((elem) => String(elem._id) === String(catId))
        if (catData)
            setCategory({ ...catData })
        setLoader(false)
    }

    const onPageChange = async (page) => {
        setLoader(true)
        const qs = ENV.objectToQueryString({ page })
        props.getCategories(qs)
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
                                        <Card.Title as="h4">Categories</Card.Title>
                                        <p className="card-category">List of Categories</p>
                                        <Button
                                            variant="info"
                                            className="float-sm-right"
                                            onClick={() => setModal(1)}>
                                            Add Category
                                        </Button>
                                        <br></br>
                                    </Card.Header>
                                    <Card.Body className="table-full-width">
                                        <Table className="table-bigboy">
                                            <thead>
                                                <tr>
                                                    <th className="text-center">#</th>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th className="text-description">Description</th>
                                                    <th className="text-right">Created At</th>
                                                    <th className="text-center">Status</th>
                                                    <th className="text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    categories && categories.length ?
                                                        categories.map((category, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td className="text-center">{pagination && ((pagination.limit * pagination.page) - pagination.limit) + index + 1}</td>
                                                                    <td>
                                                                        <div className="img-container">
                                                                            <img alt="Category Image" src={category.image} />
                                                                        </div>
                                                                    </td>
                                                                    <td className="td-name">
                                                                        {category.name}
                                                                    </td>
                                                                    <td>
                                                                        {category.description ? category.description : 'N/A'}
                                                                    </td>
                                                                    <td className="td-number">{moment(category.createdAt).format('DD MMM YYYY')}</td>
                                                                    <td className="text-center">{category.status ? 'Active' : 'Inactive'}</td>
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
                                                                                onClick={() => setModal(2, category._id)}
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
                                                                                onClick={() => deleteCategory(category._id)}
                                                                            >
                                                                                <i className="fas fa-times"></i>
                                                                            </Button>
                                                                        </OverlayTrigger>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                        :
                                                        <tr><td colSpan="7" className="text-center">No categories found</td></tr>
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
                            modalType > 0 && category &&
                            <Modal className="modal-primary" onHide={() => setCatModal(!catModal)} show={catModal}>
                                <Modal.Header className="justify-content-center">
                                    <Row>{modalType === 1 ? 'Add' : modalType === 2 ? 'Edit' : ''} Category</Row>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group>
                                            <label>Name <span className="text-danger">*</span></label>
                                            <Form.Control
                                                placeholder="Enter name"
                                                type="text"
                                                name="name"
                                                onChange={(e) => onChange(e)}
                                                defaultValue={category.name}
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <label>Description</label>
                                            <textarea
                                                placeholder="Enter Description"
                                                type="text"
                                                name="description"
                                                onChange={(e) => onChange(e)}
                                                defaultValue={category.description}
                                                className="form-control"
                                                rows={5}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <label>Image {modalType === 1 && <span className="text-danger">*</span>}</label>
                                            <div className="input-group form-group">
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" id="category-image" accept=".png,.jpeg,.jpg" onChange={(e) => onFileChange(e)} name="image" />
                                                    <label id="category-image-label" className="custom-file-label" htmlFor="image">Choose file</label>
                                                </div>
                                            </div>
                                        </Form.Group>
                                        <Form.Group>
                                            <label>Status</label>
                                            <Form.Check
                                                type="switch"
                                                id="category-status"
                                                className="mb-1"
                                                onChange={(e) => onChange(e)}
                                                name="status"
                                                defaultValue={false}
                                                checked={category.status}
                                            />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button
                                        className="btn btn-close"
                                        onClick={() => setCatModal(!catModal)}
                                        variant="link"
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        className="btn btn-save"
                                        onClick={() => submit()}
                                        variant="link"
                                        disabled={loader}
                                    >
                                        Save
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
    category: state.category,
    error: state.error
});

export default connect(mapStateToProps, { beforeCategory, getCategories, upsertCategory, deleteCategory })(Categories);