export default function Checkbox({ onChange, name }) {
    return (<>
        <input className="text-grey" type="radio" name={name} onChange={onChange}/>
    </>)
}