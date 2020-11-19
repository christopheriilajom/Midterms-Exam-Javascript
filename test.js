
function submit(){
    var first = parseInt(document.getElementById("firstNum").value);
    var second = parseInt(document.getElementById("secondNum").value);
    var third = parseInt(document.getElementById("thirdNum").value);
    var refreshDoc = document.getElementById('inputType').innerHTML;
    var result = '';

    if (second < first){
        alert("The second number must be greater than or equal to the first number");
    }

    for (var i = first; i<=second; i++){
        var product = i*third;
        result += `${i} X ${third} = ${product} <br>`;
    }
    document.getElementById("listContainer").innerHTML = result;
    document.getElementById('clickme').innerHTML = 'Reset';

    document.getElementById('clickme').onclick = function(){
    document.getElementById('inputType').innerHTML = refreshDoc;
    }

}
