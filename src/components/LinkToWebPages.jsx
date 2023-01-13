import { Link } from "react-router-dom";

export default function LinkToWebPages() {
    return (
        <div className="flex gap-4">
            <Link to="/shop">Tienda</Link>
            <Link to="/suscription">Suscripción</Link>
            <Link to="/for_business">Para empresas</Link>
            <Link to="/about_us">Sobre nosotros</Link>
            <Link to="/contact">Contacto</Link>
        </div>
    )
}