import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import backArrow from '../../assets/icons/Left Arrow.svg';
// import './login.css'

const Details = () => {
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
            <h1>Welcome Kami!</h1>
            <p style={{'padding-bottom': '1rem'}}>One more thing left...</p>
            <p>Let us know your Department and Matric/Staff Number</p>
          </section>

          <section className="loginForm">
            <h1>Continue</h1>
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
              <div className="email">
                <label htmlFor="department">Department</label>
                <input
                  type="text"
                  name="department"
                  placeholder="Computer Science"
                  {...register("department", {required: "Department is required"})}
                  aria-invalid={errors.department ? "true" : "false"} 
                />
                {errors.department && <p role="alert" style={{color: 'red'}}>{errors.department?.message}</p>}
              </div>

              <div className="password">
                <label htmlFor="number">Matric/Staff Number</label>
                <input
                  type="text"
                  name="number"
                  placeholder="2017/231255"
                  {...register("number")}
                  aria-invalid={errors.number ? "true" : "false"} 
                />
                {errors.number && <p role="alert">{errors.number.message}</p>}
                <span>forgot number? <NavLink to='/resetpassword'>Click here</NavLink></span>
              </div>
              <input type="submit" value='Continue'/>
            </form>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Details