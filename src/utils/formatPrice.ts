const formatPrice = (price: number | bigint) => {
  return price
    ? new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD'
      }).format(price)
    : 'FREE TO PLAY';
};

export default formatPrice;
