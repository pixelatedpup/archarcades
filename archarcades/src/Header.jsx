import Nav from "./Nav"
const Header = () =>{
    return(
        <>
            <div className=" text-6xl p-8 flex justify-center " >
                <h1 className="text-[#3900AA] " >Arch Arcades</h1>
            </div>
            <Nav/>
        </>
    );
}

export default Header;