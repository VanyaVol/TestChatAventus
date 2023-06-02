
const script = document.createElement('script');
script.src = 'https://webitel.cashx.lk/omni-widget/WtOmniWidget.umd.js';
script.onload = function () {
    const body = document.querySelector('body');
    const widgetEl = document.createElement('div');
    widgetEl.setAttribute('id', 'wt-omnichannel-widget');
    body.appendChild(widgetEl);

    const config = {
        "view": {
            "borderRadiusStyle": "rounded",
            "lang": "en",
            "btnOpacity": "1",
            "logoUrl": "https://prod-lk-cashx-wp.storage.googleapis.com/wp-content/uploads/2020/06/09145913/CashX_logo.svg",
            "accentColor": "hsl(45, 100%, 50%)",
            "position": "right"
        },
        "chat": {
            "url": "wss://webitel.cashx.lk/chat/vftfutujwzlhfhvlpvkxbheltivsjpw"
        },
        "alternativeChannels": {
            "whatsapp": "https://wa.me/+94742477523",
            "email": "info@cashx.lk"
        }
    };

    const app = new WtOmniWidget('#wt-omnichannel-widget', config);
};
document.head.appendChild(script);

const link = document.createElement('link');
link.href = 'https://webitel.cashx.lk/omni-widget/WtOmniWidget.css';
link.type = 'text/css';
link.rel = 'stylesheet';
link.media = 'screen,print';
document.head.appendChild(link);
