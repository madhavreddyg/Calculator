const display=document.getElementById("display");
function addtoDispaly(input){
    display.value += input;
};
function Calculate() {
    try{
    display.value=eval(display.value);
    }
    catch(error) {
        display.value="error"
    }
}
function Clear1() {
    display.value=" ";
}
