import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['input', 'list']
  static values = {
    baseUrl: String,
    age: Number
  }

  connect() {
    console.log(this.ageValue)
    console.log(this.baseUrlValue)
  }

  search(event) {
    event.preventDefault()
    // console.log(this.inputTarget.value)
    this.fetchMovies()
  }

  fetchMovies() {
    fetch(`${this.baseUrlValue}?s=${this.inputTarget.value}&apikey=adf1f2d7`)
      .then(response => response.json())
      .then((data) => {
        // console.log(data.Search)
        // CLEAR THE LIST
        this.listTarget.innerHTML = ''
        data.Search.forEach((movie) => {
          console.log(this)
          this.insertMovie(movie)
        })
      })
  }

  insertMovie(movie) {
    const movieHTML = `<li class="list-group-item border-0">
              <img src=${movie.Poster} alt="${movie.Title}" width="100" height="100%">
              <p>${movie.Title} / ${movie.Year}</p>
            </li>`
    this.listTarget.insertAdjacentHTML('beforeend', movieHTML)
  }
}
