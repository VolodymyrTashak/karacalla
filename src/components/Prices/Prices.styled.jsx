import styled from 'styled-components'; 

export const PriceSection = styled.section`
 margin-top: 80px; 

  @media (max-width: 768px) {
    margin-top: 30px; 
  }
`;

export const PriceTitle = styled.h2`
 color: #000;
 text-align: center;
 font-size: 29px;
 font-weight: 400;
 line-height: normal;
 letter-spacing: 5.8px;
 margin-bottom: 30px;
 position: relative;
`;

export const PriceList = styled.ul`
 display: grid;
 grid-column-gap: 32px;
 grid-row-gap: 32px;
 grid-template-columns: repeat(1,1fr);

 @media (min-width: 768px) {
    grid-template-columns: repeat(2,1fr);
    }

 @media (min-width: 1200px) {
    grid-template-columns: repeat(3,1fr);
    }
`;

export const PriceItem = styled.li`
 border: 1px solid #c4c4c4;
 text-align: center;
 transition: all .5s;
`;

export const PriceImg = styled.img`
 max-width: 100%;
 margin-right: auto;
 margin-left: auto;
`;

export const PriceContent = styled.div`
 margin-top: 25px;
 padding: 0 10px
`;

export const PriceTitleSecond = styled.h3`
 color: #000;
 font-size: 24px;
 font-weight: 400;
 line-height: 24px;
 letter-spacing: 3px;
 margin-bottom: 15px;
 `;

export const PriceText = styled.p`
 color: #000;
 font-size: 15px;
 font-weight: 200;
 line-height: 20px;
 letter-spacing: 1px;
 margin-bottom: 10px;
 `;

 export const PriceTextSecond = styled.p`
 color: #000;
 font-size: 16px;
 font-weight: 400;
 line-height: 18px;
 letter-spacing: 1px;
 margin: 10px 0;
 text-align: left;
 `;
