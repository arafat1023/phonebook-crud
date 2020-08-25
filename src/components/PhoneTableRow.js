import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class PhoneTableRow extends Component {

    constructor(props) {
        super(props);
        this.deletePhonebook = this.deletePhonebook.bind(this);
    }

    deletePhonebook() {
        axios.delete('http://localhost:4000/phonebook/delete-phonebook/' + this.props.obj._id)
            .then((res) => {
                console.log('phonebook successfully deleted!')
                window.location.reload(false);
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
                    <Button onClick={this.deletePhonebook} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}