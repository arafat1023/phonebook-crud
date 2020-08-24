import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateStudent extends Component {

    constructor(props) {
        super(props)

        // Setting up functions
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentMobileNo = this.onChangeStudentMobileNo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            name: '',
            mobileNo: ''
        }
    }

    onChangeStudentName(e) {
        this.setState({ name: e.target.value })
    }


    onChangeStudentMobileNo(e) {
        this.setState({ mobileNo: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const phoneObject = {
            name: this.state.name,
            mobileNo: this.state.mobileNo
        };

        axios.post('http://localhost:4000/phonebook/create-phonebook', phoneObject)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            mobileNo: ''
        });
    }

    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
                </Form.Group>


                <Form.Group controlId="Name">
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control type="text" value={this.state.mobileNo} onChange={this.onChangeStudentMobileNo} />
                </Form.Group>

                <Button variant="danger" size="lg" block="block" type="submit">
                    Create Student
                </Button>
            </Form>
        </div>);
    }
}