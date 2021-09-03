import React from 'react'
import './MovieRow.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({title,items}) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="movieRow--listArea">
        {items.results.length > 0 &&
          items.results.map((movie, key) => (
            <div className="movieRow__item" key={key}>
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.original_title}
              />
            </div>
          ))}
      </div>
    </div>
  )
}