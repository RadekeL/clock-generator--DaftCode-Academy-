
const hourBox = document.querySelector('.clock-box__hour');
const minuteBox = document.querySelector('.clock-box__minute');
const secondBox = document.querySelector('.clock-box__second');

const data = new Date();

let counter = 0; // check first round in h/min/sec

// Uploading initial clock data
(function(){
    hourBox.textContent = data.getHours().toString().padStart(2,'0');
    minuteBox.textContent = data.getMinutes().toString().padStart(2,'0');
    secondBox.textContent = data.getSeconds().toString().padStart(2,'0');

})();

function* hours(hour){
    while(true){
        yield hour++
        if(hour === 12){
            hour = 0;
        }
    }
}

function* minute(min){
    const firstRound = 2;
    while(true){
        yield min++;
        if(min===60){
            if(counter===firstRound){// call double iteratorHour
                iteratorHour.next().value;
                counter++;
            }
            min = 0;
           hourBox.textContent = `${iteratorHour.next().value}`.padStart(2,'0')
        }
    }
}

function* second(sec){
    const firstRound = 1;
    while(true){
        yield sec++;
        if(sec===60){
            if(counter===firstRound){// call double iteratorMin
                iteratorMin.next().value;
                counter++;
            }
            sec = 0;
            minuteBox.textContent = `${iteratorMin.next().value}`.padStart(2,'0')
        }
    }
}

const iteratorSec = second(data.getSeconds());
const iteratorMin = minute(data.getMinutes());
const iteratorHour = hours(data.getHours());



const writeSeconds = setInterval(()=>{
    if(counter===0){// call double iteratorSec  
        iteratorSec.next().value
        counter++;      
    } 
    secondBox.textContent= `${iteratorSec.next().value}`.padStart(2,'0')
},1000)
