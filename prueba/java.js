
var primer_numero = document.getElementById("primer_numero").value;
var segundo_numero = document.getElementById("segundo_numero").value;
var tercer_numero = document.getElementById ("tercer_numero").value;



function multiplicacion () {
if (primer_numero < tercer_numero){

 

  var resultado = parseInt(primer_numero) * parseInt(segundo_numero) * parseInt(tercer_numero) ;
 
  

  document.getElementById("resultado").value = "Se realiza una multiplicación y el resultado es: " + resultado;

}
if (segundo_numero == 0) {
  var resultadoa = parseInt (primer_numero) - parseInt (primer_numero);
  document.getElementById("resultado").value = resultadoa;
}
}

function concatenar (){
  let concatenacion = primer_numero + segundo_numero + tercer_numero;
  document.getElementById("resultado").value = concatenacion;
  for (i = 0; i < concatenacion; i++)
  divmensaje.innerHTML += "<div class='usuario'>"+  concatenacion + "</div>";
}


