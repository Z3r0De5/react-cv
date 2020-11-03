import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Yusup Supriyanto',
            gender: 'Laki-laki',
            brithday: '16 November 2020',
            address: 'Kaligung, Blimbingsari, Banyuwangi',
            religion: 'Islam',
            country: 'Indonesia',
            phone: '085748466682',
            whatsapp: '6285748466682',
            email: 'yusupstrix6@gmail.com',
            hoby: 'Networking, Programming, Bugbounty'
        }
    }
    render() {
        return (
            <div className="container">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h4 className="card-title">Profile <FontAwesomeIcon icon={faAddressCard} /></h4>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th scope="row">Name</th>
                                    <td>:</td>
                                    <td>{this.state.name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Gender</th>
                                    <td>:</td>
                                    <td>{this.state.gender}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Brithday</th>
                                    <td>:</td>
                                    <td>{this.state.brithday}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Address</th>
                                    <td>:</td>
                                    <td>{this.state.address}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Religion</th>
                                    <td>:</td>
                                    <td>{this.state.religion}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Country</th>
                                    <td>:</td>
                                    <td>{this.state.country}</td>
                                </tr>
                                <tr>
                                <th scope="row">Phone Number</th>
                                <td>:</td>
                                    <td>
                                        <a href={"https://wa.me/" + this.state.whatsapp} target="_blank" rel="noreferrer noopener">{this.state.phone}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Email</th>
                                    <td>:</td>
                                    <td>
                                        <a href={"mailto:" + this.state.email}>{this.state.email}</a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Hoby</th>
                                    <td>:</td>
                                    <td>{this.state.hoby}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
