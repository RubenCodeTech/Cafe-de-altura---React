import gift from '../images/gift.png'
import truck from '../images/truck.png'
import check from '../images/checkboard.png'
import CardsDelivery from './CardsDelivery'

export default function Cards() {

    return (
        <div className="h-[380px] flex flex-col justify-center bg-coffeeBg bg-center bg-cover text-center">
            <h2 className='text-white text-[24px]'>Café con las mejores condiciones</h2>
            <div className="flex  gap-6 justify-center mt-[24px]">
                <CardsDelivery img={check} alt={'check board'} tittle={'Recibe tu pedido sin preocuparte'} text={" Tienes cosas mas importante en la cabeza, por eso con nuestra suscripcion de cafe, nunca tu quedaras sin tu taza de la mañana."} />
                <CardsDelivery img={truck} alt={'truck'} tittle={'en 24/48h'} text={" Pide tu café antes de las 12h y lo recibiras al dia siguiente"} />
                <CardsDelivery img={gift} alt={'gift'} tittle={'Recibe tu pedido sin preocuparte'} text={" Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras a nosotros"} />
            </div>
        </div>
    )
}