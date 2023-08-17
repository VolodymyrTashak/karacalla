import price1 from "../../images/price/price1.webp"
import price2 from "../../images/price/price2.webp"
import price3 from "../../images/price/price3.webp"
import price4 from "../../images/price/price4.webp"
import price5 from "../../images/price/price5.webp"

import { PriceSection, PriceTitle, PriceList, PriceItem, PriceImg, PriceContent, PriceTitleSecond,PriceText, PriceTextSecond } from "./Prices.styled";

export const Prices = () => {
    return (
      <PriceSection id="price">
        <div className="container">
            <PriceTitle className="title">My Price</PriceTitle>
            <PriceList>
            <PriceItem>
                    <PriceImg src={price1} height={400} alt="Price-1"/>
                    <PriceContent>
                        <PriceTitleSecond>Lineart</PriceTitleSecond>
                        <PriceTextSecond>STARTING PRICE FROM Portrait: 5$</PriceTextSecond>
                        <PriceTextSecond>STARTING PRICE FROM Half: 10$</PriceTextSecond>
                        <PriceTextSecond>STARTING PRICE FROM Full: 15$</PriceTextSecond>
                    </PriceContent>
                </PriceItem>
                <PriceItem>
                    <PriceImg src={price2} height={400} alt="Price-2"/>
                    <PriceContent>
                        <PriceTitleSecond>Lineart</PriceTitleSecond>
                        <PriceTextSecond>STARTING PRICE FROM Portrait: 5$</PriceTextSecond>
                        <PriceTextSecond>STARTING PRICE FROM Half: 10$</PriceTextSecond>
                        <PriceTextSecond>STARTING PRICE FROM Full: 15$</PriceTextSecond>
                    </PriceContent>
                </PriceItem>
                <PriceItem>
                    <PriceImg src={price3} height={400} alt="Price-3"/>
                    <PriceContent>
                        <PriceTitleSecond>Lineart</PriceTitleSecond>
                        <PriceTextSecond>STARTING PRICE FROM Portrait: 5$</PriceTextSecond>
                        <PriceTextSecond>STARTING PRICE FROM Half: 10$</PriceTextSecond>
                        <PriceTextSecond>STARTING PRICE FROM Full: 15$</PriceTextSecond>
                    </PriceContent>
                </PriceItem>
                <PriceItem>
                    <PriceImg src={price4} height={400} alt="Price-4"/>
                    <PriceContent>
                        <PriceTitleSecond>Lineart</PriceTitleSecond>
                        <PriceTextSecond>STARTING PRICE FROM Portrait: 5$</PriceTextSecond>
                        <PriceTextSecond>STARTING PRICE FROM Half: 10$</PriceTextSecond>
                        <PriceTextSecond>STARTING PRICE FROM Full: 15$</PriceTextSecond>
                    </PriceContent>
                </PriceItem>
                <PriceItem>
                    <PriceImg src={price5} height={400} alt="Price-5"/>
                    <PriceContent>
                        <PriceTitleSecond>Lineart</PriceTitleSecond>
                        <PriceTextSecond>STARTING PRICE FROM Portrait: 5$</PriceTextSecond>
                        <PriceTextSecond>STARTING PRICE FROM Half: 10$</PriceTextSecond>
                        <PriceTextSecond>STARTING PRICE FROM Full: 15$</PriceTextSecond>
                    </PriceContent>
                </PriceItem>
                {/* <PriceItem>
                    <PriceImg src={car2} alt="Prices"/>
                </PriceItem>
                <PriceItem>
                    <PriceImg src={car1} alt="Price"/>
                    <PriceContent>
                        <PriceTitleSecond>Lineart</PriceTitleSecond>
                        <PriceTextSecond>STARTING PRICE FROM Portrait: 5$</PriceTextSecond>
                        <PriceTextSecond>STARTING PRICE FROM Half: 10$</PriceTextSecond>
                        <PriceTextSecond>STARTING PRICE FROM Full: 15$</PriceTextSecond>
                    </PriceContent>
                </PriceItem>
                <PriceItem>
                    <PriceImg src={car1} alt="Prices"/>
                    <PriceContent>
                        <PriceTitleSecond>SERVICE PACKAGE 1</PriceTitleSecond>
                        <PriceText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus vitae amet aliquet diam.</PriceText>
                        <PriceTextSecond>STARTING PRICE FROM $100</PriceTextSecond>
                    </PriceContent>
                </PriceItem>
                <PriceItem>
                    <PriceImg src={car1} alt="Prices"/>
                    <PriceContent>
                        <PriceTitleSecond>SERVICE PACKAGE 1</PriceTitleSecond>
                        <PriceText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus vitae amet aliquet diam.</PriceText>
                        <PriceTextSecond>STARTING PRICE FROM $100</PriceTextSecond>
                    </PriceContent>
                </PriceItem>
                <PriceItem>
                    <PriceImg src={car2} alt="Prices"/>
                    <PriceContent>
                        <PriceTitleSecond>SERVICE PACKAGE 1</PriceTitleSecond>
                        <PriceText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus vitae amet aliquet diam.</PriceText>
                        <PriceTextSecond>STARTING PRICE FROM $100</PriceTextSecond>
                    </PriceContent>
                </PriceItem> */}
            </PriceList>
        </div>
      </PriceSection>
    );
  };