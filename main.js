const $arenas = document.querySelector('.arenas');

const player1 = {
    player: 1,
    name: 'SCORPION',
    hp: '100',
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ["Gun", "go", "home"],
    attack: function (name){
        console.log(name + 'Fight...')
    }
};

const player2 = {
    player: 2,
    name: 'SUB-ZERO',
    hp: '100',
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ["Gun", "go", "home"],
    attack: function (name){
        console.log(name + 'Fight...')
    }
};

function changeHP(player){
    if (player.hp <= 0){
        player.hp == 0
    }
}

function random(player) {
    return(player.hp - Math.ceil(Math.random() * 20));
}

function createElement(tag, className) {

    const $tag = document.createElement(tag);
    if(className){
        $tag.classList.add(className);
    }
    return tag;
}

function createPlayer(playerObj){
    const $player = createElement('div', 'player' + playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $player.appendChild($progressbar);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($character);
    $character.appendChild($img);

    return $player;
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));