import Button from "./Button";
import LinkToWebPages from "./LinkToWebPages";
import LinkToHome from "./LinkToHome";
import TelfContact from "./TelfContact";
import CoffeCartShopping from "./CoffeeShoppingCart";
export default function NavBar() {
    return (
        <div>
            <nav className="bg-black flex text-white justify-between text-center items-center content-center w-screen px-[40px] py-[10px]">
                <LinkToHome />
                <LinkToWebPages />
                <div className="flex items-center gap-5">
                    <TelfContact />
                    <Button className={"w-28 h-9 bg-grey rounded-md "} text={'Iniciar sesion'} />
                    <CoffeCartShopping />
                </div>
            </nav>
        </div>
    )
}
