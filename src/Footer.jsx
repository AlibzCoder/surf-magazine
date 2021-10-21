import logo from './assets/img/logo.png'
import tumblr from './assets/img/tumblr.png'
import twitter from './assets/img/twitter.png'
import vimeo from './assets/img/vimeo.png'

const Footer = () => {
    return <div className="footer center-flex">
        <img src={logo} alt="" />
        <ul className="nav">
            <li className="uppercase"><a href="/">Stories</a></li>
            <li className="uppercase"><a href="/">Events</a></li>
            <li className="uppercase"><a href="/">Places</a></li>
            <li className="uppercase"><a href="/">Boards</a></li>
        </ul>
        <div className="hero-social-icons">
            <img src={tumblr} alt="tumblr" />
            <img src={twitter} alt="twitter" />
            <img src={vimeo} alt="vimeo" />
        </div>
    </div>
}

export default Footer;