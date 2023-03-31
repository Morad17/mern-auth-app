import React from 'react'
import { Link } from 'react-router-dom'

import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { registerValidate } from '../helper/Validate'

const Register = () => {

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values);
    }
  })

  return (
    <div>
      <h1>Hello</h1>
      <Toaster posisiton="top-center"></Toaster>
      <div className="login">
        <p>Register</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="">
            <img src="" alt="avatar" />
          </div>
          <div className="textbox">
          <input {...formik.getFieldProps('email')}type="text" placeholder="email" />
            <input {...formik.getFieldProps('username')}type="text" placeholder="username" />
            <input {...formik.getFieldProps('password')}type="text" placeholder="password" />
            <button type="submit">rRegister</button>
          </div>
          
        </form>
      </div>
    </div>
  )
}

export default Register