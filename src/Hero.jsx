import logo from './assets/img/logo.png'
import header from './assets/img/header.jpg'
import leftArrow from './assets/img/Left.png'
import rightArrow from './assets/img/Right.png'
import tumblr from './assets/img/tumblr.png'
import twitter from './assets/img/twitter.png'
import vimeo from './assets/img/vimeo.png'


const Hero = () => {
    return <div className="hero">

        <div className="header">

            <img src={logo} alt="" />

            <ul className="nav">
                <li className="uppercase"><a href="/">Stories</a></li>
                <li className="uppercase"><a href="/">Events</a></li>
                <li className="uppercase"><a href="/">Places</a></li>
                <li className="uppercase"><a href="/">Boards</a></li>
            </ul>


        </div>

        <div className="hero-slider">
            <img src={header} className="hero-img" alt="surfing surf shop" />

            <div className="hero-slider-content">
                <li className="uppercase">Your</li>
                <h1>Beautiful Escape</h1>
                <p>
                    One of the greatest things about the sport of surfing is that you need only three things: your body, a surfboard, and a wave.
                </p>
            </div>

            <div className="hero-slider-pagination">
                <img src={leftArrow} alt="" />
                <span className="uppercase hero-slider-pagination-current">1</span>
                <span className="hero-slider-pagination-separator">/</span>
                <span className="uppercase hero-slider-pagination-all">5</span>
                <img src={rightArrow} alt="" />
            </div>

        </div>

        <div className="hero-social">
            <p className="uppercase">First Surfing Magazine</p>
            <div className="hero-social-icons">
                <img src={tumblr} alt="tumblr" />
                <img src={twitter} alt="twitter" />
                <img src={vimeo} alt="vimeo" />
            </div>
        </div>


    </div>
}

export default Hero;