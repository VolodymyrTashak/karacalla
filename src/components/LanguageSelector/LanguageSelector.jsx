import React from 'react';
import { useTranslation } from 'react-i18next';

import ua from '../../images/flags/ua.png';
import en from '../../images/flags/en.png';
import de from '../../images/flags/de.png';
import pl from '../../images/flags/pl.png';

import { Box, Btn } from './LanguageSelector.styled';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box>
      <Btn onClick={() => changeLanguage('en')}><img src={en} alt="en" width={30} height={30}/></Btn>
      <Btn onClick={() => changeLanguage('ua')}><img src={ua} alt="ua" width={30} height={30}/></Btn>
      <Btn onClick={() => changeLanguage('de')}><img src={de} alt="de" width={30} height={30}/></Btn>
      <Btn onClick={() => changeLanguage('pl')}><img src={pl} alt="pl" width={30} height={30}/></Btn>
    </Box>
  );
}

export default LanguageSelector;