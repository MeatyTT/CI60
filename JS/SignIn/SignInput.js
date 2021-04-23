const $template = document.createElement('template');
$template.innerHTML = `
    <div class="sign-input">
        <input type="text" class="input-fill">
        <div class="write-error"></div>
    </div>
`;

export default class SignInput extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$main = this.querySelector(".input-fill");
        this.$error = this.querySelector(".write-error");
    }
    static get observedAttributes() {
        return ['placeholder', 'error', 'type'];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == 'placeholder') {
            this.$main.placeholder = newValue;
        } else if (attrName == 'error') {
            this.$error.innerHTML = newValue;
        } else if (attrName == "type") {
            this.$main.type = newValue;
        }
    }
    validate(condition,error){
        let value = this.$main.value;
        if(condition(value)){
           this.setAttribute('error',''); 
           return true;
        }
        else{
            this.setAttribute('error',error)
            return false;
        }
    }
    get value(){
        return this.$main.value;
    }
}
window.customElements.define("sign-input", SignInput);