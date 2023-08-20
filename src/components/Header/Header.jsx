import { Head, HeaderContainer, HeaderLogo, HeaderBox, HeaderList, HeaderItem, HeaderItemLink } from "./Header.styled";

export const Header = () => {

  (function () {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back-to-top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back-to-top-show');
      }
    }
  
    function backToTop() {
      window.scrollTo(0, 0);
    }
  
    var goTopBtn = document.querySelector('.back-to-top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();
  
    return (
      <Head>
            <HeaderContainer className="container">
              <a href="#" className="back-to-top"></a>
             <HeaderLogo href="#">karacalla</HeaderLogo>
             <HeaderBox>
              <HeaderList>
                <HeaderItem>
                  <HeaderItemLink href="#">Home</HeaderItemLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderItemLink href="#about">About</HeaderItemLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderItemLink href="#price">Price</HeaderItemLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderItemLink href="#project">Project</HeaderItemLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderItemLink href="#contact">Contact</HeaderItemLink>
                </HeaderItem>
              </HeaderList>
             </HeaderBox>
            </HeaderContainer>
      </Head>
    );
  };
  