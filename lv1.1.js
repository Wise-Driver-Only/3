var str = 'hello world';
var arr = str.split(' ');
for(var i=0;i<arr.length;i++){
  var s = arr[i].slice(0,1).toUpperCase();
  var h = arr[i].slice(1);
  arr[i]=s+h;
}
console.log(arr);
console.log(arr.join(' '));