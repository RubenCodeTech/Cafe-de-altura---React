import { useState } from "react"
import faqArrow from "../images/arrowFaq.png"

const FaqButton = ({ text, tittle, id }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="" key={id}>
      <div>
        <div className="flex justify-between justify-center items-center" >

          <div className="flex items-center gap-[80%] text-lg font-bold">
            {tittle}
          </div>

        <div>

          <img
            className={ `${!toggle ? "rotate-180" : ""}` }
            onClick={() => setToggle(!toggle)}
            src={faqArrow}
            alt={'arrow'}
          >
          </img>
        </div>
        </div>
          
      </div>

      {toggle
        ? <div className=" translate-y-1 text-xs">
          <div className="h-[1px] w-[100%] bg-black my-[16px]"></div>
          {text}
        </div>
        : <div></div>}
    </div>
  );
}

export default FaqButton








//     return (
//         <div className="bg-green flex flex-col items-center">
//             {faqs.map((faq, i) => {
//                 return (
//                     <div>
//                         <h2>{faq.question}</h2> <button onClick={()=>(
//                             (faq.open === true
//                                 ? <p>{faq.answer}</p>
//                                 :faq.answer=<p>noseque</p>)
//                             )}>aaaaaaaaaaaaaaaaaaaa</button>
//                         <p>{faq.answer}</p>
//                     </div>
//                 )
//             })}
//             <h2 className="text-white">Preguntas frecuentes</h2>
//             <div className="flex flex-col gap-2">

//                 <div className="bg-white p-10">
//                     <div className="flex items-center space-x-20">
//                         <div>
//                             <h3>¿Por qué los precios son tan bajos?</h3>
//                         </div>
//                         {/* <button onClick={(() => setToggle(!toggle))}><img src={arrowFaq} alt="" /></button> */}
//                         {/* <Arrows /> */}
//                         {/* <div onClick="arrow2()">
//                     </div> */}
//                     </div>
//                     <div className="">
//                         <p> <small> constantemente para encontrar los mejores granos y a los agricultores más exigentes.
//                             Si
//                             podemos ofrecerte estos precios es porque tratamos directamente con los productores de
//                             café,
//                             sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás
//                             de
//                             los granos de café recibe el mayor beneficio posible. </small> </p>
//                     </div>
//                 </div>
//                 <div className="bg-white p-10">
//                     <div className="flex items-center space-x-20">
//                         <div>
//                             <h3>Es posible enviar cafe a mi oficina</h3>
//                         </div>
//                         {/* <Arrows /> */}
//                         {/* <div onClick="arrow3()">
//                     </div> */}
//                     </div>
//                     <div className="">

//                         <p> <small> gfdfsadsfdsfdsasdfsdaffdsafdssdfsafdds </small> </p>
//                     </div>
//                 </div>
//             </div>
//             <div className=""> <p>Resolvemos tus dudas</p> →
//             </div>
//         </div >
//     )
// }