import React from 'react'

const NewsItem = (props) => {


  let { title, description, imageUrl, newsUrl } = props;
  return (
    <div className='my-3'>
      <div className="card" style={{ width: "18rem", minHeight: "25rem" }}>
        <img src={!imageUrl ? "https://techcrunch.com/wp-content/uploads/2024/05/ipad-noplay.png?resize=1200,675" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )

}

export default NewsItem
