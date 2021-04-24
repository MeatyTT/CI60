const $template = document.createElement('template');
$template.innerHTML = `
    <form class="sign-form">
        <h2 class="title">Sign In</h2>
        <div class="sub-title">Hãy đăng nhập tài khoản để vào trang web</div>
        <sign-input class="email" placeholder="Your email" type="email" error=""></sign-input>
        <sign-input class="password" placeholder="Your password" type="password" error=""></sign-input>
        <button class="sign-btn">Sign In</button>
    </form>
`;
export default class SignForm extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$signForm = this.querySelector('.sign-form');
        this.$name = this.querySelector('.name');
        this.$email = this.querySelector('.email');
        this.$password = this.querySelector('.password');
    }
    connectedCallback() {
        this.$signForm.onsubmit = (event) => {
            event.preventDefault();
            let isPass = this.$email.validate((value) => {
                    return value != '';
                }, "Invalid Email") &
                this.$password.validate((value) => {
                    return value != '';
                }, "Invalid Password")
        }
    }
}
window.customElements.define('sign-form', SignForm);