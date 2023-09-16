import { FlexGrid, Row, Column, Section, Heading, Stack } from "@carbon/react";
import {
  LogoInstagram,
  LogoTwitter,
  LogoFacebook,
  LogoLinkedin,
  LogoYoutube,
} from "@carbon/react/icons";
import useBreakpoint from "../Hooks/useBreakpoint";
import "../Header/Header.style.scss";
import desktopImg from "../../assets/images/close-up-woman-talking-phone-desktop.jpg";
import tabletImg from "../../assets/images/close-up-woman-talking-phone-tablet.jpg";
import mobileImg from "../../assets/images/close-up-woman-talking-phone-mobile.jpg";
import fulldesktopImg from "../../assets/images/close-up-woman-talking-fulldesktop.jpg";

const Header = () => {
  const { isMobile, isTablet, isDesktop, isFullDesktop } = useBreakpoint();
  return (
    <FlexGrid fullWidth className="header-padding">
      <Row className="header__mobile-direction">
        <Column lg={7} md={4} sm={4} className="header__left-content-center">
          <Stack gap={"1rem"} className="header__mobile-content-padding">
            <Section level={1}>
              <Heading className="header-content-title-size">
                Get in touch with us!
              </Heading>
            </Section>
            <p>
              We always welcome communication with our possible partners, and
              we’re always open to any critique, suggestion or complaint you
              might have. Feel free to contact us, we will get back to you soon.
            </p>
            <div>
              <Stack gap={7} orientation="horizontal">
                <LogoTwitter size={24} />
                <LogoFacebook size={24} />
                <LogoYoutube size={24} />
                <LogoLinkedin size={24} />
                <LogoInstagram size={24} />
              </Stack>
            </div>
          </Stack>
        </Column>
        <Column className="header__img" lg={9} md={4} sm={4}>
          <img
            className="header__img-margin"
            style={{ width: "100%" }}
            src={
              isFullDesktop
                ? fulldesktopImg
                : isDesktop
                ? desktopImg
                : isTablet
                ? tabletImg
                : isMobile
                ? mobileImg
                : ""
            }
          />
        </Column>
      </Row>
    </FlexGrid>
  );
};

export default Header;
