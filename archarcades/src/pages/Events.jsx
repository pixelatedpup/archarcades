const Events = () =>{
    const events = [
        {title:"Bowling Event" , desc: "Descriptions", image:"" , people:""},
        {title:"Laser Tag" , desc: "Descriptions", image:"" , people:""},
        {title:"Smash Bros Tournament" , desc: "Descriptions", image:"" , people:""},
        {title:"Birthday Event" , desc: "Descriptions", image:"" , people:""}
    ]
    return(
        <>
            <section className="bg-[var(--primary)]">
                <h1 className="text-6xl mx-[150px] text-white p-[90px] font-[Zen_Dots] m-[0]  m-auto text-center">OUR EVENTS</h1>
            </section>

            <section className="flex flex-col gap-[20px] py-[50px] mx-[150px]">
                {events.map((event, index) => (
                    <article className=" border border-[var(--primary)] mx-[120px] p-[30px] rounded-2xl h-[150px] bg-[var(--light)]">
                        <p>{event.desc}</p>
                        <h1 className="text-right text-4xl text-[var(--primary)] ">{event.title}</h1>
                        <h2>{event.people}</h2>
                        

                    </article>
                ) )}
            </section>
        </>
    );
}

export default Events;