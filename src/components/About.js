import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default class About extends Component {
    
    render() {
        return (
            <div className="container">
                <div className="card mb-3 shadow-sm">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                        <img src="img/about.jpg" className="rounded-circle shadow-lg" height="200px" width="200px" alt="about" />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">About Me <FontAwesomeIcon icon={faUser} /></h4>
                            <p className="card-text">Halo, Perkenalkan saya <b>Yusup Supriyanto</b>. Saya adalah mahasiswa D-3 Teknik Informatika di Politeknik Negeri Banyuwangi. Dan saya adalah seorang yang sering mencoba hal baru dan terus mencoba meskipun sering gagal dan pada akhirnya saya dapat mencapai  apa yang saya inginkan.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
