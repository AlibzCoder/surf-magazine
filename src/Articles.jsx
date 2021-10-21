import articleImg1 from './assets/img/article-1.png'
import articleImg2 from './assets/img/article-2.png'

const UnderlineTitle = ({ title }) => {
    return <div className="underline-title">
        <h1>{title[0]}</h1>
        <h1>{title.substr(1, title.length - 1)}</h1>
    </div>
}




const Articles = () => {
    return <div className="articles">


        <div className="article article-1">
            <div className="article-content">
                <div className="article-title">
                    <UnderlineTitle title="Surf Training" />
                    <span className="uppercase">01</span>
                </div>
                <p>
                    By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.
                </p>
                <a href="/" className="underline uppercase">read more</a>
            </div>
            <div className="article-img">
                <img src={articleImg1} alt="" />
                <p className="uppercase">Surf Camps</p>
            </div>
        </div>

        <div className="article article-2">
            <div className="article-img">
                <img src={articleImg2} alt=""  />
                <p className="uppercase">Surf Camps</p>
            </div>
            <div className="article-content">
                <div className="article-title">
                    <UnderlineTitle title="Point Break" />
                    <span className="uppercase">02</span>
                </div>
                <p>
                    By better understanding the various aspects of By better understanding the various aspects of surfing, By better understanding the various aspects of surfing, you will improve faster and have more fun in the water.
                </p>
                <a href="/" className="underline uppercase">read more</a>
            </div>
        </div>


    </div>
}

export default Articles;