import { useContext } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartContext"
import formatPrice from "../utils/formatPrice"

export default function CoffeeCard({ _id, img_url, brand, price, coffee }) {
    const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext)

    return (<>
        <div key={_id}
            className='flex flex-col items-center justify-center border-2 border-[#E3DED7] rounded-lg py-6' >
            <img className='pb-6' src={img_url} alt={'coffee bags'}></img>
            <p className='pb-3 font-bold'>{brand}</p>
            <p className='pb-6'>{formatPrice(price)}€</p>
            <button className='bg-green text-white text-sm p-2 rounded' onClick=
                {() => setShoppingCart([...shoppingCart, _id]) }> Añadir </button>
        </div>
    </>)
}
