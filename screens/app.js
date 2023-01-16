const notes = [
    {
        "name": "A",
        "bottom": 206,
        "left": 160,
        "note": "A",
        "image": "A.png",
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
        "image": "B.png",
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
        "image": "C.png",
        "msg": {
            "part1": "FA",
            "strong": "C",
            "part2": "E, que Dó do meu quarto"
        }
    },
    {
        "name": "C0",
        "bottom": 233,
        "left": 160,
        "note": "C",
        "image": "C0.png",
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
        "image": "D.png",
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
        "image": "D0.png",
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
        "image": "E.png",
        "msg": {
            "part1": "FAC",
            "strong": "E",
            "part2": " Miau!"
        }
    },
    {
        "name": "E0",
        "bottom": 260,
        "left": 160,
        "note": "E",
        "image": "E0.png",
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
        "image": "F.png",
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
        "image": "F0.png",
        "msg": {
            "part1": "",
            "strong": "F",
            "part2": "ACE, Fala primeiro"
        }
    },
    {
        "name": "G",
        "bottom": 193,
        "left": 160,
        "note": "G",
        "image": "G.png",
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
        "image": "G2.png",
        "msg": {
            "part1": "Ah esse é o ",
            "strong": "Sol",
            "part2": " do meio dia"
        }
    }
];

const content = document.querySelector('.content-wrapper');
const clickMeBtn = document.querySelector('#clickme');
const staffElement = document.querySelector('#staff');
const staffImg = document.querySelector('#staff-img');
const progressBar = document.querySelector('#progress-bar');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const warningMessage = document.querySelectorAll('.notification .delete');
let warning = document.getElementById('warning-msg');

const seconds = 500;
let note;
let time = -10;
let timer;
let isPaused = false;
let isRunning = false;

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
    if (!isRunning) {
        isRunning = true;
        addNote(randomNote());
        timer = setIntervalAndExecute(incrementTime, seconds);
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
    note = notes[randomIndex];
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

const resetElements = function () {
    addImageToScreen('../imgs/trebel-clef.png');
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
        resetElements();
    });
}

const isAnswerOnTime = function () {
    if (time > 90) {
        stopCounter();
        // resetElements();
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