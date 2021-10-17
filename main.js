const player1 = {
    name: 'SCORPION',
    hp: '50',
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ["Gun", "go", "home"],
    attack: function (name){
        console.log(name + 'Fight...')
    }
};

const player2 = {
    name: 'SUB-ZERO',
    hp: '80',
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ["Gun", "go", "home"],
    attack: function (name){
        console.log(name + 'Fight...')
    }
};

function createPlayer(classPlayer, playerObj){
    const $arenas = document.querySelector('.arenas');
    const $player1 = document.createElement('div');
    $player1.classList.add('player1');
    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player1.appendChild($progressbar);
    const $life = document.createElement('div');
    $life.classList.add('life');
    $progressbar.appendChild($life);
    $life.style.width = '100%';
    const $name = document.createElement('div');
    $name.classList.add('name');
    $progressbar.appendChild($name);
    $name.innerText = ('SCORPION');
    const $character = document.createElement('div');
    $character.classList.add('character');
    $player1.appendChild($character);
    const $img = document.createElement('img');
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
    $character.appendChild($img);

    $root.appendChild($player1);
}

createPlayer(player1, player1.name, 50);
createPlayer(player2, player2.name, 50);