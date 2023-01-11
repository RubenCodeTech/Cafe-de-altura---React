import { useState, useEffect } from 'react';
// import getAllCoffees from '../services/coffees';

function ShopView() {
  const [coffees, setCoffees] = useState([])
  async function getAllCoffees() {
    const response = await fetch('https://cafe-de-altura-api.vercel.app/api/products');
    const data = await response.json();
    return data;

  }

  useEffect(() => {
    async function fetchCoffees() {
        const fetchedCoffees = await getAllCoffees()
        setCoffees(fetchedCoffees)
      }
      fetchCoffees()
    }, [])


  return (
    <>
    <h1 className='text-center text-2xl mt-10 mb-6 font-semibold text-green-900'>Últimos orígenes</h1>
      < div className='grid grid-cols-4 gap-4 mx-10'>
        {coffees.products?.map(coffee => (
          <div key={coffee._id} 
          className='flex flex-col items-center justify-center border-2 rounded-lg py-6' >
            <img className='pb-6' src={coffee.img_url} alt={'coffee bags'}></img>
            <p className='pb-3 font-bold'>{coffee.brand}</p>
            <p className='pb-6'>{coffee.price},00€</p>
            <button className='bg-green-900 text-white text-sm p-2 rounded' onClick={()=>getAllCoffees(console.log(coffee.img_url, coffee.brand, coffee.price))}> Añadir </button>
          </div>
        ))}
      </div >
    </>
  )
}

export default ShopView