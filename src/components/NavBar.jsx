import Button from "./Button";
import LinkToWebPages from "./LinkToWebPages";
import LinkToHome from "./LinkToHome";
import TelfContact from "./TelfContact";
import CoffeeCartShopping from "./CoffeeCartShopping";
import { useLocation } from "react-router-dom";

export default function NavBar() {
    const location = useLocation()

    return (
        <div>
            <nav className="bg-strong-grey flex text-white justify-between text-center items-center content-center w-screen px-[40px] py-[10px]">
                <LinkToHome className={"flex  items-center gap-3"} />
                {showLinks(location) ? <LinkToWebPages className={'flex gap-4'} /> : null}
                <div className="flex items-center gap-5">
                    <TelfContact className={"flex gap-[11px]"} />
                    <Button className={"w-28 h-9 bg-grey rounded-md "} text={'Iniciar sesion'} />
                    <CoffeeCartShopping />
                </div>
            </nav>
        </div>
    )
}

function showLinks(location) {
    const hideLinkPaths = ['/coffee_cart']
    return !hideLinkPaths.includes(location.pathname)
}
