// Minigame Web (Point and click game)

let gameSpeed = 1

let gameData = [{
    night: 7,
    nightSix: true,
    extraMenu: true,
}]

let characters = [
    {
        name: "Justas",
        mMImage: "files/images/characters/justas.png",
        icon: [35, 0, 0, 0],
        jumpScareSFX: "",
        difficulty: 0,
        path: 0,
        cameraPos: {
            r04: [35, 0, 35, 0],
            b1: [35, 0, 25, 0],
            a1: [35, 25, 35, 0],
            a2: [35, 25, 35, 0],
            office: [100, 0, 0, 0]
        },
        pathFind: {
            r04: "",
            b1: "",
            a1: "",
            a2: "",
            office: ""
        }
    },
    {
        name: "Kara",
        mMImage: "files/images/characters/kara.png",
        icon: [35, 0, 0, 0],
        jumpScareSFX: "",
        difficulty: 0,
        path: 0,
        cameraPos: {
            r01: [35, 0, 35, 0],
            r02: [35, 0, 25, 0],
            r03: [35, 25, 35, 0],
            office: [0, 100, 0, 0]
        },
        pathFind: {
            r01: "",
            r02: "",
            r03: "",
            office: ""
        }
    },
]

let cameras = ["a1", "a2", "b1", "b2", "r01", "r02", "r03", "r04", "r05", "r06"]

let konamiCode = ["ArrowUp",
    //  "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"
    ]

let extraOp = [{
    name: "Characters",
    class: "CHR",
},
{
    name: "Scenes",
    class: "SCN",
},
{
    name: "Custom Night",
    class: "CTN",
},
{
    name: "Cheats",
    class: "CHT",
},
{
    name: "Exit",
    class: "EXT",
}]

let cheats = [{
    text: "Faster Nights",
    class: "fstngt",
    enable: false
},
{
    text: "Unlimited Power",
    class: "unltpw",
    enable: false
}]

let pictures = []

let characterPic = []

let scenePic = [
        "files/images/office/office_front.png",
        "files/images/camera/radar.png",
]

for(let i = 0;i < characters.length; i++){
    characterPic.push(characters[i].mMImage)
}

for(let i = 0;i < cameras.length; i++){
    scenePic.push(`files/images/camera/${cameras[i]}.png`)
}

const body = document.querySelector('body')
const tabName = document.querySelector('.tab-title')
const gamePlay = document.querySelector('main')
const copyRight = document.querySelector('footer')
const pauseDiv = document.querySelector('.pause-div')

let gameTime = 0;
let gameTimeSec = 0;
let power = 1000;
let powerUsage = 1;
let officePos = 50;
let currentNight = 0;
let secretCount = 0;
let picCount = 0;

let version = 0.5

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
let extraText

const clearMain = () => {
    gameTime = 0;
    gameTimeSec = 0;
    gameTime = 1;
    power = 1000;
    powerUsage = 1;
    body.style.background = `black`
    gamePlay.innerHTML = ``
    copyRight.innerHTML = ``
    clearInterval(timerInterval)
    clearInterval(powerInterval)
    cameraMO = false
    officeView = false
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
    document.querySelector('.screen').style.background = `url(files/images/camera/changecam.gif`
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
        <p class="Version">Version ${version}</p>
        <p class="Name">Oskaras Venzlauskas GJSM23</p>`
    tabName.innerHTML = `Five Night's at KITM`

    if(gameData[0].extraMenu){
        document.querySelector('.MMSelector').innerHTML += `
        <p class="night-six text">6th Night</p>`

        document.querySelector('.MMSelector').innerHTML += `
        <p class="EXT text">Extra </p>`

        document.querySelector('.night-six').addEventListener('click', function () {
            doNightShow("night-6")
        });

        document.querySelector('.EXT').addEventListener('click', function () {
            doExtra()
        });
    }else if(gameData[0].nightSix){
        document.querySelector('.MMSelector').innerHTML += `
        <p class="night-six text">6th Night</p>`

        document.querySelector('.night-six').addEventListener('click', function () {
            doNightShow("night-6")
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
        currentNight = Math.min(currentNight, 5)
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
    if(cheats[0].enable){
        gameSpeed = 0.5
    }
    if(cheats[1].enable){
        power = 999999;
    }
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
                <div class="character-office character-left"></div>
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
    changePos()
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
            gameData[0].extraMenu = true
            //Do ending BONUS 20
        }else if(currentNight == 5){
            gameData[0].nightSix = true
            //Do ending PAYCHECK
        }else if(currentNight <= 5){
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
    tabName.innerHTML = `Game Over`
    setTimeout(() => {
        clearMain()
        gamePlay.innerHTML = `<div class="gameOver"></div>`
        tabName.innerHTML = `GAME OVER`
    }, 2000);
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
    if(officePos >= 30 && 70 >= officePos){
        document.querySelector('.cam-hover').style.display = `block`
    }else{
        document.querySelector('.cam-hover').style.display = `none`
    }
    officePos = Math.min(100, Math.max(0, officePos));
    document.querySelector('.office-front').style.backgroundPosition = `${officePos}%`
    document.querySelector('.office-back').style.backgroundPosition = `${officePos}%`
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
        changeCam(currentCam)
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

const doExtra = () => {
    gamePlay.innerHTML = `
        <div class="navbar">
            <div class="nav-text">
                <div class="nav-selector"></div>
            </div>
        <div class="scene-show"></div>`

    for(let i = 0; i < extraOp.length; i++){
        document.querySelector('.nav-selector').innerHTML += `<p class="${extraOp[i].class} text">${extraOp[i].name}</p>`
    }

    doEXTOpt(characterPic, "Characters")
    changeEXTPic("early", pictures)

    document.querySelector('.CHR').addEventListener("click", function () {
        doEXTOpt(characterPic, this.textContent)
        changeEXTPic("early", pictures)
    });

    document.querySelector('.SCN').addEventListener("click", function () {
        doEXTOpt(scenePic, this.textContent)
        changeEXTPic("early", pictures)
    });

    document.querySelector('.CTN').addEventListener("click", function () {
        doEXTOpt(scenePic, this.textContent)
        changeCTN()
    });

    document.querySelector('.CHT').addEventListener("click", function () {
        doEXTOpt(scenePic, this.textContent)
        changeCHT()
    });


    document.querySelector('.EXT').addEventListener("click", function () {
        doMenu()
    });
}

const doEXTOpt = (type, name) => {
    picCount = 0
    pictures = type
    for(let i = 0; i < extraOp.length; i++){
        if(name == extraOp[i].name){
            extraText = extraOp[i].name
            tabName.innerHTML = extraOp[i].name
        }
    }
}

const changeEXTPic = (type, pic) => {
    if(type == "early"){
        document.querySelector(".scene-show").innerHTML = `
            <div class="extra-title"><p>${extraText}</p></div>
            <div class="arrow-left arrow">&lt;&lt;</div>
            <div class="arrow-right arrow">>></div>
            <div class="scene-num"></div>
            <div class="scene-container"></div>`
        
        document.querySelector('.arrow-left').addEventListener("click", function () {
            changeEXTPic("left", pictures)
        });

        document.querySelector('.arrow-right').addEventListener("click", function () {
            changeEXTPic("right", pictures)
        });
    }else if(type == "left"){
        picCount--
    }else if(type == "right"){
        picCount++
    }
    if(picCount == -1){
        picCount = pic.length - 1
    }else if(picCount == pic.length){
        picCount = 0
    }
    document.querySelector(".scene-container").innerHTML = `<a target="_blank" href="${pic[picCount]}"><div class="scene"></div></a>`
    document.querySelector(".scene-num").innerHTML = `${picCount + 1}/${pic.length}`
    document.querySelector(".scene").style.background = `url(${pic[picCount]})`
    document.querySelector(".scene").style.backgroundSize = `100% 100%`
}

const changeCTN = () => {
    document.querySelector(".scene-show").innerHTML = ``
}

const changeCHT = () => {
    document.querySelector(".scene-show").innerHTML = `
        <div class="extra-title"><p>${extraText}</p></div>
        <div class="cheats"></div>`

    for(let i = 0;i < cheats.length; i++){
        document.querySelector('.cheats').innerHTML += `
                <div class="row">
                    <div class="${cheats[i].class} switch"></div><p class="cheat-text">${cheats[i].text}</p>
                </div>`
        if(cheats[i].enable){
            document.querySelector(`.${cheats[i].class}`).classList.add('enabled')
        }
    }

    document.querySelector('.fstngt').addEventListener("click", function () {
        changeCHTEnable("fstngt", 0)
    });

    document.querySelector('.unltpw').addEventListener("click", function () {
        changeCHTEnable("unltpw", 1)
    });
}

const changeCHTEnable = (cl, num) => {
    document.querySelector(`.${cl}`).classList.toggle('enabled')
    cheats[num].enable = !cheats[num].enable
}

doMenu()
// doOffice()
// doExtra()

document.addEventListener('keydown', function(event) {
    if(event.key == 'Escape' && officeView){
        doPause()
    }
    if(event.key == 'Control' && officeView && !camSEnable && !pauseView){
        doFlash()
    }
    if(event.key == 'Delete' && officeView && !pauseView){
        doGameOver()
    }
    konamiFunc(konamiCode, event.key)
})