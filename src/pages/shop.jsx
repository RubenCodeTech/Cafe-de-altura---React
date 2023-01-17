import { useContext } from 'react';
import CoffeeCardList from '../components/CoffeeCardList';
import { ApiContext } from '../context/ApiContext';

function ShopView() {
  const { coffees } = useContext(ApiContext)

  return (
    <>
      <h1 className='text-center text-2xl mt-10 mb-6 font-semibold text-green'>Últimos orígenes</h1>
      <div className='grid grid-cols-4 gap-4 mx-10'>
        <CoffeeCardList items={coffees} />
      </div>
    </>
  )
}

export default ShopView