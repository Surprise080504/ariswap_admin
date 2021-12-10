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


const Roles = () => {

    const [alert, setAlert] = useState(null);
    const [originalRes, setOriginalRes] = useState([])
    const [tableData, setTableData] = useState([])
    const [roleModal, setRoleModal] = useState(false);

    const [roleName, setRoleName] = useState('')
    //Permission states
    // const [ViewDashboardLatestOrders, setViewDashboardLatestOrders] = useState(false)
    const [EditSetting, setEditSetting] = useState(false)
    const [UpdateSetting, setUpdateSetting] = useState(false)
    const [ViewInvestor, setViewInvestor] = useState(false)
    const [AddInvestor, setAddInvestor] = useState(false)
    const [EditInvestor, setEditInvestor] = useState(false)
    const [DeleteInvestor, setDeleteInvestor] = useState(false)
    // const [ViewMusicians, setViewMusicians] = useState(false)
    // const [AddMusicians, setAddMusicians] = useState(false)
    // const [EditMusicians, setEditMusicians] = useState(false)
    // const [DeleteMusicians, setDeleteMusicians] = useState(false)
    // const [ViewArtists, setViewArtists] = useState(false)
    // const [AddArtists, setAddArtists] = useState(false)
    // const [EditArtists, setEditArtists] = useState(false)
    // const [DeleteArtists, setDeleteArtists] = useState(false)
    const [ViewRole, setViewRole] = useState(false)
    const [AddRole, setAddRole] = useState(false)
    const [EditRole, setEditRole] = useState(false)
    const [DeleteRole, setDeleteRole] = useState(false)
    const [ViewPermission, setViewPermission] = useState(false)
    const [AddPermission, setAddPermission] = useState(false)
    const [EditPermission, setEditPermission] = useState(false)
    const [DeletePermission, setDeletePermission] = useState(false)
    const [ViewCategory, setViewCategory] = useState(false)
    const [AddCategory, setAddCategory] = useState(false)
    const [EditCategory, setEditCategory] = useState(false)
    const [DeleteCategory, setDeleteCategory] = useState(false)
    const [ViewProduct, setViewProduct] = useState(false)
    const [AddProduct, setAddProduct] = useState(false)
    const [EditProduct, setEditProduct] = useState(false)
    const [DeleteProduct, setDeleteProduct] = useState(false)
    const [ViewAuctionProduct, setViewAuctionProduct] = useState(false)
    // const [ViewFaqCategories, setViewFaqCategories] = useState(false)
    // const [AddFaqCategories, setAddFaqCategories] = useState(false)
    // const [EditFaqCategories, setEditFaqCategories] = useState(false)
    // const [DeleteFaqCategories, setDeleteFaqCategories] = useState(false)
    // const [ViewFaq, setViewFaq] = useState(false)
    // const [AddFaq, setAddFaq] = useState(false)
    // const [EditFaq, setEditFaq] = useState(false)
    // const [DeleteFaq, setDeleteFaq] = useState(false)
    // const [ViewBlogCategories, setViewBlogCategories] = useState(false)
    // const [AddBlogCategories, setAddBlogCategories] = useState(false)
    // const [EditBlogCategories, setEditBlogCategories] = useState(false)
    // const [DeleteBlogCategories, setDeleteBlogCategories] = useState(false)
    // const [ViewBlog, setViewBlog] = useState(false)
    // const [AddBlog, setAddBlog] = useState(false)
    // const [EditBlog, setEditBlog] = useState(false)
    // const [DeleteBlog, setDeleteBlog] = useState(false)
    // const [ViewProductReportAbuse, setViewProductReportAbuse] = useState(false)
    // const [AddProductReportAbuse, setAddProductReportAbuse] = useState(false)
    // const [EditProductReportAbuse, setEditProductReportAbuse] = useState(false)
    // const [DeleteProductReportAbuse, setDeleteProductReportAbuse] = useState(false)
    // const [ViewProductReportItems, setViewProductReportItems] = useState(false)
    // const [DeleteProductReportItems, setDeleteProductReportItems] = useState(false)
    // const [ViewOrders, setViewOrders] = useState(false)
    // const [ViewTransactions, setViewTransactions] = useState(false)
    const [ViewBiddingHistory, setViewBiddingHistory] = useState(false)
    // const [ViewReviews, setViewReviews] = useState(false)
    // const [ViewEventLog, setViewEventLog] = useState(false)
    // const [ViewCMSPage, setViewCMSPage] = useState(false)
    // const [AddCMSPage, setAddCMSPage] = useState(false)
    // const [EditCMSPage, setEditCMSPage] = useState(false)
    // const [DeleteCMSPage, setDeleteCMSPage] = useState(false)
    const [ViewContactUsLog, setViewContactUsLog] = useState(false)
    const [DeleteContactUsLog, setDeleteContactUsLog] = useState(false)
    // const [DetailContactUsLog, setDetailContactUsLog] = useState(false)
    // const [ReplyContactUsLog, setReplyContactUsLog] = useState(false)
    // const [ViewMessages, setViewMessages] = useState(false)
    // const [SendMessages, setSendMessages] = useState(false)
    // const [EditReviewsStatus, setEditReviewsStatus] = useState(false)
    // const [ViewFeedbackReview, setViewFeedbackReview] = useState(false)
    const [ViewTemplates, setViewTemplates] = useState(false)
    const [AddTemplates, setAddTemplates] = useState(false)
    const [EditTemplates, setEditTemplates] = useState(false)
    const [DeleteTemplates, setDeleteTemplates] = useState(false)
    // const [ViewVideoGuides, setViewVideoGuides] = useState(false)
    // const [AddVideoGuides, setAddVideoGuides] = useState(false)
    // const [EditVideoGuides, setEditVideoGuides] = useState(false)
    // const [DeleteVideoGuides, setDeleteVideoGuides] = useState(false)
    const [ViewStore, setViewStore] = useState(false)
    const [AddStore, setAddStore] = useState(false)
    const [EditStore, setEditStore] = useState(false)
    const [DeleteStore, setDeleteStore] = useState(false)
    // const [ViewLanguage, setViewLanguage] = useState(false)
    // const [AddLanguage, setAddLanguage] = useState(false)
    // const [EditLanguage, setEditLanguage] = useState(false)
    // const [DeleteLanguage, setDeleteLanguage] = useState(false)
    const [ViewAdminUsers, setViewAdminUsers] = useState(false)
    const [AddAdminUsers, setAddAdminUsers] = useState(false)
    const [EditAdminUsers, setEditAdminUsers] = useState(false)
    const [DeleteAdminUsers, setDeleteAdminUsers] = useState(false)



    const [editCatModal, setEditCatModal] = useState(false);
    const [editCatData, setEditCatData] = useState({
        title: '',
        url: '',
        index: -1,
        status: false
    })



    useEffect(() => {
        window.scroll(0, 0)
        let jsonRes = [
            {
                "RoleName": "Super Admin",
                // "ViewDashboardLatestOrders": true,
                "EditSetting": true,
                "UpdateSetting": true,
                "ViewInvestor": true,
                "AddInvestor": true,
                "EditInvestor": true,
                "DeleteInvestor": true,
                // "ViewMusicians": true,
                // "AddMusicians": true,
                // "EditMusicians": true,
                // "DeleteMusicians": true,
                // "ViewArtists": true,
                // "AddArtists": true,
                // "EditArtists": true,
                // "DeleteArtists": true,
                "ViewRole": true,
                "AddRole": true,
                "EditRole": true,
                "DeleteRole": true,
                "ViewPermission": true,
                "AddPermission": true,
                "EditPermission": true,
                "DeletePermission": true,
                "ViewCategory": true,
                "AddCategory": true,
                "EditCategory": true,
                "DeleteCategory": true,
                "ViewNft": true,
                "AddNft": true,
                "EditNft": true,
                "DeleteNft": true,
                "ViewAuction": true,
                // "ViewFaqCategories": true,
                // "AddFaqCategories": true,
                // "EditFaqCategories": true,
                // "DeleteFaqCategories": true,
                // "ViewFaq": true,
                // "AddFaq": true,
                // "EditFaq": true,
                // "DeleteFaq": true,
                // "ViewBlogCategories": true,
                // "AddBlogCategories": true,
                // "EditBlogCategories": true,
                // "DeleteBlogCategories": true,
                // "ViewBlog": true,
                // "AddBlog": true,
                // "EditBlog": true,
                // "DeleteBlog": true,
                // "ViewProductReportAbuse": true,
                // "AddProductReportAbuse": true,
                // "EditProductReportAbuse": true,
                // "DeleteProductReportAbuse": true,
                // "ViewProductReportItems": true,
                // "DeleteProductReportItems": true,
                // "ViewOrders": true,
                // "ViewTransactions": true,
                "ViewBiddingHistory": true,
                // "ViewReviews": true,
                // "ViewEventLog": true,
                // "ViewCMSPage": true,
                // "AddCMSPage": true,
                // "EditCMSPage": true,
                // "DeleteCMSPage": true,
                "ViewContactUsLog": true,
                "DeleteContactUsLog": true,
                // "DetailContactUsLog": true,
                // "ReplyContactUsLog": true,
                // "ViewMessages": true,
                // "SendMessages": true,
                // "EditReviewsStatus": true,
                // "ViewFeedbackReview": true,
                "ViewTemplates": true,
                "AddTemplates": true,
                "EditTemplates": true,
                "DeleteTemplates": true,
                // "ViewVideoGuides": true,
                // "AddVideoGuides": true,
                // "EditVideoGuides": true,
                // "DeleteVideoGuides": true,
                "ViewStore": true,
                "AddStore": true,
                "EditStore": true,
                "DeleteStore": true,
                // "ViewLanguage": true,
                // "AddLanguage": true,
                // "EditLanguage": true,
                // "DeleteLanguage": true,
                "ViewAdminUsers": true,
                "AddAdminUsers": true,
                "EditAdminUsers": true,
                "DeleteAdminUsers": true
            }
        ]

        setTableData([...jsonRes])


    }, [])


    const hideAlert = () => {
        setAlert(null);
    };

    const fileGeneration = (type) => {
        setAlert(
            <SweetAlert
                success
                style={{ display: "block", marginTop: "-100px" }}
                title="Done"
                onConfirm={() => hideAlert()}
                onCancel={() => hideAlert()}
                confirmBtnBsStyle="info"
            >
                {type} file generated successfully
            </SweetAlert>
        );
    };

    const deleteRole = (e) => {
        let index = e.target.attributes[1].nodeValue
        setAlert(
            <SweetAlert
                warning
                style={{ display: "block", marginTop: "-100px" }}
                title="Are you sure?"
                onConfirm={() => {
                    let temp = tableData
                    if (index > -1) {
                        temp.splice(index, 1);
                    }
                    setTableData([...temp])
                    successDelete()
                }}
                onCancel={() => cancelDetele()}
                confirmBtnBsStyle="info"
                cancelBtnBsStyle="danger"
                confirmBtnText="Yes, delete it!"
                cancelBtnText="Cancel"
                showCancel
            >
                You will not be able to recover this category
            </SweetAlert>
        );
    };

    const successDelete = () => {
        setAlert(
            <SweetAlert
                success
                style={{ display: "block", marginTop: "-100px" }}
                title="Deleted"
                onConfirm={() => hideAlert()}
                onCancel={() => hideAlert()}
                confirmBtnBsStyle="info"
            >
                Category deleted successfully
            </SweetAlert>
        );
    };
    const cancelDetele = () => {
        setAlert(
            <SweetAlert
                danger
                style={{ display: "block", marginTop: "-100px" }}
                title="Cancelled"
                onConfirm={() => hideAlert()}
                onCancel={() => hideAlert()}
                confirmBtnBsStyle="info"
            >
                Category remained undeleted
            </SweetAlert>
        );
    };

    const onCheckboxToggle = (e) => {
        const index = e.target.id.split('status')[1]
        let temp = tableData
        temp[index].status = !temp[index].status
        setTableData([...temp])
    }

    const editCatClick = (e) => {
        let index = e.target.attributes[1].nodeValue
        setEditCatData({
            title: tableData[index].title,
            url: tableData[index].url,
            status: tableData[index].status,
            index: index
        })
        setEditCatModal(!editCatModal)
    }

    const pageChangeHandler = (e) => {
        console.log(e.selected) // current page
        if (e.selected === 1) {
            let filteredRes = []
            for (let i = 0; i < 10; i++) {
                filteredRes.push(originalRes[i])
            }
            setTableData([...filteredRes])
        }
        if (e.selected === 2) {
            let filteredRes = []
            for (let i = 10; i < 20; i++) {
                filteredRes.push(originalRes[i])
            }
            setTableData([...filteredRes])
        }
        if (e.selected === 3) {
            let filteredRes = []
            for (let i = 30; i < 40; i++) {
                filteredRes.push(originalRes[i])
            }
            setTableData([...filteredRes])
        }
    }


    return (
        <>
            {alert}
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="strpied-tabled-with-hover">
                            <Card.Header>
                                <Card.Title as="h4">Roles & Permissions</Card.Title>
                                <Button
                                    variant="info"
                                    className="float-sm-right mr-1"
                                    onClick={() => setRoleModal(!roleModal)}>
                                    Add Role
                                </Button>
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
                                            onClick={() => { }}>
                                            Submit
                                        </Button>
                                    </Col>
                                </Form.Group>
                                <Table className="table-hover table-striped w-full">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Role</th>
                                            <th>Permissions</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tableData ? tableData.map((item, index) => {

                                                let permissions = ''
                                                for (let key of Object.keys(item)) {
                                                    if (item[key] && key !== 'RoleName') {

                                                        //Add spaces 
                                                        key = key.replace(/(_|-)/g, ' ').trim().replace(/\w\S*/g, function (str) {
                                                            return str.charAt(0).toUpperCase() + str.substr(1)
                                                        }).replace(/([a-z])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')

                                                        permissions = permissions + key + ', '
                                                    }
                                                }
                                                return (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{item.RoleName}</td>
                                                        <td>{permissions}</td>
                                                        <td className="td-actions">
                                                            <OverlayTrigger
                                                                href="#pablo"
                                                                overlay={
                                                                    <Tooltip id="tooltip-897993903">
                                                                        Edit Role
                                                                    </Tooltip>
                                                                }
                                                            >
                                                                <Button
                                                                    className="btn-link btn-xs"
                                                                    href="#pablo"
                                                                    // onClick={}
                                                                    variant="success"
                                                                >
                                                                    <i className="fas fa-edit" index={index}></i>
                                                                </Button>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger
                                                                href="#pablo"
                                                                overlay={
                                                                    <Tooltip id="tooltip-481441726">Remove Role</Tooltip>
                                                                }
                                                            >
                                                                <Button
                                                                    className="btn-link btn-xs"
                                                                    href="#pablo"
                                                                    // onClick={
                                                                    // }
                                                                    variant="danger"
                                                                >
                                                                    <i className="fas fa-times" index={index}></i>
                                                                </Button>
                                                            </OverlayTrigger>
                                                        </td>
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


                <Modal
                    className="modal-primary"
                    onHide={() => setRoleModal(!roleModal)}
                    show={roleModal}
                >
                    <Modal.Header className="justify-content-center">
                        {/* <div className="modal-profile">
                    <i className="nc-icon nc-simple-add"></i>
                    </div> */}
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <label>Role Name</label>
                                <Form.Control
                                    placeholder="Role Name"
                                    type="text"
                                    onChange={(e) => setRoleName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Check>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            onChange={
                                                (e) => {
                                                    if (e.target.checked) {

                                                        // setViewDashboardLatestOrders(true);
                                                        setEditSetting(true);
                                                        setUpdateSetting(true);
                                                        setViewInvestor(true);
                                                        setAddInvestor(true);
                                                        setEditInvestor(true);
                                                        setDeleteInvestor(true);
                                                        // setViewMusicians(true);
                                                        // setAddMusicians(true);
                                                        // setEditMusicians(true);
                                                        // setDeleteMusicians(true);
                                                        // setViewArtists(true);
                                                        // setAddArtists(true);
                                                        // setEditArtists(true);
                                                        // setDeleteArtists(true);
                                                        setViewRole(true);
                                                        setAddRole(true);
                                                        setEditRole(true);
                                                        setDeleteRole(true);
                                                        setViewPermission(true);
                                                        setAddPermission(true);
                                                        setEditPermission(true);
                                                        setDeletePermission(true);
                                                        setViewCategory(true);
                                                        setAddCategory(true);
                                                        setEditCategory(true);
                                                        setDeleteCategory(true);
                                                        setViewProduct(true);
                                                        setAddProduct(true);
                                                        setEditProduct(true);
                                                        setDeleteProduct(true);
                                                        setViewAuctionProduct(true);
                                                        // setViewFaqCategories(true);
                                                        // setAddFaqCategories(true);
                                                        // setEditFaqCategories(true);
                                                        // setDeleteFaqCategories(true);
                                                        // setViewFaq(true);
                                                        // setAddFaq(true);
                                                        // setEditFaq(true);
                                                        // setDeleteFaq(true);
                                                        // setViewBlogCategories(true);
                                                        // setAddBlogCategories(true);
                                                        // setEditBlogCategories(true);
                                                        // setDeleteBlogCategories(true);
                                                        // setViewBlog(true);
                                                        // setAddBlog(true);
                                                        // setEditBlog(true);
                                                        // setDeleteBlog(true);
                                                        // setViewProductReportAbuse(true);
                                                        // setAddProductReportAbuse(true);
                                                        // setEditProductReportAbuse(true);
                                                        // setDeleteProductReportAbuse(true);
                                                        // setViewProductReportItems(true);
                                                        // setDeleteProductReportItems(true);
                                                        // setViewOrders(true);
                                                        // setViewTransactions(true);
                                                        setViewBiddingHistory(true);
                                                        // setViewReviews(true);
                                                        // setViewEventLog(true);
                                                        // setViewCMSPage(true);
                                                        // setAddCMSPage(true);
                                                        // setEditCMSPage(true);
                                                        // setDeleteCMSPage(true);
                                                        setViewContactUsLog(true);
                                                        setDeleteContactUsLog(true);
                                                        // setDetailContactUsLog(true);
                                                        // setReplyContactUsLog(true);
                                                        // setViewMessages(true);
                                                        // setSendMessages(true);
                                                        // setEditReviewsStatus(true);
                                                        // setViewFeedbackReview(true);
                                                        setViewTemplates(true);
                                                        setAddTemplates(true);
                                                        setEditTemplates(true);
                                                        setDeleteTemplates(true);
                                                        // setViewVideoGuides(true);
                                                        // setAddVideoGuides(true);
                                                        // setEditVideoGuides(true);
                                                        // setDeleteVideoGuides(true);
                                                        setViewStore(true);
                                                        setAddStore(true);
                                                        setEditStore(true);
                                                        setDeleteStore(true);
                                                        // setViewLanguage(true);
                                                        // setAddLanguage(true);
                                                        // setEditLanguage(true);
                                                        // setDeleteLanguage(true);
                                                        setViewAdminUsers(true);
                                                        setAddAdminUsers(true);
                                                        setEditAdminUsers(true);
                                                        setDeleteAdminUsers(true);

                                                    }
                                                    else {
                                                        // setViewDashboardLatestOrders(false);
                                                        setEditSetting(false);
                                                        setUpdateSetting(false);
                                                        setViewInvestor(false);
                                                        setAddInvestor(false);
                                                        setEditInvestor(false);
                                                        setDeleteInvestor(false);
                                                        // setViewMusicians(false);
                                                        // setAddMusicians(false);
                                                        // setEditMusicians(false);
                                                        // setDeleteMusicians(false);
                                                        // setViewArtists(false);
                                                        // setAddArtists(false);
                                                        // setEditArtists(false);
                                                        // setDeleteArtists(false);
                                                        setViewRole(false);
                                                        setAddRole(false);
                                                        setEditRole(false);
                                                        setDeleteRole(false);
                                                        setViewPermission(false);
                                                        setAddPermission(false);
                                                        setEditPermission(false);
                                                        setDeletePermission(false);
                                                        setViewCategory(false);
                                                        setAddCategory(false);
                                                        setEditCategory(false);
                                                        setDeleteCategory(false);
                                                        setViewProduct(false);
                                                        setAddProduct(false);
                                                        setEditProduct(false);
                                                        setDeleteProduct(false);
                                                        setViewAuctionProduct(false);
                                                        // setViewFaqCategories(false);
                                                        // setAddFaqCategories(false);
                                                        // setEditFaqCategories(false);
                                                        // setDeleteFaqCategories(false);
                                                        // setViewFaq(false);
                                                        // setAddFaq(false);
                                                        // setEditFaq(false);
                                                        // setDeleteFaq(false);
                                                        // setViewBlogCategories(false);
                                                        // setAddBlogCategories(false);
                                                        // setEditBlogCategories(false);
                                                        // setDeleteBlogCategories(false);
                                                        // setViewBlog(false);
                                                        // setAddBlog(false);
                                                        // setEditBlog(false);
                                                        // setDeleteBlog(false);
                                                        // setViewProductReportAbuse(false);
                                                        // setAddProductReportAbuse(false);
                                                        // setEditProductReportAbuse(false);
                                                        // setDeleteProductReportAbuse(false);
                                                        // setViewProductReportItems(false);
                                                        // setDeleteProductReportItems(false);
                                                        // setViewOrders(false);
                                                        // setViewTransactions(false);
                                                        setViewBiddingHistory(false);
                                                        // setViewReviews(false);
                                                        // setViewEventLog(false);
                                                        // setViewCMSPage(false);
                                                        // setAddCMSPage(false);
                                                        // setEditCMSPage(false);
                                                        // setDeleteCMSPage(false);
                                                        setViewContactUsLog(false);
                                                        setDeleteContactUsLog(false);
                                                        // setDetailContactUsLog(false);
                                                        // setReplyContactUsLog(false);
                                                        // setViewMessages(false);
                                                        // setSendMessages(false);
                                                        // setEditReviewsStatus(false);
                                                        // setViewFeedbackReview(false);
                                                        setViewTemplates(false);
                                                        setAddTemplates(false);
                                                        setEditTemplates(false);
                                                        setDeleteTemplates(false);
                                                        // setViewVideoGuides(false);
                                                        // setAddVideoGuides(false);
                                                        // setEditVideoGuides(false);
                                                        // setDeleteVideoGuides(false);
                                                        setViewStore(false);
                                                        setAddStore(false);
                                                        setEditStore(false);
                                                        setDeleteStore(false);
                                                        // setViewLanguage(false);
                                                        // setAddLanguage(false);
                                                        // setEditLanguage(false);
                                                        // setDeleteLanguage(false);
                                                        setViewAdminUsers(false);
                                                        setAddAdminUsers(false);
                                                        setEditAdminUsers(false);
                                                        setDeleteAdminUsers(false);
                                                    }
                                                }

                                            }
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Select All
                                    </Form.Check.Label>
                                </Form.Check>
                            </Form.Group>
                            <hr />
                            <Form.Group>
                                <label>Permissions</label>
                                <Form.Check>

                                    {/* <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={ViewDashboardLatestOrders}
                          onChange={(e) => setViewDashboardLatestOrders(e.target.checked)}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        View Dashboard Latest Orders
                      </Form.Check.Label> */}


                                    <label className="d-block">Settings</label>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={EditSetting}
                                            onChange={(e) => setEditSetting(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Edit Setting
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={UpdateSetting}
                                            onChange={(e) => setUpdateSetting(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Update Setting
                                    </Form.Check.Label>

                                    <label className="d-block pt-3">Investors</label>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={ViewInvestor}
                                            onChange={(e) => setViewInvestor(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        View Investor
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={AddInvestor}
                                            onChange={(e) => setAddInvestor(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Add Investor
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={EditInvestor}
                                            onChange={(e) => setEditInvestor(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Edit Investor
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={DeleteInvestor}
                                            onChange={(e) => setDeleteInvestor({
                                                DeleteInvestor: e.target.checked
                                            })}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Delete Investor
                                    </Form.Check.Label>

                                    {/* <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={ViewMusicians}
                          onChange={(e) => {setViewMusicians(
                          e.target.checked
                          );
                        }}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        View Musicians
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={AddMusicians}
                          onChange={(e) => setAddMusicians(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Add Musicians
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={EditMusicians}
                          onChange={(e) => setEditMusicians(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Edit Musicians
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={DeleteMusicians}
                          onChange={(e) => setDeleteMusicians(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Delete Musicians
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={ViewArtists}
                          onChange={(e) => setViewArtists(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        View Artists
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={AddArtists}
                          onChange={(e) => setAddArtists(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Add Artists
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={EditArtists}
                          onChange={(e) => setEditArtists(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Edit Artists
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={DeleteArtists}
                          onChange={(e) => setDeleteArtists(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Delete Artists
                      </Form.Check.Label> */}

                                    <label className="d-block pt-3">Role</label>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={ViewRole}
                                            onChange={(e) => setViewRole(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        View Role
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={AddRole}
                                            onChange={(e) => setAddRole(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Add Role
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={EditRole}
                                            onChange={(e) => setEditRole(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Edit Role
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={DeleteRole}
                                            onChange={(e) => setDeleteRole(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Delete Role
                                    </Form.Check.Label>

                                    <label className="d-block pt-3">Permission</label>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={ViewPermission}
                                            onChange={(e) => setViewPermission(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        View Permission
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={AddPermission}
                                            onChange={(e) => setAddPermission(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Add Permission
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={EditPermission}
                                            onChange={(e) => setEditPermission(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Edit Permission
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={DeletePermission}
                                            onChange={(e) => setDeletePermission(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Delete Permission
                                    </Form.Check.Label>

                                    <label className="d-block pt-3">Category</label>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={ViewCategory}
                                            onChange={(e) => setViewCategory(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        View Category
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={AddCategory}
                                            onChange={(e) => setAddCategory(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Add Category
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={EditCategory}
                                            onChange={(e) => setEditCategory(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Edit Category
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={DeleteCategory}
                                            onChange={(e) => setDeleteCategory(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Delete Category
                                    </Form.Check.Label>

                                    <label className="d-block pt-3">Nft</label>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={ViewProduct}
                                            onChange={(e) => setViewProduct(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        View NFT
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={AddProduct}
                                            onChange={(e) => setAddProduct(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Add NFT
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={EditProduct}
                                            onChange={(e) => setEditProduct(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Edit NFT
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={DeleteProduct}
                                            onChange={(e) => setDeleteProduct(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Delete NFT
                                    </Form.Check.Label>

                                    <label className="d-block pt-3">Auction</label>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={ViewAuctionProduct}
                                            onChange={(e) => setViewAuctionProduct(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        View Auction
                                    </Form.Check.Label>

                                    {/* <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={ViewFaqCategories}
                          onChange={(e) => setViewFaqCategories(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        View Faq Categories
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={AddFaqCategories}
                          onChange={(e) => setAddFaqCategories(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Add Faq Categories
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={EditFaqCategories}
                          onChange={(e) => setEditFaqCategories(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Edit Faq Categories
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={DeleteFaqCategories}
                          onChange={(e) => setDeleteFaqCategories(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Delete Faq Categories
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={ViewFaq}
                          onChange={(e) => setViewFaq(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        View Faq
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={AddFaq}
                          onChange={(e) => setAddFaq(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Add Faq
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={EditFaq}
                          onChange={(e) => setEditFaq(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Edit Faq
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={DeleteFaq}
                          onChange={(e) => setDeleteFaq(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Delete Faq
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={ViewBlogCategories}
                          onChange={(e) => setViewBlogCategories(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        View Blog Categories
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={AddBlogCategories}
                          onChange={(e) => setAddBlogCategories(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Add Blog Categories
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={EditBlogCategories}
                          onChange={(e) => setEditBlogCategories(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Edit Blog Categories
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={DeleteBlogCategories}
                          onChange={(e) => setDeleteBlogCategories(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Delete Blog Categories
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={ViewBlog}
                          onChange={(e) => setViewBlog(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        View Blog
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={AddBlog}
                          onChange={(e) => setAddBlog(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Add Blog
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={EditBlog}
                          onChange={(e) => setEditBlog(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Edit Blog
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={DeleteBlog}
                          onChange={(e) => setDeleteBlog(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Delete Blog
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={ViewProductReportAbuse}
                          onChange={(e) => setViewProductReportAbuse(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        View Product Report Abuse
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={AddProductReportAbuse}
                          onChange={(e) => setAddProductReportAbuse(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Add Product Report Abuse
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={EditProductReportAbuse}
                          onChange={(e) => setEditProductReportAbuse(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Edit Product Report Abuse
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={DeleteProductReportAbuse}
                          onChange={(e) => setDeleteProductReportAbuse(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Delete Product Report Abuse
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={ViewProductReportItems}
                          onChange={(e) => setViewProductReportItems(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        View Product Report Items
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={DeleteProductReportItems}
                          onChange={(e) => setDeleteProductReportItems(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Delete Product Report Items
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={ViewOrders}
                          onChange={(e) => setViewOrders(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        View Orders
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={ViewTransactions}
                          onChange={(e) => setViewTransactions(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        View Transactions
                      </Form.Check.Label> */}

                                    <label className="d-block pt-3">Bidding History</label>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={ViewBiddingHistory}
                                            onChange={(e) => setViewBiddingHistory(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        View Bidding History
                                    </Form.Check.Label>

                                    {/* <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={ViewReviews}
                          onChange={(e) => setViewReviews(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        View Reviews
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={ViewEventLog}
                          onChange={(e) => setViewEventLog(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        View Event Log
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={ViewCMSPage}
                          onChange={(e) => setViewCMSPage(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        View CMS Page
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={AddCMSPage}
                          onChange={(e) => setAddCMSPage(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Add CMS Page
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={EditCMSPage}
                          onChange={(e) => setEditCMSPage(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Edit CMS Page
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={DeleteCMSPage}
                          onChange={(e) => setDeleteCMSPage(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Delete CMS Page
                      </Form.Check.Label> */}

                                    <label className="d-block pt-3">Contact Us Log</label>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={ViewContactUsLog}
                                            onChange={(e) => setViewContactUsLog(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        View Contact Us Log
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={DeleteContactUsLog}
                                            onChange={(e) => setDeleteContactUsLog(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Delete Contact Us Log
                                    </Form.Check.Label>

                                    {/* <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={DetailContactUsLog}
                          onChange={(e) => setDetailContactUsLog(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Detail Contact Us Log
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={ReplyContactUsLog}
                          onChange={(e) => setReplyContactUsLog(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Reply Contact Us Log
                      </Form.Check.Label> */}

                                    {/* <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={ViewMessages}
                          onChange={(e) => setViewMessages(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        View Messages
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={SendMessages}
                          onChange={(e) => setSendMessages(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Send Messages
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={EditReviewsStatus}
                          onChange={(e) => setEditReviewsStatus(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Edit Reviews Status
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={ViewFeedbackReview}
                          onChange={(e) => setViewFeedbackReview(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        View Feedback Review
                      </Form.Check.Label> */}

                                    <label className="d-block pt-3">Templates</label>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={ViewTemplates}
                                            onChange={(e) => setViewTemplates(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        View Templates
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={AddTemplates}
                                            onChange={(e) => setAddTemplates(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Add Templates
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={EditTemplates}
                                            onChange={(e) => setEditTemplates(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Edit Templates
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={DeleteTemplates}
                                            onChange={(e) => setDeleteTemplates(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Delete Templates
                                    </Form.Check.Label>

                                    {/* <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={ViewVideoGuides}
                          onChange={(e) => setViewVideoGuides(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        View Video Guides
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={AddVideoGuides}
                          onChange={(e) => setAddVideoGuides(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Add Video Guides
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={EditVideoGuides}
                          onChange={(e) => setEditVideoGuides(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Edit Video Guides
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={DeleteVideoGuides}
                          onChange={(e) => setDeleteVideoGuides(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Delete Video Guides
                      </Form.Check.Label> */}

                                    <label className="d-block pt-3">Store</label>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={ViewStore}
                                            onChange={(e) => setViewStore(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        View Store
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={AddStore}
                                            onChange={(e) => setAddStore(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Add Store
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={EditStore}
                                            onChange={(e) => setEditStore(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Edit Store
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={DeleteStore}
                                            onChange={(e) => setDeleteStore(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Delete Store
                                    </Form.Check.Label>

                                    {/* <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={ViewLanguage}
                          onChange={(e) => setViewLanguage(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        View Language
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={AddLanguage}
                          onChange={(e) => setAddLanguage(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Add Language
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={EditLanguage}
                          onChange={(e) => setEditLanguage(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Edit Language
                      </Form.Check.Label>

                      <Form.Check.Label>
                        <Form.Check.Input
                          defaultValue=""
                          type="checkbox"
                          checked={DeleteLanguage}
                          onChange={(e) => setDeleteLanguage(
                          e.target.checked
                          )}
                        ></Form.Check.Input>
                        <span className="form-check-sign"></span>
                        Delete Language
                      </Form.Check.Label> */}

                                    <label className="d-block pt-3">Admin Users</label>
                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={ViewAdminUsers}
                                            onChange={(e) => setViewAdminUsers(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        View Admin Users
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={AddAdminUsers}
                                            onChange={(e) => setAddAdminUsers(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Add Admin Users
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={EditAdminUsers}
                                            onChange={(e) => setEditAdminUsers(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Edit Admin Users
                                    </Form.Check.Label>

                                    <Form.Check.Label>
                                        <Form.Check.Input
                                            defaultValue=""
                                            type="checkbox"
                                            checked={DeleteAdminUsers}
                                            onChange={(e) => setDeleteAdminUsers(
                                                e.target.checked
                                            )}
                                        ></Form.Check.Input>
                                        <span className="form-check-sign"></span>
                                        Delete Admin Users
                                    </Form.Check.Label>
                                </Form.Check>
                            </Form.Group>

                        </Form>


                    </Modal.Body>
                    <div className="modal-footer">
                        <Button
                            className="btn btn-close"
                            onClick={() => setRoleModal(!roleModal)}
                            variant=""
                        >
                            Close
                        </Button>
                        <Button
                            className="btn btn-done"
                            onClick={() => {
                                //   if(roleName !== ''){

                                //     let payload = {
                                //       RoleName: roleName,
                                //       ViewDashboardLatestOrders,
                                //       EditSetting,
                                //       UpdateSetting,
                                //       ViewInvestor,
                                //       AddInvestor,
                                //       EditInvestor,
                                //       DeleteInvestor,
                                //       ViewMusicians,
                                //       AddMusicians,
                                //       EditMusicians,
                                //       DeleteMusicians,
                                //       ViewArtists,
                                //       AddArtists,
                                //       EditArtists,
                                //       DeleteArtists,
                                //       ViewRole,
                                //       AddRole,
                                //       EditRole,
                                //       DeleteRole,
                                //       ViewPermission,
                                //       AddPermission,
                                //       EditPermission,
                                //       DeletePermission,
                                //       ViewCategory,
                                //       AddCategory,
                                //       EditCategory,
                                //       DeleteCategory,
                                //       ViewProduct,
                                //       AddProduct,
                                //       EditProduct,
                                //       DeleteProduct,
                                //       ViewAuctionProduct,
                                //       ViewFaqCategories,
                                //       AddFaqCategories,
                                //       EditFaqCategories,
                                //       DeleteFaqCategories,
                                //       ViewFaq,
                                //       AddFaq,
                                //       EditFaq,
                                //       DeleteFaq,
                                //       ViewBlogCategories,
                                //       AddBlogCategories,
                                //       EditBlogCategories,
                                //       DeleteBlogCategories,
                                //       ViewBlog,
                                //       AddBlog,
                                //       EditBlog,
                                //       DeleteBlog,
                                //       ViewProductReportAbuse,
                                //       AddProductReportAbuse,
                                //       EditProductReportAbuse,
                                //       DeleteProductReportAbuse,
                                //       ViewProductReportItems,
                                //       DeleteProductReportItems,
                                //       ViewOrders,
                                //       ViewTransactions,
                                //       ViewBiddingHistory,
                                //       ViewReviews,
                                //       ViewEventLog,
                                //       ViewCMSPage,
                                //       AddCMSPage,
                                //       EditCMSPage,
                                //       DeleteCMSPage,
                                //       ViewContactUsLog,
                                //       DeleteContactUsLog,
                                //       DetailContactUsLog,
                                //       ReplyContactUsLog,
                                //       ViewMessages,
                                //       SendMessages,
                                //       EditReviewsStatus,
                                //       ViewFeedbackReview,
                                //       ViewTemplates,
                                //       AddTemplates,
                                //       EditTemplates,
                                //       DeleteTemplates,
                                //       ViewVideoGuides,
                                //       AddVideoGuides,
                                //       EditVideoGuides,
                                //       DeleteVideoGuides,
                                //       ViewStore,
                                //       AddStore,
                                //       EditStore,
                                //       DeleteStore,
                                //       ViewLanguage,
                                //       AddLanguage,
                                //       EditLanguage,
                                //       DeleteLanguage,
                                //       ViewAdminUsers,
                                //       AddAdminUsers,
                                //       EditAdminUsers,
                                //       DeleteAdminUsers
                                //     }

                                //     let itemsCheck = false
                                //     for (let key of Object.keys(payload)) {
                                //       if(payload[key] && key !== 'RoleName'){
                                //         if(payload[key]){
                                //           itemsCheck = true
                                //         }
                                //       }
                                //     }
                                //     if(itemsCheck){



                                //     setTableData([payload, ...tableData])


                                //     setViewDashboardLatestOrders(false);
                                //     setEditSetting(false);
                                //     setUpdateSetting(false);
                                //     setViewInvestor(false);
                                //     setAddInvestor(false);
                                //     setEditInvestor(false);
                                //     setDeleteInvestor(false);
                                //     setViewMusicians(false);
                                //     setAddMusicians(false);
                                //     setEditMusicians(false);
                                //     setDeleteMusicians(false);
                                //     setViewArtists(false);
                                //     setAddArtists(false);
                                //     setEditArtists(false);
                                //     setDeleteArtists(false);
                                //     setViewRole(false);
                                //     setAddRole(false);
                                //     setEditRole(false);
                                //     setDeleteRole(false);
                                //     setViewPermission(false);
                                //     setAddPermission(false);
                                //     setEditPermission(false);
                                //     setDeletePermission(false);
                                //     setViewCategory(false);
                                //     setAddCategory(false);
                                //     setEditCategory(false);
                                //     setDeleteCategory(false);
                                //     setViewProduct(false);
                                //     setAddProduct(false);
                                //     setEditProduct(false);
                                //     setDeleteProduct(false);
                                //     setViewAuctionProduct(false);
                                //     setViewFaqCategories(false);
                                //     setAddFaqCategories(false);
                                //     setEditFaqCategories(false);
                                //     setDeleteFaqCategories(false);
                                //     setViewFaq(false);
                                //     setAddFaq(false);
                                //     setEditFaq(false);
                                //     setDeleteFaq(false);
                                //     setViewBlogCategories(false);
                                //     setAddBlogCategories(false);
                                //     setEditBlogCategories(false);
                                //     setDeleteBlogCategories(false);
                                //     setViewBlog(false);
                                //     setAddBlog(false);
                                //     setEditBlog(false);
                                //     setDeleteBlog(false);
                                //     setViewProductReportAbuse(false);
                                //     setAddProductReportAbuse(false);
                                //     setEditProductReportAbuse(false);
                                //     setDeleteProductReportAbuse(false);
                                //     setViewProductReportItems(false);
                                //     setDeleteProductReportItems(false);
                                //     setViewOrders(false);
                                //     setViewTransactions(false);
                                //     setViewBiddingHistory(false);
                                //     setViewReviews(false);
                                //     setViewEventLog(false);
                                //     setViewCMSPage(false);
                                //     setAddCMSPage(false);
                                //     setEditCMSPage(false);
                                //     setDeleteCMSPage(false);
                                //     setViewContactUsLog(false);
                                //     setDeleteContactUsLog(false);
                                //     setDetailContactUsLog(false);
                                //     setReplyContactUsLog(false);
                                //     setViewMessages(false);
                                //     setSendMessages(false);
                                //     setEditReviewsStatus(false);
                                //     setViewFeedbackReview(false);
                                //     setViewTemplates(false);
                                //     setAddTemplates(false);
                                //     setEditTemplates(false);
                                //     setDeleteTemplates(false);
                                //     setViewVideoGuides(false);
                                //     setAddVideoGuides(false);
                                //     setEditVideoGuides(false);
                                //     setDeleteVideoGuides(false);
                                //     setViewStore(false);
                                //     setAddStore(false);
                                //     setEditStore(false);
                                //     setDeleteStore(false);
                                //     setViewLanguage(false);
                                //     setAddLanguage(false);
                                //     setEditLanguage(false);
                                //     setDeleteLanguage(false);
                                //     setViewAdminUsers(false);
                                //     setAddAdminUsers(false);
                                //     setEditAdminUsers(false);
                                //     setDeleteAdminUsers(false);

                                //     setRoleModal(!roleModal)
                                //   }
                                // }


                            }}
                            variant=""
                        >
                            Done
                        </Button>
                    </div>
                </Modal>

            </Container>
        </>
    )
}

export default Roles
