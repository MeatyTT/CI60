const $template = document.createElement('template');
$template.innerHTML = `
    <div class="input-wrapper">
        <input type="text" class="input-main">
        <div class="input-error"></div>
    </div>
`;

export default class InputWrapper extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
    }
    static get observedAttributes() {
        return ['placeholder', 'error', 'type'];
    }
    attributeChangeCallback(attrName, oldValue, newValue) {

    }
}
window.customElements.define("input-wrapper",InputWrapper);