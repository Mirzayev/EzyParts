import Header from "../Header.jsx";
import HomePage from "../pages/HomePage.jsx";
import Footer from "../Footer.jsx";


export default function RootLayout() {

    return (
        <div>
            <Header/>
            <HomePage/>
            <Footer/>
        </div>
    )
}