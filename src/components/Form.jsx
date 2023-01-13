import IconTelf from '../images/IconTelf.png'
import email from '../images/email.png'


export default function Form() {


    return (

        <div className="bg-Timberwolf flex flex-row px-[40px] gap-6">

            <div className="py-[110px] flex flex-col text-start">
                <div className="flex  flex-col gap-3">
                    <h3 className='text-[18px] font-semibold '>Entra en contacto con nosotros </h3>
                    <p className='text-[14px] font-normal'>Si tienes dudas, ponte en contacto con nosotros a traves del formulario y te
                        responderemos lo antes posible. </p>
                </div>
                <div className="flex flex-col gap-6 pt-[32px]">
                    <p>Tambien puedes ponerte en contacto con nostros en nuestra direccion o a traves del telefono de la
                        tienda.</p>
                    <div>
                        <p> 742 Evergreen Terrace </p>
                        <p> Springfield, OR 12345</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row gap-3'><img src={IconTelf} alt="phone" /> <p>+1 (555) 123-4567</p></div>
                        <div className='flex flex-row gap-3'>  <img src={email} alt="mail" /> <p>support@example.com</p></div>
                    </div>
                    <p> ¿Buscas trabajo? <a href="ofertatrabajo.html" alt="ofertatrabao"> nuestra oferta </a></p>
                </div>
            </div>
            <div className="flex flex-col w-6/12 bg-white pt-[75px] pl-[19px] pb-[75px] mr-4  ">
                <div className='flex flex-col gap-3'>
                    <div>
                        <label >Nombre completo</label>
                        <input type="text" style={{ width: "95%" }} name="name" className="rounded border border-slate-600 h-8" />
                    </div>

                    <div>
                        <label >Email</label>
                        <input type="email" style={{ width: "95%" }} name="email" className="rounded border border-slate-600 h-8" />
                    </div>

                    <div>
                        <label >Teléfono</label>
                        <input type="tel" list="listatelefonos" style={{ width: "95%" }} className="rounded border border-slate-600 h-8" min="3"
                            max="9" name="phone" />

                    </div>

                </div>
                <div>
                    <textarea name="message" className="rounded border my-5  " style={{ width: "95%" }} id="message" cols="65" rows="8"
                        placeholder="¿En qué podemos ayudarte?"></textarea>
                </div>
                <div>
                    <input type="checkbox" name="privacidad" id="privacidad" />
                    <label>Acepto la <a href="" className="text-black ">Pólitica de Privacidad</a> y los <a
                        className="text-black" href="">Términos y condiciones</a>.</label>
                </div>
                <br></br>
                <div>
                    <button className=" p-3 bg-strong-green text-white border-none rounded font-semibold text-sm cursor-pointer w-20">Enviar</button>
                </div>
                <datalist id="listatelefonos">
                    <option value="US +1(555) 987-6543" />
                </datalist>
            </div>


    
        </div>

    )




}