function mult(a,b,c){
  var r=0;
  if (c=1) {
    for (var i = 1; i <= b; i++) {
      r=a*i;
      console.log(a+"*"+i+"="+r);
    }
  }
  if (c=2) {
    for (var i = 1; i <= b; i++) {
      r=a/i;
      console.log(a+"/"+i+"="+r);
    }
  }
  if (c=3) {
    for (var i = 1; i <= b; i++) {
      r=a+i;
      console.log(a+"+"+i+"="+r);
    }
  }
  if (c=4) {
    for (var i = 1; i <= b; i++) {
      r=a-i;
      console.log(a+"-"+i+"="+r);
    }
  }
}
var x=5;
var y=20;
var o=3;
console.log(mult(x,y,o));
