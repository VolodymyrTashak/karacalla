import { useTranslation } from 'react-i18next';

import image1 from "../../images/project/image1.webp"
import image2 from "../../images/project/image2.webp"
import image3 from "../../images/project/image3.webp"
import image4 from "../../images/project/image4.webp"
import image5 from "../../images/project/image5.webp"

import { ProjectSection, ProjectBox, ProjectTitle, ProjectList, ProjectItem, ProjectItemImg } from "./Project.styled";

export const Project = () => {
    const { t } = useTranslation();

    return (
    <ProjectSection id="project">
        <ProjectBox className="container">
            <ProjectTitle>{t('projectTitle')}</ProjectTitle>
            <ProjectList>
             <ProjectItem>
              <ProjectItemImg src={image1} alt="image1"/>
             </ProjectItem>
             <ProjectItem>
              <ProjectItemImg src={image2} alt="image2"/>
             </ProjectItem>
             <ProjectItem>
              <ProjectItemImg src={image3} alt="image3"/>
             </ProjectItem>
             <ProjectItem>
              <ProjectItemImg src={image4} alt="image4"/>
             </ProjectItem>
             <ProjectItem>
              <ProjectItemImg src={image5} alt="image5"/>
             </ProjectItem>
            </ProjectList>
        </ProjectBox>
    </ProjectSection>
    );
  };

