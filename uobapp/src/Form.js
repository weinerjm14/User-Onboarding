import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function RegForm (){
    return(
        <Form>
            <label htmlFor="username">User Name: </label>
            <Field name="username" placeholder="Enter a username" /><br/>
            <lable htmlFor="email">Email: </lable>
            <Field type="email" name="email" placeholder="Enter valid email" /><br/>
            <label htmlFor="password">Password: </label>
            <Field name="password" placeholder="Enter Password" /><br/>
            <label htmlFor="tos">Accept our Terms of Service</label>
            <Field type="checkbox" name="tos" /><br/>
            <button type="submit">Register</button>
        </Form>
    )
};

export default withFormik({
    mapPropsToValues: props => {
        return {
          username: props.username || "",
          password: props.password || "",
          email: props.email || "",
          tos: props.tos || false
        };
      },
      handleSubmit: (values, formikBag) => {
        console.log("values", values);
        console.log("bag", formikBag);
        formikBag.props.addUser({
          ...values,
          id: Date.now()
        });
        formikBag.setStatus("form submitting");
        formikBag.resetForm();
      }
})(RegForm);

// Name
// - [ ] Email
// - [ ] Password
// - [ ] Terms of Service (checkbox)
// - [ ] A Submit button to send our form data to the server.