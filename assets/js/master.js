const number = document.getElementById('number');
const dec = document.getElementById('dec');
const reset = document.getElementById('reset');
const inc = document.getElementById('inc');
let count = 0;

dec.addEventListener('click', () => {
    count--;
    number.innerHTML = count;
    if (count < 0) {
        number.style.color = 'red'
    }
    if (count == 0) {
        number.style.color = 'rgb(7, 13, 49)'
    }
})

inc.addEventListener('click', () => {
    count++;
    number.innerHTML = count;
    if (count > 0) {
        number.style.color = 'green'
    }
    if (count == 0) {
        number.style.color = 'rgb(7, 13, 49)'
    }
})

reset.addEventListener('click', () => {
    count = 0;
    number.innerHTML = count
    number.style.color = 'rgb(7, 13, 49)'
})