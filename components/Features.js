const Features = () => {
    return (
        <div id="feature" className="features-section" style={{backgroundColor: '#29B9F2'}}>
            <div className="container">
                <div className="row">
                    <div className="section-title mt-3 mb-5">
                        <h2 className="uppercase section-heading">Our App Feature</h2>
                    </div>
                </div>
                <div className="feature-four">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature active mb--30">
                                <div className="feature-icon">
                                    <img src="/images/Selection.png" />
                                </div>
                                <div className="feature-text">
                                    <h3>Selection</h3>
                                    <p>Cut out the clutter with curated content handpicked especially for you.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature active mb--30">
                                <div className="feature-icon">
                                    <img src="/images/Aggregation.png" />
                                </div>
                                <div className="feature-text">
                                    <h3>Aggregation</h3>
                                    <p>Differing opinions aggregated in an easy-to-consume fashion.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature active mb--30">
                                <div className="feature-icon">
                                    <img src="/images/Simplification.png" />
                                </div>
                                <div className="feature-text">
                                    <h3>Simplification</h3>
                                    <p>Diverse range of complex topics simplified for you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;