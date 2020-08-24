import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditStudent extends Component {

    constructor(props) {
        super(props)

        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentMobileNo = this.onChangeStudentMobileNo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // State
        this.state = {
            name: '',
            mobileNo: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/phonebook/edit-phonebook/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    mobileNo: res.data.mobileNo
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeStudentName(e) {
        this.setState({ name: e.target.value })
    }


    onChangeStudentMobileNo(e) {
        this.setState({ mobileNo: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const studentObject = {
            name: this.state.name,
            mobileNo: this.state.mobileNo
        };

        axios.put('http://localhost:4000/phonebook/update-phonebook/' + this.props.match.params.id, studentObject)
            .then((res) => {
                console.log(res.data)
                console.log('Student successfully updated')
            }).catch((error) => {
            console.log(error)
        })

        // Redirect to Student List
        this.props.history.push('/student-list')
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
                    Update Phonebook
                </Button>
            </Form>
        </div>);
    }
}