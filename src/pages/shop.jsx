import { useState, useEffect } from 'react';
import CoffeeCard from '../components/CoffeeCard';
import getAllCoffees from '../services/coffees';

function ShopView({coffee}) {
  const [coffees, setCoffees] = useState([])

  useEffect(() => {
    async function fetchCoffees() {
        const fetchedCoffees = await getAllCoffees()
        setCoffees(fetchedCoffees)
      }
      fetchCoffees()
    }, [])


  return (
    <>
    <h1 className='text-center text-2xl mt-10 mb-6 font-semibold text-green'>Últimos orígenes</h1>
      < div className='grid grid-cols-4 gap-4 mx-10'>
        {coffees.products?.map((coffee) => (
            <CoffeeCard img_url={coffee.img_url} _id={coffee._id} brand={coffee.brand} price={coffee.price} coffee={coffee.coffee} />)
        )}
        </div>
    </>
  )
}

export default ShopView