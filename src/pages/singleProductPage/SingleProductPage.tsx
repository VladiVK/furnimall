import React, { useEffect } from 'react';
import axios from 'axios';
import { useProductsContext } from '../../context/products-context/products_context';
import { Wrapper } from './style';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { single_product_url as url } from '../../utils/constants';
import { formatPrice } from '../../utils/helpers';

// Components
import {
  Loading,
  PageHero,
  Error,
  ProductImages,
  Stars,
  AddToCart,
} from '../../components';

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { productsState, productsDispatch } = useProductsContext();
  const {
    single_product: product,
    single_product_loading: loading,
    single_product_error: error,
  } = productsState;

  const fetchSingleProduct = async (url: string) => {
    productsDispatch({ type: 'GET_SINGLE_PRODUCT_BEGIN' });

    try {
      const response = await axios.get(url);
      const product = await response.data;
      productsDispatch({
        type: 'GET_SINGLE_PRODUCT_SUCCESS',
        payload: product,
      });
    } catch (error) {
      productsDispatch({ type: 'GET_SINGLE_PRODUCT_ERROR' });
    }
  };

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  // Optional redirection
  useEffect(() => {
    if (error) {
      setTimeout(() => navigate('/'), 3000);
    }
  }, [error]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const {
    id: vendorCode,
    price,
    colors,
    company,
    description,
    images,
    name,
    reviews,
    stars,
    stock,
  } = product;

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className='section section-center page'>
        <Link to='/products' className='btn'>
          back to products
        </Link>
        <div className='product-center'>
          <ProductImages images={images} />
          <section className='content'>
            <h2>{name}</h2>
            <Stars />
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>
            <p className='info'>
              <span className='info-title'>Available: </span>
              <span>{stock > 0 ? 'in stock' : 'out of stock'}</span>
            </p>
            <p className='info'>
              <span className='info-title'>Vendor code: </span>
              <span>{vendorCode}</span>
            </p>
            <p className='info'>
              <span className='info-title'>Brand: </span>
              <span>{company}</span>
            </p>
            <hr />
            {stock > 0 && <AddToCart />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProductPage;
