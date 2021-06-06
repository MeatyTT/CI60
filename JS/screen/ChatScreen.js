import { listenCurrentUser } from "../models/user.js";
import { listenConversation } from "../models/conversation.js";
const $template = document.createElement('template');
$template.innerHTML = `
    <div class="chat-screen">
        <div class="aside-left">
            <app-start></app-start>
            <user-action></user-action>
        </div>
        <div class="chat-container">
            <message-list></message-list>
            <send-message-form></send-message-form>
        </div>
    </div>
`;
let fakeMessage = [
    { content: "Hello", userId: "id người gửi 1", dateModified: "2021/06/01" },
    { content: "Hi", userId: "id người gửi 2", dateModified: "2021/06/01" },
    { content: "How are you?", userId: "id người gửi 1", dateModified: "2021/06/01" },
    { content: "Quà 1/6 đâu", userId: "id người gửi 2", dateModified: "2021/06/01" },
];
export default class ChatScreen extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$userActions = this.querySelector('user-action');
        this.$messageList = this.querySelector('message-list');
        this.$sendMessageForm = this.querySelector('send-message-form');
    }
    connectedCallback() {
        listenCurrentUser((data) => {
            console.log(data);
            this.$userActions.setAttribute('status', data.status);
            this.$sendMessageForm.setAttribute('conversation-id',data.currentConversationId);

            if(data.status == 'chatting'){
                listenConversation(data.currentConversationId,(data)=>{
                    this.$messageList.setAttribute('messages',JSON.stringify(data.messages));
                });
            }else if(data.status == "free"){
                this.$messageList.setAttribute('messages','[]')
            }
        });

        // listenConversation(); // ko lấy đc id

        this.$messageList.setAttribute('messages',JSON.stringify(fakeMessage));
        //JSON: string, có quy tắc -- phân tích --> 1 mảng // 1 object
    }
}

window.customElements.define('chat-screen', ChatScreen);