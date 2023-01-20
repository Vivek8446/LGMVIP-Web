// buttton click sound
var audio= document.getElementById("audioMusic");



// To display value
function dis(val) {
    document.getElementById("result").value += val;
    audio.play()
     }



//For backspace button
function back() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
    audio.play()
}




// For clear button
function clr() {
    document.getElementById("result").value = "";
    audio.play()
}
// To calculate and show result in input
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    audio.play()
}


