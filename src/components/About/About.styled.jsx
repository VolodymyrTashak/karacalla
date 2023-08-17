import styled from 'styled-components'; 

export const AboutSection = styled.section`
 margin-top: 80px; 

 @media (max-width: 910px) {
    margin-top: 0; 
    } 
`;

export const AboutInner = styled.div`
 display: flex;

 @media (max-width: 910px) {
    flex-direction: column;
    }
`;

export const AboutImg = styled.img`
 width: 500px;
 height: 500px;
 margin-right: 95px;

 @media (max-width: 1200px) {
    width: 370px;
    height: 450px;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 0;
    }

 @media (max-width: 910px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    }

 @media (max-width: 550px) {
    width: 300px;
    height: 300px;
    }
`;

export const AboutContent = styled.div`
 background: #F2E9E4;
 width: 100%;
 text-align: center;
 padding-right: 10px;
 padding-left: 10px;
 border-radius: 10px;

   @media (max-width: 1200px) {
    width: 370px;
   }

   @media (max-width: 910px) {
    width: 430px;
    margin-right: auto;
    margin-left: auto;
   }

   @media (max-width: 550px) {
    max-width: 250px;
   }

   @media (max-width: 340px) {
      max-width: 230px;
   }
`;

export const AboutTitle = styled.h2`
 color: #000;
 text-align: center;
 font-size: 29px;
 font-weight: 400;
 line-height: normal;
 letter-spacing: 5.8px;
 margin-top: 50px;
 margin-bottom: 30px;

 @media (max-width: 1200px) {
    font-size: 22px;
    margin-top: 20px;
    margin-bottom: 10px;
    }

 @media (max-width: 910px) {
    font-size: 22px;
    margin-top: 40px;
    margin-bottom: 20px;
    }

 @media (max-width: 550px) {
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 10px;
    }
`;

export const AboutText = styled.p`
 color: #000;
 font-size: 22px;
 font-weight: 200;
 line-height: 26px;

 @media (max-width: 1200px) {
    font-size: 15px;
    }

 @media (max-width: 910px) {
    font-size: 16px;
    }

 @media (max-width: 550px) {
    font-size: 12px;
    }
`;

export const AboutButton = styled.button`
 margin-top: 50px;
 margin-bottom: 20px;
 color: #fff;
 border: 2px solid #5A0D67;

 @media (max-width: 1200px) {
    margin-top: 20px;
    margin-bottom: 20px;
    }
`;
