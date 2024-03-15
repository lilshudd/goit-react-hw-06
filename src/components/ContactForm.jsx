import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactsSlice";
import "./styles/ContactForm.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format (XXX-XX-XX)")
      .min(3, "Phone number must be at least 3 characters")
      .max(50, "Phone number must not exceed 50 characters")
      .required("Phone number is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <div className="formContainer">
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <div className="fieldGroup">
            <label htmlFor="name" className="label">
              Name:
            </label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="input-form"
            />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div className="fieldGroup">
            <label htmlFor="number" className="label">
              Number:
            </label>
            <Field
              type="text"
              id="number"
              name="number"
              placeholder="Enter your phone number"
              className="input-form"
            />
            <ErrorMessage name="number" component="div" className="error" />
          </div>
          <button type="submit" className="button-form">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
