import React from 'react';
import { services } from '../../utils/constants';
import { Wrapper } from './style';

const Services = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <h3>
            exclusive furniture <br />
            designed for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            itaque quos velit, fuga doloremque ducimus minus odit corporis
            accusantium minima tempora hic magni fugiat laborum ullam odio
            aliquid? Quidem, amet.
          </p>
        </article>
        <div className='services-center'>
          {services.map(({ id, icon, text, title }) => {
            return (
              <article className='service' key={id}>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
