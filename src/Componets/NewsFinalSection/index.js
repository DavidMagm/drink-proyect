import { useContext } from "react"
import { MoneyPageContext } from "../../Context"
import './index.css'

function NewsFinalSection() {
    const {topNewsBusiness} = useContext(MoneyPageContext)
    let shortNewsBusiness = topNewsBusiness.slice(0,6)
    return(
        <section className="section-news-final-rate">
            {shortNewsBusiness.map((news, index) => (
                <div key={index} className="card-news-final-rate">
                    <div className="container-img-news-final">
                        <a href={news.url}><img src={news.urlToImage} alt="" /></a>
                    </div>
                    
                    <div className="container-title-news-final">
                            <span>{news.source.name}</span>
                            <a href={news.url}><h3>{news.title}</h3></a>
                    </div>
                </div>
            ))}
        </section>
    )
}

export {NewsFinalSection}