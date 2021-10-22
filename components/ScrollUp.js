import LazyShow from "./LazyShow";
const ScrollUp = () => {
    return(
        <LazyShow>
        <a href="#hero" className="scroll-up">
            <i className="fa fa-angle-double-up fa-2x"></i>
        </a>
        </LazyShow>
    );
}

export default ScrollUp;