// Write your code here
// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movieList} = props

  const settings = {
    dots: false,
    slideToShow: 4,
    slideToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {movieList.map(each => (
        <MovieItem key={each.id} movieDetails={each} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
