
button1.onclick = function(){
    var hello  = document.getElementById("resultsInp");
    console.log(hello.value)
    hello.value += "1"
}
button2.onclick = function(){
    var hello  = document.getElementById("resultsInp");
    console.log(hello.value),
    hello.value += "2"
}
button3.onclick = function(){
    var hello  = document.getElementById("resultsInp");
    console.log(hello.value),
    hello.value += "3"
}
button4.onclick = function(){
    var hello  = document.getElementById("resultsInp");
    console.log(hello.value),
    hello.value += "4"
}

button5.onclick = function(){
    var hello  = document.getElementById("resultsInp");
    console.log(hello.value),
    hello.value += "5"
}
button6.onclick = function(){
    var hello  = document.getElementById("resultsInp");
    console.log(hello.value),
    hello.value += "6"
}

button7.onclick = function(){
    var hello  = document.getElementById("resultsInp");
    console.log(hello.value),
    hello.value += "7"
}
button8.onclick = function(){
    var hello  = document.getElementById("resultsInp");
    console.log(hello.value),
    hello.value += "8"
}
button9.onclick = function(){
    var hello  = document.getElementById("resultsInp");
    console.log(hello.value),
    hello.value += "9"
}
button0.onclick = function(){
    var hello  = document.getElementById("resultsInp");
    console.log(hello.value),
    hello.value += "0"
}
buttonNagtive.onclick = function(){
    var hello  = document.getElementById("resultsInp");
    console.log(hello.value),
    hello.value += "-"
}
buttonAdd.onclick = function(){
    var hello  = document.getElementById("resultsInp");
    console.log(hello.value),
    hello.value += "+"
}
buttonMulty.onclick = function(){
    var hello  = document.getElementById("resultsInp");
    console.log(hello.value),
    hello.value += "*"
}
buttonDiv.onclick = function(){
    var hello  = document.getElementById("resultsInp");
    console.log(hello.value),
    hello.value += "/"
}
btnReset.onclick = function(){
    var hello  = document.getElementById("resultsInp");
    console.log(hello.value),
    hello.value = ""
}

buttonEqul.onclick = function(){
    var givenValue = document.getElementById("resultsInp")
    console.log(givenValue.value)
    var total = givenValue.value
    var Ans = eval(total)
    console.log(Ans) 
    givenValue.value = Ans 
    // resultsInp.innerHTML = numbe
}

