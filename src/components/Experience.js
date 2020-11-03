import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import './Experience.css';

export default class Experience extends Component {
    render() {
        return (
            <div className="container">
                <div className="card shdow-sm">
                    <div className="card-body">
                        <h4 className="card-title">Experience <FontAwesomeIcon icon={faCogs} /></h4>
                        <div className="card-deck">
                            <div className="card shadow-lg card-shadow">
                                <div className="image-container">
                                    <img src="img/alibaba.jpg" className="card-img-top image" alt="alibaba" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title mt-5">Bug Bounty</h5>
                                    <p className="card-text">Ketika saya menemukan kerentanan di website <a href="https://www.alibaba.com" target="_blank" rel="noreferrer noopener"><b>Alibaba</b></a> berupa kerentanan XSS (Cross Site Scripting) dan melaporkannya kepihak terkait melalui <a href="https://www.hackerone.com" target="_blank" rel="noreferrer noopener"><b>Hackerone</b></a> dan mendapatkan bounty $$$.</p>
                                </div>
                            </div>
                            <div className="card shadow-lg card-shadow">
                                <img src="img/psg.jpg" className="card-img-top image" height="265px" alt="pkl" />
                                <div className="card-body">
                                    <h5 className="card-title">Praktik Kerja Lapangan</h5>
                                    <p className="card-text">Ketika saya sedang menjalankan PKL (Praktik Kerja Lapangan) yang ditugaskan oleh sekolah di Airnetwork.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
