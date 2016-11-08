//sentencia whiel - for
function ContadorA(cadena){
  var c=0;
  var i=0;
  while (i<cadena.length) {
    if (cadena[i].toUpperCase()==='A') {
        c++;
    }
    i++;
  }
  return c;
}

var cad = "Anastacia";
console.log("la cantidad de letras a, es: "+ ContadorA(cad));
