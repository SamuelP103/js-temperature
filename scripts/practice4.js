//for loops
const listNumbersContainer = document.getElementById('list-numbers');

for (let i = 1; i <= 10; i++) {
    listNumbersContainer.innerHTML += `<li>${i}</li>`;
}
//print backwards
const listNumbersContainer2 = document.getElementById('list-items-reverse');

for (let i = 10; i >= 0; i--) {
    listNumbersContainer2.innerHTML += `<li>${i}</li>`;
}
    const listNumbersContainer3 = document.getElementById('list-items-even');

    for (let i = 2; i <= 10; i+=2) {
        listNumbersContainer3.innerHTML += `<li>${i}</li>`;
    }
    const listNumbersContainer4 = document.getElementById('list-items-multi');
    let l = 1;
    
    
    for (let i = 5; i <= 100; i+=5, l++) {
        listNumbersContainer4.innerHTML += `<li>5x${l}=${i}</li>`;
    }