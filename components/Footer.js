const Footer = () => {
    return(
        <footer id="footer" className="footer-section">
            <div></div>
            <div className="footer-content-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-content">
                                <p>Copyright © All Rights Reserved</p>
                                <p><a>Terms & Conditions</a></p>
                                <p><a>Privacy and Policy</a></p>
                                <div className="social-link">
                                    <a href="https://www.facebook.com/Intrigdapp" target="_blank"><i className="fa fa-facebook"></i></a>
                                    <a href="https://twitter.com/intrigd_" target="_blank"><i className="fa fa-twitter"></i></a>
                                    <a href="https://in.linkedin.com/company/intrigd" target="_blank"><i className="fa fa-linkedin"></i></a>
                                    <a href="https://instagram.com/intrigd_" target="_blank"><i className="fa fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;