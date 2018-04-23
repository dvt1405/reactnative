function search(input, target){
    var n = Array.length.input;
    var a = new Array();
    var dem;
    for(var i=0; i<20000;i++){
        a[input[i]+10000] = i;
    }
    return a[target+10000];
}
