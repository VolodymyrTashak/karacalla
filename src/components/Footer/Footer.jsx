import { BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

import { FooterSection, FooterBox, FooterInner, FooterSocial, FooterSocialLink } from "./Footer.styled";
import { HeaderLogo } from "components/Header/Header.styled";

export const Footer = () => {
    return (
      <FooterSection id="contact">
        <FooterBox className="container">
          <FooterInner>
           <HeaderLogo className="logo" href="#">karacalla</HeaderLogo>
           <FooterSocial>
             <FooterSocialLink href="https://www.instagram.com/karacalla_/" >
               <BsInstagram size={24} color="#000"  />
              </FooterSocialLink>
             <FooterSocialLink href="https://t.me/Karacalla" >
               <BsTelegram size={24} color="#000" />
              </FooterSocialLink>
             <FooterSocialLink href="" >
               <CgMail size={24} color="#000" />
              </FooterSocialLink>
             <FooterSocialLink href="https://www.youtube.com/@karacalla5032" >
               <BsYoutube size={24} color="#000" />
              </FooterSocialLink>
            </FooterSocial>
          </FooterInner>
        </FooterBox>
      </FooterSection>
    );
  };

  
          
  
