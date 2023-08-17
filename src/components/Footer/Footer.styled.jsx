import styled from 'styled-components'; 

export const FooterSection = styled.footer`
 margin-top: 80px; 
 background: #F2E9E4; 

 @media (max-width: 768px) {
    margin-top: 30px; 
  }
`;

export const FooterBox = styled.div`
`;

export const FooterInner = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 color: #fff;
 height: 100px; 
`;

export const FooterSocial = styled.div`
 display: flex;
 align-items: center;
`;

export const FooterSocialLink = styled.a`
 margin: 0 5px;

 @media (min-width: 768px) {
    margin: 0 10px;
  }
`;

export const FooterText = styled.p`
 color: #000;
 font-size: 18px;
 font-weight: 400;
 line-height: 24px;
 letter-spacing: 1px;
`;
