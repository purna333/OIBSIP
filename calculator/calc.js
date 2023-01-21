let outputscreen = document.getElementById("output-screen");
let display=document.getElementById("display");
function display(num){
    outputscreen.value += num;
}
function Calculate(){
    try{
        outputscreen.value=eval(outputscreen.value);
    }
    catch(err){
        alert("invalid");
    }
}
function Clear(){
    outputscreen.value="";
}
function del(){
    outputscreen.value=outputscreen.value.slice(0,-1);
}
