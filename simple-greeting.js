// import { html, css, LitElement } from "../../node_modules/lit/";
// import { html } from "../../node_modules/lit-html/lit-html.js";
import { LitElement } from "../node_modules/lit-element/lit-element.js";
export class SimpleGreeting extends LitElement {
  static get styles() {
    return css`
      p {
        color: blue;
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String },
    };
  }

  constructor() {
    super();
    this.name = "Somebody";
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

customElements.define("simple-greeting", SimpleGreeting);
