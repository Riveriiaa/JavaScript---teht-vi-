const form = document.querySelector('#search-form')
const queryInput = document.querySelector('#query')
const results = document.querySelector('#results')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  const query = queryInput.value

  fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      results.innerHTML = ''

      for (let i = 0; i < data.length; i++) {
        const tvShow = data[i].show

        const article = document.createElement('article')

        const title = document.createElement('h2')
        title.textContent = tvShow.name

        const link = document.createElement('a')
        link.href = tvShow.url
        link.target = '_blank'
        link.textContent = tvShow.url

        const image = document.createElement('img')
        image.src = tvShow.image?.medium
        image.alt = tvShow.name

        const summary = document.createElement('div')
        summary.innerHTML = tvShow.summary

        article.appendChild(title)
        article.appendChild(link)
        article.appendChild(image)
        article.appendChild(summary)

        results.appendChild(article)
      }
    })
})