var hr=0;
var min=0;
var sec=0;
var count=0;
var timer= false;

function start(){

    timer= true;
    stopwatch
}

function stop(){
    timer= false;
}

function reset(){
    timer= false;
}

function stopwatch(){
    if(timer ==true){
        count = count+1;

        if(count == 100){
            sec = sec +1;
            count = 0;
        }

        if(sec == 60){
            min = min +1;
            sec = 0;
        }
        if(min == 60){
            hr = hr +1;
            min = 0;
        }

        document.getElementById("sec").innerHTML = sec;
        document.getElementById("count").innerHTML = count;

        setTimeout("stopwatch()",10);
    }

    
}