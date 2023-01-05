export const formatPrice = (money) => {
  return new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD',
  }).format(money)

}