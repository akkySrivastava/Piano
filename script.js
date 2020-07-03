const WHITE_KEY=['z','x','c','v','b','n','m',];
const BLACK_KEY=['s','d','g','h','j'];

const keys=document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key =>{
    key.addEventListener('click', () => playnote(key))
})

document.addEventListener('keydown', e =>{
    if(e.repeat) return 
    const key= e.key
    const whitekeyIndex = WHITE_KEY.indexOf(key)
    const blackkeyIndex = BLACK_KEY.indexOf(key)

    if(whitekeyIndex > -1)
    playnote(whiteKeys[whitekeyIndex])
    if(blackkeyIndex > -1)
    playnote(blackKeys[blackkeyIndex])

})

function playnote(key)
{
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () =>{
        key.classList.remove('active')
    })
}