import { useState, useEffect } from "react";

const Games = () => {

    const [gamesUse, setGamesUse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/api/games")
            .then(res => {
                if (!res.ok) {
                    return res.json().then(errData => {
                        throw new Error(errData.error || `Server responded with status ${res.status}`);
                    });
                }
                return res.json();
            })
            .then(data => {
                const sixGames = data.results.slice(0, 10);
                setGamesUse(sixGames);
                setLoading(false);
            })
            .catch(err => {
                console.error("API fetch failed:", err);
                setError("Failed to load games. Please try again later.");
                setLoading(false);
            });
    }, []);

    return (
        <>
            <section className="bg-[var(--primary)]">
                <h1 className="text-6xl mx-[150px] text-white p-[30px] font-[Zen_Dots] m-[0]  m-auto ">OUR GAMES</h1>
            </section>
            <section className="mx-[150px]">
                <article className="flex flex-wrap ">
                    {loading && <p className="text-white text-center w-full">Loading games...</p>}
                    {error && <p className="text-red-500 text-center w-full">{error}</p>}
                    {!loading && !error && gamesUse.length === 0 && (
                        <p className="text-white text-center w-full">No games found.</p>
                    )}

                    {gamesUse.map((game, index) => (
                        <div key={index} className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] p-4 box-border ">
                            <div className="w-full h-full max-w-[332px] mx-auto">
                                <div className="w-full h-[319px] border border-[var(--primary)] rounded-2xl">
                                    <img src={game.img} alt={game.name} className="object-cover w-full h-full rounded-2xl" />
                                </div>
                                <div className="border border-[var(--primary)] rounded-2xl p-[20px] mt-[20px]">
                                    <h3>{game.name}</h3>
                                </div>
                                <div className="border border-[var(--primary)] rounded-2xl mt-[20px] p-[20px]">
                                    {game.year && <p>Year: {game.year}</p>}
                                    {game.description && <p>{game.description}</p>}
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