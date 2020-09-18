import Link from 'next/link';
import {Fragment} from 'react'

const Footer = ({currentuser}) => {
return (<Fragment>
  <div className="nk-footer nk-footer-fluid">
                    <div className="container-fluid">
                        <div className="nk-footer-wrap">
                            <div className="nk-footer-copyright"> &copy; 2020 DashLite. Template by <a href="#">Softnio</a>
                            </div>
                            <div className="nk-footer-links">
                                <ul className="nav nav-sm">
                                    <li className="nav-item"><a className="nav-link" href="#">Terms</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Privacy</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Help</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
</Fragment>)

}

export default Footer