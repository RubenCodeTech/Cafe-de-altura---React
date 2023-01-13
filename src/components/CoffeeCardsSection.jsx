import { useEffect, useState } from 'react';
import getAllCoffees from '../services/coffees';
import CoffeeCard from './CoffeeCard';
// import getAllCoffees from '../services/coffees';

export default function CoffeeCardsSection() {
    const [coffees, setCoffees] = useState([])
    const showCoffees = 4
    useEffect(() => {
        async function fetchCoffees() {
            const fetchedCoffees = await getAllCoffees()
            setCoffees(fetchedCoffees)
        }
        fetchCoffees()
    }, [])
    return (
        < div className='grid grid-cols-4 gap-4 mx-10'>
       { coffees.products?.slice(0, showCoffees).map((coffee) => (
            <CoffeeCard img_url={coffee.img_url} _id={coffee._id} brand={coffee.brand} price={coffee.price} coffee={coffee.coffee} />)
        )}
        </div>

    )
}
