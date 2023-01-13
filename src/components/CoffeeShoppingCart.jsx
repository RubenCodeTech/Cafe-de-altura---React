import { Link } from "react-router-dom";
import bagIcon from "../images/Group.png"

export default function CoffeCartShopping(){
    return(
        <div><Link to="/coffee_cart"> <img src={bagIcon} alt="bag" /> </Link></div>
    )
}