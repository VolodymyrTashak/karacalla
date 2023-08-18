import { useEffect } from "react";

import icon from '../../images/icons-sprite.svg';

import { Backdrop, MyForm, ButtonClose, FormTitle, FormInput, FormBtn } from "./Form.styled";

const body = document.querySelector('body');

export const Form = ({ setModalOpen }) => {

    const closeModal = () => {
        setModalOpen(false);
      };
    
      const handleEscapeClose = e => {
        if (e.code === 'Escape') {
          closeModal();
        }
      };
    
      const handleBackDropClose = e => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      };

    //   const onFormSubmit = (e) => {
    //     e.preventDefault();
    //     const form = document.getElementById('myForm');
    //     const name = e.target.elements.name.value;
    //     const email = e.target.elements.email.value;


    //     console.log('name:', name);
    //     console.log('email:', email);
    //     form.reset();
    //   };

      useEffect(() => {
        body.classList.add('no-scroll-modal');
        window.addEventListener('keydown', handleEscapeClose);
    
        return () => {
          window.removeEventListener('keydown', handleEscapeClose);
          body.classList.remove('no-scroll-modal');
        };
      });

    return (
        <Backdrop onClick={handleBackDropClose}>
            <MyForm id="myForm">
            <ButtonClose onClick={closeModal}>
             <svg>
               <use href={`${icon}#icon-close`}></use>
             </svg>
            </ButtonClose>
            <FormTitle>Fill in your details for feedback</FormTitle>
            <FormInput type="text" id="fromName" name="fromName" placeholder="Your name and surname" required />
            <FormInput type="email" id="email" placeholder="Your email" pattern="/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/" required />
            <FormBtn type="submit">Send</FormBtn>
            </MyForm>
        </Backdrop>
    );
  };