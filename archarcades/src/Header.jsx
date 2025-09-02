import Nav from "./Nav"
const Header = () =>{
    return(
        <>
            <div className=" flex flex-col  p-[10px]  justify-center " >
                <h1 className="text-black text-[24px] text-center font-light" >ARCH</h1>
                <h1 className="text-[var(--primary)] text-[32px] text-center font-bold" >ARCADES</h1>
            </div>
            <Nav/>
        </>
    );
}

export default Header;