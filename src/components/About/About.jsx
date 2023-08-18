import { useState } from "react";

import { Form } from "components/Form/Form";

import avatar from "../../images/Sof3.jpg"

import { AboutSection, AboutInner, AboutImg, AboutContent, AboutTitle, AboutText, AboutButton } from "./About.styled";

export const About = () => {
  const [modalOpen, setModalOpen] = useState(false);

    return (
      <AboutSection id="about">
          {modalOpen && (<Form setModalOpen={setModalOpen}/>)}
        <AboutInner className="container">
           <AboutImg src={avatar} alt="Avatar"/>
           <AboutContent>
            <AboutTitle className="title">ABOUT ME</AboutTitle>
            <AboutText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis ac nibh nullam feugiat. Accumsan vestibulum varius arcu posuere orci vitae sagittis posuere vitae. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit ea totam adipisci eum fuga laboriosam non Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo harum, repudiandae blanditiis accusamus debitis tempora ad unde sapiente, quaerat in nisi corrupti velit? Aliquid architecto voluptatum explicabo quibusdam suscipit voluptatem. 
            </AboutText>
            <AboutButton className="button" type="button" onClick={() => setModalOpen(true)}>LET’S CHAT</AboutButton>
           </AboutContent>
        </AboutInner>
      </AboutSection>
    );
  };