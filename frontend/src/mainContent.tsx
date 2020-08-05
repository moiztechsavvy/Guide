import React from 'react';
import './styleImports.css';


function _mainContent() {
    return (
        <div>
            <section className="banner" style={{ backgroundImage: `url("https://carenade-production.s3.amazonaws.com/banner.jpg")` }}>
                <div className="tint-overlay">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-sm-12">
                                <div className="banner-content">
                                    <h1 style={{ padding: "0px" }}>Find the Best Home Care & Senior Living</h1>
                                    <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">


                                        <form id="frmSerchCareAgency" className="home-search-form" action="/SearchCareAgency/CareAgencySearch" method="GET">
                                            <div className="input-group">
                                                <input className="form-control" id="query" name="q" placeholder="Enter City or Zip Code" type="text" value="" />
                                                <div className="input-group-addon">
                                                    <button type="button" id="searchSubmit" className="btn btn-secondary">Search Care Agencies</button>
                                                </div>
                                            </div>
                                            <span id="queryError" className="text-danger" style={{ display: "none" }}></span>
                                        </form>

                                    </div>
                                    <div className="col-sm-6 col-sm-offset-3 text-center"><a href="tel:(833) 742-7384" title="(833) 742-7384" className="btn clearfix call-button" style={{ font: "16px" }}><span className="glyphicon glyphicon-phone-alt"></span> &nbsp; (833) 742-7384</a>
                                        <p className="desktop-phone"><span className="glyphicon glyphicon-phone-alt"></span> &nbsp; (833) 742-7384</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="newsletter-signup" className="grey-bg" style={{ padding: "30px 0px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <h4>Stay in Touch</h4>
                            <p>Join our list of happy subscribers to receive <span className="carenade-mint">exclusive offers</span> and <span className="carenade-mint">healthcare insights</span> from Dr. Kapper</p>
                        </div>
                        <form action="https://carenade.us17.list-manage.com/subscribe/post?u=a73df2b6827227764c6026e4a&amp;id=da38241816" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                            <div className="col-sm-8">
                                <input type="email" value="" name="EMAIL" className="email form-control" id="mce-EMAIL" placeholder="Email Address" required />
                            </div>
                            <div className="col-sm-4">
                                <div /*style={{position:"absolute;left: -5000px;"}} */ aria-hidden="true"></div>
                                <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="btn btn-primary" /> </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="care-exp">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7">
                            <h1>Carenade is here to make your home care experience a <span className="red">lovely one.</span></h1>
                        </div>
                    </div>
                    <ul className="row">
                        <li className="col-md-5 col-sm-6">
                            <div className="thumbnail">
                                <img src="https://www.carenade.com/images/box-img-01.jpg" alt="Medical Based Home Care" />
                                <div className="caption">
                                    <div className="caption-content">
                                        <h4>Medical Based Home Care</h4>
                                        <p>Care provided in the home by a licensed medical professional, such as a nurse or physical therapist.</p>
                                        <p><a href="javascript:void(0)" title="Get Started Now">Get Started Now <img src="https://www.carenade.com/images/arrow.png" alt="" /></a></p>
                                        <a href="tel:(833) 742-7384" title="(833) 742-7384" className="btn clearfix call-button" style={{ font: "16px" }}><span className="glyphicon glyphicon-phone-alt"></span> &nbsp; (833) 742-7384</a>
                                        <p className="desktop-phone"><span className="glyphicon glyphicon-phone-alt"></span> &nbsp; (833) 742-7384</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="col-md-5 col-md-offset-2 col-sm-6">
                            <div className="thumbnail">
                                <img src="https://www.carenade.com/images/box-img-02.jpg" alt="Non-Medical Home Care" />
                                <div className="caption">
                                    <div className="caption-content">
                                        <h4>Non-Medical Home Care</h4>
                                        <p>Care provided by trained caregivers who will help your loved one with day to day activities.</p>
                                        <p><a href="javascript:void(0)" title="Get Started Now">Get Started Now <img src="https://www.carenade.com/images/arrow.png" alt="" /></a></p>
                                        <a href="tel:(833) 742-7384" title="(833) 742-7384" className="btn clearfix call-button" style={{ font: "16px" }}><span className="glyphicon glyphicon-phone-alt"></span> &nbsp; (833) 742-7384</a>
                                        <p className="desktop-phone"><span className="glyphicon glyphicon-phone-alt"></span> &nbsp; (833) 742-7384</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="content-block text-center">
                <div className="container">
                    <h2 className="content-block-heading blue-text">Easy Path to Great Care</h2>
                    <ul className="steps clearfix">
                        <li>
                            <span className="no">1</span>
                            <h6>Sign Up</h6>
                            <p>Create an account. Add a loved one so that you can send them care hours.</p>
                        </li>
                        <li>
                            <span className="no">2</span>
                            <h6>Pick An Agency</h6>
                            <p>Carenade features the top agencies in every city. Purchase with confidence.</p>
                        </li>
                        <li>
                            <span className="no">3</span>
                            <h6>Purchase Care</h6>
                            <p>Purchase care hours and assign them to a loved one. We then contact you to set a date and time.</p>
                        </li>
                    </ul>
                </div>
            </section>

            <div className="grey-bg">
                <div className="container">
                    <section className="content-block text-center">
                        <h2 className="content-block-heading blue-text">The Carenade Difference <span>A new way to look at home care</span></h2>
                        <ul className="difference clearfix">
                            <li>
                                <img src="https://www.carenade.com//images/diff-icon-01.png" alt="Vetted Agencies" className="icon" />
                                <h6>Vetted Agencies</h6>
                                <p>Carenade reviews every agency on our platform and choses only the best.</p>
                            </li>
                            <li>
                                <img src="https://www.carenade.com//images/diff-icon-02.png" alt="Shop and Compare" className="icon" />
                                <h6>Shop and Compare</h6>
                                <p>Compare multiple agencies and choose the best for you.</p>
                            </li>
                            <li>
                                <img src="https://www.carenade.com//images/diff-icon-03.png" alt="Share the Care" className="icon" />
                                <h6>Share the Care</h6>
                                <p>Create an account and buy care for you or a loved one.</p>
                            </li>
                            <li>
                                <img src="https://www.carenade.com//images/diff-icon-04.png" alt="Share the Care" className="icon" />
                                <h6>Family Plans</h6>
                                <p>Share your loved one’s account so everyone can chip in.</p>
                            </li>
                        </ul>
                    </section>

                    <section className="content-block video-block">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="video-content">
                                    <h2 className="content-block-heading normal-text blue-text">A word from one of our founders Dr. Jordan Kapper</h2>
                                    <p>We founded Carenade with the patient in mind. We aim to make purchasing care as simple and stress free as possible.</p>
                                    <ul className="default-listing">
                                        <li>Easy to search and compare</li>
                                        <li>Available when you need us</li>
                                        <li>Afordable and Convenient</li>
                                    </ul>
                                    <button type="button" className="btn btn-secondary"><span>Get Started</span><img src="https://www.carenade.com//images/arrow-white.png" alt="" /></button>
                                </div>
                            </div>
                            <div className="col-md-5 col-md-offset-1 col-sm-6 text-right">
                                <div className="video-div video-img">
                                    <iframe id="video" src="https://www.youtube.com/embed/7au9ZIw4HMc" allow="autoplay; encrypted-media" style={{ width: "100%", height: "100%", border: "solid black" }} frameBorder={"0"}></iframe>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <section className="content-block share-the-care text-center">
                <div className="container-fluid">
                    <h3 className="content-block-heading normal-text">Families Can Share The Care</h3>
                    <p className="pb-50">Get the whole family involved! All family members can chip in and donate hours of care to their loved ones. </p>
                    <ul className="family-members">
                        <li>
                            <span className="price">+ $200</span>
                            <img src="https://www.carenade.com/images/member-01.jpg" alt="Steven Lee" className="member-img" />
                            <span className="member-name">Steven Lee</span>
                            <em>Son</em>
                        </li>
                        <li>
                            <span className="price">+ $240</span>
                            <img src="https://www.carenade.com/images/member-02.jpg" alt="Kim Lee" className="member-img" />
                            <span className="member-name">Kim Lee</span>
                            <em>Daughter</em>
                        </li>
                        <li>
                            <span className="price reverse-bg">+ $125</span>
                            <img src="https://www.carenade.com/images/member-03.jpg" alt="Jason lee" className="member-img" />
                            <span className="member-name">Jason lee</span>
                            <em>Grandson</em>
                        </li>
                        <li>
                            <span className="price reverse-bg">+ $45</span>
                            <img src="https://www.carenade.com/images/member-04.jpg" alt="Mike Lee" className="member-img" />
                            <span className="member-name">Mike Lee</span>
                            <em>Grandson #2</em>
                        </li>
                    </ul>
                    <div className="main-member">
                        <img src="https://www.carenade.com/images/main-member.png" alt="" className="main-member-img" />
                        <div className="main-member-content">
                            <img src="https://www.carenade.com/images/logo-white.png" alt="" className="logo-white" />
                            <h3>My caregiver Diana keeps me active and healthy!</h3>
                            <h4><img src="https://www.carenade.com/images/heart-icon-red.png" alt="" className="heart-icon-red" />Grandma Lee</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-block grey-bg" id="dvContactUs">
                <div className="container">
                    <h4 className="content-block-heading text-center normal-text">Get in touch with us. We want to hear from you!</h4>
                    <div id="divStatusMessage">


                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <form action="/Home/ContactUs" className="primary-form" data-ajax="true" data-ajax-mode="replace" data-ajax-update="#divStatusMessage" encType="multipart/form-data" id="frmContactUs" method="post"> <div className="row validimage">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input autoComplete="off" className="form-control " data-val="true" data-val-required=" " id="txtName" maxLength={100} name="Name" placeholder="Full Name" type="text" value="" />
                                    </div>
                                    <div className="form-group">
                                        <label>E-mail</label>
                                        <input autoComplete="off" className="form-control" data-val="true" data-val-regex="Please enter valid email address" data-val-regex-pattern="^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$" data-val-required=" " id="txtEmail" maxLength={100} name="Email" placeholder="Email" type="text" value="" />
                                        <span className="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true"></span>
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input autoComplete="off" className="form-control number" data-val="true" data-val-regex="Please enter valid phone number" data-val-regex-pattern="^\d{10}$" data-val-required=" " id="phnNumber" maxLength={10} name="PhoneNumber" placeholder="Phone Number" type="text" value="" />
                                    </div>
                                    <div className="form-group">
                                        <label>Need Care For</label>
                                        <input autoComplete="off" className="form-control" data-val="true" data-val-required=" " id="txtNeedForCare" maxLength={100} name="needCareFor" placeholder="Need Care For" type="text" value="" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea autoComplete="off" className="form-control h-310" cols={20} data-val="true" data-val-required=" " id="txtMsg" maxLength={200} name="Message" placeholder="We want to hear from you…" rows={2}></textarea>
                                        <span className="field-validation-valid" data-valmsg-for="Message" data-valmsg-replace="true"></span>
                                        <span className="char-left"><em id="spnCharLeft">200</em>characters left</span>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="btn btn-secondary uppercase">Send</button>
                                    </div>
                                </div>
                            </div>
                            </form>            
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
};
export default _mainContent;