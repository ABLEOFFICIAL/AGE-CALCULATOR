var calc = document.getElementById('btn');
var result = document.getElementById('result');
var input = document.getElementById('input');
var dateInput = document.getElementById('date');



calc.addEventListener('click', function(){

    if(!dateInput.value){
        result.innerHTML = 'Please enter a valid date';

        setTimeout(function() {
            result.innerHTML = '';
        }, 3000); // 3000 milliseconds = 3 seconds

        return;
    }
})