import CoffeeCard from './CoffeeCard';

export default function CoffeeCardList({ items }) {
    return (items?.map(coffee=> (
        <CoffeeCard 
            key={coffee._id}
            _id={coffee._id}
            img_url={coffee.img_url}
            brand={coffee.brand}
            price={coffee.price}
            coffee={coffee.coffee}
        />
    )))
}
