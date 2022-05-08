import React from 'react';
import { Wrapper } from './style';
const Contact = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Join our news world and find your discount</h3>
        <div className='content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            placeat voluptate corporis provident, omnis quod numquam qui. Fuga,
            repellendus aliquid.
          </p>
          <form className='contact-form'>
            <input
              className='form-input'
              type='email'
              placeholder='type your email'
            />
            <button type='submit' className='submit-btn'>
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
