import { updateCurrentUser } from "../models/user.js";

const $template = document.createElement('template');

$template.innerHTML = `
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

export default class UserAction extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$flirtBtn = this.querySelector(".btn-flirt");
        this.$biteBtn = this.querySelector(".btn-bite");
        this.$stopFlirtBtn = this.querySelector(".btn-stop-flirting");
        this.$endBtn = this.querySelector(".btn-end-chat");
    }

    connectedCallback() {
        this.$flirtBtn.onclick = () => {
            updateCurrentUser({ status: 'flirting' });
        }
        this.$biteBtn.onclick = () => {
            updateCurrentUser({ status: 'chatting',currentConversationId:'id của conversation nào đó' });
        }
        this.$stopFlirtBtn.onclick = () => {
            updateCurrentUser({ status: 'free' });
        }
        this.$endBtn.onclick = () => {
            updateCurrentUser({ status: 'free', currentConversationId: '' });
        }
    }
}

window.customElements.define('user-action', UserAction);