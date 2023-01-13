import Button from "../components/Button";
import LinkToHome from "../components/LinkToHome";
import TelfContact from "../components/TelfContact";
import CoffeCartShopping from "../components/CoffeeShoppingCart";

export default function ShoppingCart() {
    return (
        <>
            <nav className="bg-black flex text-white justify-between text-center items-center content-center w-screen px-[40px] py-[10px]">
                <LinkToHome />
                <div className="flex items-center gap-5">
                    <TelfContact />
                    <Button className={"w-28 h-9 bg-grey rounded-md "} text={'Iniciar sesion'} />
                    <CoffeCartShopping />
                </div>
            </nav>
            <div className="flex flex-col m-[40px]">
                <div className="text-center">
                    <h2>Cesta()</h2>
                </div>
                <div className="flex justify-between ">
                    <div >izquierda</div>
                    <div>derecha</div>
                </div>
            </div>
        </>
    )
}