let x =  (Math.floor(Math.random()*99));

console.log(x);
// let input = document.("#numero").value;
// let body=document.getElementById("body");
// let input = document.getElementById('#numero');
function guess(){
    let input = parseInt(document.getElementById("numero").value);



            if (input < x) {
            document.getElementById("tente").innerHTML = "Tente um número maior";
            document.getElementById("tente").style.setProperty("background-color", 'red');
            }
            if (input > x) {
            document.getElementById("tente").innerHTML = "Tente um número menor";
            document.getElementById("tente").style.setProperty("background-color", 'red');
         }
            if (input === x) {
            document.getElementById("tente").innerHTML = "Acertou, lenda";
            document.getElementById("tente").style.setProperty("background-color", 'green');
            }

}

