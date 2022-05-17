import React from 'react';
import { IconType } from 'react-icons';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { Wrapper } from './style';
type StarsProps = {
  stars: number;
  reviews: number;
};
// type StarIcons = {
//   full: IconType;
//   half: IconType;
//   empty: IconType;
// };
// const starIcons = {
//   full: BsStarFill,
//   half: BsStarHalf,
//   empty: BsStar,
// };
// function manageStars(stars: number, icons: StarIcons) {
//   let starsBank: any[] = [];

//   let rate = stars
//     .toString()
//     .split('.')
//     .map((el) => Number(el));

//   if (rate.length === 0) {
//     starsBank = Array.from({ length: 5 }, () => icons.empty);
//   }
//   if (rate.length === 1) {
//     starsBank = Array.from({ length: rate[0] }, () => icons.full);
//     while (starsBank.length !== 5) starsBank.push(icons.empty);
//   }
//   if (rate.length > 1) {
//     starsBank = Array.from({ length: rate[0] }, () => icons.full);
//     starsBank.push(rate[1] <= 5 ? icons.half : icons.full);
//     while (starsBank.length !== 5) starsBank.push(icons.empty);
//   }

//   return starsBank;
// }

const Stars = ({ reviews, stars }: StarsProps) => {
  const newStars = Array.from({ length: 5 }, (_, index) => {
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= index + 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <Wrapper>
      <div className='stars'>
        {/* {stars &&
          manageStars(stars, starIcons).map((star, index) => (
            <span key={index}>{star()}</span>
          ))} */}
        {newStars}
      </div>
      <p className='reviews'>({reviews} customer reviews)</p>
    </Wrapper>
  );
};

export default Stars;
