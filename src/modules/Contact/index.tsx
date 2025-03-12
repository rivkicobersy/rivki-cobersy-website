import emailjs from "emailjs-com";
import { Field, Form, Formik } from "formik";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Button, FormItem, FormItemSplitter, TextFormArea, TextFormField, useAlerts } from "../../../common";
import { Container, ContentWrapper, FormWrapper, ReCAPTCHAWrapper, StyledReCAPTCHA, Title } from "./styles";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  recaptchaToken: string;
}

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
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Name is required"),
    lastName: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().required("Message is required"),
    recaptchaToken: isMobile ? Yup.string() : Yup.string().required("reCAPTCHA verification is required"),
  });
  return (
    <ContentWrapper>
      <Container>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Title>Get in touch</Title>
        </motion.div>

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
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
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
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <FormItemSplitter>
                    <FormItem>
                      <Field placeholder="Email" name="email" component={TextFormField} backgroundColor="#fbd0d0" />
                    </FormItem>
                    <FormItem>
                      <Field placeholder="Phone" name="mobile" component={TextFormField} backgroundColor="#fbd0d0" />
                    </FormItem>
                  </FormItemSplitter>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <FormItem>
                    <Field placeholder="Message" name="message" component={TextFormArea} backgroundColor="#f9b4b4" />
                  </FormItem>
                </motion.div>

                {!isMobile && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <ReCAPTCHAWrapper>
                      <StyledReCAPTCHA
                        sitekey="6LcHm-gqAAAAAIXuJRG3JU8aBNPqT7PJi9P1apph"
                        onChange={(token) => {
                          setFieldValue("recaptchaToken", token);
                        }}
                      />
                    </ReCAPTCHAWrapper>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <Button onClick={submitForm} disabled={!isValid || !dirty}>
                    Send Message
                  </Button>
                </motion.div>
              </Form>
            </FormWrapper>
          )}
        </Formik>
      </Container>
    </ContentWrapper>
  );
};

export default Contact;
