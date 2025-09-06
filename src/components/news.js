import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


const News = (props) => {

  const [articles, setArticles] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [page, setPage] = useState(1)

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=12fdb4c67942492c8c12b261990c099d&page=${page} & pageSize= ${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)

  }

  useEffect(() => {
    updateNews();
  }, [])

  const handlePrevClick = async () => {
    setPage(page - 1)
    updateNews();
  }
  const handleNextClick = async () => {
    setPage(page + 1)
    updateNews();
  }

  return (
    <div className='container my-3'>
      <h1 className='text-center' style={{margin: "35px 0px" ,marginTop:"90px"}}>NewsMonkey - Top Headlines</h1>
      <div className="row">
        {articles && articles.map((element) => {
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button disabled={page <= 1} type="button" className="btn btn-dark  " onClick={handlePrevClick}>&larr; Previous</button>

        <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark  " onClick={handleNextClick}>Next &rarr;</button>
      </div>

    </div>
  )

}


News.defaultProps = {
  country: 'us',
  pageSize: 6,
  category: 'general',
}

News.propTypes = {
  name: PropTypes.string,
  pageSize: PropTypes.array,
  category: PropTypes.string,

}

export default News


