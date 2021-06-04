import { updateCurrentUser, updateUser } from "../models/user.js";
import { getFlirtingUsers } from "../models/user.js";
import { createConversation } from "../models/conversation.js";
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

        this.$statusFree = this.querySelector(".status-free");
        this.$statusChatting = this.querySelector(".status-chatting");
        this.$statusFlirting = this.querySelector(".status-flirting");

        this.$flirtBtn = this.querySelector(".btn-flirt");
        this.$biteBtn = this.querySelector(".btn-bite");
        this.$stopFlirtBtn = this.querySelector(".btn-stop-flirting");
        this.$endBtn = this.querySelector(".btn-end-chat");
    }

    connectedCallback() {
        this.$flirtBtn.onclick = () => {
            updateCurrentUser({ status: 'flirting' });
        }
        this.$biteBtn.onclick = async () => {
            // console.log(this);
            //Lấy ra những người dùng đang flỉrting
            let flirtingUsers = await getFlirtingUsers();
            //Kiểm tra số lượng flirting
            if (flirtingUsers.length == 0) {
                alert("There are no flirting users");
                return;
            };
            //nếu số lượng > 0 -> ghép đôi -> chọn ngẫu nhiên 1 flirting user  để ghép đôi
            let index = Math.floor(Math.random() * flirtingUsers.length);
            let randomUser = flirtingUsers[index];
            let currentUser = firebase.auth().currentUser;
            //->tạo 1 conversation
            let conversation = await createConversation([randomUser.id, currentUser.uid]);
            //updateCurrentUser vaf update user flirting để ghép đoi

            updateCurrentUser({ status: 'chatting', currentConversationId: 'id của conversation nào đó' });
            updateUser(randomUser.id,{status:'chatting',currentConversationId:conversation.id});
        }
        this.$stopFlirtBtn.onclick = () => {
            updateCurrentUser({ status: 'free' });
        }
        this.$endBtn.onclick = () => {
            updateCurrentUser({ status: 'free', currentConversationId: '' });
        }
    }
    static get observedAttributes() {
        return ['status'];
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == 'status') {
            this.$statusFree.style.display = 'none';
            this.$statusChatting.style.display = 'none';
            this.$statusFlirting.style.display = 'none';
            if (newValue == 'free') {
                this.$statusFree.style.display = 'block';
            } else if (newValue == 'chatting') {
                this.$statusChatting.style.display = 'block';
            } else if (newValue == 'flirting') {
                this.$statusFlirting.style.display = 'block';
            }
        }
    }
}

window.customElements.define('user-action', UserAction);