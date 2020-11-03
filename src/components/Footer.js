import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark">
               <div className="container">
                   <div className="row">
                       <div className="col-md-5">
                           <h5 className="mt-5 text-white">Contact Us</h5>
                           <FontAwesomeIcon icon={faHome} className="text-white" /> <span className="text-white">Kaligung, Blimbingsari, Banyuwangi</span>
                           <br />
                           <FontAwesomeIcon icon={faEnvelope} className="text-white" /> <a href={"mailto:" + "yusupstrix6@gmail.com"} target="_blank" rel="noreferrer noopener"><span className="text-white">yusupstrix6@gmail.com</span></a>
                           <br />
                           <FontAwesomeIcon icon={faPhone} className="text-white" /> <a href={"https://wa.me/" + "6285748466682"} target="_blank" rel="noreferrer noopener"><span className="text-white">085748466682</span></a>
                       </div>
                       <div className="col-md-5">
                           <h5 className="mt-5 text-white">Built With</h5>
                            <img src="img/html5.svg" width="30px" height="30px" alt="html5" />
                            <img src="img/css.svg" width="30px" height="30px" alt="css" />
                            <img src="img/js.png" width="40px" height="40px" alt="js" />
                            <img src="img/react.png" width="40px" height="40px" alt="react" className="react-logo" />
                       </div>
                       <div className="col-lg-3">
                           <h5 className="mt-5 text-white">Follow Me</h5>
                            <a href="https://github.com/Z3r0De5" target="_blank" rel="noreferrer noopener"><img src="img/github.svg" width="40px" height="40px" alt="github" /></a>
                            <a href="https://www.instagram.com/yusup_supriyanto92" target="_blank" rel="noreferrer noopener"><img src="img/instagram.svg" width="40px" height="40px" className="ml-2" alt="instagram" /></a>
                            <a href="https://www.facebook.com/yusup.supriyanto.397" target="_blank" rel="noreferrer noopener"><img src="img/facebook.svg" width="40px" height="40px" className="ml-2" alt="facebook" /></a>
                            <a href="https://www.youtube.com/channel/UC29_3FH9xTlc7Z8CZIHdfaw" target="_blank" rel="noreferrer noopener"><img src="img/youtube.svg" width="40px" height="40px" className="ml-2" alt="youtube" /></a>
                       </div>
                   </div>
                   <div className="text-right mt-5">
                        <span className="text-white text-right">Copyright &copy; <strong>Yusup Supriyanto</strong> 2020</span>
                   </div>
               </div>
            </footer>
        )
    }
}
