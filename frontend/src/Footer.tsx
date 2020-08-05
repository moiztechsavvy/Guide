import React from 'react';


function _Footer(){
    return(
        
        <footer id="footer">
            <div className="d-flex">
                <div className="col">
                    <i  className="icon icon-facebook"></i>
                    <strong className="logof"><a href="#"><img src="https://carenade-production.s3.amazonaws.com/logo.png" alt="carenade"/></a></strong>
                    <p>Carenade.com is the first website that allows you to shop, compare and book home care from accredited home health care agencies. Don’t book care without checking Carenade first. Carenade is free to use.</p>
                    <span className="title-text"><a href="#">Find Us on</a></span>
                    <span className="img"><img src="https://www.carenade.com/images/icon7.png" alt="icon"/></span>
                </div>
                <div className="col">
                    <strong className="title">Carenade</strong>
                    <ul className="footer-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/Home/Support">Support</a></li>
                        <li><a href="/Home/AboutUs">About Us</a></li>
                        <li><a href="/Home/AboutUs">Contact Us</a></li>
                        <li><a href="/ShareTheCare">Share The Care</a></li>
                        <li><a href="/LandingPage/Badge">Carenade Approved Badge</a></li>
                        <li><a href="/SearchCareAgency/AllHomeHealthCareAgencies">Carenade's Top Home Health Care Agencies</a></li>
                        <li><a href="/Home/ForAgencies">Become A Carenade Agency</a></li>
                    </ul>
                </div>
                <div className="col">
                    <a href="https://www.carenade.com/blog/"><strong className="title">Blog</strong></a>
                    <ul className="footer-list">
                        <li><a href="https://www.carenade.com/blog/what-is-home-healthcare/">What is home health care?</a></li>
                        <li><a href="https://www.carenade.com/blog/home-care-is-better-than-hospitals/">Why home care is better than a hospital?</a></li>
                        <li><a href="https://www.carenade.com/blog/top-homecare-services-what-you-need-to-know/">Home Care services - What you need to know</a></li>
                    </ul>
                    <div className="social-area">
                        <a href="https://www.carenade.com/knowledgebase/"><strong className="title">Knowledge Base</strong></a>
                        <ul className="social-networks">
                            <li><a href="https://www.facebook.com/carenadehealth/"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://twitter.com/carenadeinc"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/company/carenade-health"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://www.youtube.com/watch?v=upghSKJib_M&t=124s "><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col mobile-wrap">
                    <div className="wrap-holder">
                        <strong className="title">Other Links</strong>
                        <ul className="footer-list">
                            <li><a href="/LandingPage/CarenadeCommunities">Carenade for Senior Living Communities</a></li>
                            <li><a href="/LandingPage/EmailSolutions">Email Solutions</a></li>
                            <li><a href="/LandingPage/AgencyOnBoarding">Agency OnBoarding</a></li>
                            <li><a href="/LandingPage/AgencyReviews">Agency Reviews</a></li>
                        </ul>
                    </div>
                    <div className="wrap-holder">
                        <strong className="title">Policies</strong>
                        <ul className="footer-list">
                            <li><a href="/Home/Privacy">Privacy Policy</a></li>
                            <li><a href="/Home/RefundPolicy">Refund Policy</a></li>
                            <li><a href="/Home/Terms">Terms and Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copy-right">
                <div className="container">
                    <p>By creating an account, I accept <a href="/Home/Terms">Carenade’s Terms and Conditions, Refund/Cancellation Policy and Privacy Policy.</a></p>
                </div>
            </div>
            
        </footer>
    )
};
export default _Footer;