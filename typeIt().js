let output = document.getElementById('output');
let char = 0;
const myText = "Hello World";
const txtLen = myText.length;

(function typeIt() {
  timeOut = setTimeout(function() {
    char++;
    let var1 = 0;
    let var2 = 0;
    let var3 = 0;
    var1 = Math.floor(Math.random() * 256);
    var2 = Math.floor(Math.random() * 256);
    var3 = Math.floor(Math.random() * 256);
    console.log(var1, var2, var3);
    output.style.color=`rgb(${var1},${var2},${var3})`;
    output.style.background='black'
    var type = myText.substring(0, char);
    output.innerHTML = type + '|';
    typeIt();

    if (char == txtLen) {
      //output.innerHTML=output.value.slice(0, -2)); // remove the '|'
      clearTimeout(timeOut);
    }

  }, 100);
}());
