import { useNavigate } from "react-router-dom";
import lasertag from "../assets/lasertag.jpg";
import bowling from "../assets/bowling.jpg";
import smashbros from "../assets/smashbros.jpg";
import birthday from "../assets/birthday.jpg";

const Events = () =>{
    const navigate = useNavigate();

    const events = [
        {title:"Bowling" , desc: "Descriptions", image: bowling , people:""},
        {title:"Laser Tag" , desc: "Descriptions", image: lasertag , people:""},
        {title:"Smash Bros Tournament" , desc: "Descriptions", image: smashbros , people:""},
        {title:"Birthday" , desc: "Descriptions", image: birthday, people:""}
    ]

    const handleBooking=(title) =>{
        navigate(`/booking/${encodeURIComponent(title)}`);
    }
    return(
        <>
            <section className="bg-[var(--dark)]">
                <h1 className="text-6xl mx-[50px] md:mx-[150px] text-white p-[90px] font-[Zen_Dots] m-[0]  m-auto text-center">OUR EVENTS</h1>
            </section>

            <section className="flex flex-col gap-[20px] py-[50px] mx-[20px] md:mx-[50px] sm:mx-[20px]">
                {events.map((event, index) => (
                    <article className="relative flex flex-row items-center justify-between border-[3px] border-[var(--primary)] mx-[50px] md:mx-[150px] p-[30px] rounded-2xl h-[200px] bg-[var(--secondary)] text-[var(--light)] hover:h-[250px] hover:border-[var(--secondary)] hover:text-[var(--light)] hover:bg-[var(--primary)] transition-[1s] overflow-hidden">

                        {/* Background Image Layer */}
                        <img
                            src={event.image}
                            alt={event.title}
                            className="absolute top-0 left-0 w-full h-full object-cover object-center z-0 mask-r-from-80% bg-blend-soft-light"
                        />

                        {/* dimming the image slightly */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[var(--dark)]/50 z-10"></div>

                        {/* Foreground Content */}
                        <div className="relative z-20 flex flex-1">
                            <p>{event.desc}</p>
                        </div>

                        <div className="relative z-20 flex flex-1 flex-col justify-end pl-[20px]">
                            <h1 className="text-right text-4xl font-bold">{event.title}</h1>
                            <h2>{event.people}</h2>
                            <div className="flex justify-end pt-[20px]">
                            <button
                                className="bg-[var(--primary)] text-white p-[7px] rounded-2xl w-[180px] h-[50px] duration-[0.5s] hover:bg-[var(--light)] hover:text-black"
                                onClick={() => handleBooking(event.title)}
                            >
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