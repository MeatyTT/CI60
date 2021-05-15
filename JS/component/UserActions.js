const $template = document.createElement('template');

$template.innerHTML=`
    <div class="user-action">
        <div class="status-free">
            <button class="btn btn-flirt">Let's flirt</button>
            <button class="btn btn-bite">Bite</button>
        </div>
        <div class="status-flirting">
            <button class="btn btn-stop-flirting">Stop flirting</button>
        </div>
        <div class="status-chatting">
            <button class="btn btn-end-chat">End conversation</button>
        </div>
    </div>
`;

export default class UserAction extends HTMLElement{
    constructor(){
        super();
        this.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('user-action',UserAction);