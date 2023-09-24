import { useTranslation } from 'react-i18next';

import price1 from "../../images/price/price1.webp"
import price2 from "../../images/price/price2.webp"
import price3 from "../../images/price/price3.webp"
import price4 from "../../images/price/price4.webp"
import price5 from "../../images/price/price5.webp"

import { PriceSection, PriceTitle, PriceList, PriceItem, PriceImg, PriceContent, PriceText, PriceTitleSecond, PriceTextSecond } from "./Prices.styled";

export const Prices = () => {
    const { t } = useTranslation();

    return (
      <PriceSection id="price">
        <div className="container">
            <PriceTitle className="title">{t('priceTitle')}</PriceTitle>
            <PriceList>
            <PriceItem>
                    <PriceImg src={price1} height={400} alt="Price-1"/>
                    <PriceContent>
                        <PriceTitleSecond>Lineart</PriceTitleSecond>
                        <PriceText>{t('priceText1')} <PriceTextSecond>5$</PriceTextSecond></PriceText>
                        <PriceText>{t('priceText2')} <PriceTextSecond>10$</PriceTextSecond></PriceText>
                        <PriceText>{t('priceText3')} <PriceTextSecond>15$</PriceTextSecond></PriceText>
                    </PriceContent>
                </PriceItem>
                <PriceItem>
                    <PriceImg src={price2} height={400} alt="Price-2"/>
                    <PriceContent>
                        <PriceTitleSecond>B&W</PriceTitleSecond>
                        <PriceText>{t('priceText1')} <PriceTextSecond>10$</PriceTextSecond></PriceText>
                        <PriceText>{t('priceText2')} <PriceTextSecond>15$</PriceTextSecond></PriceText>
                        <PriceText>{t('priceText3')} <PriceTextSecond>20$</PriceTextSecond></PriceText>
                    </PriceContent>
                </PriceItem>
                <PriceItem>
                    <PriceImg src={price3} height={400} alt="Price-3"/>
                    <PriceContent>
                        <PriceTitleSecond>Flat color</PriceTitleSecond>
                        <PriceText>{t('priceText1')} <PriceTextSecond>5.50$</PriceTextSecond></PriceText>
                        <PriceText>{t('priceText2')} <PriceTextSecond>10.50$</PriceTextSecond></PriceText>
                        <PriceText>{t('priceText3')} <PriceTextSecond>15.50$</PriceTextSecond></PriceText>
                    </PriceContent>
                </PriceItem>
                <PriceItem>
                    <PriceImg src={price4} height={400} alt="Price-4"/>
                    <PriceContent>
                        <PriceTitleSecond>Colored</PriceTitleSecond>
                        <PriceText>{t('priceText1')} <PriceTextSecond>15$</PriceTextSecond></PriceText>
                        <PriceText>{t('priceText2')} <PriceTextSecond>20$</PriceTextSecond></PriceText>
                        <PriceText>{t('priceText3')} <PriceTextSecond>25$</PriceTextSecond></PriceText>
                    </PriceContent>
                </PriceItem>
                <PriceItem>
                    <PriceImg src={price5} height={400} alt="Price-5"/>
                    <PriceContent>
                        <PriceTitleSecond>Background</PriceTitleSecond>
                        <PriceText>{t('priceText4')} <PriceTextSecond>15$</PriceTextSecond></PriceText>
                        <PriceText>{t('priceText5')} <PriceTextSecond>20$</PriceTextSecond></PriceText>
                    </PriceContent>
                </PriceItem>
            </PriceList>
        </div>
      </PriceSection>
    );
  };