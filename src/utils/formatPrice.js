export default function formatPrice(price) {
  const priceNumber = typeof price === 'number'
   ? price
   : parseFloat(price)
   
  return priceNumber
    .toFixed(2)
    .replace('.', ',')
}