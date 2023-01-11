import { Route, Routes  } from "react-router-dom"
import NavBar from "../components/NavBar"
import ShopView from "../pages/shop"
export default function RoutesNavBar() {
    return (
        <Routes>
            <Route path='/' element={<NavBar />}/>
            <Route path='/shop' element={<> <NavBar /> <ShopView /> </>}/>
            <Route path='/suscription' element={<> <NavBar />  </>}/>
            <Route path='/for_business' element={<> <NavBar />  </>}/>
            <Route path='/about_us' element={<> <NavBar />  </>}/>
            <Route path='/contact' element={<> <NavBar />  </>}/>
        </Routes>
    )
}