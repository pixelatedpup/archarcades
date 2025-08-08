import { useNavigate } from "react-router-dom";

const Button = ({submit=false, nav = "", text=""}) =>{
    const navigate = useNavigate();
    return(
        <>
            <div>
                <button
                className="
                    rounded-2xl
                    h-[40px]
                    w-[85px]
                    bg-[var(--dark)] 
                    hover:bg-[var(--light)] 
                    text-[var(--light)] 
                    hover:text-[var(--dark)] 
                    border border-[var(--dark)]
                    hover:border-[var(--light)]
                    transition-all
                    duration-500
                "
                onClick={() => navigate(nav)}
                >
                {text}
                </button>

            </div>
        </>
    );
}

export default Button;