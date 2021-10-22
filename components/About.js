import LazyShow from "./LazyShow";
const About = () => {
    return(
        <div id="about" className="about-area bg-grey section-ptb about-section">
            <div className="container">
                <div className="row  align-items-center">
                    <div className="col-lg-6 order-1 order-lg-1">
                        <LazyShow x={0} y={100} >
                            <div className="about-image text-center">
                                <img style={{width: '95%'}} src="/images/01.png" alt="about" />
                            </div>
                        </LazyShow>    
                    </div>
                    <div className="col-lg-6 order-2 order-lg-2">
                        <div className="about-content">
                            <div className="about-title">
                                <h2 className="uppercase">About Intrigd</h2>
                                <p>An opinion aggregator for long format content .</p>
                            </div>
                            <ul className="about-list">
                                <li> <i className="fa fa-check"></i> presents unbiased content with a vast coverage across industries and daily events</li>
                                <li><i className="fa fa-check"></i> helps in effortless consumption of opinions through meaningful summaries</li>
                            </ul>
                            <div className="about-btn">
                                <a href="#" className="button">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;