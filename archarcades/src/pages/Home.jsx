const Home = () =>{ 
    return(
    <div>
        <section className="flex justify-center flex-col ">
            <h1> READY FOR FUN?</h1>
            <p>From Bowling to Arcade Games
                We got it all! Get ready for the time
                of your lives at Arch Acades!</p>
        </section>
        
        <section className='flex justify-center flex-row'>

            
            <article className='flex flex-col flex-1'>
                <h2> About</h2>
                <p>Welcome to Arch Arcades - Where the fun never ends!<br/>
                    We provide immersive experiences with each
                    of our games where you get to to play along with, or against other players.<br/>
                    Are you ready to go head to head with some of the toughest players in your area? OR are you looking to create unforgettable memories with your buddies? If so, then dont
                    miss out! Book today!
            </p>
            </article>
            <article className="flex-1"> 
                <img/>
            </article>
        </section>


        <section className="flex flex-col">
            <h2> Reviews</h2>
            <div className="flex flex-row gap-4">
                <article className="bg-black p-4 rounded-2xl"> </article>
                <article className="bg-black p-4 rounded-2xl"> </article>
                <article className="bg-black p-4 rounded-2xl"> </article>
            </div>
        </section>

    </div>
    );
}

export default Home;