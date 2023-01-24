import { FrontendmentorFooter } from './components/frontendmentor.js'

window.customElements.define('frontendmentor-footer', FrontendmentorFooter)

function validateForm(e) {
  e.preventDefault()
  const inputs = Array.from(e.target.querySelectorAll('.form__input'))
  console.log(inputs.length)
  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      input.classList.add('form__input--invalidate')
      let message

      if (input.validity.typeMismatch) {
        message = `Looks like this is not an ${input.type}`
      }

      if (input.validity.valueMissing) {
        message = `${input.placeholder} cannot be empty`
      }

      input.nextSibling.nextSibling.textContent = message
      input.nextSibling.nextSibling.classList.add('form__error-message--visible')
    }

    input.addEventListener('input', (e) => {
      e.preventDefault()
      if (e.target.classList.contains('form__input--invalidate')) {
        e.target.classList.remove('form__input--invalidate')
        e.target.nextSibling.nextSibling.classList.remove('form__error-message--visible')
      }
    })
  })
}

document.getElementById('form').addEventListener('submit', validateForm)
