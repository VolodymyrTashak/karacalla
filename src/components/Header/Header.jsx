import { useTranslation } from 'react-i18next';

import { ScrollToTop } from "components/BtnTop/BtnTop";
import LanguageSelector from "components/LanguageSelector/LanguageSelector";

import { Head, HeaderWrapper, HeaderContainer, HeaderLogo, HeaderBox, HeaderList, HeaderItem, HeaderItemLink } from "./Header.styled";

export const Header = () => {
  const { t } = useTranslation();

    return (
      <Head>
        <HeaderWrapper className="container">
          <LanguageSelector />
          <HeaderContainer >
             <HeaderLogo href="#">karacalla</HeaderLogo>
             <HeaderBox>
              <HeaderList>
                <HeaderItem>
                  <HeaderItemLink href="#">{t('headerHome')}</HeaderItemLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderItemLink href="#about">{t('headerAbout')}</HeaderItemLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderItemLink href="#price">{t('headerPrice')}</HeaderItemLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderItemLink href="#project">{t('headerProject')}</HeaderItemLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderItemLink href="#contact">{t('headerContact')}</HeaderItemLink>
                </HeaderItem>
              </HeaderList>
             </HeaderBox>
          </HeaderContainer>
        </HeaderWrapper>
            <ScrollToTop />
      </Head>
    );
  };