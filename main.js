let display = document.querySelector('.display')
let count = 1;

function resetB(){

    display.innerHTML = 'Back to zero !'
    count = 1;
}

function countB(){

    display.innerHTML = `Button was clicked ${count} times.`
    count++;
}




