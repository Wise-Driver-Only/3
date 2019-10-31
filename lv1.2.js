function sort(sequence){
    for(var i = 0;i<sequence.length-1;i++) {
        console.log("i="+sequence[i])
        for(var j = 0;j<sequence.length-i-1;j++){
            console.log("j="+sequence[j]);
            console.log("j+1="+sequence[j+1]);
            if(sequence[j]>sequence[j+1]){
                var swap = sequence[j];
                sequence[j] = sequence[j+1];
                sequence[j+1] = swap;
            }
        }
        console.log(sequence);
    }
}
var sequence = [3,5,1,2,9,7,8,4];
sort(sequence);