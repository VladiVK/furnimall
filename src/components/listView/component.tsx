import React from 'react';
import { Link } from 'react-router-dom';
import { BasicProductUI } from '../../global-types';
import { formatPrice } from '../../utils/helpers';
import { Wrapper } from './style';

type ListViewProps = {
  products: BasicProductUI[];
};
const ListView = ({ products }: ListViewProps) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, description, name, price } = product;

        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className='price'>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link className='btn' to={`/products/${id}`}>
                see more
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

export default ListView;
