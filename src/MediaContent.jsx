import mediaContentImg1 from './assets/img/media-content-1.jpg'
import mediaContentImg2 from './assets/img/media-content-2.png'

const MediaContent = () => {
    return <div className="media-content">
        <img src={mediaContentImg1} alt="" />
        <div className="media-content-img2 center-flex">
            <img src={mediaContentImg2} className="" alt="" />
            <div className="play center-flex"></div>
        </div>
        <div className="media-content-text">
            <p>
                By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.
            </p>
            <a href="/" className="uppercase underline">
                Read more
            </a>
        </div>
    </div>
}

export default MediaContent;