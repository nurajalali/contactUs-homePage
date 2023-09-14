import {
  FlexGrid,
  Grid,
  Row,
  Column,
  Section,
  Heading,
  FluidForm,
  unstable__FluidTextInput as FluidTextInput,
  unstable__FluidSelect as FluidSelect,
  SelectItem,
  Button,
} from "@carbon/react";
import { ArrowRight } from "@carbon/react/icons";
import "../SectionTwo/ContactUs.style.scss";
import { useState } from "react";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [phoneCode, setPhoneCode] = useState();
  const [email, setEmail] = useState("");
  const [textDescription, setTextDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    let errors = {};

    if (firstName.length == 0) {
      errors.firstName = "Invalid Form, first name is required";
    } else if (!firstName.match("^[a-zA-Z]+$")) {
      errors.firstName = "it's not a name";
    }

    if (lastName.length == 0) {
      errors.lastName = "Invalid Form, family name is required";
      console.log(errors.lastName);
    } else if (!lastName.match("^[a-zA-Z]+$")) {
      errors.lastName = "it's not a family name";
      console.log(errors.lastName);
    }

    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      errors.email = "Email isn't valid";
      console.log(errors.email);
    }

    if (!mobile.match("^\\d+$")) {
      errors.mobile = "enter valid number";
      console.log(errors.mobile);
    }

    if (textDescription.length == 0) {
      errors.textDescription = "write message";
    }
    setErrors(errors);
  };

  return (
    <FlexGrid fullWidth className="contactForm ">
      <Row className="contactForm__space">
        <Column lg={8} md={8} sm={4}>
          <Section level={1}>
            <Heading className="contactForm-main__header">
              How to contact with us?
            </Heading>
          </Section>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form
          </p>
        </Column>
        <Column lg={8} md={8} sm={4}>
          <FlexGrid
            fullWidth
            className="contactForm__border contactForm-bottem__gap"
          >
            <Row className="contactForm__gap">
              <Column lg={16} md={8} sm={4}>
                <Section>
                  <Heading className="contactForm__header">
                    Send us your massages!
                  </Heading>
                </Section>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                </p>
              </Column>

              <Column lg={16} md={8} sm={4}>
                <FluidForm>
                  <FluidTextInput
                    labelText="First Name"
                    placeholder="James"
                    warn={Boolean(errors.firstName)}
                    warnText={errors.firstName}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <FluidTextInput
                    labelText="Last Name"
                    placeholder="Black"
                    value={lastName}
                    warn={Boolean(errors.lastName)}
                    warnText={errors.lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <Grid fullWidth condensed style={{ padding: "0" }}>
                    <Column lg={4} md={2} sm={1}>
                      <FluidSelect
                        labelText="Code"
                        value={phoneCode}
                        onChange={(e) => setPhoneCode(e.target.value)}
                      >
                        <SelectItem value="+98" text="+98" />
                        <SelectItem value="+99" text="+98" />
                        <SelectItem value="+100" text="+98" />
                        <SelectItem value="+001" text="+98" />
                        <SelectItem value="+99" text="+98" />
                      </FluidSelect>
                    </Column>
                    <Column lg={12} md={6} sm={3}>
                      <FluidTextInput
                        labelText="PhoneNumber"
                        value={mobile}
                        warn={Boolean(errors.mobile)}
                        warnText={errors.mobile}
                        onChange={(e) =>
                          setMobile(e.target.value.toUpperCase())
                        }
                      />
                    </Column>
                  </Grid>
                  <FluidTextInput
                    labelText="Email"
                    placeholder="Example@gmail.com"
                    value={email}
                    warn={Boolean(errors.email)}
                    warnText={errors.email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FluidTextInput
                    labelText="Text Area"
                    placeholder="Text Place"
                    value={textDescription}
                    warn={Boolean(errors.textDescription)}
                    warnText={errors.textDescription}
                    onChange={(e) => setTextDescription(e.target.value)}
                  />
                </FluidForm>
              </Column>
            </Row>
            <Row className="contact-form__primary-positin">
              <Column
                lg={{ span: 8, offset: 8 }}
                md={{ span: 4, offset: 4 }}
                sm={{ span: 2, offset: 2 }}
              >
                <Button
                  className="contact-form__primary-btn"
                  renderIcon={ArrowRight}
                  onClick={handleSubmit}
                >
                  Send message
                </Button>
              </Column>
            </Row>
          </FlexGrid>
        </Column>
      </Row>
    </FlexGrid>
  );
};

export default ContactForm;
