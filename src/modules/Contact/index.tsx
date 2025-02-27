import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { ContentWrapper } from "./styles";
import { useAlerts } from "../../../common";
import emailjs from "emailjs-com";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const { alertSuccess, alertError } = useAlerts();

  const handleSubmit = (values: FormValues, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
    const valuesToSend: Record<string, unknown> = { ...values };

    emailjs
      .send("service_n925ujg", "template_3are7bf", valuesToSend, "XZx6X6R1HhQuREW46")
      .then(
        () => {
          alertSuccess("Your message has been sent successfully!");
          resetForm();
        },
        (error) => {
          alertError(error.text);
        }
      )
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <ContentWrapper>
      <h2>Contact Us</h2>

      <Formik<FormValues> initialValues={{ name: "", email: "", message: "" }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" required />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" required />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <Field as="textarea" id="message" name="message" required />
              <ErrorMessage name="message" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </Form>
        )}
      </Formik>
    </ContentWrapper>
  );
};

export default Contact;
