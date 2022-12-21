import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { BaseURL } from '../../utils/constant';
import { useNavigate } from "react-router-dom";

import backArrow from '../../assets/icons/Left Arrow.svg';
// import '../login/login.css'

const Register = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async data => {
    const body = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
    }
    try {
      const { data } = await axios.post(`${BaseURL}/users`, body, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        }
      })

      

      navigate('/login');
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='loginPage'>
      <div className="container">
        <header className="header">
          <NavLink to='/'>
            <img src={backArrow} alt="back" />
            &nbsp; Back
          </NavLink>
        </header>
        <main className="loginArea">
          <section className="loginText">
            <h1>Hello there !</h1>
            <p>Kindly fill in the required details</p>
          </section>

          <section className="loginForm">
            <h1>Register</h1>
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
              <div className="firstName">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Kami"
                  {...register("firstName", { required: "First Name is required" })}
                  aria-invalid={errors.firstName ? "true" : "false"}
                />
                {errors.firstName && <p
                  role="alert"
                  style={{
                    color: 'red',
                    'font-size': '12px'
                  }}
                >
                  {errors.firstName?.message}
                </p>}
              </div>

              <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Cole"
                  {...register("lastName", { required: "Last Name is required" })}
                  aria-invalid={errors.lastName ? "true" : "false"}
                />
                {errors.lastName && <p role="alert" style={{ color: 'red', 'font-size': '12px' }}>{errors.lastName?.message}</p>}
              </div>

              <div className="email">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="kamicole12@gmail.com"
                  {...register("email", { required: "Email is required" })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <p role="alert" style={{ color: 'red', 'font-size': '12px' }}>{errors.email?.message}</p>}
              </div>

              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  {...register("password")}
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && <p role="alert" tyle={{ color: 'red', 'font-size': '12px' }}>{errors.password.message}</p>}
              </div>
              <input type="submit" value='Register' />
            </form>
          </section>
        </main>
      </div>
    </div>
  )

}

export default Register;