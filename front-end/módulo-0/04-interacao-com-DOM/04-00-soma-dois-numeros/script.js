var n1 = document.getElementById("n1");
var n2 = document.getElementById("n2");

function calcula() {
  var resultado = n1.valueAsNumber + n2.valueAsNumber;
  if (isNaN(resultado)) {
    r.textContext = "";
  } else {
    r.textContent = resultado;
  }
  console.log(resultado);
}

calcula();
