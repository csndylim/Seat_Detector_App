import React, { useEffect } from 'react';
import './Form.css';

import image from '../img/img-3.svg'
import { useHistory } from 'react-router';

const FormSuccess = () => {
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
          history.push('/')
        }, 1000)
      }, [history])

  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img-2' src={image} alt='success' />
    </div>
  );
};

export default FormSuccess;
