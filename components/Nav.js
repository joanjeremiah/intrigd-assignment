import Image from 'next/image'
import logo from '../public/images/logo.png'
import MenuIcon from './MenuIcon'

import React from 'react'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nav:false };
    this.mobileMenu = React.createRef();
    this.listener = null;
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
        this.mobileMenu.current.classList.toggle('display');
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
                    <li><a href="#screenshots">screenshot</a></li>
                    <li><a href="#reviews">Testimonial</a></li>
                    <li><a href="#contact">Contact</a></li>
               </ul>
               <MenuIcon open="true" menu={this.displayOrHideMenu} />
           </nav>
           <div className="mobile-menu" ref={this.mobileMenu}>
                <ul className="uppercase">
                    <li className="active"><a href="#">Home</a></li>
                    <li className="smooth-scroll"><a href="#about">About</a></li>
                    <li><a href="#feature">Feature</a></li>
                    <li><a href="#screenshots">screenshot</a></li>
                    <li><a href="#reviews">Testimonial</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
       </header>
  );}
}

export default Nav;
