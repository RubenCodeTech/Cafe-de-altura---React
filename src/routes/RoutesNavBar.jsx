import { Route, Routes  } from "react-router-dom"
import Cards from "../components/Cards"
import CoffeeCardsSection from "../components/CoffeeCardsSection"
import CoffeRestaurant from "../components/CoffeeRestaurant"
import FAQ from "../components/Faq"
import { Footer } from "../components/Footer"
import Form from "../components/Form"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import ShopView from "../pages/shop"
import ShoppingCart from "../pages/shoppingCart"

export default function RoutesNavBar() {
    return (
        //home donde esten todos los componentes
        <Routes>
            <Route path='/' element={<> <NavBar /> <Header /> <Cards /> <CoffeeCardsSection /> <FAQ /> <CoffeRestaurant /> <Form /> <Footer /> </>}/>
            <Route path='/shop' element={<> <NavBar /> <ShopView /> <Cards /> <Footer /></>}/>
            <Route path='/suscription' element={<> <NavBar />  </>}/>
            <Route path='/for_business' element={<> <NavBar />  </>}/>
            <Route path='/about_us' element={<> <NavBar />  </>}/>
            <Route path='/contact' element={<> <NavBar />  </>}/>
            <Route path='/coffee_cart' element={<> <ShoppingCart />  </>}/>
            <Route  />
        </Routes>
    )
}