const init = () => {
    const formInput = document.querySelector('form')
    formInput.addEventListener('submit', (event) => {
      event.preventDefault()
      const value = document.querySelector('input#searchByID').value
  
      fetch(`http://localhost:3000/movies/${value}`)
        .then((response) => response.json())
        .then((data) => {
          const title = document.querySelector('section#movieDetails h4')
          const summary = document.querySelector('section#movieDetails p')
          title.innerText = data.title
          summary.innerText = data.summary
        })
    })
  }
  
document.addEventListener('DOMContentLoaded', init);
