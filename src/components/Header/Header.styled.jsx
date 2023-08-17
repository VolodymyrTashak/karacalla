import styled from 'styled-components'; 

export const Head = styled.header`
 background: #F2E9E4;
`;

export const HeaderContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding-top: 25px;
 padding-bottom: 25px;

 @media (max-width: 590px) {
  flex-direction: column;
  display: flex;
  }
`;

export const HeaderLogo = styled.a`
 position: relative;
 font-family: 'Roboto';
 color: #000;
 text-align: center;
 font-size: 28px;
 font-style: normal;
 font-weight: 200;
 line-height: 1.19;
 letter-spacing: 0.1em;

 &:before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 35px;
    display: block;
    width: 100%;
    height: 4px;
    background-color: #000;
    border-radius: 2px;
  }

 &:after {
    position: absolute;
    content: "";
    left: 0;
    bottom: -7px;
    display: block;
    width: 100%;
    height: 4px;
    background-color: #000;
    border-radius: 2px;
  }

  @media (max-width: 1200px) {
    font-size: 22px;
    &:before {
      bottom: 32px;
    }
     }

     @media (max-width: 620px) {
      font-size: 20px;
      &:before {
        bottom: 30px;
      }
    }

    @media (max-width: 590px) {
      margin-top: 20px;
    }

    @media (max-width: 370px) {
      font-size: 15px;
      &:before {
        bottom: 24px;
      }
     }
`;

export const HeaderBox = styled.div`
 @media (max-width: 590px) {
  display: flex;
  justify-content: center;
  }
`;

export const HeaderList = styled.ul`
 display: flex;
`;

export const HeaderItem = styled.li`
 &:not(:last-child){
    margin-right: 50px;
  }

  @media (max-width: 1200px) {
    &:not(:last-child){
      margin-right: 20px;
    }
  }

  @media (max-width: 620px) {
    &:not(:last-child){
      margin-right: 15px;
    }
  }
`;

export const HeaderItemLink = styled.a`
 display: block;
 padding-top: 32px;
 padding-bottom: 32px;

 color: #000;
 font-size: 18px;
 font-weight: 400;
 line-height: 24px;
 letter-spacing: 1px;

  &:hover,
  &:focus {
    color: #8e8b8b;
  }

  @media (max-width: 1200px) {
      font-size: 17px;
  }
  
  @media (max-width: 400px) {
    font-size: 16px;
   }

  @media (max-width: 370px) {
    font-size: 11px;
   }
`;