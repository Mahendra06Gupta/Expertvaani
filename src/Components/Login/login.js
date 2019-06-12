import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {InputText} from 'primereact/inputtext';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import './login.scss'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});


export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: ''
    };
  }

  toggle() {
    this.setState({disabled: !this.state.disabled});
  }

  render() {
    return (
      <div>
        <Formik
          enableReinitialize={true} initialValues={this.state}
          validationSchema={SignupSchema}
          onSubmit={values => {
          }}>
          {({ errors, touched }) => (
            <div className="container">
              <div className="row  min-vh-100 justify-content-center align-items-center">
                <Form>
                  <div className="p-3 border border-secondary rounded">
                    <div>
                      Log In to Your Account
                      <div className="float-right">
                        <i className="fa fa-times"></i>
                      </div>
                    </div>
                    <hr />
                    <button className="w-100 my-2 p-2 btn btn-primary shadow rounded">
                      <div className="float-left">
                        <span>
                          <i className="pl-2 pr-3 fab fa-facebook-f"></i>
                          <span className="pl-2">Log in with Facebook</span>
                        </span>
                      </div>
                    </button>
                    <button className="w-100 my-2 p-2 btn btn-light shadow rounded">
                      <div className="float-left">
                        <span>
                          <img className="pr-3" src="https://img.icons8.com/color/50/000000/google-logo.png" />
                          <span>Log in with Gmail</span>
                        </span>
                      </div>  
                    </button>
                    <div className="text-center d-flex align-items-center">
                      <hr className="w-50"/><span className="p-1">or</span><hr className="w-50"/>
                    </div>
                    <span className="p-float-label my-3">
                      <i className="fas fa-envelope position-absolute mt-3 text-secondary" />
                      <InputText id="float-input" className="pl-5 w-100" type="text" size="20" name="name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
                      <label htmlFor="float-input" className="pl-5">Username</label>
                    </span>
                    <ErrorMessage name="name" />
                    <span className="p-float-label my-3">
                      <i className="fas fa-lock position-absolute mt-3 text-secondary" />
                      <InputText id="float-input" className="pl-5 w-100" type="text" size="20" name="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                      <label htmlFor="float-input" className="pl-5">Email</label>
                    </span>
                    <ErrorMessage name="email" />
                    <div className="text-center">
                      <button className="w-100 p-2 btn btn-primary shadow rounded" type="submit">Log in</button>
                      <div className="mt-3">
                        or <span className="text-primary">Forgot Password</span>
                      </div>
                      <div className="mt-4">
                        Don't have an account? <a href="#">Sign up</a>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}