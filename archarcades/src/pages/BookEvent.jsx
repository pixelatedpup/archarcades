import { useParams } from "react-router-dom";

const InputField = ({label="Default", type="", placeholder="Enter", inputFor=""}) =>{
    return(
        <>
            <div className="flex flex-col p-[5px]">
                <p>{label}</p>
                <input className="border border-[var(--dark)] rounded-2xl"/>
            </div>
        </>
    );
}

const BookEvent = () =>{
    const {title} = useParams();

    const inputs =[ {label:"First Name",type:"", inputFor:"",placeholder:""},
                    {label:"Last Name",type:"", inputFor:"",placeholder:""},
                    {label:"Date of Birth",type:"", inputFor:"",placeholder:""},
                    {label:"Address",type:"", inputFor:"",placeholder:""},
                    {label:"Email",type:"", inputFor:"",placeholder:""},
                    {label:"Password",type:"", inputFor:"",placeholder:""}
                ]
    return(
        <>
        <section className="bg-[var(--dark)]">
                <h1 className="text-6xl mx-[150px] text-white p-[90px] font-[Zen_Dots] m-[0]  m-auto text-center">BOOK EVENT</h1>
        </section>
        <div className="mx-[150px]">
            <p>Event</p>
            <select>
                <option>{decodeURIComponent(title)}</option>
            </select>

            {inputs.map((i) => (
                <InputField 
                    key={i.inputFor} 
                    label={i.label}
                    type={i.type}
                    inputFor={i.inputFor}
                    placeholder={i.placeholder} 
                />
            ))}
        </div>
        </>
    );
}

export default BookEvent;