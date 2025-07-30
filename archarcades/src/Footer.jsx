const Footer = () =>{
    return(
        <>
            <section className=" flex bg-[var(--dark)] mb-[0px]">
                <article className="flex-1 flex flex-col text-white">
                    <h1 className="flex-1 text-center text-[24px]">ARCH</h1>
                    <h1 className="flex-1 text-center text-[34px]">ARCADES</h1>
                    <p className="flex-1 text-center "> ©All rights reserved Archarcades</p>
                </article>
                <article className="flex-1 text-white border-l">
                    <ul className="pl-[20px]">
                        <li><h2>About Us</h2></li>
                        <li><h2>Contact</h2></li>
                        <li><h2>+44 7566 654 736</h2></li>
                        
                    </ul>
                </article>
            </section>
        </>
    );
}

export default Footer;