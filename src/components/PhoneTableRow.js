import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class PhoneTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:4000/phonebook/delete-phonebook/' + this.props.obj._id)
            .then((res) => {
                console.log('phonebook successfully deleted!')
            }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (



            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.mobileNo}</td>
                <td>
                    <Link className="edit-link" to={"/edit-phone/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteStudent} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}