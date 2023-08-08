import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

  return (
    <div className="primevideo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="img"
        alt="prime video"
      />
      <div className="moviesContainer">
        <h1 className="movies-heading">Action Movies</h1>
        <MoviesSlider movieList={actionMovies} />
        <h1 className="movies-heading">Comedy Movies</h1>
        <MoviesSlider movieList={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
