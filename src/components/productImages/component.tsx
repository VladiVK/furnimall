import React, { useState } from 'react';
import { SingleProductImgUI } from '../../global-types';
import { Wrapper } from './style';

export type ProductImagesProps = {
  images: SingleProductImgUI[];
};

const ProductImages = ({ images = [{ url: '' }] }: ProductImagesProps) => {
  // initially our image is not images[0] but is just "undefined" and we have an error
  // to manage this we use default value images = [{ url: '' }]
  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <Wrapper>
      <img className='main' src={mainImage.url} alt='showcase image' />
      <div className='gallery'>
        {images.map((image, index) => {
          return (
            <img
              key={image.id}
              src={image.url}
              alt={image.filename}
              onClick={() => setMainImage(images[index])}
              className={`${image.url === mainImage.url ? 'active' : null}`}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ProductImages;
