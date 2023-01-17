import FaqButton from "./FaqButton";

export default function FAQ() {
  const answers = [{
    tittle: "¿Cómo hago el pedido?",
    text: "Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.",
  }, {
    tittle: "¿Por qué los precios son tan bajos?",
    text: "Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible",
  }, {
    tittle: "¿Es posible enviar café a mi oficina? ",
    text: "El café que deseas prboar y completa el proceso de compra. si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedaras sin café"
  }];

  return (
    <div className="bg-green flex flex-col items-center">
      {answers.map((answer, id) => {
        return <div key={id} className="bg-white p-6 m-4 w-[668px] rounded-[10px]">
          <FaqButton 
            key={id} 
            id={id} 
            tittle={answer.tittle} 
            text={answer.text} />
          </div>;
      })}
    </div>
  );
}