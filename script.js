// Minigame Web (Point and click game)

let gameSpeed = 1

let gameData = [{
    night: 1
}]

let characters = [
    {
        name: "Kara",
        mMImage: `files/images/characters/kara.png`,
    },
]

let gameTime = 0;


let officePos = 0;

const body = document.querySelector('body')
const tabName = document.querySelector('.tab-title')
const gamePlay = document.querySelector('main')
const copyRight = document.querySelector('footer')

let nightSixBut = false
let customNightBut = false

let newsPaperView = false

let mouseOver = false
let timerInterval

let officeView = true

const clearMain = () => {
    body.style.background = `black`
    gamePlay.innerHTML = ``
    copyRight.innerHTML = ``
}

const newGame = (gp, choose) => {
    if(choose == 0){
        newsPaperView = !newsPaperView
        gp.innerHTML +=`
        <div class="newspaper"></div>`
        setTimeout(() => {
            document.querySelector('.newspaper').classList.add('visible')
        }, 0);
    }else{
        newsPaperView = !newsPaperView
        doNightShow(gameData, tabName, copyRight, gamePlay)
    }
    
    document.addEventListener('keydown', function(event) {
        if(event.key == 'Enter' && newsPaperView){
            newGame(gamePlay, 1)
        }
    })
}

const doTimer = (time) => {
    let realTime = Math.floor(time / 60)
    if(Math.floor(time / 60) == 0){
        realTime = 12
    }
    return realTime
}

const stopRT = (condition) => {
    clearInterval(timerInterval)
    if(condition == "win"){
        do6am(tabName, gamePlay, gameData)
    }else{
        doGameOver()
    }
}

//CHANGE SCENE

const doMenu = () => {
    clearMain()
    gamePlay.innerHTML = `
        <div class="MMenu">
            <h1 class="title">Five Night's at KITM</h1>
            <div class="MMSelector">
                <p class="NG text">New Game</p>
                <p class="CTN text">Continue</p>
                <p class="6N text">6th Night</p>
                <p class="CN text">Custom Night</p>
            </div>
        </div>`
    copyRight.innerHTML = `
        <p class="Version">Version 0.2</p>
        <p class="Name">Oskaras Venzlauskas GJSM23</p>`
    tabName.innerHTML = `Five Night's at KITM`

    document.querySelector('.NG').addEventListener('click', function () {
    newGame(gamePlay, 0)
    });

    document.querySelector('.CTN').addEventListener('click', function () {
        doNightShow(gameData, tabName, copyRight, gamePlay)
    });
}

const doNightShow = () => {
    clearMain()
    gamePlay.innerHTML = `
        <div class="nightShow">
            <h1>Night ${gameData[0].night}</h1>
            <p>12:00 AM</p>
        </div>`
    tabName.innerHTML = `Night ${gameData[0].night}`
    setTimeout(() => {
        doOffice()
    }, 2500);
}

const doOffice = () => {
    clearMain()
    gamePlay.innerHTML = `
        <div class="timer">
            <h3 class="time">${doTimer(gameTime)}:00AM</h3>
            <p class="night">Night ${gameData[0].night}</p>
        </div>
        <div class="office">
            <div class="office-back"></div>
            <div class="office-front"></div>
        </div>
        <div class="move-divs">
            <div class="left"></div>
            <div class="right"></div>
        </div>`
    timerInterval = setInterval(() => {
        if(gameTime >= 360){
            stopRT("win")
        }else{
            document.querySelector('.time').innerHTML = `${doTimer(gameTime)}:00AM`
            tabName.innerHTML = `${doTimer(gameTime)}:00 AM`
            gameTime++
        }
    }, 1000);

    document.querySelector('.left').addEventListener("mouseenter", event => {
        mouseOver = true
        changePosLeft()
    });

    document.querySelector('.left').addEventListener("mouseleave", event => {
        mouseOver = false
    });

    document.querySelector('.right').addEventListener("mouseenter", event => {
        mouseOver = true
        changePosRight()
    });

    document.querySelector('.right').addEventListener("mouseleave", event => {
        mouseOver = false
    });
}

const do6am = () => {
    clearMain()
    let audio = new Audio("files/sounds/sfx/6am.mp3")
    audio.play()
    gamePlay.innerHTML = `
        <div class="nightShow visible">
            <p class="timeText">5:59 AM</p>
        </div>`
    tabName.innerHTML = `5:59 AM`
    gameData[0].night++
    setTimeout(() => {
        document.querySelector('.timeText').innerHTML = ``
    }, 900);
    setTimeout(() => {
        document.querySelector('.timeText').innerHTML = `5:59 AM`
    }, 1850);
    setTimeout(() => {
        document.querySelector('.timeText').innerHTML = ``
    }, 2800);
    setTimeout(() => {
        document.querySelector('.timeText').innerHTML = `6:00 AM`
        tabName.innerHTML = `6:00 AM`
    }, 4500);
    setTimeout(() => {
        document.querySelector('.timeText').style.transform = `scale(2)`
    }, 5400);
    setTimeout(() => {
        document.querySelector('.timeText').style.transform = `scale(3)`
    }, 6300);
    setTimeout(() => {
        doMenu()
    }, 8500);
}

const doGameOver = () => {
    clearMain()
    let audio = new Audio("files/sounds/sfx/gameover.mp3")
    audio.play()
    gamePlay.innerHTML = `
        <div class="nightShow visible">
            <p class="timeText">Game Over</p>
        </div>`
    setTimeout(() => {
        gamePlay.innerHTML = ``
        body.style.backgroundColor = `red`
    }, 10000);
    setTimeout(() => {
        doMenu()
    }, 15000);
}

//OFFICE FUNCTIONS

const changePosLeft = () => {
    if(!mouseOver) return
    officePos--
    officePos = Math.min(100, Math.max(0, officePos));
    document.querySelector('.office-front').style.backgroundPosition = `${officePos}%`
    document.querySelector('.office-back').style.backgroundPosition = `${officePos * 0.75}%`
    requestAnimationFrame(changePosLeft)
}

const changePosRight = () => {
    if(!mouseOver) return
    officePos++
    officePos = Math.min(100, Math.max(0, officePos));
    document.querySelector('.office-front').style.backgroundPosition = `${officePos}%`
    document.querySelector('.office-back').style.backgroundPosition = `${officePos * 0.75}%`
    requestAnimationFrame(changePosRight)
}

doMenu(gamePlay, copyRight)
doOffice(gameData, gamePlay)