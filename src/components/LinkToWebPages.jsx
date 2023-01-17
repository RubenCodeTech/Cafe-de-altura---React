import { Link } from "react-router-dom";

export default function LinkToWebPages({className}) {
    return (
        <div className={className}>
            <Link to="/shop">Tienda</Link>
            <Link to="/suscription">Suscripción</Link>
            <Link to="/for_business">Para empresas</Link>
            <Link to="/about_us">Sobre nosotros</Link>
            <Link to="/contact">Contacto</Link>
        </div>
        
    )
}