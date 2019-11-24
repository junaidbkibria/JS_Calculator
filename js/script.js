function insert(num){
    $('.overview').val(function(i,oldval){
        var result= oldval+num;
        return result;
    });
}
function clearAll(){
    $('.overview').val("");
}
function clear(){
    $('.overview').val(function(i,origvalue){
        // oldval=oldval.substring(0,oldval.length-1);
        origvalue= origvalue.substring(0,origvalue.length-1);
        return origvalue;
    });
}
function equal(){
    var result= $('.overview').val();
    if(result){
        $('.overview').val(eval(result));
    }
}
