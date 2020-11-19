
function submit(){
    var first = parseInt(document.getElementById("firstNum").value);
    var second = parseInt(document.getElementById("secondNum").value);
    var third = parseInt(document.getElementById("thirdNum").value);
    var refreshDoc = document.getElementById('inputType').innerHTML;
    var result = '';

    if (second < first){
        alert("The second number must be greater than or equal to the first number");
    }
    else{
        for (var i = first; i<=second; i++){
            var product = i*third;
            result += `<h1 class="display-4">${i} X ${third} = ${product}</h1>`;
            }
            document.getElementById("outputs").style.visibility = 'visible';
        document.getElementById("outputs").innerHTML = result;
        document.getElementById('clickme').innerHTML = 'Reset';

        document.getElementById('clickme').onclick = function(){
        document.getElementById('inputType').innerHTML = refreshDoc;
            }
    }
}
