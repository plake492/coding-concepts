window.addEventListener('DOMContentLoaded', () => {
  const paddingInput = document.getElementById('padding-input')
  const paddingText = document.querySelector('.display-padding')
  const marginInput = document.getElementById('margin-input')
  const marginText = document.querySelector('.display-margin')
  const spaceTarget = document.getElementById('space-target')

  paddingInput.addEventListener('change', e => {
    const textValue = e.target.value
    const padding = textValue + 'px'
    spaceTarget.style.setProperty('--padding', padding)
    paddingText.textContent = padding

    const value = spaceTarget.style.cssText
    const paddingStyle = value.split(';').find(s => s.includes('--padding'))
  })

  marginInput.addEventListener('change', e => {
    const textValue = e.target.value
    const margin = textValue + 'px'
    spaceTarget.style.setProperty('--margin', margin)
    marginText.textContent = margin

    const value = spaceTarget.style.cssText
    const marginStyle = value.split(';').find(s => s.includes('--margin'))
  })

  // Create your instance
  const gradient = new Gradient()

  // Call `initGradient` with the selector to your canvas
  gradient.initGradient('#gradient-canvas')
  gradient.amp = 3

  // Create your instance
  const gradient2 = new Gradient()

  // Call `initGradient` with the selector to your canvas
  gradient2.initGradient('#gradient-canvas-2 ')
  gradient2.amp = 2
})
