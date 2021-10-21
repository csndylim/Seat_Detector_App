import React, { useContext, useState } from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import './Form.css'

const FormSignup = props => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [isResetPassword, setIsResetPassword] = useState(false);
    const {handleChange, values, handleSubmit, errors} = useForm(validate, isSignUp, props.setIsSubmitted, isResetPassword)


    const changeSignUpHandler = () => {
        setIsSignUp(prevState => !prevState);
        setIsResetPassword(false);
    }

    const resetPasswordHander = () => {
        setIsResetPassword(prevState => !prevState);
        setIsSignUp(false);
    }

    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1> 
                    CanSeat Admin Login
                </h1>
                <div className='form-inputs'>
                    <label htmlFor='username' className='form-label'>
                        Email
                    </label>
                    <input 
                        id='email' //the label has the name 'email' so when you click it will select the text box
                        type='email' 
                        name='email'
                        className='form-input'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange} //errors.email P is the error message and can get css styling
                        />
                    {errors.email && <p>{errors.email}</p> }  
                    
                </div>
                
                {isResetPassword 
                    ? null
                    : <div className='form-inputs'>
                        <label htmlFor='password' className='form-label'>
                            Password
                        </label>
                        <input 
                            id='password'
                            type='password' 
                            name='password'
                            className='form-input'
                            placeholder='Enter your password'
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p> }
                    </div>
                }

                {isSignUp && !isResetPassword
                    ? <div className='form-inputs'>
                        <label htmlFor='password2' className='form-label'>
                            Confirm Password
                        </label>
                        <input 
                            id='password2'
                            type='password' 
                            name='password2'
                            className='form-input'
                            placeholder='Confirm your password'
                            value={values.password2}
                            onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p> }
                    </div>
                    : null
                }
                
                <button className='form-input-btn' type='submit'>
                    {isResetPassword ? "Reset Password" : (isSignUp ? "Sign up" : "Login")}
                </button>
                <span className='form-input-login' onClick={changeSignUpHandler}>
                    Not an admin? Seek admin privileges here
                </span>
                <span className='form-input-login' onClick={resetPasswordHander}>
                    Forgot your password? Reset your password here
                </span>
            </form>
        </div>
    )
}

export default FormSignup

/* <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                        Email
                    </label>
                    <input 
                        id='email'
                        type='email' 
                        name='email'
                        className='form-input'
                        placeholder='Enter your Email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p> }
                </div>



                */