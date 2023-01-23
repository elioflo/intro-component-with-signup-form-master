import { FrontendmentorFooter } from "./components/frontendmentor.js";

window.customElements.define('frontendmentor-footer', FrontendmentorFooter);

function insertAfter(newElement, element){
    element.parentNode.insertBefore(newElement, element.nextSibling);
}

function setMessage(message){
    const p = document.createElement('p')
    p.textContent = message
    p.className = 'form__error-message'
    return p
}

function validateForm(e){
    e.preventDefault();
    const inputs = Array.from(e.target.querySelectorAll('.form__input'))
    console.log(inputs.length);
    inputs.forEach(input => {

        console.log(input.nextSibling.nextSibling.nodeName);

        if(input.validity.typeMismatch){
            input.classList.add('form__input--invalidate')
            const message = `Looks like this is not an/a ${input.type}`
            input.nextSibling.nextSibling.textContent = message
            input.nextSibling.nextSibling.classList.add('form__error-message--visible')
        }
        
        if(input.validity.valueMissing){
            input.classList.add('form__input--invalidate')
            const message = `${input.placeholder} cannot be empty`
            input.nextSibling.nextSibling.textContent = message
            input.nextSibling.nextSibling.classList.add('form__error-message--visible')
        }
    })
}

document.getElementById('form').addEventListener('submit',validateForm)