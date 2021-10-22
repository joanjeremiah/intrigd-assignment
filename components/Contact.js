import LazyShow from "./LazyShow";
const Contact = () => {
    return(
        <LazyShow x={0} y={100}>
        <div id="contact" className="contact-section container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="contact-info-container wow fadeInBottom" data-wow-duration="1s">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-title">
                                    <h2>Contact Us</h2>
                                </div>
                                <div className="contact-address">
                                    <ul>
                                        <li><i className="fa fa-phone"></i> <span className="information"><a href="tel:+91-8025043077">+91-8025043077</a></span></li>
                                        <li><i className="fa fa-envelope-o"></i> <span className="information"><a href="mailto:info@intrigd.co">info@intrigd.co</a></span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <form method="POST" className="contact-form-area" action="mail.php" method="post" id="contact-form">
                                    <div className="row contact-form">
                                        <div className="form-group col-md-12">
                                            <input required id="name" name="name" className="form-control" placeholder="Name" type="text" id="name" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <input required id="email" name="email" className="form-control" placeholder="Email" type="email" id="email" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <input required id="mobile" name="subject" className="form-control" placeholder="Subject" type="text" id="subject" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <textarea required id="message" name="message" className="yourmessage form-control" placeholder="Message"></textarea>
                                        </div>
                                        <div className="submit-form form-group col-sm-12">
                                            <button id="frm" className="button submit-btn" type="submit"><span>Submit</span></button>
                                            <p className="form-messege"></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </LazyShow>
    );
}

export default Contact;