import rightArrow from './assets/img/right-arrow.png'
import footerBack from './assets/img/footer-back.png'

const Subscribe = () => {
    return <div className="subscribe">
        <img src={footerBack} className="footer-back" alt=""  />
        <hr class="vertical-hr" />
        <h1>Join the Club</h1>
        <p>By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.</p>
        <form className="subscribe-input">
            <input type="email" placeholder="Your E-mail" className="uppercase" />
            <button className="center-flex">
                <img src={rightArrow} alt="" />
            </button>
        </form>
    </div>
}

export default Subscribe;