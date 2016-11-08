function mult(a,b,cad){
  var r=0;
  if (cad=="m") {
    for (var i = 1; i <= b; i++) {
      r=a*i;
      console.log(a+"*"+i+"="+r);
    }
  }else if (cad=="d") {
    for (var i = 1; i <= b; i++) {
      r=a/i;
      console.log(a+"/"+i+"="+r);
    }
  }else if (cad=="s") {
    for (var i = 1; i <= b; i++) {
      r=a+i;
      console.log(a+"+"+i+"="+r);
    }
  }else  if (cad=="r") {
    for (var i = 1; i <= b; i++) {
      r=a-i;
      console.log(a+"-"+i+"="+r);
    }
  }
}
var x=5;
var y=20;
var cad="r";
mult(x,y,cad);
