const form = document.querySelector('#search-form')
const queryInput = document.querySelector('#query')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  const query = queryInput.value

  fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
})