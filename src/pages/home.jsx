import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Cards from "../components/Cards";
import CoffeeCardsSection from "../components/CoffeeCardsSection";
import CoffeRestaurant from "../components/CoffeeRestaurant";
import FAQ from "../components/Faq";
import { Footer } from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { ApiContext } from "../context/ApiContext";
import getAllCoffees from "../services/coffees";

export default function HomeView(nav) {
  const { setCoffees } = useContext(ApiContext)

  useEffect(() => {
    async function fetchCoffees() {
      const fetchedCoffees = await getAllCoffees()
      setCoffees(fetchedCoffees.products)
    }
    fetchCoffees()
  }, [setCoffees])

  return (
    <>
      <NavBar />
      <Header />
      <Cards />
      <CoffeeCardsSection />
      <FAQ />
      <CoffeRestaurant />
      <Form />
      <Footer />
    </>
  )
}