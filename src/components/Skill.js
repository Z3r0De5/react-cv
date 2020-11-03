import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default class Skill extends Component {
    render() {
        return (
            <div className="container">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h4 className="card-title">Skill <FontAwesomeIcon icon={faCode} /> </h4>
                        <div className="row">
                            <strong className="ml-3">JAVASCRIPT</strong>
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: "45%"}}>45%</div>
                        </div>
                        <div className="row mt-2">
                            <strong className="ml-3">PHP</strong>
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}>50%</div>
                        </div>
                        <div className="row mt-2">
                            <strong className="ml-3">GRAPH QL</strong>
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{width: "10%"}}>10%</div>
                        </div>
                        <div className="row mt-2">
                            <strong className="ml-3">WEB SECURITY</strong>
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>60%</div>
                        </div>
                        <div className="row mt-2">
                            <strong className="ml-3">NETWORKING</strong>
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width: "65%"}}>65%</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
