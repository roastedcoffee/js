function addnum (){
    var x = parseInt(document.getElementById('fisrtNumber').value);
    var y = parseInt(document.getElementById('secondNumber').value);
    var sum = x + y;
    document.getElementById('answer').innerHTML = sum;
    }
            
function getTime(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    return h + ":" + m;      
    }
    document.getElementById('time').innerHTML = getTime();