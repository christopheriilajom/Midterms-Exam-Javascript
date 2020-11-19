
function submit(){
    var first = document.getElementById("firstNum").value;
    var second = document.getElementById("secondNum").value;
    var third = document.getElementById("thirdNum").value;
    var result = '';

    for (var i = first; i<=second; i++){
        var product = i * third;
        result += `${i} * ${third} = ${product} <br>`;
    }
    document.getElementById("inputType").innerHTML = result;
}
