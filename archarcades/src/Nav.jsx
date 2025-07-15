import { NavLink } from "react-router-dom";
const Nav = () =>{
    return(
        <>
            
            <ul className="flex justify-center gap-4 pb-[60px] text-2xl">
                <li>
                    <NavLink className={"hover:text-[var(--primary)]"}  to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={"hover:text-[var(--primary)]"}  to="/games">Games</NavLink>
                </li>
                <li>
                    <NavLink className={"hover:text-[var(--primary)]"} to="/events">Events</NavLink>
                </li>
                <li>
                    <NavLink className={"hover:text-[var(--primary)]"}  to="/scoreboards">Scoreboards</NavLink>
                </li>
            </ul>
        </>
    );
}

export default Nav;