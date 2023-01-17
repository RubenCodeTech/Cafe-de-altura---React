import { useEffect, useContext } from 'react'
import './App.css';
import ApiContextProvider, { ApiContext } from './context/ApiContext';
import ShoppingCartContextProvider from './context/ShoppingCartContext';
import RoutesNavBar from './routes/RoutesNavBar';
import getAllCoffees from './services/coffees'

function App() {
  return (
    <div className="App">
      <ApiContextProvider>
        <ShoppingCartContextComponent>
          <RoutesNavBar />
        </ShoppingCartContextComponent>
      </ApiContextProvider>
    </div>
  );
}

function ShoppingCartContextComponent({ children }) {
  const { setCoffees } = useContext(ApiContext)

  useEffect(() => {
    async function fetchCoffees() {
      const fetchedCoffees = await getAllCoffees()
      setCoffees(fetchedCoffees.products)
    }
    fetchCoffees()
  }, [setCoffees])

  return (
    <ShoppingCartContextProvider>
      {children}
    </ShoppingCartContextProvider>
  )
}

export default App;
