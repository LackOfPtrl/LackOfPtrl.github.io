const button1 = document.getElementById('button1');

let generateNum = Math.floor((Math.random() * 4));
let randomPhrase = ['You are Beautiful AF', 'Me and you need to link', 'Send Nudes'];
let selectedPhrase;

function randoMsg(){
    if (generateNum <= 1) {
        selectedPhrase=(randomPhrase[0]);
    } else if (generateNum > 1 && generateNum <= 2) {
        selectedPhrase=(randomPhrase[1]);
    } else {
        selectedPhrase=(randomPhrase[2]);
    };
};

randoMsg();

button1.addEventListener('click', alert(selectedPhrase));