import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreatePhone extends Component {

    constructor(props) {
        super(props)

        // Setting up functions
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeMobileNo = this.onChangeMobileNo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            name: '',
            mobileNo: ''
        }
    }

    onChangeName(e) {
        this.setState({ name: e.target.value })
    }


    onChangeMobileNo(e) {
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
                    <Form.Control type="text" value={this.state.name} onChange={this.onChangeName} />
                </Form.Group>


                <Form.Group controlId="Name">
                    <Form.Label>Mobile No</Form.Label>
                    <Form.Control type="text" value={this.state.mobileNo} onChange={this.onChangeMobileNo} />
                </Form.Group>

                <Button variant="danger" size="lg" block="block" type="submit">
                    Create Contact
                </Button>
            </Form>
        </div>);
    }
}