import { html, css, LitElement } from 'lit'

export class FrontendmentorFooter extends LitElement {
  static styles = css`
    .footer {
      font-family: sans-serif;
      background-color: #393e46;
      color: white;
      font-size: 16px;
      padding: 0.5em 1em;
    }
    .footer__text {
      text-align: center;
      margin: 0;
      line-height: 1.5;
    }
    .footer__link {
      font-weight: bolder;
      text-decoration: none;
      color: #fafafa;
    }
    @media screen and (min-width: 750px) {
      .footer {
        font-size: 18px;
      }
    }
  `

  static properties = {
    name: { type: String },
    url: { type: String },
  }

  constructor() {
    super()
    this.name = 'Your name here'
    this.url = '#'
  }

  render() {
    return html`
      <footer class="footer">
        <p class="footer__text">
          Challenge by
          <a
            class="footer__link"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          .
          <br />
          Coded by
          <a class="footer__link" href="${this.url}" target="_blank">
            ${this.name}
          </a>
          .
        </p>
      </footer>
    `
  }
}
