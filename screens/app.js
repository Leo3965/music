const notes = [
    {
        "name": "A",
        "bottom": 206,
        "left": 160,
        "note": "A",
        "image": "A-min.png",
        "msg": {
            "part1": "F",
            "strong": "A",
            "part2": "CE, La segunda vez que ti vi, te amei"
        }
    },
    {
        "name": "B",
        "bottom": 220,
        "left": 160,
        "note": "B",
        "image": "B-min.png",
        "msg": {
            "part1": "Poxa! ",
            "strong": "Si",
            "part2": " eu tivesse uma namorada eu teria 3 motivos para agradecer"
        }
    },
    {
        "name": "C",
        "bottom": 233,
        "left": 160,
        "note": "C",
        "image": "C-min.png",
        "msg": {
            "part1": "FA",
            "strong": "C",
            "part2": "E, que Dó do meu quarto filho"
        }
    },
    {
        "name": "C0",
        "bottom": 233,
        "left": 160,
        "note": "C",
        "image": "C0-min.png",
        "msg": {
            "part1": "=( ",
            "strong": "Do",
            "part2": "rimen! sanego sanego latilenoo kkkk"
        }
    },
    {
        "name": "D",
        "bottom": 246,
        "left": 160,
        "note": "D",
        "image": "D-min.png",
        "msg": {
            "part1": "ca",
            "strong": "Re",
            "part2": "four, o Ré (D) fica na quarta linha"
        }
    },
    {
        "name": "D0",
        "bottom": 246,
        "left": 160,
        "note": "D",
        "image": "D0-min.png",
        "msg": {
            "part1": "Melhor começar de ",
            "strong": "Re",
            "part2": ", do que no caminho errado"
        }
    },
    {
        "name": "E",
        "bottom": 260,
        "left": 160,
        "note": "E",
        "image": "E-min.png",
        "msg": {
            "part1": "FAC",
            "strong": "E",
            "part2": " tu fala dorMIndo?"
        }
    },
    {
        "name": "E0",
        "bottom": 260,
        "left": 160,
        "note": "E",
        "image": "E0-min.png",
        "msg": {
            "part1": "Pfv, ",
            "strong": "Mi",
            "part2": " deixa ir primeiro"
        }
    },
    {
        "name": "F",
        "bottom": 273,
        "left": 160,
        "note": "F",
        "image": "F-min.png",
        "msg": {
            "part1": "Eu ",
            "strong": "F",
            "part2": "ui pra longe"
        }
    },
    {
        "name": "F0",
        "bottom": 273,
        "left": 160,
        "note": "F",
        "image": "F0-min.png",
        "msg": {
            "part1": "",
            "strong": "F",
            "part2": "ACE, FAla primeiro"
        }
    },
    {
        "name": "G",
        "bottom": 193,
        "left": 160,
        "note": "G",
        "image": "G-min.png",
        "msg": {
            "part1": "Você é o meu ",
            "strong": "Sol",
            "part2": " <3"
        }
    },
    {
        "name": "G2",
        "bottom": 193,
        "left": 160,
        "note": "G",
        "image": "G2-min.png",
        "msg": {
            "part1": "Ah esse é o ",
            "strong": "Sol",
            "part2": " do meio dia"
        }
    }
];

const passagens = [
    'II Crônicas 20:3-4, "Então, Josafá temeu e pôs-se a buscar o SENHOR, e apregoou jejum em todo o Judá."',
    'Salmo 1:1-2, "Bem-aventurado o varão que não anda segundo o conselho dos ímpios, nem se detém no caminho dos pecadores, nem se assenta na roda dos escarnecedores."',
    'Salmo 69:13 "Eu, porém, faço a minha oração a ti, SENHOR, num tempo aceitável; ó Deus, ouve-me segundo a grandeza da tua misericórdia, segundo a verdade da tua salvação."',
    'Salmo 142:1-7 "Com a minha voz clamei ao SENHOR, com a minha voz ao SENHOR supliquei."',
    'Isaías 7:14 "Portanto, o mesmo Senhor vos dará um sinal: eis uma virgem conceberá, e dará à luz um filho, e será o seu nome Emanuel."',
    'Romanos 10:17 "De sorte que a fé é pelo ouvir, e o ouvir pela palavra de Deus"',
    'Romanos 11:36 "Porque dele, e por ele, e para ele são todas as coisas, glória, pois a ele eternamente. Amém!"'
];

// Key buttons
const Abtn = document.querySelector('#A');
const Bbtn = document.querySelector('#B');
const Cbtn = document.querySelector('#C');
const Dbtn = document.querySelector('#D');
const Ebtn = document.querySelector('#E');
const Fbtn = document.querySelector('#F');
const Gbtn = document.querySelector('#G');
const buttons = document.querySelectorAll('.key-btn');

const content = document.querySelector('.content-wrapper');
const heroContent = document.querySelector('#hero-content');
const darkModeBtn = document.querySelector('#dark-mode');
const clickMeBtn = document.querySelector('#clickme');
const staffElement = document.querySelector('#staff');
const staffImg = document.querySelector('#staff-img');
const progressBar = document.querySelector('#progress-bar');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const warningMessage = document.querySelectorAll('.notification .delete');
let warning = document.getElementById('warning-msg');
let gameover = document.getElementById('game-over');

const seconds = 500;
let note;
let time = -10;
let timer;
let isPaused = false;
let isRunning = false;
let isDark = false;
let hasPassagem = false;
let theme = 'is-danger';
let score = 0;

buttons.forEach(b => {
    b.addEventListener('click', () => {
        handleKeyButton(b.innerText);
    });
});

const toggleDark = function () {
    if (isDark) {
        isDark = false;
        theme = 'is-danger';
    } else {
        isDark = true;
        theme = 'is-dark';
    }
}
darkModeBtn.addEventListener('click', () => {
    heroContent.classList.remove(theme);
    buttons.forEach(b => b.classList.remove(theme));
    startBtn.classList.remove(theme);
    toggleDark();

    startBtn.classList.add(theme);
    heroContent.classList.add(theme);
    buttons.forEach(b => b.classList.add(theme));
});

const handleKeyButton = function (key) {
    if (isRunning) {
        if (key === note.note) {
            score++;
            nextKey();
        } else {
            gameOver();
        }
    }
}

const nextKey = function () {
    resetElements(false);
    init();
}

const gameOver = function () {
    const cachedScore = score;
    score = 0;
    showGameOver(cachedScore);
    resetElements(true);
    console.log('fim de jogo');
}

/* Delete warning message function*/
document.addEventListener('DOMContentLoaded', () => {
    (warningMessage || []).forEach(($delete) => {
        const $notification = $delete.parentNode;

        $delete.addEventListener('click', () => {
            $notification.parentNode.removeChild($notification);
        });
    });
});

startBtn.addEventListener('click', function () {
    init();
});

const init = function () {
    if (!isRunning) {
        isRunning = true;
        addNote(randomNote());
        timer = setIntervalAndExecute(incrementTime, seconds);
    }
}

pauseBtn.addEventListener('click', function () {
    pauseUnpause();
});

const pauseUnpause = function () {
    isPaused = !isPaused;
}

/* Esse método gera uma nota aleatória a partir da Lista notes */
const randomNote = function () {
    const notesNum = notes.length;
    const randomIndex = Math.floor(Math.random() * (notesNum));
    note = notes[randomIndex];
}

clickMeBtn.addEventListener('click', () => {
    escreverPassagem(obterPassagem());
});

const obterPassagem = function () {
    const numPassagens = passagens.length;
    const aleatorio = Math.floor(Math.random() * numPassagens);
    return passagens[aleatorio];
}

const escreverPassagem = function (passagem) {
    if (!hasPassagem) {
        hasPassagem = true;
        content.insertAdjacentHTML('beforebegin',
            '<div id="passagem" class="passagem">\n' +
            '    <div class="notification is-info is-light">\n' +
            '        <button class="delete"></button>\n' +
            `        ${passagem}` +
            '    </div>\n' +
            '</div>');

        passagem = document.getElementById('passagem');

        passagem.addEventListener('click', () => {
            passagem.remove();
            hasPassagem = false;
        });
    }
}

/* Este método adiciona uma nota no pentagrama */
const addNote = function () {
    addImageToScreen(note.image);
}
/* Esse método remove a nota exibida na tela caso ela exista */
const removeNote = function () {
    const notes = document.getElementById('staff-img');
    notes.remove();
}

document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});

const resetElements = function (withImg) {
    if (withImg) addImageToScreen('../imgs/trebel-clef-min.png');
    stopCounter();
    progressBar.value = 0;
    isPaused = false;
    isRunning = false;
    time = -10;
}

const addImageToScreen = function (imgPath) {
    removeNote();
    staffElement.insertAdjacentHTML(
        'beforeend',
        // `<img style="bottom: ${note.bottom}px; left: ${note.left}px" class="note" src="imgs/circle.svg">`
        `<img id="staff-img" src="../imgs/${imgPath}">`
    );
}

const showWarningMessage = function () {
    isRunning = false;
    content.insertAdjacentHTML('beforebegin',
        '<!-- Notification -->\n' +
        '<div id="warning-msg" class="notification-box">\n' +
        '    <div class="notification is-warning ">\n' +
        '        <button class="delete"></button>\n' +
        `        ${note.msg.part1}<strong>${note.msg.strong}</strong>${note.msg.part2}` +
        '    </div>\n' +
        '</div>');

    warning = document.getElementById('warning-msg');

    warning.addEventListener('click', () => {
        warning.remove();
        resetElements(true);
        score = 0;
    });
}

const showGameOver = function (score) {
    isRunning = false;
    content.insertAdjacentHTML('beforebegin',
        '<!-- Notification -->\n' +
        '<div id="game-over" class="game-over">\n' +
        '    <div class="notification is-danger is-light">\n' +
        '        <button class="delete"></button>\n' +
        `        Parabéns,` +
        `        Você marcou um score de: <strong>${score}</strong> ponto(s)` +
        '    </div>\n' +
        '</div>');
    gameover = document.getElementById('game-over');

    gameover.addEventListener('click', () => {
        gameover.remove();
        resetElements(true);
        score = 0;
    });
}

const isAnswerOnTime = function () {
    if (time === 100) {
        stopCounter();
        // resetElements();
        if (score > 5) showGameOver(score);
        showWarningMessage();
    }
}

const incrementTime = function () {
    if (!isPaused) {
        time += 10;
        progressBar.value = time;
    }
    isAnswerOnTime();
}

function setIntervalAndExecute(fn, time) {
    fn();
    return setInterval(fn, time);
}

const stopCounter = function () {
    clearInterval(timer);
}