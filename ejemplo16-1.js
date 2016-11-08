//sentencia whiel - for
function ContadorO(cadena,letra){
  var c=0;
  for (var i=0;i<cadena.length;i++) {
    if (cadena[i]===letra) {
        c++;
    }
  }
  return c;
}

var cad = "Fugencio";
var letra ="n";
console.log("la cantidad de letras "+letra+" es: "+ ContadorO(cad,letra));
