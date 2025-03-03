import emailjs from "emailjs-com";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, FormItem, FormItemSplitter, TextFormArea, TextFormField, useAlerts } from "../../../common";
import { Container, ContentWrapper, FormWrapper, ReCAPTCHAWrapper, StyledReCAPTCHA, Title } from "./styles";
import { useState, useEffect } from "react";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  recaptchaToken: string;
}

const validationSchema = Yup.object({
  firstName: Yup.string().required("Name is required"),
  lastName: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  message: Yup.string().required("Message is required"),
  recaptchaToken: Yup.string().required("reCAPTCHA verification is required"),
});

const Contact = () => {
  const { alertSuccess, alertError } = useAlerts();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const checkIfMobile = () => {
    return window.innerWidth < 768;
  };

  useEffect(() => {
    setIsMobile(checkIfMobile());

    const handleResize = () => {
      setIsMobile(checkIfMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (values: FormValues) => {
    const valuesToSend: Record<string, unknown> = { ...values };
    emailjs.send("service_n925ujg", "template_3are7bf", valuesToSend, "XZx6X6R1HhQuREW46").then(
      () => {
        alertSuccess("Your message has been sent successfully!");
      },
      (error) => {
        alertError(error.text);
      }
    );
  };

  return (
    <ContentWrapper>
      <Container>
        <Title>Get in touch</Title>
        <Formik
          initialValues={{ firstName: "", lastName: "", email: "", message: "", recaptchaToken: "", mobile: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            handleSubmit(values);
          }}
        >
          {({ submitForm, isValid, dirty, setFieldValue }) => (
            <FormWrapper>
              <Form>
                <FormItemSplitter>
                  <FormItem>
                    <Field
                      placeholder="First Name"
                      name="firstName"
                      component={TextFormField}
                      backgroundColor="#fce3e3"
                    />
                  </FormItem>
                  <FormItem>
                    <Field
                      placeholder="Last Name"
                      name="lastName"
                      component={TextFormField}
                      backgroundColor="#fce3e3"
                    />
                  </FormItem>
                </FormItemSplitter>
                <FormItemSplitter>
                  <FormItem>
                    <Field placeholder="Email" name="email" component={TextFormField} backgroundColor="#fbd0d0" />
                  </FormItem>
                  <FormItem>
                    <Field placeholder="Phone" name="mobile" component={TextFormField} backgroundColor="#fbd0d0" />
                  </FormItem>
                </FormItemSplitter>
                <FormItem>
                  <Field placeholder="Message" name="message" component={TextFormArea} backgroundColor="#f9b4b4" />
                </FormItem>

                {!isMobile && (
                  <ReCAPTCHAWrapper>
                    <StyledReCAPTCHA
                      sitekey="6LcHm-gqAAAAAIXuJRG3JU8aBNPqT7PJi9P1apph"
                      onChange={(token) => {
                        setFieldValue("recaptchaToken", token);
                      }}
                    />
                  </ReCAPTCHAWrapper>
                )}

                <Button onClick={submitForm} disabled={!isValid || !dirty}>
                  {"Send Message"}
                </Button>
              </Form>
            </FormWrapper>
          )}
        </Formik>
      </Container>
    </ContentWrapper>
  );
};

export default Contact;
