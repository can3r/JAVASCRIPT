function calculadora(){
  var display = document.getElementById('display')
  var uno = document.getElementById('1')
  var dos = document.getElementById('2')
  var tres = document.getElementById('3')
  var cuatro = document.getElementById('4')
  var cinco = document.getElementById('5')
  var seis = document.getElementById('6')
  var siete = document.getElementById('7')
  var ocho = document.getElementById('8')
  var nueve = document.getElementById('9')
  var cero = document.getElementById('0')
  var on =document.getElementById('on')
  var sign =document.getElementById('sign')
  var raiz =document.getElementById('raiz')
  var dividido = document.getElementById('dividido')
  var por = document.getElementById('*')
  var menos = document.getElementById('-')
  var punto =document.getElementById('punto')
  var igual =document.getElementById('igual')
  var mas = document.getElementById('mas')
  var resultado = document.getElementById('resultado')


  var operandoa;
  var operandob;
  var operacion;

}
document.getElementById('1').onclick=function(){uno()};
  function uno(){
    escribir(1)
    document.getElementById('1').setAttribute("style", "transform:scale(0.95,0.95)");
}
document.getElementById('2').onclick=function(){dos()};
  function dos(){
    escribir(2)
    document.getElementById('2').setAttribute("style", "transform:scale(0.95,0.95)");
}
document.getElementById('3').onclick=function(){tres()};
  function tres(){
    escribir(3)
    document.getElementById('3').setAttribute("style", "transform:scale(0.95,0.95)");
}
document.getElementById('4').onclick=function(){cuatro()};
  function cuatro(){
    escribir(4)
    document.getElementById('4').setAttribute("style", "transform:scale(0.95,0.95)");
}
document.getElementById('5').onclick=function(){cinco()};
  function cinco(){
    escribir(5)
    document.getElementById('5').setAttribute("style", "transform:scale(0.95,0.95)");
}

document.getElementById('6').onclick=function(){seis()};
  function seis(){
    escribir(6)
    document.getElementById('6').setAttribute("style", "transform:scale(0.95,0.95)");
}

document.getElementById('7').onclick=function(){siete()};
  function siete(){
    escribir(7)
    document.getElementById('7').setAttribute("style", "transform:scale(0.95,0.95)");
}
document.getElementById('8').onclick=function(){ocho()};
  function ocho(){
    escribir(8)
    document.getElementById('8').setAttribute("style", "transform:scale(0.95,0.95)");
}
document.getElementById('9').onclick=function(){nueve()};
  function nueve(){
    escribir(9)
    document.getElementById('9').setAttribute("style", "transform:scale(0.95,0.95)");
}
document.getElementById('0').onclick=function(){cero()};
  function cero(){
    escribir(0)
    document.getElementById('0').setAttribute("style", "transform:scale(0.95,0.95)");
}
document.getElementById('on').onclick=function(){on()};
  function on(){
    escribir(0)
    document.getElementById('on').setAttribute("style", "transform:scale(0.95,0.95)");
}
document.getElementById('sign').onclick=function(){sign()};
  function sign(){
    escribir("-")
    document.getElementById('sign').setAttribute("style", "transform:scale(0.95,0.95)");
}
document.getElementById('dividido').onclick=function(){dividido()};
  function dividido(){
    escribir("/")
    document.getElementById('dividido').setAttribute("style", "transform:scale(0.95,0.95)");
}
document.getElementById('por').onclick=function(){por()};
  function por(){
    escribir("*")
    document.getElementById('por').setAttribute("style", "transform:scale(0.95,0.95)");
}
document.getElementById('menos').onclick=function(){menos()};
  function menos(){
    escribir("-")
    document.getElementById('menos').setAttribute("style", "transform:scale(0.95,0.95)");
}
document.getElementById('punto').onclick=function(){punto()};
  function punto(){
    escribir(".")
    document.getElementById('punto').setAttribute("style", "transform:scale(0.95,0.95)");
}
document.getElementById('igual').onclick=function(){igual()};
  function igual(){
    escribir("=")
    document.getElementById('igual').setAttribute("style", "transform:scale(0.95,0.95)");
}
document.getElementById('mas').onclick=function(){mas()};
  function mas(){
    escribir("+")
    document.getElementById('mas').setAttribute("style", "transform:scale(0.95,0.95)");
}
function escribir(numero){
  display.textContent+= numero;
}


function sign() {
  if (display.innerHTML.indexOf("-")==-1) {
          display.innerHTML = "-" + display.innerHTML;
        }  else {
            display.innerHTML = display.innerHTML;
          }
}
function punto() {
  if (display.innerHTML.indexOf('.')==-1) {
          display.innerHTML += ".";
    }
}
function ochodigitos(){
  if (display.innerHTML.length>8) {
      display.textContent= display.textContent
  }
}
function cero(){
  if (display.innerHTML==0) {
      display.innerHTML ==""+display.innerHTML;
      borrarcero();
    }
}
function borrarcero(){
  if (display.textContent==0) {
    display.textContent="";
  }
}
function on(){
  display.textContent="0";
}
function limpiar(){
  display.textContent = "";
}
function resetear(){
  display.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}
function igual(e){
      operandob  = display.textContent;
      resolver();
}
function mas(){
  operandoa = display.textContent;
  operacion = "+";
      limpiar();
}
function menos(){
  operandoa = display.textContent;
  operacion = "-";
      limpiar();
}
function por(){
  operandoa = display.textContent;
  operacion = "*";
      limpiar();
}
function dividido(){
  operandoa = display.textContent;
  operacion = "/";
      limpiar();
}
  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        limpiar()
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          limpiar()
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        limpiar()
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        limpiar()
        break;
    }
    resetear();
    display.textContent = res;
  }
