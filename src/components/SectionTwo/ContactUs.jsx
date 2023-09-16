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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [phoneCode, setPhoneCode] = useState();
  const [email, setEmail] = useState("");
  const [textDescription, setTextDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(errors).length == 0 && submit) {
      navigate("./Message");
      setSubmit(false);
    }
  });

  const validForm = () => {
    let errors = {};
    if (firstName.length == 0) {
      errors.firstName = "Invalid Form, first name is required";
    } else if (!firstName.match("^[a-zA-Z]+$")) {
      errors.firstName = "it's not a name";
    }

    if (lastName.length == 0) {
      errors.lastName = "Invalid Form, family name is required";
    } else if (!lastName.match("^[a-zA-Z]+$")) {
      errors.lastName = "it's not a family name";
    }

    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      errors.email = "Email isn't valid";
    }

    if (!mobile.match("^\\d+$")) {
      errors.mobile = "enter valid number";
    }

    if (Boolean(errors.mobile) === true) {
      Boolean(errors.phoneCode) === true;
      errors.phoneCode = "required";
    }

    if (textDescription.length == 0) {
      errors.textDescription = "write message";
    }

    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    validForm();
  };

  return (
    <FlexGrid fullWidth className="contact-form-padding ">
      <Row className="contact-form__section-left-right-gap">
        <Column lg={8} md={8} sm={4}>
          <Section level={1}>
            <Heading className="contact-form__left-title-font">
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
            className="contact-form__form-border  contact-form__primary-btn-gap"
          >
            <Row className="contact-form__form-row-gap">
              <Column lg={16} md={8} sm={4}>
                <Section>
                  <Heading className="contact-form__right-title-font">
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
                        warn={Boolean(errors.phoneCode)}
                        warnText={errors.phoneCode}
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
                        onChange={(e) => setMobile(e.target.value)}
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
            <Row className="contact-form__primary-btn-positin">
              <Column
                lg={{ span: 8, offset: 8 }}
                md={{ span: 4, offset: 4 }}
                sm={{ span: 2, offset: 2 }}
              >
                <Button
                  className="contact-form__primary-btn contact-form__mobile-primary-btn"
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
