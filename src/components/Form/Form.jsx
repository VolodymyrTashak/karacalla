import { useEffect } from "react";
import emailjs from '@emailjs/browser';
import Notiflix from 'notiflix';
import { useTranslation } from 'react-i18next';

import icon from '../../images/icons-sprite.svg';

import { Backdrop, MyForm, ButtonClose, FormTitle, FormInput, FormTextarea, FormBtn } from "./Form.styled";

const body = document.querySelector('body');

export const Form = ({ setModalOpen }) => {
  const { t } = useTranslation();

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

    const onFormSubmit = (e) => {

     const form = document.getElementById('myForm');
        e.preventDefault(); 

        const fromName = document.getElementById("fromName").value;
        const email = document.getElementById('email').value;
        const message = document.getElementById("message").value;
        
    
        const templateParams = {
            fromName: fromName,
            email: email,
            message: message
        };

        emailjs.send('service_bmasswf','template_5gle2xd', templateParams, '0X7KJiltbVjKl9qcR')
        .then((response) => {
            Notiflix.Notify.success('SUCCESS!');
        }, (err) => {
            Notiflix.Notify.failure('FAILED');
        });
          form.reset();
          closeModal();
     };

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
            <FormTitle>{t('formTitle')}</FormTitle>
            <FormInput type="text" id="fromName" name="fromName" placeholder={t('formName')} required />
            <FormInput type="email" id="email" placeholder={t('formEmail')} required />
            <FormTextarea rows={3} id="message" name="message" placeholder={t('formMessage')} required />
            <FormBtn type="submit">{t('formBtn')}</FormBtn>
            </MyForm>
        </Backdrop>
    );
  };