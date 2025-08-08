import Card from '../components/Card';
import { useState } from 'react';

const ScoreCard = (props) => {
  return (
    <Card
      borderRadius="rounded-2xl"
      borderColor="border-[var(--darkG)]"
      backgroundColour="bg-[var(--secondary)]"
      fontColour="text-[var(--darkG)]"
      hover = {props.hovered}
    >
      <div>photo</div>
      {props.children}
    </Card>
  );
};

const Scoreboards = () => {
  const [hoverScore, setHoverScore] = useState(null);
  const scores = [
    { name: 'GAME', first: 'PLAYER', second: 'PLAYER', third: 'PLAYER', fourth: 'PLAYER' },
    { name: 'GAME', first: 'PLAYER', second: 'PLAYER', third: 'PLAYER', fourth: 'PLAYER' },
    { name: 'GAME', first: 'PLAYER', second: 'PLAYER', third: 'PLAYER', fourth: 'PLAYER' },
    { name: 'GAME', first: 'PLAYER', second: 'PLAYER', third: 'PLAYER', fourth: 'PLAYER' },
    { name: 'GAME', first: 'PLAYER', second: 'PLAYER', third: 'PLAYER', fourth: 'PLAYER' },
  ];

  return (
    <>
      <section className="flex justify-center bg-[var(--dark)]">
        <h1 className="text-6xl mx-[150px] text-white p-[90px] font-['Zen_Dots'] m-0 text-center">
          SCOREBOARDS
        </h1>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-10 justify-items-center">
        {scores.map((score, i) => (
          <article key={i} className="w-[300px]">
            <div className='hover:scale-[1.15] transition-all duration-[0.5s]' 
            onMouseEnter={()=>setHoverScore(i)} 
            onMouseLeave={()=>setHoverScore(null)}>

              <ScoreCard hovered={hoverScore===i}>
                <div className="flex flex-col gap-4">
                  <div className="text-xl font-bold text-center">{score.name}</div>
                  <div className="flex flex-col gap-2 text-center">
                    <h2>{score.first}</h2>
                    <h2>{score.second}</h2>
                    <h2>{score.third}</h2>
                    <h2>{score.fourth}</h2>
                  </div>
                </div>
              </ScoreCard>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default Scoreboards;
