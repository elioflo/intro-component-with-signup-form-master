# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/elioflo/intro-component-with-signup-form-master](https://github.com/elioflo/intro-component-with-signup-form-master)
- Live Site URL: [https://elioflo.github.io/intro-component-with-signup-form-master/](https://elioflo.github.io/intro-component-with-signup-form-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS
- BEM
- JavaScript and the Constraint Validation API

### What I learned

I learn most of how to use form validation. Using the [SitePoint](#useful-resources) post as a source, was easy to write the validation message using Constraint Validation API, and for that needed to skip the default browser validation by adding 'novalidate' to the form tag.

```html
<form ... novalidate> ... </form>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
```
```js
if (input.validity.typeMismatch) {
  // use for check correct email format
}

if (input.validity.valueMissing) {
  // use for check empty value
}
```

### Continued development

Need to practice form validation.

### Useful resources

- [css-tricks](https://css-tricks.com/) To seek guidance and learn about CSS regarding any doubts or questions that have appeared.
- [SitePoint](https://www.sitepoint.com/html-forms-constraint-validation-complete-guide/) Post about form validation.
- [web.dev](https://web.dev/learn/forms/) A course about HTML forms to help you improve your web developer expertise..
- [w3school](https://www.w3schools.com/) - To consult about doubts that appeared.
- [mdn_](https://developer.mozilla.org/en-US/) - MDN Web Docs has the most up-to-date and accurate information and the content is presented in an easy-to-understand manner. I also like that it's available in many languages (very important!).

## Author

- Frontend Mentor - [@elioflo](https://www.frontendmentor.io/profile/elioflo)
- Twitter - [@7532elioflo](https://twitter.com/7532elioflo)