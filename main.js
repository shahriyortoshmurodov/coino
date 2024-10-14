
const askForName = () => {
    const name = prompt('Please enter your name:');
    const familyName = prompt('Please enter your family name:');
    
    if (name && familyName) {
        document.querySelector('.name').textContent = `${name} ${familyName}`;
        
        const avatar = document.querySelector('.avatar');
        avatar.src = './img/gold.png';
        avatar.style.display = 'block';
    }
};

window.onload = askForName;

let count = document.querySelector('.count');
let sum = 0;

const boss = () => {
    let coinsToAdd = 2;

    if (sum >= 50 && sum < 150) {
        coinsToAdd = 3;
    }
    else if (sum >= 150 && sum < 300) {
        coinsToAdd = 5;
    }
    else if (sum >= 300 && sum < 500) {
        coinsToAdd = 8;
    }
    else if (sum >= 500 && sum < 1000) {
        coinsToAdd = 14;
    }
    else if (sum >= 1000 && sum < 2000) {
        coinsToAdd = 16;
    }
    else if (sum >= 2000 && sum < 3000) {
        coinsToAdd = 21;
    }
    else if (sum >= 3000) {
        coinsToAdd = 26;
    }
    else if (sum >= 4000) {
        coinsToAdd = 77;
    }

    sum += coinsToAdd;
    count.textContent = sum;
};
