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

let cameras = [{
    b1: `files/images/camera/b1.png`,
    b2: `files/images/camera/b2.png`,
    b3: `files/images/camera/b3.png`,
    c1: `files/images/camera/c1.png`,
    c2: `files/images/camera/c2.png`,
}]

let konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"]

let gameTime = 300;

let officePos = 0;

let count = 0;

const body = document.querySelector('body')
const tabName = document.querySelector('.tab-title')
const gamePlay = document.querySelector('main')
const copyRight = document.querySelector('footer')
const pauseDiv = document.querySelector('.pause-div')

let cameraView = false

let nightSixBut = false
let customNightBut = false

let officeView = false
let pauseView = false

let newsPaperView = false

let mouseOver = false
let cameraMO = false
let camTabOpen = false
let camSEnable = false

let timerInterval
let moveInterval
let camTimeOut

const clearMain = () => {
    gameTime = 0;
    body.style.background = `black`
    gamePlay.innerHTML = ``
    copyRight.innerHTML = ``
    clearInterval(timerInterval)
    cameraMO = false
}

const newGame = (choose) => {
    if(choose == 0){
        newsPaperView = !newsPaperView
        gamePlay.innerHTML +=`
        <div class="newspaper"></div>`
        setTimeout(() => {
            document.querySelector('.newspaper').classList.add('visible')
        }, 0);
    }else{
        newsPaperView = !newsPaperView
        doNightShow(gameData, tabName, copyRight, gamePlay)
    }
    
    document.addEventListener('keydown', function(event) {
        if(event.key = 'String' && newsPaperView){
            newGame(1)
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
    }else if(condition == "lose"){
        doGameOver()
    }else{}
}

const changeCam = (cam) => {
    document.querySelector('.screen').style.background = `url(${cam})`
    document.querySelector('.screen').style.backgroundSize = `100% 100%`
}

//CHANGE SCENE

const doMenu = () => {
    officeView = false
    clearMain()
    gamePlay.innerHTML = `
        <div class="MMenu">
            <h1 class="title">Five Night's at KITM</h1>
            <div class="MMSelector">
                <p class="NG text">New Game</p>
                <p class="CTN text">Continue</p>
            </div>
        </div>`
    copyRight.innerHTML = `
        <p class="Version">Version 0.3</p>
        <p class="Name">Oskaras Venzlauskas GJSM23</p>`
    tabName.innerHTML = `Five Night's at KITM`

    if(gameData[0].night >= 7){
        document.querySelector('.MMSelector').innerHTML += `
        <p class="6N text">6th Night</p>
        <p class="CN text">Custom Night</p>`
    }else if(gameData[0].night >= 6){
        document.querySelector('.MMSelector').innerHTML += `
        <p class="6N text">6th Night</p>`
    }

    document.querySelector('.NG').addEventListener('click', function () {
    newGame(0)
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
    officeView = true
    cameraMO = true
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
        </div>
        <div class="camera"></div>
        <div class="cam-hover"></div>
        <div class="cam-screen">
            <div class="screen"></div>
            <div class="static"></div>
            <div class="map">
                <div class="b1 button">
                    <p>CAM</p>
                    <p>B1</p>
                </div>
                <div class="b2 button">
                    <p>CAM</p>
                    <p>B2</p>
                </div>
                <div class="b3 button">
                    <p>CAM</p>
                    <p>B3</p>
                </div>
                <div class="c1 button">
                    <p>CAM</p>
                    <p>C1</p>
                </div>
                <div class="c2 button">
                    <p>CAM</p>
                    <p>C2</p>
                </div>
            </div>
        </div>`

    enableCamHover()
    doRTimer()

    document.querySelector('.b1').addEventListener("click", event => {
        changeCam(cameras[0].b1)
    });

    document.querySelector('.b2').addEventListener("click", event => {
        changeCam(cameras[0].b2)
    });

    document.querySelector('.b3').addEventListener("click", event => {
        changeCam(cameras[0].b3)
    });

    document.querySelector('.c1').addEventListener("click", event => {
        changeCam(cameras[0].c1)
    });

    document.querySelector('.c2').addEventListener("click", event => {
        changeCam(cameras[0].c2)
    });

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

const doRTimer = () => {
    timerInterval = setInterval(() => {
        if(gameTime >= 360){
            stopRT("win")
        }else{
            document.querySelector('.time').innerHTML = `${doTimer(gameTime)}:00AM`
            tabName.innerHTML = `${doTimer(gameTime)}:00 AM`
            gameTime++
        }
    }, 1000);
}

const doPause = (type) => {
    pauseView = !pauseView
    if(pauseView){
        pauseDiv.innerHTML += `
            <div class="pause">
                <h1>Paused</h1>
                <p class="cont">CONTINUE</p><br>
                <p class="exit">EXIT</p>
            </div>`
        stopRT("Pause")

        document.querySelector('.cont').addEventListener("click", function () {
            doPause()
        });

        document.querySelector('.exit').addEventListener("click", function () {
            doMenu()
            doPause("menu")
        });
    }else if(type == "menu"){
        pauseDiv.innerHTML = ``
    }else{
        doRTimer()
        pauseDiv.innerHTML = ``
    }
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
    if(gameData[0].night <= 7){
        gameData[0].night++
    }
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

const enableCams = () => {
    if(camTabOpen && cameraMO){
        clearTimeout(camTimeOut);
        document.querySelector('.camera').style.top = `100%`
        camSEnable = false
        enableCamScreen()
    }else{
        camTimeOut = setTimeout(() => {
            camSEnable = true
            enableCamScreen()
        }, 250);
        document.querySelector('.camera').style.top = `0%`
    }
}

const enableCamScreen = () => {
    if(camSEnable){
        document.querySelector('.cam-screen').style.display = `block`
    }else{
        document.querySelector('.cam-screen').style.display = `none`
    }
}

const enableCamHover = () => {
    document.querySelector('.cam-hover').addEventListener("mouseenter", event => {
        enableCams()
        camTabOpen = !camTabOpen
        cameraMO = !cameraMO
        document.querySelector('.cam-hover').style.opacity = `0%`
    });

    document.querySelector('.cam-hover').addEventListener("mouseleave", event => {
        document.querySelector('.cam-hover').style.opacity = `100%`
        cameraMO = !cameraMO
    });
}

const konamiFunc = (word, event) => {
    if(event == word[count] && count == word.length - 1){
        do6am()
        count = 0
    }else if(event == word[count] && count <= word.length - 1){
        count++
    }else if(event !== word[count]){
        count = 0
    }
}

doMenu(gamePlay, copyRight)
doOffice()

document.addEventListener('keydown', function(event) {
    if(event.key == 'Escape' && officeView){
        doPause()
    }
    if(event.key == 'Delete'){
        doGameOver()
    }
    konamiFunc(konamiCode, event.key)
})