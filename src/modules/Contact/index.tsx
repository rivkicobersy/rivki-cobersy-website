import emailjs from "emailjs-com";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { TextFormField, useAlerts } from "../../../common";
import { ContentWrapper, FormItem, FormWrapper, SubmitButton, Title } from "./styles";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  const { alertSuccess, alertError, alertInfo } = useAlerts();

  const handleSubmit = (values: FormValues) => {
    const valuesToSend: Record<string, unknown> = { ...values };
    console.log(values);
    emailjs.send("service_n925ujg", "template_3are7bf", valuesToSend, "XZx6X6R1HhQuREW46").then(
      () => {
        alertSuccess("Your message has been sent successfully!");
      },
      (error) => {
        alertError(error.text);
      }
    );

    alertInfo();
  };

  return (
    <ContentWrapper>
      <Title>Get in touch</Title>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          handleSubmit(values);
        }}
      >
        {({ submitForm }) => (
          <FormWrapper>
            <Form>
              <FormItem>
                <Field labelText="Name" name="name" component={TextFormField} />
              </FormItem>

              <FormItem>
                <Field labelText="Email" name="email" component={TextFormField} />
              </FormItem>

              <FormItem>
                <Field labelText="Message" name="message" component={TextFormField} />
              </FormItem>
              <SubmitButton type="button" onClick={submitForm}>
                {"Send Message"}
              </SubmitButton>
            </Form>
          </FormWrapper>
        )}
      </Formik>
    </ContentWrapper>
  );
};
export default Contact;
