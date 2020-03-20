import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegForm = props => {
    return(
        <Form>
            <label htmlFor="username">User Name: </label>
            <Field name="username" placeholder="Enter a username" /><br/>
            {props.touched.username && props.errors.username ? (
                <span className="error">{props.errors.username}</span>
              ) : null}<br />
            <lable htmlFor="email">Email: </lable>
            <Field type="email" name="email" placeholder="Enter valid email" /><br/>
            {props.touched.email && props.errors.email ? (
                <span className="error">{props.errors.email}</span>
              ) : null}<br />
            <label htmlFor="password">Password: </label>
            <Field name="password" placeholder="Enter Password" /><br/>
            {props.touched.password && props.errors.password ? (
                <span className="error">{props.errors.password}</span>
              ) : null}<br />
            <label htmlFor="tos">Accept our Terms of Service</label>
            <Field type="checkbox" name="tos" /><br/>
            {props.touched.tos && props.errors.tos ? (
                <span className="error">{props.errors.tos}</span>
              ) : null}<br />
            <button type="submit" disabled= {props.isSubmitting}>
              {
                props.isSubmitting ? "Working" : "Register"
              }  
            </button>
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
      handleSubmit: (values, formikBag, addUser) => {
        console.log("values", values);
        console.log("bag", formikBag);
        formikBag.props.addUser({
          ...values,
          id: Date.now()
        });
        axios.post('https://reqres.in/api/users', values)
          .then( response =>
            {
              console.log(response.data)
              addUser(response.data)
            }
          )
          .catch(error => {
            console.log("errors:", error)
          });
       
        formikBag.setStatus("form submitting");
        formikBag.resetForm();
      },
      validationSchema: Yup.object().shape({
        username: Yup.string().required("Please Enter a Title").min(6, "Must be at least 8 characters"),
        password: Yup.string().min(8, "Must be at least 8 characters long").required('Please enter a password'),
        email: Yup.string().email("Please use a valid email"),
        tos: Yup.boolean().oneOf([true], "Must accept Terms of Service to Continue")
      }),
})(RegForm);


// Name
// - [ ] Email
// - [ ] Password
// - [ ] Terms of Service (checkbox)
// - [ ] A Submit button to send our form data to the server.