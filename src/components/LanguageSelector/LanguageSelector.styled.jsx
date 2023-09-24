import styled from 'styled-components'; 

export const Box = styled.div`
 position: absolute;
 right: 70px;

 @media screen and (min-width: 590px) and (max-width: 768px) {
    right: 25px;
  }

  @media (max-width: 590px) {
    right: 94px;
  }
`;

export const Btn = styled.button`
 background: transparent;
 border: none;
`;