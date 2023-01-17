import { Route, Routes  } from "react-router-dom"
import Cards from "../components/Cards"
import { Footer } from "../components/Footer"
import NavBar from "../components/NavBar"
import HomeView from "../pages/home"
import ShopView from "../pages/shop"
import ShoppingCartView from "../pages/shopping_cart"

export default function RoutesNavBar() {
    return (
        //home donde esten todos los componentes
        <Routes>
            <Route path='/' element={<HomeView />}/>
            <Route path='/shop' element={<> <NavBar /> <ShopView /> <Cards /> <Footer /></>}/>
            <Route path='/suscription' element={<> <NavBar />  </>}/>
            <Route path='/for_business' element={<> <NavBar />  </>}/>
            <Route path='/about_us' element={<> <NavBar />  </>}/>
            <Route path='/contact' element={<> <NavBar />  </>}/>
            <Route path='/coffee_cart' element={<> <ShoppingCartView /></>}/>
        </Routes>
    )
}