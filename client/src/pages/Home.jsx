import React from 'react'
import { Link } from 'react-router-dom'

import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { usernameValidate } from '../helper/Validate'


const Home = () => {

  const formik = useFormik({
    initialValues: {
      username: ''
    },
    validate: usernameValidate,
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
        <p>Login to get started</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="">
            <img src="" alt="avatart" />
          </div>
          <div className="textbox">
            <input {...formik.getFieldProps('username')}type="text" placeholder="username" />
            <button type="submit">Lets Go</button>
          </div>
          <div className="">
            <p>Not a Member?</p>
            <Link href="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home