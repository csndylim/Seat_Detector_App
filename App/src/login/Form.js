import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

import image from '../img/img-2.jpg';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);


    return (
        <>
        <div className='form-container'>
            <div className='form-content-left'>
            <img className='form-img' src={image} alt='spaceship' />
            </div>
            {!isSubmitted ? (
            <FormSignup setIsSubmitted={setIsSubmitted}/>
            ) : (
            <FormSuccess />
            )}
        </div>
        </>
    );
};

export default Form;
