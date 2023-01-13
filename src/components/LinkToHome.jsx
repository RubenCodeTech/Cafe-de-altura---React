import { Link } from "react-router-dom";
import coffeeIcon from "../images/Vector.png"

export default function LinkToHome() {
    return (
        <div className="flex  items-center gap-3">
            <Link className="text-2xl" to="/">cafedealtura.com </Link><img src={coffeeIcon} alt="coffee" />
        </div>
    )
}