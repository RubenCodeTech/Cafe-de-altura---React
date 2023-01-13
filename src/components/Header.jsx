import { Link } from "react-router-dom"
import coffeeplant from '../images/coffeeplant.png'
import Button from "./Button"

export default function Header() {
    return (
        <div className="flex items-center justify-start text-left py-12 px-10 gap-6 ">
            <div className="flex items-start flex-col justify-center  gap-4">
                <h3 className="text-green text-[18px] text-green"><strong> De la planta a tu taza </strong></h3>
                <h1 className="text-[40px] leading-[44px]  font-semibold "> El mejor cafe del mundo, ahora en tu casa. </h1>
                <p className="text-[12px] font-normal leading-4">trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de cafe y que puedas
                    viajar desde la comodidad de tu hogar</p>

                <div className="flex gap-4">
                    <Link to={'/about_us'} ><Button className={"text-white bg-black py-3 px-6"} text={'Descrubir orígenes'} /></Link>
                    <Link to={'/shop'} ><Button className={"text-white bg-strong-green py-3 px-6"} text={'Comprar café'} /></Link>
                </div>
            </div>
            <div >
                <div >
                    <img className=" rounded-[20px] " src={coffeeplant} alt='CoffePlant' />
                </div>
            </div>
        </div>
    )
}