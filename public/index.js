const movieDisplay = document.querySelector('.movie')
const movieForm = document.querySelector('#movie-form')
const movieInput = document.querySelector('#movie-input')




const fetchMovie = async (movie) => {
  const url = `/api/?t=${movie}`
    
  
  const res = await fetch(url)
  const data = await res.json()

  const displayData = {
    title: data.Title,
    director: data.Director,
    actors: data.Actors,
    plot: data.Plot,
    poster: data.Poster,
  }
  
  console.log(res)

  addMovieToDOM(displayData)
}


const addMovieToDOM = (data) => {
  movieDisplay.innerHTML = `
    <h2>Title: ${data.title}</h2>
    <h4>Directed by: ${data.director}</h4>
    <h4>Cast: ${data.actors}</h4>
    <h4>Plot: ${data.plot}</h4>
    <img src=${data.poster}>
  `
  movieInput.value = ''
}


movieForm.addEventListener('submit', (e) => {
  e.preventDefault()

  if (movieInput.value === '') {
    alert('Please enter a movie')
  } else {
    fetchMovie(movieInput.value)
  }
})
