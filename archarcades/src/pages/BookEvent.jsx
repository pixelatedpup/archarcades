import { useParams } from "react-router-dom";
// import  Button from "../components/Button";

const InputField = ({label="Default", type="", placeholder="Enter", inputFor=""}) =>{
    return(
        <>
            <div className="flex flex-col p-[5px]">
                <p>{label}</p>
                <input className="border border-[var(--secondary)] bg-[var(--light)] rounded-2xl w-[600px] h-[35px] mt-[10px]"/>
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
                    {label:"Password",type:"password", inputFor:"",placeholder:""}
                ]
    return(
        <>
        <section className="bg-[var(--dark)]">
                <h1 className="text-6xl mx-[150px] text-white p-[90px] font-[Zen_Dots] m-[0]  m-auto text-center">BOOK EVENT</h1>
        </section>
        <section className="flex flex-col align-center mx-[50px] md:mx-[150px] mb-[50px]">
            <article className="flex flex-col items-center flex-1 pt-[50px] pb-[50px] ">
                <p>Event</p>
                <select className="w-[400px] bg-[var(--light)] border border-[var(--primary)] p-[20px]">
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
            </article>
            <article className="flex flex-1 justify-center">
                <button className="text-center bg-[var(--primary)] text-white rounded-2xl w-[200px] h-[50px] hover:bg-[var(--dark)] duration-[0.4s]" > Complete Booking</button>
            </article>
        </section>
        </>
    );
}

export default BookEvent;