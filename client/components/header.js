import Link from 'next/link';
import {Fragment} from 'react'

const Header = ({currentuser, title}) => {
    return (
        <Fragment>

<div className="nk-header nk-header-fluid nk-header-fixed is-light">
                    <div className="container-fluid">
                        <div className="nk-header-wrap">
                            <div className="nk-menu-trigger d-xl-none ml-n1">
                                <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em className="icon ni ni-menu"></em></a>
                            </div>
                            <div className="nk-header-brand d-xl-none">
                                <h3 style={{marginLeft:"40px"}}>{title}</h3>
                            </div>

                            <div className="nk-header-news d-none d-xl-block">  
                                <h3 style={{marginLeft: "260px"}}>{title}</h3>
                            </div>

                            <div className="nk-header-tools">
                                <ul className="nk-quick-nav">
                                    <li className="dropdown user-dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            <div className="user-toggle">
                                                <div className="user-avatar sm">
                                                    <em className="icon ni ni-user-alt"></em>
                                                </div>
                                                
                                            </div>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-right dropdown-menu-s1">
                                            <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                                
                                            </div>
                                          
                                            <div className="dropdown-inner">
                                                <ul className="link-list">
                                                    <li><a href="html/crypto/profile.html"><em className="icon ni ni-user-alt"></em><span>View Profile</span></a></li>
                                                    
                                                </ul>
                                            </div>
                                            <div className="dropdown-inner">
                                                <ul className="link-list">
                                                    <li><Link href="/auth/signout"><a href="#"><em className="icon ni ni-signout"></em><span>Sign out</span></a></Link> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
    )

}

export default Header
