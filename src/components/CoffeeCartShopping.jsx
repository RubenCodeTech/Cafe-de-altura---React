import { Link } from "react-router-dom";
import bagIcon from "../images/Group.png"
import { useContext } from 'react'
import {ShoppingCartContext} from '../context/ShoppingCartContext'

export default function CoffeeCartShopping() {
    const { shoppingCart } = useContext(ShoppingCartContext)

    return (
        <div className="flex items-center">
            <Link to="/coffee_cart">
                <img src={bagIcon} alt="bag" />
            </Link>
            <div className="rounded-full p-2 m-2 text-white bg-grey w-6 h-6 flex items-center justify-center text-sm">
                {shoppingCart.length}
            </div>
        </div>
    )
}