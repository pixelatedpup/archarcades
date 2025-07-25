import Card from '../components/Card'
import arcade1 from '../assets/Arcade5.png'
import arcade2 from '../assets/Arcade1.png'
import arcade3 from '../assets/Arcade2.png'
import arcade4 from '../assets/Arcade3.png'
import Carousel from '../components/Carousel'; 


const Home = () => {
    const primaryColor = '#3900AA'
  return (
    <div className="">
      <section className="flex items-center flex-col bg-[var(--dark)] pt-[20px] pb-[20px] text-[white]">
        <h1 className="text-6xl px-[100px] font-['Zen_Dots']">READY FOR FUN?</h1>
        <p className="text-3xl text-center px-[100px] font-light">
          From Bowling to Arcade Games<br />
          We got it all! Get ready for the time
          of your lives at Arch Arcades!
        </p>

        <article className='flex flex-row py-[30px] gap-6' >
        <Carousel/>
        </article>

      </section>

      <section className="flex justify-center flex-row px-[100px] pt-[60px] text-[#3900AA] ">
        <article className="flex flex-col items-center flex-1 ">
          <h2 className="text-6xl font-bold">About</h2>
          <p className="text-3xl font-light pt-[45px]">
            Welcome to <b>Arch Arcades</b> - Where the fun never ends!<br />
            We provide immersive experiences with each
            of our games where you get to play along with, or against other players.<br />
            Are you ready to go head to head with some of the toughest players in your area? OR are you looking to create unforgettable memories with your buddies? If so, then don't
            miss out! Book today!
          </p>
        </article>
        <article className="flex flex-col items-center flex-1">
          <img className="border border-[var(--primary)] rounded-2xl" src={arcade1} alt="arcade preview" width='385px' height='661px'/>
        </article>
      </section>

      <section className="flex flex-col items-center pt-[60px] pb-[60px] bg-[var(--light)]">
        <h2 className="text-6xl text-[var(--primary)] font-bold">Reviews</h2>
        <div className="flex flex-row gap-4 pt-[40px]">
          <article className=""><Card/></article>
          <article className=""><Card/></article>
          <article className=""><Card/></article>
        </div>
      </section>
    </div>
  );
};

export default Home;
