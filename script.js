// Minigame Web (Point and click game)

let gameSpeed = 1

let gameData = [{
    night: 5,
    nightSix: false,
    customNight: false,
}]

let characters = [
    {
        name: "Kara",
        mMImage: "files/images/characters/kara.png",
        jumpScareSFX: "",
        difficulty: 0,
        path: 0,
        cameraPos: {
            b3: [35, 0, 35, 0],
            b1: [35, 0, 35, 0],
            c1: [35, 25, 35, 0],
            c2: [35, 25, 35, 0]
        },
        pathFind: {
            b3: "",
            b1: "",
            c1: "",
            c2: "",
            office: ""
        }
    },
]

let cameras = ["b1", "b2", "b3", "c1", "c2"]

let konamiCode = ["ArrowUp",
    //  "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"
    ]

let gameTime = 0;
let gameTimeSec = 0;

let power = 1000;
let powerUsage = 1;

let officePos = 0;

let secretCount = 0;

let currentNight = 0;

const body = document.querySelector('body')
const tabName = document.querySelector('.tab-title')
const gamePlay = document.querySelector('main')
const copyRight = document.querySelector('footer')
const pauseDiv = document.querySelector('.pause-div')

let cameraView = false

let officeView = false
let pauseView = false

let newsPaperView = false

let mouseOver = false
let cameraMO = false
let camTabOpen = false
let camSEnable = false
let lButEnable = false

let timerInterval
let moveInterval
let powerInterval
let camTimeOut
let camEffect
let currentCam

const clearMain = () => {
    gameTime = 0;
    gameTimeSec = 0;
    power = 1000;
    powerUsage = 1;
    body.style.background = `black`
    gamePlay.innerHTML = ``
    copyRight.innerHTML = ``
    clearInterval(timerInterval)
    clearInterval(powerInterval)
    cameraMO = false
    currentCam = undefined
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
        gameData[0].night = 1
        newsPaperView = !newsPaperView
        doNightShow(gameData, tabName, copyRight, gamePlay)
    }
    document.addEventListener('keydown', function(event) {
        if(event.key = 'String' && newsPaperView){
            newGame(1)
        }
    })
}

const doTimerHour = (time) => {
    let realTime = Math.floor(time / 60)
    if(Math.floor(time / 60) == 0){
        realTime = 12
    }else{
        realTime = `0${realTime}`
    }
    return realTime
}

const doTimerSec = (time) => {
    let realTime;
    if(time >= 60){
        gameTimeSec = 0;
        realTime = '00'
    }else if(time <= 9) {
        realTime = `0${time}`
    }else{
        realTime = time
    }
    return realTime
}

const stopRT = (condition) => {
    clearInterval(timerInterval)
    clearInterval(powerInterval)
    if(condition == "win"){
        do6am(tabName, gamePlay, gameData)
    }else if(condition == "lose"){
        doGameOver()
    }else{}
}

const changeCam = (cam) => {
    clearTimeout(camEffect)
    if(currentCam == undefined){
        currentCam = cam
        document.querySelector(`.${currentCam}`).classList.add("button-clicked")
    }else{
        let audio = new Audio("files/sounds/sfx/cam_change.mp3")
        audio.play()
        document.querySelector(`.${currentCam}`).classList.remove("button-clicked")
        currentCam = cam
        document.querySelector(`.${currentCam}`).classList.add("button-clicked")
    }
    document.querySelector('.screen').style.background = `white`
    camEffect = setTimeout(() => {
        document.querySelector('.screen').style.background = `url(files/images/camera/${cam}.png)`
        document.querySelector('.screen').style.backgroundSize = `100% 100%`
    }, 50);
}

//CHANGE SCENE

const doMenu = () => {
    officeView = false
    currentNight = 0
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
        <p class="Version">Version 0.4</p>
        <p class="Name">Oskaras Venzlauskas GJSM23</p>`
    tabName.innerHTML = `Five Night's at KITM`

    if(gameData[0].nightSix){
        document.querySelector('.MMSelector').innerHTML += `
        <p class="night-six text">6th Night</p>`

        document.querySelector('.night-six').addEventListener('click', function () {
            doNightShow("night-6")
        });
    }

    if(gameData[0].customNight){
        document.querySelector('.MMSelector').innerHTML += `
        <p class="CN text">Custom Night</p>`

        document.querySelector('.CN').addEventListener('click', function () {
            doNightShow("custom-night")
        });
    }

    document.querySelector('.NG').addEventListener('click', function () {
        newGame(0)
    });

    document.querySelector('.CTN').addEventListener('click', function () {
        doNightShow("continue")
    });

    document.querySelectorAll('.text').forEach(btn => {
        btn.addEventListener("mouseover", function () {
            let audio = new Audio("files/sounds/sfx/cam_change.mp3")
            audio.play()
        });
    });

}

const doNightShow = (type) => {
    clearMain()
    if(type == "night-6"){
        currentNight = 6
    }else if(type == "custom-night"){
        currentNight = 7
    }else{
        currentNight = gameData[0].night
    }
    gamePlay.innerHTML = `
        <div class="nightShow">
            <h1>Night ${currentNight}</h1>
            <p>12:00 AM</p>
        </div>`
    tabName.innerHTML = `Night ${currentNight}`
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
            <h3 class="time">${doTimerHour(gameTime)}:${doTimerSec(gameTimeSec)} AM</h3>
            <p class="night">Night ${currentNight}</p>
        </div>
        <div class="power">
            <div class="power-text">
                <p>Power left:</p>
                <p class="power-number">${Math.floor(power / 10)}%</p>
            </div>
            <div class="power-usage">
                <p>Usage:</p>
                <div class="usage"></div>
            </div>
        </div>
        <div class="office">
            <div class="office-back">
                <div class="character-office"></div>
            </div>
            <div class="office-front"></div>
        </div>
        <div class="move-divs">
            <div class="left"></div>
            <div class="right"></div>
        </div>
        <div class="camera"></div>
        <div class="cam-hover"></div>
        <div class="cam-screen">
            <div class="screen">
                <div class="character"></div>
            </div>
            <div class="screen-border"></div>
            <div class="static"></div>
            <div class="map"></div>
        </div>`
    
    for(let i = 0; i < cameras.length; i++){
        document.querySelector('.map').innerHTML += `
                <div class="${cameras[i]} button">
                    <p>CAM</p>
                    <p>${cameras[i].toUpperCase()}</p>
                </div>`
    }
    document.querySelector('.office-back').style.filter = `brightness(${0.1})`

    enableCamHover()
    doRTimer()
    changeCam(cameras[0]);
    doPowerCount()

    document.querySelectorAll('.button').forEach(btn => {
        btn.addEventListener("click", event => {
            const camClass = event.currentTarget.classList[0]
            changeCam(camClass);
        });
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
            document.querySelector('.time').innerHTML = `${doTimerHour(gameTime)}:${doTimerSec(gameTimeSec)} AM`
            tabName.innerHTML = `${doTimerHour(gameTime)}:${doTimerSec(gameTimeSec)} AM`
            gameTime++
            gameTimeSec++
        }
    }, 1000 * gameSpeed);
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
        doPowerCount()
        pauseDiv.innerHTML = ``
    }
}

const do6am = () => {
    clearMain()
    let audio = new Audio("files/sounds/sfx/6am.mp3")
    audio.play()
    officeView = false
    gamePlay.innerHTML = `
        <div class="nightShow visible">
            <p class="timeText">5:59 AM</p>
        </div>`
    tabName.innerHTML = `5:59 AM`
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
        if(currentNight == 7){
            //Do ending PINK SLIP
        }else if(currentNight == 6){
            gameData[0].customNight = true
            //Do ending BONUS 20
        }else if(currentNight == 5){
            gameData[0].nightSix = true
            //Do ending PAYCHECK
        }else if(currentNight > 5){
            gameData[0].night++
        }
        doMenu()
    }, 10000);
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
    changePos()
    requestAnimationFrame(changePosLeft)
}

const changePosRight = () => {
    if(!mouseOver) return
    officePos++
    changePos()
    requestAnimationFrame(changePosRight)
}

const changePos = () => {
    if(officePos <= 0){
        document.querySelector('.cam-hover').style.display = `block`
    }else{
        document.querySelector('.cam-hover').style.display = `none`
    }
    // if(officePos >= 100){
    //     document.querySelector('.cam-hover').style.display = `block`
    // }else{
    //     document.querySelector('.cam-hover').style.display = `none`
    // }
    officePos = Math.min(100, Math.max(0, officePos));
    document.querySelector('.office-front').style.backgroundPosition = `${officePos}%`
    document.querySelector('.office-back').style.backgroundPosition = `${officePos * 0.75}%`
}

const enableCams = () => {
    let audio = new Audio("files/sounds/sfx/cam.mp3")
    audio.play()
    if(camTabOpen && cameraMO){
        clearTimeout(camTimeOut);
        document.querySelector('.camera').style.top = `100%`
        document.querySelector('.camera').style.transform = `scale(0.9)`
        camSEnable = false
        enableCamScreen()
    }else{
        camTimeOut = setTimeout(() => {
            camSEnable = true
            enableCamScreen()
        }, 250);
        document.querySelector('.camera').style.top = `0%`
        document.querySelector('.camera').style.transform = `scale(1.11)`
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

const doFlash = () => {
    if(document.querySelector('.office-back').style.filter == `brightness(${0.1})`){
        document.querySelector('.office-back').style.filter = `brightness(${1})`
        doPower("+")
    }else{
        document.querySelector('.office-back').style.filter = `brightness(${0.1})`
        doPower()
    }
}

const konamiFunc = (word, event) => {
    if(officeView){
        if(event == word[secretCount] && secretCount == word.length - 1){
            do6am()
            secretCount = 0
        }else if(event == word[secretCount] && secretCount <= word.length - 1){
            secretCount++
        }else if(event !== word[secretCount]){
            secretCount = 0
        }
    }
}

const doPowerCount = () => {
    powerInterval = setInterval(() => {
        if(gameTime >= 360){
            stopRT("win")
            return
        }else{
            document.querySelector('.power-number').innerHTML = `${Math.floor(power / 10)}%`
            console.log(power, powerUsage)
            power--
        }
    }, 1000 / powerUsage);
    doPowerBar()
}

const doPowerBar = () => {
    document.querySelector('.usage').innerHTML = ``
    for(let i = 0; i < powerUsage; i++){
        document.querySelector('.usage').innerHTML += `<div></div>`
    }
}

const doPower = (type) => {
    clearInterval(powerInterval)
    if(type == "+"){
        powerUsage++
    }else{
        powerUsage--
    }
    doPowerCount()
}

doMenu()
// doOffice()

document.addEventListener('keydown', function(event) {
    if(event.key == 'Escape' && officeView){
        doPause()
    }
    if(event.key == 'Control' && officeView && !camSEnable){
        doFlash()
    }
    if(event.key == 'Delete'){
        doGameOver()
    }
    konamiFunc(konamiCode, event.key)
})