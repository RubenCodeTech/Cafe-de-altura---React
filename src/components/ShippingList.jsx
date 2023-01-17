import Shipping from './Shipping'

export default function ShippingList({shippingOptions, onChange}) {
    return (<>
        <h2 className='not-italic font-semibold text-lg leading-6'>Seleccionar Envío</h2>
        {shippingOptions.map(shipping => 
            <Shipping
                key={shipping.id}
                title={shipping.title} 
                description={shipping.description}
                id={shipping.id} 
                price={shipping.price}
                onChange={onChange}
            />)}
        </>
    )
}
