const $template = document.createElement('template');

$template.innerHTML=`
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

export default class AppStart extends HTMLElement{
    constructor(){
        super();
        this.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define("app-start",AppStart);