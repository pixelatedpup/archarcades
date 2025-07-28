import { useState,useEffect } from "react";
const Games = () =>{

    const [gamesUse, setGamesUse] = useState([]);
    useEffect(() => {
    fetch("http://localhost:5000/api/games")
        .then(res => res.json())
        .then(data => {
        const sixGames = data.results.slice(0, 6).map(r => ({
            name: r.game.name,
            img: r.game.image,
            year: r.game.year?.toString() || '',
            description: r.game.summary || '',
        }));
        setGamesUse(sixGames);
        })
        .catch(err => {
        console.error("API fetch failed:", err);
        });
    }, []);

    /* Mockup data that i used initially */
    const games = [{name: "Game 1" , img: "image 1", age:"", description:"Description"},
                    {name: "Game 2" , img: "image 1", age:"", description:"Description"},
                    {name: "Game 3" , img: "image 1", age:"", description:"Description"},
                    {name: "Game 4" , img: "image 1", age:"", description:"Description"},
                    {name: "Game 5" , img: "image 1", age:"", description:"Description"}
    ]


    return (
        <>
        <section className="bg-[var(--primary)]">
            <h1 className="text-6xl mx-[150px] text-white p-[30px] font-[Zen_Dots] m-[0]  m-auto ">OUR GAMES</h1>
        </section>
        <section className="mx-[150px]">
                
                <article className="flex flex-wrap ">
                    {gamesUse.map((game, index)=> (
            
                            <div className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] p-4 box-border "> 
                                <div className="w-full h-full max-w-[332px] mx-auto">
                                    <div className="w-full h-[319px] border border-[var(--primary)] rounded-2xl w-full h-[319px]">
                                        <img src={game.img} alt={game.name} className="object-cover w-full h-full rounded-2xl" />

                                    </div>
                                    <div className="border border-[var(--primary)] rounded-2xl p-[20px] mt-[20px]">
                                        <h3>{game.name}</h3>
                                    </div>
                                    <div className="border border-[var(--primary)] rounded-2xl mt-[20px]">
                                        <h3>{game.year}</h3>
                                        <h3>{game.description}</h3>
                                    </div>
                                </div>
                            </div>
                    ))}


                </article>
            </section>
    
            


        </>
    );
}

export default Games;