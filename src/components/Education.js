import React, { Component } from 'react';
import './Education.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

export default class Education extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title">Education <FontAwesomeIcon icon={faUniversity} /> </h4>
                            <div className="xp-actions-history">
                                <div className="xp-actions-history-list">
                                    <div className="xp-actions-history-item">
                                        <h5>2008 - 2014</h5>
                                        <p>SDN 1 Kaligung</p>
                                    </div>
                                </div>
                                <div className="xp-actions-history-list">
                                    <div className="xp-actions-history-item">
                                        <h5>2014 - 2017</h5>
                                        <p>MTS Gintangan</p>
                                    </div>
                                </div>
                                <div className="xp-actions-history-list">
                                    <div className="xp-actions-history-item">
                                        <h5>2017 - 2020</h5>
                                        <span>SMK Muhammadiyah 6 Rogojampi</span>
                                        <p>Teknik Komputer Jaringan</p>
                                    </div>
                                </div>
                                <div className="xp-actions-history-list">
                                    <div className="xp-actions-history-item">
                                        <h5>2020 - Now</h5>
                                        <span>Politeknik Negeri Banyuwangi</span>
                                        <p>D-3 Teknik Informatika</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
