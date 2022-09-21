window.addEventListener('DOMContentLoaded', function () {
  let isDead = false
  const btn = document.getElementById('class-btn')
  const allBoxes = [...document.querySelectorAll('.box')]

  btn.addEventListener('click', () => {
    allBoxes.forEach(el => {
      el.classList[isDead ? 'remove' : 'add']('kill-border')
    })
    isDead = !isDead
  })
})

// var divs = document.querySelectorAll('div')
// var section = document.querySelectorAll('section')
// var main = document.querySelectorAll('main')

// for (let i = 0; i < divs.length; i++) {
//   var el = divs[i]
//   el.style.borderColor = 'red'
//   el.style.borderStyle = 'solid'
//   el.style.borderWidth = '2px'
//   el.style.marginTop = '2px'
//   el.style.marginBottom = '2px'
// }
// for (let i = 0; i < section.length; i++) {
//   var el = divs[i]
//   el.style.borderColor = 'green'
//   el.style.borderStyle = 'solid'
//   el.style.borderWidth = '2px'
//   el.style.marginTop = '2px'
//   el.style.marginBottom = '2px'
// }
// for (let i = 0; i < main.length; i++) {
//   var el = divs[i]
//   el.style.borderColor = 'blue'
//   el.style.borderStyle = 'solid'
//   el.style.borderWidth = '2px'
//   el.style.marginTop = '2px'
//   el.style.marginBottom = '2px'
// }
