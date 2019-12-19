import React from 'react';

export function Footer(props) {
    return (
        // footer start
        <footer className="footer-area pl-100 pr-100">
            <div className="footer-area box-90 pt-100 pb-60" data-background="img/bg/footer.jpg" style={{ backgroundImage:"url(img/bg/footer.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-md-6 ">
                            <div className="footer-widget mb-40 pr-70">
                                <div className="footer-logo">
                                    <a href="/"><img src="./assets/logo_shop.png" alt="" /></a>
                                </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore mag na
                                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat.
                                </p>
                                    <div className="footer-time d-flex mt-30">
                                        <div className="time-icon">
                                            <img src="./assets/time.png" alt="" />
                                    </div>
                                            <div className="time-text">
                                                <span>Got Questions ? Call us 24/7!</span>
                                                <h2>(0600) 874 548</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-3">
                                    <div className="footer-widget mb-40">
                                        <h3>Social Media</h3>
                                        <ul className="footer-link">
                                            <li><a href="/">Facebook</a></li>
                                            <li><a href="/">Twitter</a></li>
                                            <li><a href="/">Behance</a></li>
                                            <li><a href="/"> Dribbble</a></li>
                                            <li><a href="/">Linkedin</a></li>
                                            <li><a href="/">Youtube</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-2 col-md-3 d-md-none d-xl-block">
                                    <div className="footer-widget pl-50 mb-40">
                                        <h3>Location</h3>
                                        <ul className="footer-link">
                                            <li><a href="/">New York</a></li>
                                            <li><a href="/">Tokyo</a></li>
                                            <li><a href="/">Dhaka</a></li>
                                            <li><a href="/">Chittagong</a></li>
                                            <li><a href="/">China</a></li>
                                            <li><a href="/">Japan</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-3">
                                    <div className="footer-widget mb-40">
                                        <h3>About</h3>
                                        <ul className="footer-link">
                                            <li><a href="/">Terms &amp; Conditions</a></li>
                                            <li><a href="/"> Privacy Policy</a></li>
                                            <li><a href="/">Contact Us</a></li>
                                            <li><a href="/">FAQ</a></li>
                                            <li><a href="/">Wholesale</a></li>
                                            <li><a href="/">Direction</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            // footer end
            );
        }
        
export default Footer;