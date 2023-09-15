import {
  FlexGrid,
  Row,
  Column,
  Section,
  Heading,
  Stack,
  Dropdown,
} from "@carbon/react";
import {
  LogoInstagram,
  LogoTwitter,
  LogoFacebook,
  LogoLinkedin,
  LogoYoutube,
} from "@carbon/react/icons";
import "../Footer/Footer.style.scss";
import copyRight from "../../assets/copyright-symbol-svgrepo.svg";
const Footer = () => {
  return (
    <FlexGrid fullWidth className="footer-padding">
      <Row>
        <Column lg={4} md={8} sm={4}>
          <FlexGrid fullWidth>
            <Row>
              <Column>
                <Stack gap={4}>
                  <Section level={2}>
                    <Heading className="footer__title-font footer__item-title-font">
                      Fabiz
                      <span className="footer__title-letter">i</span>
                    </Heading>
                  </Section>
                  <p className="footer__paragraph-color footer__item-font-size">
                    Fabizi is the first “real” all-in-one management solution
                    for hospitality outlets. Manage your whole business from
                    interactions with clients, to the kitchen, to inventory,
                    through a single service that’s customized to your needs.
                    Join our growing family now and experience what it feels
                    like to be a manager from the future, today!
                  </p>
                  <div>
                    <Stack gap={"24px"} orientation="horizontal">
                      <LogoTwitter size={32} />
                      <LogoFacebook size={32} />
                      <LogoYoutube size={32} />
                      <LogoLinkedin size={32} />
                      <LogoInstagram size={32} />
                    </Stack>
                  </div>
                  <div>
                    <FlexGrid
                      fullWidth
                      className="footer__dropdown-mobile-show"
                    >
                      <Row className="gap">
                        <Column md={4} sm={4}>
                          <Dropdown
                            id="footer_dropdown-mobile-language"
                            items={["English", "Option 2", "Option 3"]}
                          />
                          <br />
                        </Column>
                        <Column md={4} sm={4}>
                          <Dropdown
                            id="footer_dropdown-mobile-price"
                            items={["Dollar", "Option 2", "Option 3"]}
                          />
                        </Column>
                      </Row>
                    </FlexGrid>
                  </div>
                </Stack>
              </Column>
            </Row>
          </FlexGrid>
          <br />
        </Column>

        <Column lg={{ span: 2, offset: 2 }} md={4} sm={2}>
          <FlexGrid>
            <Row>
              <Column>
                <Section level={5}>
                  <Heading className="footer__item-title-font">Content</Heading>
                </Section>
                <p className="footer__item-color  footer__item-font-size">
                  Help center
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Career
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  About us
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Blogs
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Contact us
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Terms and conditions
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Press kit
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Hardwares
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Pricing
                </p>
              </Column>
            </Row>
          </FlexGrid>
          <br />
        </Column>

        <Column lg={4} md={4} sm={2}>
          <FlexGrid>
            <Row>
              <Column>
                <Section level={5}>
                  <Heading className="footer__item-title-font">
                    Products
                  </Heading>
                </Section>
                <p className="footer__item-color  footer__item-font-size">
                  Point of sale
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  KDS
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Delivery
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Recipe
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Inventory
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Customer
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Host
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Team
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Accounting
                </p>
              </Column>
              <Column>
                <br />
                <p className="footer__item-color  footer__item-font-size">
                  Report
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Insight
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Online
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Payment
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  API
                </p>
              </Column>
            </Row>
          </FlexGrid>
          <br />
        </Column>

        <Column lg={2} md={4} sm={2}>
          <FlexGrid>
            <Row>
              <Column>
                <Section level={5}>
                  <Heading className="footer__item-title-font">Bundles</Heading>
                </Section>
                <p className="footer__item-color  footer__item-font-size">
                  Restaurants
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Coffee Shops
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Confectionary
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Bakery
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Buffet
                </p>
                <p className="footer__item-color  footer__item-font-size">
                  Speciality Drinks
                </p>
              </Column>
            </Row>
          </FlexGrid>
          <br />
        </Column>

        <Column lg={2} md={4} sm={2}>
          <FlexGrid>
            <Row>
              <Column>
                <Section level={5}>
                  <Heading className="footer__item-title-font">
                    Case Studies
                  </Heading>
                  <p className="footer__item-color  footer__item-font-size">
                    The Table
                  </p>
                  <p className="footer__item-color  footer__item-font-size">
                    Namoos
                  </p>
                  <p className="footer__item-color  footer__item-font-size">
                    Coochini
                  </p>
                </Section>
              </Column>
            </Row>
          </FlexGrid>
        </Column>

        <Column lg={4} md={4} sm={4}>
          <Stack gap={4}>
            <p className="footer__item-font-size">Modern Land Trading LLC.</p>
            <p className="footer__paragraph-color footer__item-font-size">
              UAE, Office1602, Damas Tower, Rega Al Buteen, Al Maktoum Street,
              Deira, Dubai, PO Box: 185916
            </p>
            <p className="footer__fabizi-information-underline footer__fabizi-information-color footer__item-font-size">
              +971 50 142 8046
            </p>
          </Stack>
          <p className="footer__fabizi-information-underline footer__fabizi-information-color footer__item-font-size">
            Fabizi@gmail.com
          </p>
          <br />
          <hr className="footer__mobile-line" />
        </Column>

        <Column lg={{ span: 4, offset: 2 }} md={4} sm={4}>
          <Stack gap={4}>
            <p className="footer__item-font-size">Código Conciso Lda</p>
            <p className="footer__paragraph-color footer__item-font-size">
              Portugal, Estrada Nacional 4 - Retiro do Bom Gosto, N 8 7080-111
              Vendas Novas
            </p>
            <p className="footer__fabizi-information-underline footer__fabizi-information-color footer__item-font-size">
              +351 9200 53535
            </p>
          </Stack>
          <p className="footer__fabizi-information-underline footer__fabizi-information-color footer__item-font-size">
            Fabizi@gmail.com
          </p>
          <br />
          <hr className="footer__mobile-line" />
        </Column>
        <Column
          lg={{ span: 4, offset: 2 }}
          md={4}
          sm={0}
          className="footer__dropdown-desktop-hide"
        >
          <Dropdown
            id="footer__Dropdown-color"
            label="English"
            items={["English", "Option 2", "Option 3"]}
          />
          <br />

          <Dropdown
            id="footer__Dropdown-price-color"
            label="Dollar"
            items={["Dollar", "Option 2", "Option 3"]}
          />
        </Column>
      </Row>
      <hr className="footer__desktop-line" />
      <Row lg={4} md={4} sm={4}>
        <img className="footer__copyright-icon" src={copyRight} />
        <p className="footer__copyright-text">
          2019-2023 Fabizi. All rights reserved.
        </p>
      </Row>
    </FlexGrid>
  );
};

export default Footer;
