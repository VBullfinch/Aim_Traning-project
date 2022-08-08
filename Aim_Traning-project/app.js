const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
let time = 0
const timeElement = document.querySelector('#time')
const board = document.querySelector('#board')
let score=0
const colors= ['#BF633D','#9E847A','#F16565','#A3F4A3','#6BBF3D']

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})
timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')

        startGame()
    }
})
board.addEventListener('click', event=>{
    if(event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})


function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}
function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}
function setTime(value) {
    timeElement.innerHTML = `00:${value}`

}
function finishGame() { 
board.innerHTML=`<h1> Cчет:<span class="primary"> ${score}</span></h1>`
timeElement.parentNode.remove()
}

function createRandomCircle(){
    const circle = document.createElement('div')
    const size = getRandomNumber(10,60)
    const {width, height}=board.getBoundingClientRect()
    const x=getRandomNumber(0,width-size)
    const y=getRandomNumber(0, height-size)
    circle.classList.add('circle')
    circle.style.width=`${size}px`
    circle.style.height=`${size}px`
    circle.style.top =`${y}px`
    circle.style.left =`${x}px`
    const color= getRandomColor()
    circle.style.background=color


    board.append(circle)
}
function getRandomNumber(min,max){
    return Math.random()*(max-min)+min
}
function getRandomColor(){
    const index = Math.floor(Math.random()*colors.length)
return colors[index]
}
