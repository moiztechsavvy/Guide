import React from 'react';

function _mainNav() {
        return (
                <header id="mainHeader" className="header step-header">
                        <div className="container">
                                <button className="nav-icon btn btn-primary">
                                        MENU
                        </button>
                                <div className="logo-outer">
                                        <div className="logo-center-block">
                                                <a href="/" title="Carenade: Home Health Care Lehigh Valley Bethlehem Easton Allentown" className="logo">
                                                        <img src="https://carenade-production.s3.amazonaws.com/logo.png" alt="Carenade: Home Health Care Lehigh Valley Bethlehem Easton Allentown" />
                                                </a>
                                        </div>
                                </div>
                                <div className="menu-call-button">
                                        <a href="tel:(833) 742-7384" title="(833) 742-7384" className="btn clearfix call-button"><span className="glyphicon glyphicon-phone-alt"></span></a>
                                </div>
                                <nav className="main-navigation" only-arrow-click="false" mobile-menu="991" animation-speed="300" scroll-bg="#c3c3c3" scroll-color="#a1a1a1" scroll-width="5">
                                        <div className="scroll-block" id="mainPageHeader">
                                                <ul id="NavigationUL">
                                                        <li id="linkAboutUs"><a href="/Home/AboutUs" title="About Us">About Us</a></li>
                                                        <li id="linkShareTheCare"><a href="/ShareTheCare" title="Share The Care">Share The Care</a></li>
                                                        <li className="support-btn"><a href="/Home/Support" title="Support">Support</a></li>
                                                </ul>
                                                <div className="btn-outer">
                                                        <a className="btn clearfix support-btn" title="Support" href="/Home/Support">Support</a>
                                                        <a className="btn clearfix" title="Sign in"><span className="glyphicon glyphicon-user"></span> Sign In</a>
                                                        <a href="tel:(833) 742-7384" title="(833) 742-7384" className="btn clearfix call-button"><span className="glyphicon glyphicon-phone-alt"></span>(833) 742-7384</a>
                                                        <p className="desktop-phone"><span className="glyphicon glyphicon-phone-alt"></span>(833) 742-7384</p>
                                                </div>
                                        </div>

                                </nav>
                                <div className="menu-overlay"></div>

                                <div id="stepNavigation" style={{ display: "none" }}>
                                        <div className="step-detail-outer">
                                                <p className="step-detail"><b>Step 1:</b> Gather Basic Information</p>
                                        </div>
                                </div>
                        </div>
                </header>
        )
};
export default _mainNav;