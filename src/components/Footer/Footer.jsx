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
    <FlexGrid fullWidth className="Footer">
      <Row>
        <Column lg={4} md={8} sm={4}>
          <FlexGrid fullWidth>
            <Row>
              <Column className="padding">
                <Stack gap={4}>
                  <Section level={2}>
                    <Heading className="Header--content Header__item--content">
                      Fabiz
                      <span className="Header--content--styleLetter">i</span>
                    </Heading>
                  </Section>
                  <p className="Content--color font-size">
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
                    <FlexGrid fullWidth className="Dropdown--show ">
                      <Row className="gap">
                        <Column md={4} sm={4}>
                          <Dropdown
                            items={["English", "Option 2", "Option 3"]}
                          />
                          <br />
                        </Column>
                        <Column md={4} sm={4}>
                          <Dropdown
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
                  <Heading className="Header__item--content">Content</Heading>
                </Section>
                <p className="Content__item--color font-size">Help center</p>
                <p className="Content__item--color font-size">Career</p>
                <p className="Content__item--color font-size">About us</p>
                <p className="Content__item--color font-size">Blogs</p>
                <p className="Content__item--color font-size">Contact us</p>
                <p className="Content__item--color font-size">
                  Terms and conditions
                </p>
                <p className="Content__item--color font-size">Press kit</p>
                <p className="Content__item--color font-size">Hardwares</p>
                <p className="Content__item--color font-size">Pricing</p>
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
                  <Heading className="Header__item--content">Products</Heading>
                </Section>
                <p className="Content__item--color font-size">Point of sale</p>
                <p className="Content__item--color font-size">KDS</p>
                <p className="Content__item--color font-size">Delivery</p>
                <p className="Content__item--color font-size">Recipe</p>
                <p className="Content__item--color font-size">Inventory</p>
                <p className="Content__item--color font-size">Customer</p>
                <p className="Content__item--color font-size">Host</p>
                <p className="Content__item--color font-size">Team</p>
                <p className="Content__item--color font-size">Accounting</p>
              </Column>
              <Column>
                <br />
                <p className="Content__item--color font-size">Report</p>
                <p className="Content__item--color font-size">Insight</p>
                <p className="Content__item--color font-size">Online</p>
                <p className="Content__item--color font-size">Payment</p>
                <p className="Content__item--color font-size">API</p>
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
                  <Heading className="Header__item--content">Bundles</Heading>
                </Section>
                <p className="Content__item--color font-size">Restaurants</p>
                <p className="Content__item--color font-size">Coffee Shops</p>
                <p className="Content__item--color font-size">Confectionary</p>
                <p className="Content__item--color font-size">Bakery</p>
                <p className="Content__item--color font-size">Buffet</p>
                <p className="Content__item--color font-size">
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
                  <Heading className="Header__item--content">
                    Case Studies
                  </Heading>
                  <p className="Content__item--color font-size">The Table</p>
                  <p className="Content__item--color font-size">Namoos</p>
                  <p className="Content__item--color font-size">Coochini</p>
                </Section>
              </Column>
            </Row>
          </FlexGrid>
        </Column>

        <Column lg={3} md={4} sm={4}>
          <Stack gap={4}>
            <p className="font-size">Modern Land Trading LLC.</p>
            <p className="Content--color font-size">
              UAE, Office1602, Damas Tower, Rega Al Buteen, Al Maktoum Street,
              Deira, Dubai, PO Box: 185916
            </p>
            <p className="Content__underline Content__information--color font-size">
              +971 50 142 8046
            </p>
          </Stack>
          <p className="Content__underline Content__information--color font-size">
            Fabizi@gmail.com
          </p>
          <br />
          <hr className="Content__mobile--line" />
        </Column>

        <Column lg={{ span: 3, offset: 3 }} md={4} sm={4}>
          <Stack gap={4}>
            <p className="font-size">Código Conciso Lda</p>
            <p className="Content--color font-size">
              Portugal, Estrada Nacional 4 - Retiro do Bom Gosto, N 8 7080-111
              Vendas Novas
            </p>
            <p className="Content__underline Content__information--color font-size">
              +351 9200 53535
            </p>
          </Stack>
          <p className="Content__underline Content__information--color font-size">
            Fabizi@gmail.com
          </p>
          <br />
          <hr className="Content__mobile--line" />
        </Column>
        <Column
          lg={{ span: 4, offset: 3 }}
          md={4}
          sm={0}
          className="Dropdown--hide "
        >
          <Dropdown
            id="Dropdown__language--color--change"
            label="English"
            items={["English", "Option 2", "Option 3"]}
          />
          <br />

          <Dropdown
            id="Dropdown__price--color--change"
            label="Dollar"
            items={["Dollar", "Option 2", "Option 3"]}
          />
        </Column>
      </Row>
      <hr className="Content__desktop--line" />
      <Row lg={4} md={4} sm={4}>
        <img className="Icon--space" src={copyRight} />
        <p>2019-2023 Fabizi. All rights reserved.</p>
      </Row>
    </FlexGrid>
  );
};

export default Footer;
