import Articles from "./Articles";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import MediaContent from "./MediaContent";
import Shop from "./Shop";
import Subscribe from "./Subscribe";

const App = () => {
    return <div className="app">

        <Hero />

        <div className="quote">
            <p className="quote-text">
                Surfing is the most blissful experience you can have on this planet, a taste of heaven.
            </p>
            <span className="uppercase">John McCarthy</span>
            <hr className="vertical-hr"/>
        </div>


        <MediaContent />
        <Shop />
        <Articles />
        <Subscribe />
        <Contact />
        <Footer />
    </div>
}
export default App;