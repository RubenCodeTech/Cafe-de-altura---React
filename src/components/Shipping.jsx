import formatPrice from "../utils/formatPrice"
import Checkbox from "./Checkbox"

export default function Shipping({ id, title, description, selected, price, onChange }) {

    return (
        <div className="flex items-start gap-[24px] w-full py-[20px] border-b-[1px] border-taupe last:border-b-0">
            <div className="flex flex-row justify-center items-center gap-[8px] p-0 h-full">
                <Checkbox onChange={() => onChange(id)} name="shipping" />
            </div>
            <div className="flex w-full justify-between">
                <div>
                    <div className="not-italic font-semibold text-sm leading-4">{title}</div>
                    <div className="not-italic font-normal text-sm leading-4">{description}</div>
                </div>
                <div className="not-italic font-semibold text-lg leading-6">
                    {price ? `${formatPrice(price)}€` : 'GRATIS'}
                </div>
            </div>
        </div>)

}
