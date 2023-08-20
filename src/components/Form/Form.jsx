import { useEffect } from "react";
import emailjs from '@emailjs/browser';
import Notiflix from 'notiflix';

import icon from '../../images/icons-sprite.svg';

import { Backdrop, MyForm, ButtonClose, FormTitle, FormInput, FormTextarea, FormBtn } from "./Form.styled";

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

    function validateEmail(em) {
        const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(String(em).toLowerCase());
    }
    
    function validate(email) {
        const em = document.getElementById('email').value;
     
        if (validateEmail(em)) {
            Notiflix.Notify.warning("Email valid");
        } else {
            Notiflix.Notify.warning("Email is not valid");
        }
        return false;
    }

    const onFormSubmit = (e) => {

    const form = document.getElementById('myForm');
        e.preventDefault(); 

        const fromName = document.getElementById("fromName").value;
        const number = document.getElementById("number").value;
        const email = document.getElementById('email').value;
        const message = document.getElementById("message").value;
        
    
        const templateParams = {
            fromName: fromName,
            number: number,
            email: validate(email),
            message: message
        };

        emailjs.send('service_08dnbzq','template_mhc6ft7', templateParams, '81G-9oCVdRbpYY5R4')
        .then((response) => {
            Notiflix.Notify.warning('SUCCESS!');
        }, (err) => {
            Notiflix.Notify.warning('FAILED');
        });
          form.reset();
          closeModal();
}

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
            <MyForm id="myForm" onSubmit={onFormSubmit}>
            <ButtonClose onClick={closeModal}>
             <svg>
               <use href={`${icon}#icon-close`}></use>
             </svg>
            </ButtonClose>
            <FormTitle>Fill in your details for feedback</FormTitle>
            <FormInput type="text" id="fromName" name="fromName" placeholder="Your name and surname" required />
            <FormInput type="tel" id="number" placeholder="Your number" required />
            <FormInput type="email" id="email" placeholder="Your email" required />
            <FormTextarea rows={3} id="message" name="message" placeholder="Your message" required />
            <FormBtn type="submit">Send</FormBtn>
            </MyForm>
        </Backdrop>
    );
  };