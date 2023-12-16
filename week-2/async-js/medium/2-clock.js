/*Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

function displayRailwayClock(){
    setInterval(function(){
        let date = new Date();
        console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    }, 1000);
}

function displayRegularClock(){
    setTimeout(function(){
        let date = new Date();
        let hour = date.getHours();
        if(hour > 12){
            console.log((hour - 12) + ':' + date.getMinutes() + ':' + date.getSeconds() + ' PM');
        }
        else{
            console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' AM');
        }
        displayRegularClock();
    }, 1000);
}

displayRailwayClock();

displayRegularClock();

console.log('Clock starts...');