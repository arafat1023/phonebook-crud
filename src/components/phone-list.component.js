import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import PhoneTableRow from './PhoneTableRow';


export default class PhoneList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            students: [],
            mobileNo:''
        };
        this.onChangeMobileNo = this.onChangeMobileNo.bind(this);
    }

    onChangeMobileNo(e) {
        this.setState({ mobileNo: e.target.value })
    }

    componentDidMount() {
        axios.get('http://localhost:4000/phonebook/')
            .then(res => {

                this.setState({
                    students: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // gotMobile() {
    //
    //     axios.get('http://localhost:4000/phonebook/find/'+ this.state.mobileNo)
    //         .then(res => {
    //             console.log(res.data);
    //             this.setState({
    //                 students: res.data
    //             });
    //
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }

    gotMobile = () => {
        console.log('getThanaList colling ...');
        axios.get( 'http://localhost:4000/phonebook/find/', {
            params: {mobileNo: this.state.mobileNo}
        }, {})
            .then((response) => {
                console.log("response",response.data.data);
                this.setState({ students: response.data.data  });
            }).catch((error)=>{  console.log("error",error); this.setState({ students: []  });   });
    };

    DataTable() {
        return this.state.students.map((res, i) => {
            return <PhoneTableRow obj={res} key={i} />;
        });
    }


    render() {
        return (<div className="table-wrapper">
            <input style={{}}
                   type="number" />
            <button type="button"  onClick={() => {this.gotMobile()}}

                    >
                Search</button>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Mobile No</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.DataTable()}
                </tbody>
            </Table>
        </div>);
    }
}