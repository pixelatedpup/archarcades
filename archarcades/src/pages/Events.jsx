import { useNavigate } from "react-router-dom";

const Events = () =>{
    const navigate = useNavigate();

    const events = [
        {title:"Bowling" , desc: "Descriptions", image:"" , people:""},
        {title:"Laser Tag" , desc: "Descriptions", image:"" , people:""},
        {title:"Smash Bros Tournament" , desc: "Descriptions", image:"" , people:""},
        {title:"Birthday" , desc: "Descriptions", image:"" , people:""}
    ]

    const handleBooking=(title) =>{
        navigate(`/booking/${encodeURIComponent(title)}`);
    }
    return(
        <>
            <section className="bg-[var(--dark)]">
                <h1 className="text-6xl mx-[150px] text-white p-[90px] font-[Zen_Dots] m-[0]  m-auto text-center">OUR EVENTS</h1>
            </section>

            <section className="flex flex-col gap-[20px] py-[50px] mx-[150px]">
                {events.map((event, index) => (
                    <article className=" flex flex-row border border-[var(--primary)] mx-[120px] p-[30px] rounded-2xl h-[200px] bg-[var(--light)] hover:h-[250px] hover:border-[var(--secondary)] hover:text-[var(--light)] hover:bg-[var(--primary)] transition-[1s] ">
                        <div className="flex flex-1">
                            <p>{event.desc}</p>
                        </div>

                        <div className="flex flex-1 flex-col justify-end">
                            <h1 className="text-right text-4xl  ">{event.title}</h1>
                            <h2>{event.people}</h2>
                            <div className="flex justify-end pt-[20px]">
                                <button className="bg-[var(--dark)] text-white p-[7px] rounded-2xl w-[150px]"
                                onClick={() => handleBooking(event.title)}>
                                    Book Event
                                </button>
                            </div>
                        </div>

                    </article>
                ) )}
            </section>
        </>
    );
}

export default Events;