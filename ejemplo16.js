//sentencia whiel - for
function ContadorO(cadena){
  var c=0;
  for (var i=0;i<cadena.length;i++) {
    if (cadena[i]==='o') {
        c++;
    }
  }
  return c;
}

var cad = "Romero";
console.log("la cantidad de letras o, es: "+ ContadorO(cad));
