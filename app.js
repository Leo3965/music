const pianoKeys = document.querySelectorAll('.key')

function playSound(url) {
    new Audio(url).play()
}

pianoKeys.forEach((key, index) => {
    const number = index < 9 ? '0' + (index + 1) : (index + 1)
    const url = `piano-keys/key${number}.mp3`
    key.addEventListener('click', () => playSound(url))
})