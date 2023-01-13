// export async function getAllCoffees() {
//   const response = await fetch('http://localhost:3000/coffees');
//   const data = await response.json();
//   return data;
// }

export default async function getAllCoffees() {
  const response = await fetch('https://cafe-de-altura-api.vercel.app/api/products');
  const data = await response.json();
  return data;
}