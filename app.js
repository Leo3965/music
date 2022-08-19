const pianoKeys = document.querySelectorAll('.key')

function playSound(url) {
    new Audio(url).play()
}

function handleKey(key) {
    if (key === 'a') playSound('piano-keys/key01.mp3')
    if (key === 'q') playSound('piano-keys/key02.mp3')
    if (key === 's') playSound('piano-keys/key03.mp3')
    if (key === 'w') playSound('piano-keys/key04.mp3')
    if (key === 'd') playSound('piano-keys/key05.mp3')
    if (key === 'f') playSound('piano-keys/key06.mp3')
    if (key === 'e') playSound('piano-keys/key07.mp3')
    if (key === 'g') playSound('piano-keys/key08.mp3')
    if (key === 'r') playSound('piano-keys/key09.mp3')
    if (key === 'h') playSound('piano-keys/key10.mp3')
    if (key === 't') playSound('piano-keys/key11.mp3')
    if (key === 'j') playSound('piano-keys/key12.mp3')
    if (key === 'k') playSound('piano-keys/key13.mp3')
    if (key === 'y') playSound('piano-keys/key14.mp3')
    if (key === 'l') playSound('piano-keys/key15.mp3')
    if (key === 'u') playSound('piano-keys/key16.mp3')
    if (key === 'ç') playSound('piano-keys/key17.mp3')
    if (key === 'i') playSound('piano-keys/key18.mp3')
    if (key === '4') playSound('piano-keys/key19.mp3')
    if (key === '5') playSound('piano-keys/key20.mp3')
    if (key === 'o') playSound('piano-keys/key21.mp3')
    if (key === '6') playSound('piano-keys/key22.mp3')
    if (key === 'p') playSound('piano-keys/key23.mp3')
    if (key === '.') playSound('piano-keys/key24.mp3')
}

pianoKeys.forEach((key, index) => {
    const number = index < 9 ? '0' + (index + 1) : (index + 1)
    const url = `piano-keys/key${number}.mp3`
    key.addEventListener('click', () => playSound(url))
})


document.addEventListener('keypress', (event) => {
    const name = event.key;
    //const code = event.code;
    handleKey(name)
}, false);