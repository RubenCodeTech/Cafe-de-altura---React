export default function CardsDelivery({img, tittle, text, alt}) {
    return (
        <div className="bg-white flex flex-col justify-center items-center w-[316px] rounded-lg gap-4 py-6">
            <div className="bg-white flex flex-col justify-center items-center w-[316px] rounded-lg gap-4 py-6">
                <img className='bg-green  rounded-[20px] p-3' src={img} alt={alt} />
                <h3 className='font-semibold text-lg leading-6'>{tittle}</h3>
                <p className='text-[14px] leading-4  font-normal h-[64px] px-[19.5px]'>{text}</p>
            </div>
        </div >
    )
}