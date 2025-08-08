import Header from "./Header"
import Footer from "./Footer"
import Body from './Body';
import './styles.css'


const Page = () =>{
    return(
        <>
            <div className="min-h-screen flex flex-col">
                <Header/>
                <div className="flex-grow">
                    <Body/>
                </div>
                <Footer/>
            </div>
       
        </>
    );
};

export default Page;