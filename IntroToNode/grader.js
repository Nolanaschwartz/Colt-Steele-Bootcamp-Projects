function average(arr){
    var total = 0;
    for(var i = 0; i < arr.length; i++){
        total += arr[i];
    }
    
    arr[arr.length] = Math.round(total/arr.length);
    return arr;
}

var scores = [90,98,89,100,100,86,94];

average(scores);
console.log(scores);