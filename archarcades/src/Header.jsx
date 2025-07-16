import Nav from "./Nav"
const Header = () =>{
    return(
        <>
            <div className=" flex flex-col  p-8  justify-center " >
                <h1 className="text-black text-4xl text-center font-light" >ARCH</h1>
                <h1 className="text-[var(--primary)] text-6xl text-center font-bold" >ARCADES</h1>
            </div>
            <Nav/>
        </>
    );
}

export default Header;