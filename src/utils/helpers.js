// function for formating price !!!
// not for calculation !!!
export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((el) => el[type]);
  if (type === 'colors') {
    unique = unique.flat(Infinity);
  }
  return ['all', ...new Set(unique)];
};
