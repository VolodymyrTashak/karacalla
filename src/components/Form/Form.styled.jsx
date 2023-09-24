import styled from 'styled-components'; 

export const Backdrop = styled.div`
  z-index: 15;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const MyForm= styled.form`
 position: relative;
 background-color: #303A53 ;
 padding: 20px 21px;
 display: grid;
 justify-items: center;
 border-radius: 10px;
 text-align: center;

  @media (min-width: 320px) and (max-width: 549px) {
    width: 300px;
    min-height: 400px;
  }

  @media (min-width: 550px) {
    width: 410px;
    min-height: 400px;
  }
`;

export const ButtonClose = styled.button`
  cursor: pointer;

  position: absolute;
  top: 10px;
  right: 10px;

  background-color: transparent;
  border: none;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  & svg {
    width: 12px;
    height: 12px;
  }

  &:focus,
  &:hover {
    transform: scale(0.9);
  }
`;

export const FormTitle = styled.h2`
 margin-bottom: 18px;
 color: #fff;
 font-size: 20px;

  @media (max-width: 768px) {
    margin-top: 30px; 
  }
`;

export const FormInput = styled.input`
 color: #757575;
 background-color: #272D3D;
 border-radius: 5px;
 border-color: transparent;
 width: 270px;
 height: 46px;
 margin-bottom: 14px;
 transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

 @media (min-width: 320px) and (max-width: 768px) {
    padding-left: 26px;
    width: 260px;
  }

  @media (min-width: 768px) {
    padding-left: 26px;
    margin-bottom: 14px;
    width: 320px;
    height: 46px;
  }
`;

export const FormTextarea = styled.textarea`
 color: #757575;
 background-color: #272D3D;
 border-radius: 5px;
 border-color: transparent;
 display: block;
 width: 100%;
 height: 120px;
 resize: none;
 box-sizing: border-box;
 outline: none;
 padding: 15px;
 margin-bottom: 14px;
 cursor: pointer;
 transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

 @media (min-width: 320px) and (max-width: 767px) {
    padding-left: 26px;
    width: 290px;
  }

  @media (min-width: 768px) {
    padding-left: 26px;
    margin-bottom: 14px;
    width: 350px;
  }
`;

export const FormBtn = styled.button`
 width: 200px;
 height: 45px;
 background: #0048FF;
 color: #fff;
 border-radius: 5px;
 border-color: transparent;
 margin-bottom: 19px;
`;


