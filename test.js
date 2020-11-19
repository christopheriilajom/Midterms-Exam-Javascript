
function submit(){
    var first = parseInt(document.getElementById("firstNum").value);
    var second = parseInt(document.getElementById("secondNum").value);
    var third = parseInt(document.getElementById("thirdNum").value);
    var result = '';

    for (var i = first; i<=second; i++){
        var product = i*third;
        result += `${i} * ${third} = ${product} <br>`;
    }
    document.getElementById("inputType").innerHTML = result;
}
