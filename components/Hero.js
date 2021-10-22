import LazyShow from "./LazyShow";
const Hero = () => {
    return(
        <div id="hero" className="hero-section">
            <div className="container">
                <div className="row align-items-center hero-body">
                    <div className="col-lg-6 col-md-6 hero-text">
                        <LazyShow x={-100} y={0} >
                            <h1 style={{textAlign: 'left',color: 'black',fontSize: '3rem'}} className="section-heading">Intrigd the Ultimate <br />Reading App.</h1>
                        </LazyShow>
                        <LazyShow x={0} y={60} >
                            <div className="app-buttons">
                                <a href="https://apps.apple.com/in/app/intrigd-complex-news-made-easy/id1534920447" className=" slider-btn uppercase" target="_blank"><span><i className="fa fa-apple"></i>Apple store</span></a>
                                <a href="https://play.google.com/store/apps/details?id=com.intrigd" className="slider-btn uppercase" target="_blank"><span><i className="fa fa-send-o"></i>Google play</span></a>
                            </div>
                        </LazyShow>
                    </div>
                    <div className="col-lg-3 offset-lg-1 col-md-4 text-center">
                        <div className="anim-top-bot">
                            <img style={{animation: 'phone 3s ease-in-out infinite alternate',height: '100%',width: '105%'}} src="/images/inner-1.png" alt="mobile app" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;