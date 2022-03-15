var date = new Date()
var glitchedTextState = document.getElementById("glitchText").style.animationPlayState;


function checkTime (date) {
    if(date.getSeconds() % 0) {
        return true;
    }
    else{ 
        return false;
    }
};

checkTime;

if (checkTime) {
    glitchedTextState = "paused"
} else {
    glitchedTextState = "running"
}
