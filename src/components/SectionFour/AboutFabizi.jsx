import { FlexGrid, Row, Column, Button, Theme } from "@carbon/react";
import { ArrowRight, FlaggingTaxi } from "@carbon/react/icons";
import "./About.style.scss";

const AboutFabizi = () => {
  return (
    <FlexGrid fullWidth className="Container__aboutFabizi squers">
      <Theme theme="g100" className="squers">
        <Row className="Container--aboutFabizi-content ">
          <Column lg={1} md={0} sm={0}>
            <FlaggingTaxi size={32} />
          </Column>
          <Column className="aboutFabizi-text" lg={6} md={8} sm={4}>
            Learn How Fabizi Started its Journey As a Management Solution.
          </Column>
          <Column lg={{ span: 5, offset: 4 }} md={4} sm={4}>
            <br />
            <Button
              className="btn"
              renderIcon={ArrowRight}
              tooltipPosition="right"
            >
              About us
            </Button>
          </Column>
        </Row>
      </Theme>
    </FlexGrid>
  );
};

export default AboutFabizi;
