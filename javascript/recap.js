// RECAP
// const listItems = document.querySelectorAll('li')
// console.log(listItems)
// const btn = document.getElementById('click-me')

// 1. Select the element
// 2. Bind the event listener
// 3. Do your thing
const button = document.querySelector('button')
console.log(button)
button.addEventListener('click', (event) => {
  // console.log(event.currentTarget)
  event.currentTarget.classList.remove('btn-primary')
  event.currentTarget.classList.add('btn-warning')
  event.currentTarget.textContent = 'Clicked!'
})
