import { listenAllUsers } from "../models/user.js";

const $template = document.createElement('template');

$template.innerHTML = `
    <div class="app-start">
        <div class="start">
            <i class="fas fa-users"></i>
            <span class="free-user-count">100</span>
        </div>
        <div class="start">
            <i class="fas fa-comments"></i>
            <span class="chatting-user-count">20</span>
        </div>
        <div class="start">
            <i class="fas fa-heartbeat"></i>
            <span class="flirting-user-count">20</span>
        </div>
    </div>
`;

export default class AppStart extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$free = this.querySelector(".free-user-count");
        this.$flirting = this.querySelector(".flirting-user-count");
        this.$chatting = this.querySelector(".chatting-user-count");
    }

    connectedCallback() {
        listenAllUsers((usersData) => {
            // console.log((usersData));
            let free = 0;
            let flirting = 0;
            let chatting = 0;
            for (let userData of usersData) {
                if (userData.status == 'free')
                    free++;
                else if (userData.status == 'flirting')
                    flirting++;
                else if (userData.status == 'chatting')
                    chatting++;
            }

            this.$free.innerHTML = free;
            this.$chatting.innerHTML = chatting;
            this.$flirting.innerHTML = flirting;
        });
    }
}

window.customElements.define("app-start", AppStart);