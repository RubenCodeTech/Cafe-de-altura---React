import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";
import ShippingList from '../components/ShippingList';
import { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { ApiContext } from "../context/ApiContext";
import formatPrice from "../utils/formatPrice";

export default function ShoppingCartView() {
    const shippingOptions = [
        {
            title: 'Envio 5-7 días',
            description: 'Opción estándar sin seguimiento',
            price: 0,
            id: 'standard'
        },
        {
            title: 'Envio urgente 24h',
            description: 'Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).',
            price: 9,
            id: 'urgent'
        }
    ]

    const { shoppingCart } = useContext(ShoppingCartContext)
    const { coffees } = useContext(ApiContext)

    const cartCoffees = getShoppingCartCoffees(
        shoppingCart,    
        coffees
    )
    console.log(cartCoffees)
    const totalPrice = getTotalCartPrice(cartCoffees)

    const [shipping, setShipping] = useState('standard')
    const [shippingPrice, setShippingPrice] = useState(0)
    const [totalPriceWithShipping, setTotalPriceWithShipping] = useState(totalPrice + shippingPrice)
    const [vatPrice, setVatPrice] = useState(0)

    useEffect(() => {
        setShippingPrice(shippingOptions.find(shippingOption => shippingOption.id === shipping)?.price || 0)
        setVatPrice((totalPriceWithShipping) * 0.21)
        setTotalPriceWithShipping(totalPrice + shippingPrice)
    }, [shipping, shippingPrice, totalPrice, totalPriceWithShipping])

    return (
        <>
            <NavBar />
            <div className="flex flex-col m-[40px]">
                <div className="text-center">
                    <h2 className="not-italic font-medium text-2xl leading-7 text-green-800">Cesta({shoppingCart.length})</h2>
                </div>
                <div className="flex">
                    <div className="flex flex-col w-4/6 justify-between mr-3">
                        <ProductList items={cartCoffees} />
                        <ShippingList
                            shippingOptions={shippingOptions}
                            onChange={(id) => setShipping(id)}
                        />
                    </div>
                    <div className="w-2/6 bg-offwhite p-4 flex flex-col justify-between">
                        <div className="border-b-[1px] border-taupe p-2">
                            <p className="not-italic font-semibold text-lg leading-6">Total del carrito</p>
                        </div>
                        <div className="border-b-[1px] border-taupe flex flex-col items-start p-2">
                            <div className="flex w-full justify-between">
                                <div className="not-italic leading-6">SUBTOTAL </div>
                                <div className="not-italic font-semibold leading-6">{formatPrice(totalPrice)}€</div>
                            </div>
                            <div className="flex w-full justify-between">
                                <div className="not-italic leading-6">ENVIO</div>
                                <div className="not-italic font-semibold leading-6">{formatPrice(shippingPrice)}€</div>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="flex w-full justify-between">
                                <div className="not-italic font-semibold text-lg leading-6">Total</div>
                                <div className="not-italic font-semibold text-lg leading-6">{formatPrice(totalPriceWithShipping)}€</div>
                            </div>
                            <div className="flex items-end text-right">
                                <div className="w-full not-italic text-grey text-sm leading-4">Incluye {formatPrice(vatPrice)}€ de IVA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function getShoppingCartCoffees(
    coffeeIds,           
    coffees             
) {
    const uniqueCoffeeIds = [...new Set(coffeeIds)]
    return uniqueCoffeeIds.map(id => ({
        ...(coffees.find(coffee => coffee._id === id)),
        quantity: coffeeIds.filter(coffeeId => coffeeId === id).length
    }))
}

function getTotalCartPrice(cartCoffees) {
    return cartCoffees.reduce((sum, coffee) => sum + coffee.price * coffee.quantity, 0)
}