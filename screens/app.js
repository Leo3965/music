const notes = [
    {
        "name": "A",
        "bottom": 206,
        "left": 160
    },
    {
        "name": "B",
        "bottom": 220,
        "left": 160
    },
    {
        "name": "C",
        "bottom": 233,
        "left": 160
    },
    {
        "name": "D",
        "bottom": 246,
        "left": 160
    },
    {
        "name": "E",
        "bottom": 260,
        "left": 160
    },
    {
        "name": "F",
        "bottom": 273,
        "left": 160
    },
    {
        "name": "G",
        "bottom": 193,
        "left": 160
    }
];

const clickBtn = document.querySelector('#clickme');
const staffElement = document.querySelector('#staff');
const timeBar = document.querySelector('#progress-bar');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');

let time = -10;
let timer;
let isPaused = false;

startBtn.addEventListener('click', function () {
    if (isPaused) {
        pauseUnpause();
    } else {
        addNote(randomNote());
        timer = setIntervalAndExecute(incrementTime, 1000);
    }
});

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
    return notes[randomIndex];
}

/* Este método adiciona uma nota no pentagrama */
const addNote = function (note) {
    removeNote();
    staffElement.insertAdjacentHTML(
        'beforeend',
        `<img style="bottom: ${note.bottom}px; left: ${note.left}px" class="note" src="imgs/circle.svg">`
    );
}
/* Esse método remove a nota exibida na tela caso ela exista */
const removeNote = function () {
    const notes = document.querySelectorAll('note');
    notes.forEach(e => e.remove());
}

const isAnswerOnTime = function () {
    if (time > 90) stopCounter();
}

const incrementTime = function () {
    isAnswerOnTime();
    if (!isPaused) {
        time += 10;
        timeBar.value = time;
    }
}

function setIntervalAndExecute(fn, time) {
    fn();
    return setInterval(fn, time);
}

const stopCounter = function () {
    clearInterval(timer);
}
