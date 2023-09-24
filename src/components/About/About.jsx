import { useState } from "react";
import { useTranslation } from 'react-i18next';

import { Form } from "components/Form/Form";

import avatar from "../../images/avatar.png"

import { AboutSection, AboutInner, AboutImg, AboutContent, AboutTitle, AboutText, AboutButton } from "./About.styled";

export const About = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

    return (
      <AboutSection id="about">
          {modalOpen && (<Form setModalOpen={setModalOpen}/>)}
        <AboutInner className="container">
           <AboutImg src={avatar} alt="Avatar"/>
           <AboutContent>
            <AboutTitle className="title">{t('aboutTitle')}</AboutTitle>
            <AboutText>{t('aboutText')}
            </AboutText>
            <AboutButton className="button" type="button" onClick={() => setModalOpen(true)}>{t('aboutBtn')}</AboutButton>
           </AboutContent>
        </AboutInner>
      </AboutSection>
    );
  };