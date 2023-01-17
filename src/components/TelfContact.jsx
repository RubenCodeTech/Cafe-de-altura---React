import telfIcon from "../images/IconTelf.png"

export default function TelfContact({className}) {
    return (
        <div className={className}>
            <div> <img src={telfIcon} alt="phone" /> </div>
            <div>
                <a href="tel:+34919490518">+34 919 49 05 18</a>
            </div>
        </div>
    )
}