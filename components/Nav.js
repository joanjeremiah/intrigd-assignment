import Image from 'next/image'
import logo from '../public/images/logo.png'
import MenuIcon from './MenuIcon'
import { useRef } from 'react'


// const Nav = () => {
//     const mobileMenu = useRef();
//     const displayOrHideMenu = () => {
//         mobileMenu.current.classList.toggle('display');

//     }
//     return(
//        <header id="nav">
//            <nav className="nav">
//                <div className="logo-wrapper">
//                     <Image src={logo} width={70} height={100}  />
//                </div>
//                <ul className="uppercase">
//                     <li className="active"><a href="#slider">Home</a></li>
//                     <li className="smooth-scroll"><a href="#about">About</a></li>
//                     <li><a href="#feature">Feature</a></li>
//                     <li><a href="#screnshot">screenshot</a></li>
//                     <li><a href="#reviews">Testimonial</a></li>
//                     <li><a href="#contact">Contact</a></li>
//                </ul>
//                <MenuIcon open="true" menu={displayOrHideMenu} />
//            </nav>
//            <div className="mobile-menu" ref={mobileMenu}>
//                 <ul className="uppercase">
//                     <li className="active"><a href="#slider">Home</a></li>
//                     <li className="smooth-scroll"><a href="#about">About</a></li>
//                     <li><a href="#feature">Feature</a></li>
//                     <li><a href="#screnshot">screenshot</a></li>
//                     <li><a href="#reviews">Testimonial</a></li>
//                     <li><a href="#contact">Contact</a></li>
//                 </ul>
//             </div>
//        </header>
//     );
// }

import React from 'react'

class Nav extends React.Component {
  listener = null;
  const mobileMenu = React.createRef();
  state = {
    nav:false
  }
  componentDidMount() {
     window.addEventListener("scroll", this.handleScroll);
   }
   componentWillUnmount() {
      window.removeEventListener('scroll',this.handleScroll);
    }
   handleScroll= () => {
     if (window.pageYOffset > 140) {
         if(!this.state.nav){
           this.setState({ nav: true });
         }
     }else{
         if(this.state.nav){
           this.setState({ nav: false });
         }
     }

   }
   displayOrHideMenu = () => {
        mobileMenu.current.classList.toggle('display');
   }

  render(){
  return (
    <header id="nav" className={(this.state.nav)? 'sticky' : ''}>
           <nav className="nav">
               <div className="logo-wrapper">
                    <Image src={logo} width={70} height={100}  />
               </div>
               <ul className="uppercase">
                    <li className="active"><a href="#">Home</a></li>
                    <li className="smooth-scroll"><a href="#about">About</a></li>
                    <li><a href="#feature">Feature</a></li>
                    <li><a href="#screnshot">screenshot</a></li>
                    <li><a href="#reviews">Testimonial</a></li>
                    <li><a href="#contact">Contact</a></li>
               </ul>
               <MenuIcon open="true" menu={this.displayOrHideMenu} />
           </nav>
           <div className="mobile-menu" ref={this.mobileMenu}>
                <ul className="uppercase">
                    <li className="active"><a href="#slider">Home</a></li>
                    <li className="smooth-scroll"><a href="#about">About</a></li>
                    <li><a href="#feature">Feature</a></li>
                    <li><a href="#screnshot">screenshot</a></li>
                    <li><a href="#reviews">Testimonial</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
       </header>
  );}
}

export default Nav;
