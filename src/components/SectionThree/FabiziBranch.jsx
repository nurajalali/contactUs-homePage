import { FlexGrid, Row, Column, Section, Heading, Stack } from "@carbon/react";
import { ProductiveCard } from "@carbon/ibm-products/lib/components";
import { Phone, Email, ArrowRight } from "@carbon/react/icons";
import PortugalFlag from "../../assets/images/Portugal.jpg";
import ArabFlag from "../../assets/images/United-Arab-Emirates.jpg";
import "./FabiziBranch.style.scss";

const FabiziBranch = () => {
  return (
    <FlexGrid fullWidth className="branch-card-padding">
      <Row>
        <Column lg={8} md={4} sm={4}>
          <ProductiveCard
            label={<img src={PortugalFlag} />}
            primaryButtonIcon={(props) => (
              <ArrowRight
                {...props}
                style={{
                  color: "black",
                  marginTop: "0.5rem",
                }}
              />
            )}
            primaryButtonPlacement="top"
            primaryButtonText={
              <p
                style={{
                  color: "black",
                }}
              >
                Watch in google map
              </p>
            }
            className="branch-card-height"
          >
            <Stack gap={"19px"}>
              <div>
                <Stack gap={"33px"}>
                  <div>
                    <Section level={4}>
                      <Heading className="branch-card__title-font">
                        Portugal
                      </Heading>
                    </Section>
                    <p className="branch-crad__first-sentence-font">
                      Código Conciso Lda
                    </p>
                    <p className="branch-crad__second-sentence-font">
                      Estrada Nacional 4 - Retiro do Bom Gosto, N 8 7080-111
                      Vendas Novas
                    </p>
                  </div>

                  <p className="branch-crad__arrow-text">
                    <Phone size={24} className="branch-crad__arrow-icon" />
                    +971 50 142 8046
                  </p>
                </Stack>
              </div>

              <p className="branch-crad__arrow-text">
                <Email size={24} className="branch-crad__arrow-icon" />
                Example@gmail.com
              </p>
            </Stack>
          </ProductiveCard>
          <br />
        </Column>
        <Column lg={8} md={4} sm={4}>
          <ProductiveCard
            label={<img src={ArabFlag} />}
            primaryButtonIcon={(props) => (
              <ArrowRight
                {...props}
                style={{ color: "black", marginTop: "0.5rem" }}
              />
            )}
            primaryButtonPlacement="top"
            primaryButtonText={
              <p style={{ color: "black" }}>Watch in google map</p>
            }
            className="branch-card-height"
          >
            <Stack gap={"19px"}>
              <div>
                <Stack gap={"33px"}>
                  <div>
                    <Section level={4}>
                      <Heading className="branch-card__title-font">
                        United Arab Emirates
                      </Heading>
                    </Section>
                    <p className="branch-crad__first-sentence-font">
                      Modern Land Trading LLC.
                    </p>
                    <p className="branch-crad__second-sentence-font">
                      Office1602, Damas Tower, Rega Al Buteen, Al Maktoum
                      Street, Deira, Dubai, PO Box: 185916
                    </p>
                  </div>

                  <p className="branch-crad__arrow-text">
                    <Phone size={24} className="branch-crad__arrow-icon" />
                    +971 50 142 8046
                  </p>
                </Stack>
              </div>

              <p className="branch-crad__arrow-text">
                <Email size={24} className="branch-crad__arrow-icon" />
                Example@gmail.com
              </p>
            </Stack>
          </ProductiveCard>
        </Column>
      </Row>
    </FlexGrid>
  );
};

export default FabiziBranch;
