const Download = () => {
    return(
        <div id="download" className="download-section gradient">
            <div className="container">
                <div className="row">
                    <div className="section-title mt-3 mb-5">
                        <h2 className="uppercase section-heading">Download our app</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="download-buttons text-center">
                            <a href="https://apps.apple.com/in/app/intrigd-complex-news-made-easy/id1534920447" target="_blank" className="button"> <i className="fa fa-apple"></i> APP STORE</a>
                            <a href="https://play.google.com/store/apps/details?id=com.intrigd" target="_blank" className="button"><i className="fa fa-android"></i>PLAY STORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Download;