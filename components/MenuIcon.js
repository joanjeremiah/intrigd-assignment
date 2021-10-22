import { useRef } from "react";

const MenuIcon = ({display,menu}) => {
    const changeIcon = () => {
        icon.current.classList.toggle('open')
        menu();
    }
    const icon = useRef();
    return(
        <div id="nav-icon1" ref={icon} onClick={changeIcon}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default MenuIcon;