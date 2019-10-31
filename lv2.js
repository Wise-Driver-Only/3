var arr = [ [1,2] , 3,[4,[5,[6]] , 7] ]

function even(arr){
    var result = [];
     for(var i = 0, len = arr.length; i < len; i++){
         if(Array.isArray(arr[i])){
             result = result.concat(even(arr[i]));
         }else{
             result.push(arr[i]);
         }
     }
     return result;
}
even (arr)