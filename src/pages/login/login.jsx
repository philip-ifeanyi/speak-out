import React from 'react'
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import backArrow from '../../assets/icons/Left Arrow.svg';
import './login.css'

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch('email'));

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
            <p>Kindly login with your email and password</p>
          </section>

          <section className="loginForm">
            <h1>Login</h1>
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
              <div className="email">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="kamicole12@gmail.com"
                  {...register("email", {required: "Email is required"})}
                  aria-invalid={errors.email ? "true" : "false"} 
                />
                {errors.email && <p role="alert" style={{color: 'red'}}>{errors.email?.message}</p>}
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
                {errors.password && <p role="alert">{errors.password.message}</p>}
                <span>forgot password? <NavLink to='/resetpassword'>Click here</NavLink></span>
              </div>
              <input type="submit" value='Login'/>
            </form>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Login;