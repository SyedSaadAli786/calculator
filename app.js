function getNumber(num){
    
    let result = document.getElementById("result");
    result.value += num; 


}

function clearResult(){

    let clear = document.getElementById("result");
    result.value = ""

}


function getResult(){
    let result = document.getElementById("result");
    result.value = eval(result.value);
}