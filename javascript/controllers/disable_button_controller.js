import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['resetButton', 'button']


  connect() {
    console.log(this.resetButtonTarget)
    console.log(this.buttonTarget)
  }


  disable(event) {
    // this.element -> returns the ELEMENT WITH DATA-CONTROLLER attribute
    console.log(this.element)
    // event.currentTarget.disabled = true
    this.buttonTarget.disabled = true
    this.buttonTarget.classList.add('btn-danger')
    this.buttonTarget.classList.remove('btn-primary')
    this.buttonTarget.innerText = 'Clicked!'
    // display the reset button
    this.resetButtonTarget.classList.remove('d-none')
  }

  enable() {
    this.buttonTarget.disabled = false
    this.buttonTarget.classList.remove('btn-danger')
    this.buttonTarget.classList.add('btn-primary')
    this.buttonTarget.innerText = 'Click me!'
    this.resetButtonTarget.classList.add('d-none')
  }
}
