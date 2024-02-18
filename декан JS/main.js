
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function createMonsters(numMonsters) {
    for (let i = 0; i < numMonsters; i++) {
        const monster = document.createElement('div');
        monster.classList.add('monster');
        monster.style.left = getRandomNumber(0, gameContainer.clientWidth - 50) + 'px';
        monster.style.top = getRandomNumber(0, gameContainer.clientHeight - 50) + 'px';
        gameContainer.appendChild(monster);
    }
}


function createTraps(numTraps) {
    for (let i = 0; i < numTraps; i++) {
        const trap = document.createElement('div');
        trap.classList.add('trap');
        trap.style.left = getRandomNumber(0, gameContainer.clientWidth - 50) + 'px';
        trap.style.top = getRandomNumber(0, gameContainer.clientHeight - 50) + 'px';
        gameContainer.appendChild(trap);
    }
}

createMonsters(3);
createTraps(2); 

function handleCollision() {
    for (let monster of monsters) {
        if (player.positionX === monster.positionX && player.positionY === monster.positionY) {
            player.lives--;
            console.log('Монст зхавал руку, минус хп. Осталось жизней: ' + player.lives);
            
        }
    }

    for (let trap of traps) {
        if (player.positionX === trap.positionX && player.positionY === trap.positionY) {
            player.lives--;
            console.log('Минус xp братишка, смотри под ноги. Осталось жизней: ' + player.lives);
        }
    }
}