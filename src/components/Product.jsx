import Quantity from "./Quantity";
import formatPrice from "../utils/formatPrice";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

export default function Product({ _id, img, quantity, brand, price }) {
    const { shoppingCart } = useContext(ShoppingCartContext)

    return (
        <div className="flex items-start gap-[24px] w-full py-[20px] border-b-[1px] border-taupe last:border-b-0">
            <Quantity quantity={quantity} id={_id} />
            <div className="flex justify-between w-full">
                <div className="flex">
                    <img className="h-[56px] w-auto" src={img} alt="coffee" />
                    <div className="flex flex-col items-start gap-[4px] p-0">
                        <p className="font-bold text-sm leading-[16px]">{brand}</p>
                        <p className="text-sm leading-[16px]">Paquete de café, 250 g</p>
                    </div>
                </div>
                <div className="not-italic font-semibold text-lg leading-6">
                    {formatPrice(price)}€
                </div>
            </div>
        </div>
    )
}