const Games = () =>{

    const games = [{name: "Game 1" , img: "image 1", age:"", description:""},
                    {name: "Game 2" , img: "image 1", age:"", description:""},
                    {name: "Game 3" , img: "image 1", age:"", description:""},
                    {name: "Game 4" , img: "image 1", age:"", description:""},
                    {name: "Game 5" , img: "image 1", age:"", description:""}
    ]


    return (
        <>
        <article>
            <h1>OUR GAMES</h1>
                <article className="flex flex-wrap ">
                    {games.map((game, index)=> (
            
                            <div className="w-[calc(33.333%-1rem)] p-4 box-border "> 
                                <div className=" w-[332px] h-[684px] ">
                                    <div className="w-[332px] h-[319px] border border-[var(--primary)] rounded-2xl">
                                        <h3 >{game.img}</h3>
                                    </div>
                                    <div className="border border-[var(--primary)] rounded-2xl p-[20px] mt-[20px]">
                                        <h3>{game.name}</h3>
                                    </div>
                                    <h3>{game.description}</h3>
                                </div>
                            </div>
                    ))}


                </article>
            </article>
    
            


        </>
    );
}

export default Games;