import Product from './Product';

export default function ProductList({ items }) {
    return (<>
        <h2 className='not-italic font-semibold text-lg leading-6'>Productos</h2>
        <div className='flex flex-col items-start p-0'>
            {items?.map(product => (
                <Product
                    key={product._id}
                    _id={product._id}
                    img={product.img_url}
                    quantity={product.quantity}
                    brand={product.brand}
                    price={product.price}
                />
            ))}
        </div>
    </>)
}
