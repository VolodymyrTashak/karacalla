import { Head, HeaderContainer, HeaderLogo, HeaderBox, HeaderList, HeaderItem, HeaderItemLink } from "./Header.styled";

export const Header = () => {
    return (
      <Head>
            <HeaderContainer className="container">
             <HeaderLogo href="#">karacalla</HeaderLogo>
             <HeaderBox>
              <HeaderList>
                <HeaderItem>
                  <HeaderItemLink href="#">Home</HeaderItemLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderItemLink href="#about">About</HeaderItemLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderItemLink href="#price">Price</HeaderItemLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderItemLink href="#project">Project</HeaderItemLink>
                </HeaderItem>
                <HeaderItem>
                  <HeaderItemLink href="#contact">Contact</HeaderItemLink>
                </HeaderItem>
              </HeaderList>
             </HeaderBox>
            </HeaderContainer>
      </Head>
    );
  };
  