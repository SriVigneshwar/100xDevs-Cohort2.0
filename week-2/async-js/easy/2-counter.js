/*Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. */

let count = 0;

function counterSetTimeout(countnum){
    count ++;
    console.log(count);
    let timeoutid = setTimeout(function(){
        if(count >= countnum){
            clearTimeout(timeoutid);
        }
        else{  
            counterSetTimeout(countnum);
        }
    }, 1000);
}

counterSetTimeout(10);





//(Hint: setTimeout)
