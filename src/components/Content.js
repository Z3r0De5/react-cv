import React, { Component } from 'react';
import {init} from 'ityped';
import './Content.css';

export default class Content extends Component {
    componentDidMount(){
        const welcome = document.querySelector('#welcome')
        init(welcome, { showCursor: false, strings: ['Hello', 'Welcome to my cv', 'I am a Bughunter'] })
    }
    render() {
        return (
            <div className="jumbotron jumbo">
                <div className="container">
                    <img src="/img/profile.jpg" className="rounded-circle mx-auto d-block shadow-lg" alt="profile" height="200px" width="200px"/>
                    <h5 className="text-center mt-4 text-white">Yusup Supriyanto</h5>
                    <h6 className="text-center text-white mt-3" id="welcome"></h6>
                </div>
            </div>
        )
    }
}
