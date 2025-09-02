import Card from '../components/Card';
import { useState } from 'react';

const scores = [
  { name: 'GAME', first: 'JAMES55', second: 'MIKE', third: 'SAM', fourth: 'JOKER' },
  { name: 'GAME', first: 'HANN567', second: 'ME55I', third: 'MESSI', fourth: 'RON89' },
  { name: 'GAME', first: 'REN76', second: 'JEN67', third: 'KI55', fourth: 'L0V3R' },
  { name: 'GAME', first: 'MISSSPK', second: 'LUTH5', third: 'PLAYER456', fourth: 'MANUTD' },
  { name: 'GAME', first: 'JOHNG5', second: 'BATE46', third: 'KELLY23', fourth: 'HELLO123' },
];

const ScoreCard = ({ score, hovered }) => {
  return (
    <Card
      borderRadius="rounded-2xl"
      borderColor="border-[var(--darkG)]"
      backgroundColour="bg-[var(--primary)]"
      fontColour="text-[var(--darkG)]"
      hover={hovered}
    >
      <div className="flex flex-row gap-4 text-white">
        <div className="flex flex-col ">
          <div className='border h-[100px] w-[100px] bg-white'><img/></div>
          <div className="text-xl font-bold text-center">{score.name}</div>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <h2>1. {score.first}</h2>
          <h2>2. {score.second}</h2>
          <h2>3. {score.third}</h2>
          <h2>4. {score.fourth}</h2>
        </div>
      </div>
    </Card>
  );
};

const Scoreboards = () => {
  const [hoverScore, setHoverScore] = useState(null);

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
            <div
              className="hover:scale-[1.15] transition-all duration-[0.5s]"
              onMouseEnter={() => setHoverScore(i)}
              onMouseLeave={() => setHoverScore(null)}
            >
              <ScoreCard hovered={hoverScore === i} score={score} />
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default Scoreboards;
