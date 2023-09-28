import AboutProject from "../AboutProject/AboutProject"
import Promo from "../Promo/Promo"
import NavTab from "../NavTab/NavTab"
import Techs from "../Techs/Techs"
import Header from "../Header/Header"
import AboutMe from "../AboutMe/AboutMe"
import Footer from "../Footer/Footer"
import './Landing.css'

function Landing(props) {
    return (
        <section className="landing">
            <Header loggedIn={props.isLogin} isLanding={true}/>
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Footer />
        </section>
    )
}
export default Landing;