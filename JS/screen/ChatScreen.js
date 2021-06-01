import { listenCurrentUser } from "../models/user.js";

const $template = document.createElement('template');
$template.innerHTML = `
    <div class="chat-screen">
        <div class="aside-left">
            <app-start></app-start>
            <user-action></user-action>
        </div>
        <div class="chat-container">
            <message-list></message-list>
        </div>
    </div>
`;
let fakeMessage = [
    {content:"Hello",userId:"id người gửi 1",dateModified:"2021/06/01"},
    {content:"Hi",userId:"id người gửi 2",dateModified:"2021/06/01"},
    {content:"How are you?",userId:"id người gửi 1",dateModified:"2021/06/01"},
    {content:"Quà 1/6 đâu",userId:"id người gửi 2",dateModified:"2021/06/01"},
];
export default class ChatScreen extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$userActions= this.querySelector('user-action')
    }
    connectedCallback() {
        listenCurrentUser((data) => {
            this.$userActions.setAttribute('status',data.status);
        });
    }
}

window.customElements.define('chat-screen', ChatScreen);