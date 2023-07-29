
const display = document.querySelector(".display")
const cs = document.querySelector("#cs")
const ds = document.querySelector("#ds")
const ss = document.querySelector("#ss")


function button(number) {
display.value += number
cs.play()
    
}
function calculation (){
    const cal = display.value;
    const allCall = eval(cal);
    display.value = allCall;
    ss.play();

    
}
function clrAll() {
    display.value = "";
    ds.play()
}
function clr() {
    display.value = display.value.substring(0,display.value.length -1);
    ds.play()
}

