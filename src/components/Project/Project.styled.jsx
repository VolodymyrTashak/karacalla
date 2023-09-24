import styled from 'styled-components'; 

export const ProjectSection = styled.section`
 margin-top: 80px;

 @media (max-width: 768px) {
    margin-top: 30px; 
  }
`;

export const ProjectBox = styled.div`
`;

export const ProjectTitle = styled.h2`
 color: #000;
 text-align: center;
 font-size: 29px;
 font-weight: 600;
 line-height: normal;
 letter-spacing: 5.8px;
 margin-bottom: 30px;
`;

export const ProjectList = styled.ul`
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

export const ProjectItem = styled.li`
 border: 1px solid #c4c4c4;
 transition: all .5s; 
`;

export const ProjectItemImg = styled.img`
 max-width: 100%;

 @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;
