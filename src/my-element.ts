import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('my-element')
export class MyElement extends LitElement {
  createRenderRoot() {
    return this
  }

  render() {
    return html``
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
