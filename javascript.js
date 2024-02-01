const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
  console.log("hi")
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = 'success.html'
})

