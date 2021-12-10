import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addFaq, beforeFaq } from './Faq.action';
import FullPageLoader from 'components/FullPageLoader/FullPageLoader';
import 'rc-pagination/assets/index.css';
import { Button, Card, Form, Table, Container, Row, Col, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import validator from 'validator';

const AddFaq = (props) => {

    const [data, setData] = useState({
        title: '',
        desc: ''
    })

    const [msg, setMsg] = useState({
        title: '',
        desc: ''
    })

    const [loader, setLoader] = useState(true)

    useEffect(() => {
        window.scroll(0, 0)
        setLoader(false)
    }, [])

    useEffect(() =>{
        if(props.faqs.createAuth){
            props.beforeFaq()
            props.history.push(`/faq`)
        }
    }, [props.faqs.createAuth])

    const add = () => {
        if (!validator.isEmpty(data.title) && !validator.isEmpty(data.desc)) {
            setMsg({
                title: '',
                desc: ''
            })
            let formData = new FormData()
            for (const key in data)
                formData.append(key, data[key])
            props.addFaq(formData)
        }
        else {
            let title = ''
            let desc = ''
            if (validator.isEmpty(data.title)) {
                title = 'Title Required.'
            }
            if (validator.isEmpty(data.desc)) {
                desc = 'Description Required.'
            }
            setMsg({ title, desc })
        }
    }

    const onEditorChange = (event, editor) => {
        let editorData = editor.getData();
        setData({ ...data, desc: editorData });
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
                                <Card className="pb-3">
                                    <Card.Header>
                                        <Card.Title as="h4">Add FAQ</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col md="6">
                                                <Form.Group>
                                                    <label>Title<span className="text-danger"> *</span></label>
                                                    <Form.Control
                                                        value={data.title ? data.title : ''}
                                                        onChange={(e) => {
                                                            setData({ ...data, title: e.target.value });
                                                        }}
                                                        placeholder="Title"
                                                        type="text"
                                                    ></Form.Control>
                                                    <span className={msg.title ? `` : `d-none`}>
                                                        <label className="pl-1 text-danger">{msg.title}</label>
                                                    </span>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md="12" sm="6">
                                                <label>Text / Description<span className="text-danger"> *</span></label>
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={data.desc ? data.desc : ''}
                                                    content={data.desc ? data.desc : ''}
                                                    onChange={(event, editor) => onEditorChange(event, editor)}
                                                />
                                                <span className={msg.desc ? `` : `d-none`}>
                                                    <label className="pl-1 text-danger">{msg.desc}</label>
                                                </span>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md="12" sm="6">
                                                <Button
                                                    className="btn-fill pull-right"
                                                    type="submit"
                                                    variant="info"
                                                    className="mt-3"
                                                    onClick={add}
                                                >
                                                    Add
                                                </Button>
                                            </Col>
                                        </Row>

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

export default connect(mapStateToProps, { addFaq, beforeFaq })(AddFaq);