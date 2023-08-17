import avatar from "../../images/Sof3.jpg"

import { AboutSection, AboutInner, AboutImg, AboutContent, AboutTitle, AboutText, AboutButton } from "./About.styled";

export const About = () => {
    return (
      <AboutSection id="about">
        <AboutInner className="container">
           <AboutImg src={avatar} alt="Avatar"/>
           <AboutContent>
            <AboutTitle className="title">ABOUT ME</AboutTitle>
            <AboutText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis ac nibh nullam feugiat. Accumsan vestibulum varius arcu posuere orci vitae sagittis posuere vitae. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit ea totam adipisci eum fuga laboriosam non Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo harum, repudiandae blanditiis accusamus debitis tempora ad unde sapiente, quaerat in nisi corrupti velit? Aliquid architecto voluptatum explicabo quibusdam suscipit voluptatem. 
            </AboutText>
            <AboutButton className="button">LET’S CHAT</AboutButton>
           </AboutContent>
        </AboutInner>
      </AboutSection>
    );
  };