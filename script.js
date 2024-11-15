var calc = document.getElementById('btn');
var result = document.getElementById('result');
var input = document.getElementById('input');
var dateInput = document.getElementById('date');
const td = new Date().toISOString().split('T')[0];
dateInput.setAttribute('max', td);

dateInput.addEventListener('click', () => {
    dateInput.showPicker();
  });



calc.addEventListener('click', function(){

    if(!dateInput.value){
        result.innerHTML = 'Please enter a valid date';

        setTimeout(function() {
            result.innerHTML = '';
        }, 3000); // 3000 milliseconds = 3 seconds

        return;
    }else {
        var dob = new Date(dateInput.value);
        var today = new Date(); 

        let d1 = dob.getDate();
        let m1 = dob.getMonth() + 1;
        let y1 = dob.getFullYear();

        let d2 = today.getDate();
        let m2 = today.getMonth() + 1;
        let y2 = today.getFullYear();

        let y3 = y2 - y1;
        let d3 = d2 - d1;


        let m3;

        if(m2 >= m1){
            m3 = m2 - m1; 
        }else{
            m3 = m2 - m1 + 12;
            y3--;
        }

        if (d3 < 0) {
            const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
            d3 += lastMonth.getDate();
            m3--;
          }

          result.innerHTML = `you are ${y3}years, ${m3}months, ${d3}days old`;
        // console.log(`i was born in the year , ${m3}, ${d3}`);
    }
})