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
// function LanguageSelector() {
//   const { i18n } = useTranslation();

//   const changeLanguage = (e) => {
//     i18n.changeLanguage(e.target.value);
//   };

//   return (
//     <Box>
//       <button onClick={() => changeLanguage('en')}>English</button>
//       <button onClick={() => changeLanguage('es')}>Español</button>
//       <button onClick={() => changeLanguage('ua')}><img src={ua} alt="" width={20} height={20} /></button>
//       {/* <label htmlFor="language-select"></label>
//       <select id="language-select" onChange={changeLanguage} value={i18n.language}>
//         <option value="en">En</option>
//         <option value="es">Es</option>
//         <option value="ua">Ua</option>
//         <option value="pl">Pl</option>
//         <option value="de">De</option>
//       </select> */}
//     </Box>
//   );
// }

export default LanguageSelector;