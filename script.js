// Minigame Web (Point and click game)

let gameSpeed = 1

let gameData = [{
    night: 1,
    nightSix: false,
    extraMenu: false,
    stars: [{
        star: false,
    },
    {
        star: false,
    },
    {
        star: false,
    },
    {
        star: false,
    }]
}]

gameData = [{
    night: 7,
    nightSix: true,
    extraMenu: true,
    stars: [{
        star: true,
    },
    {
        star: true,
    },
    {
        star: true,
    },
    {
        star: true,
    }]
}]

let characters = [
    {
        name: "Speedy",
        mMImage: "files/images/characters/justas.png",
        tauntSFX: ["", ""],
        jumpScareSFX: "files/sounds/jumpscare/generic.mp3",
        path: 0,
        pathFind: [{
            r04: {
                image: "files/images/characters/justas.png",
                pos: [50, 0]
            },
            b1: {
                image: "files/images/characters/justas.png",
                pos: [50, 0]
            },
            a1: {
                image: "files/images/characters/justas.png",
                pos: [50, 0]
            },
            a2: {
                image: "files/images/characters/justas.png",
                pos: [50, 0]
            },
            office: {
                image: "files/images/characters/justas.png",
                pos: "center"
            },
            innerOffice: {
                image: "files/images/characters/justas.png",
                pos: "left"
            }
        }],
        difficulty: {
            night1: 2,
            night2: 4,
            night3: 7,
            night4: 10,
            night5: 15,
            night6: 17,
            night7: 0,
        }
    },
    {
        name: "Bonepart",
        mMImage: "files/images/characters/kajus.png",
        tauntSFX: ["", ""],
        jumpScareSFX: "files/sounds/jumpscare/generic.mp3",
        path: 0,
        pathFind: [{
            r01: {
                image: "files/images/characters/kajus.png",
                pos: [25, 5]
            },
            r02: {
                image: "files/images/characters/kajus.png",
                pos: [50, 30]
            },
            r03: {
                image: "files/images/characters/kajus.png",
                pos: [25, 20]
            },
            office: {
                image: "files/images/characters/kajus.png",
                pos: "center"
            },
            innerOffice: {
                image: "files/images/characters/kajus.png",
                pos: "right"
            }
        }],
        difficulty: {
            night1: 2,
            night2: 5,
            night3: 8,
            night4: 9,
            night5: 13,
            night6: 16,
            night7: 0,
        }
    },
    // {
    //     name: "Halali",
    //     mMImage: "files/images/characters/antanas.png",
    //     tauntSFX: ["", ""],
    //     jumpScareSFX: "files/sounds/jumpscare/generic.mp3",
    //     path: 0,
    //     pathFind: [{
    //         r05: {
    //             image: "files/images/characters/antanas.png",
    //             pos: [25, 5]
    //         },
    //         b1: {
    //             image: "files/images/characters/antanas.png",
    //             pos: [0, 30]
    //         },
    //         b2: {
    //             image: "files/images/characters/antanas.png",
    //             pos: [25, 20]
    //         },
    //         r06: {
    //             image: "files/images/characters/antanas.png",
    //             pos: [60, 50]
    //         },
    //         officeRight: {
    //             image: "files/images/characters/kajus.png",
    //             pos: [100, 0]
    //         },
    //         office: []
    //     }],
    //     difficulty: {
    //         night1: 2,
    //         night2: 5,
    //         night3: 8,
    //         night4: 9,
    //         night5: 13,
    //         night6: 16,
    //         night7: 0,
    //     }
    // },
    // {
    //     name: "Kara",
    //     mMImage: "files/images/characters/kara.png",
    //     tauntSFX: ["", ""],
    //     jumpScareSFX: "files/sounds/jumpscare/generic.mp3",
    //     path: 0,
    //     pathFind: [{
    //         r04: {
    //             image: "files/images/characters/kara.png",
    //             pos: [25, 20]
    //         },
    //         r03: {
    //             image: "files/images/characters/kara.png",
    //             pos: [50, 25]
    //         },
    //         officeRight: {
    //             image: "files/images/characters/kara.png",
    //             pos: [0, 50]
    //         },
    //         office: []
    //     }],
    //     difficulty: {
    //         night1: 2,
    //         night2: 5,
    //         night3: 8,
    //         night4: 9,
    //         night5: 13,
    //         night6: 16,
    //         night7: 0,
    //     }
    // }
]

let cameras = ["a1", "a2", "b1", "b2", "r01", "r02", "r03", "r04", "r05", "r06"]

let extras = [{
    extraOp: [{
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
    }],
    cheats: [{
        text: "Faster Nights",
        class: "fstngt",
        enable: false
    },
    {
        text: "Unlimited Power",
        class: "unltpw",
        enable: false
    }]
}]

let themes = [{
    mMTheme: new Audio("files/sounds/background/theme.mp3"),
    extTheme: new Audio("files/sounds/background/extras.mp3"),
    offAmbience: new Audio("files/sounds/background/officeAmbience.mp3"),
    off20Ambience: new Audio("files/sounds/background/office20mode.mp3")
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

let konamiCode = ["ArrowUp",
    //  "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"
    ]

const body = document.querySelector('body')
const tabName = document.querySelector('.tab-title')
const gamePlay = document.querySelector('main')
const copyRight = document.querySelector('footer')
const pauseDiv = document.querySelector('.pause-div')

let endingMusic = new Audio("files/sounds/background/music.mp3")

let gameTime = 0;
let power = 1000;
let powerUsage = 1;
let officePos = 50;
let currentNight = 0;
let secretCount = 0;
let picCount = 0;

let version = 0.83

let cameraView = false
let officeView = false
let pauseView = false
let newsPaperView = false
let mouseOver = false
let cameraMO = false
let camTabOpen = false
let camSEnable = false
let lButEnable = false
let viewEnding = false
let twentyMode = false

let leftDoorClose = false
let rightDoorClose = false

let officeLight = false
let officeLightDelay = false

let timerInterval
let moveInterval
let powerInterval
let mMImgInterval
let mMImgTimeout
let jumpScareTimeout
let camTimeOut
let camEffect
let currentCam
let extraText
let jumpSFX

const clearMain = () => {  clearInterval(timerInterval)
    clearInterval(powerInterval)
    clearInterval(mMImgInterval)
    clearTimeout(mMImgTimeout)
    clearTimeout(jumpScareTimeout)
    backgroundSFX(themes[0].mMTheme, "stop")
    backgroundSFX(themes[0].extTheme, "stop")
    backgroundSFX(themes[0].offAmbience, "stop")
    backgroundSFX(themes[0].off20Ambience, "stop")
    body.style.background = `black`
    gamePlay.style.background = `black`
    gamePlay.innerHTML = ``
    copyRight.innerHTML = ``
    gameTime = 0;
    power = 1000;
    powerUsage = 1;
    if(jumpSFX != undefined){
        jumpSFX.pause()
        jumpSFX.currentTime = 0;
    }
    cameraMO = false
    officeView = false
    currentCam = undefined
    jumpSFX = undefined
}

const backgroundSFX = (sound, type) => {;
    if(type == "play"){
        sound.loop = true;
        sound.play()
    }else if(type == "pause"){
        sound.pause();
    }else if(type == "stop"){
        sound.pause();
        sound.currentTime = 0;
    }
}

//CHANGE SCENE

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

const doMenu = () => {
    officeView = false
    twentyMode = false
    currentNight = 0
    clearMain()
    gamePlay.innerHTML = `
        <div class="stars"></div>
        <div class="MMenu">
            <h1 class="title">Five Night's at KITM</h1>
            <div class="MMenuCharacter"></div>
            <div class="MMSelector">
                <p class="NG text">New Game</p>
                <p class="CTN text">Continue</p>
            </div>
        </div>`
    copyRight.innerHTML = `
        <p class="Version">Version ${version}</p>
        <p class="Name">Oskaras Venzlauskas GJSM23</p>`
    tabName.innerHTML = `Five Night's at KITM`

    for(let i = 0; i < gameData[0].stars.length; i++){
        if(gameData[0].stars[i].star){
            document.querySelector('.stars').innerHTML += `<div></div>`
        }
    }

    body.style.background = `url(files/images/camera/static.gif)`
    body.style.backgroundSize = `100% 100%`
    gamePlay.style.background = ``
    gamePlay.style.backdropFilter = `brightness(0.5)`
    doMenuImg()
    backgroundSFX(themes[0].mMTheme, "play")

    if(gameData[0].extraMenu){
        document.querySelector('.MMSelector').innerHTML += `
        <p class="night-six text">6th Night</p>`

        document.querySelector('.MMSelector').innerHTML += `
        <p class="EXT text">Extra </p>`

        document.querySelector('.night-six').addEventListener('click', () => {
            doNightShow("night-6")
        });

        document.querySelector('.EXT').addEventListener('click', () => {
            doExtra()
        });
    }else if(gameData[0].nightSix){
        document.querySelector('.MMSelector').innerHTML += `
        <p class="night-six text">6th Night</p>`

        document.querySelector('.night-six').addEventListener('click', () => {
            doNightShow("night-6")
        });
    }


    document.querySelector('.NG').addEventListener('click', () => {
        newGame(0)
    });

    document.querySelector('.CTN').addEventListener('click', () => {
        doNightShow("continue")
    });

    document.querySelectorAll('.text').forEach(btn => {
        btn.addEventListener("mouseover", () => {
            let audio = new Audio("files/sounds/sfx/cam_change.mp3")
            audio.play()
        });
    });
}

const doMenuImg = () => {
    let chrImgRight = 0
    let chrImgBottom = 0
    let zIndex = characters.length
    for(let i = 0;i < characters.length; i++){
        let character = `char${i}-img`
        document.querySelector(".MMenuCharacter").innerHTML += `<div class="${character} MMenuChr-img"></div>`
        document.querySelector(`.${character}`).style.background = `url(${characters[i].mMImage})`
        document.querySelector(`.${character}`).style.backgroundSize = `100% 100%`
        document.querySelector(`.${character}`).style.backgroundPosition = `center top`
        document.querySelector(`.${character}`).style.filter = `brightness(${1 / (characters.length / zIndex)})`
        document.querySelector(`.${character}`).style.bottom = `${chrImgBottom}%`
        document.querySelector(`.${character}`).style.right = `${chrImgRight}%`
        document.querySelector(`.${character}`).style.zIndex = `${zIndex}`
        chrImgRight += 20 / zIndex
        chrImgBottom += 5 / zIndex
        zIndex -= 1
    }
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

const doTwentyCheck = () => {
    let twentyModeCheck = 0
    let cheatCheck = 0
    for(let i = 0; i < characters.length; i++){
        if(characters[i].difficulty[`night${currentNight}`] >= 20){
            twentyModeCheck++
        }
    }
    for(let i = 0; i < extras[0].cheats.length; i++){
        if(!extras[0].cheats[i].enable){
            cheatCheck++
        }
    }
    if(twentyModeCheck == characters.length && cheatCheck == extras[0].cheats.length){
        twentyMode = true
    }
}

const doOffice = () => {
    clearMain()
    if(currentNight == 0){
        currentNight = gameData[0].night
        currentNight = Math.min(currentNight, 5)
    }
    if(extras[0].cheats[0].enable){
        gameSpeed = 0.5
    }
    if(extras[0].cheats[1].enable){
        power = 999999;
    }
    for(let i = 0; i < characters.length; i++){
        console.log(characters[i].name, ":", characters[i].difficulty[`night${currentNight}`])
    }
    officeView = true
    cameraMO = true
    gamePlay.innerHTML = `
        <div class="timer">
            <h3 class="time">${doTimerHour(gameTime)}:${doTimerSec(Math.floor(((gameTime * 6) % 360) / 6))} AM</h3>
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
            <div class="doors">
                <div class="door-left"></div>
                <div class="door-right"></div>
            </div>
            <div class="door-buttons">
                <div class="door-button door-button-left">
                    <p>Door</p>
                    <div class="door-button-light door-light-left"></div>
                </div>
                <div class="door-button door-button-right">
                    <p>Door</p>
                    <div class="door-button-light door-light-right"></div>
                </div>
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
                <div class="character-contain"></div>
            </div>
            <div class="screen-border"></div>
            <div class="static"></div>
            <div class="cam-change"></div>
            <div class="map"></div>
        </div>`
    
    for(let i = 0; i < cameras.length; i++){
        document.querySelector('.map').innerHTML += `
                <div class="${cameras[i]} button">
                    <p>CAM</p>
                    <p>${cameras[i].toUpperCase()}</p>
                </div>`
    }
    doFlash("officeMoveLight")
    doDoorClose(leftDoorClose, "door-left", "door-light-left")
    doDoorClose(rightDoorClose, "door-right", "door-light-right")

    doTwentyCheck()
    enableCamHover()
    doRTimer()
    changePos()
    changeCam(cameras[0]);
    doPowerCount()
    if(twentyMode){
        backgroundSFX(themes[0].off20Ambience, "play")
    }else{
        backgroundSFX(themes[0].offAmbience, "play")
    }

    document.querySelectorAll('.button').forEach(btn => {
        btn.addEventListener("click", event => {
            const camClass = event.currentTarget.classList[0]
            changeCam(camClass);
        });
    });

    document.querySelector('.door-button-left').addEventListener("click", () => {
        leftDoorClose = !leftDoorClose
        doDoorClose(leftDoorClose, "door-left", "door-light-left")
    });


    document.querySelector('.door-button-right').addEventListener("click", () => {
        rightDoorClose = !rightDoorClose
        doDoorClose(rightDoorClose, "door-right", "door-light-right")
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

const doPause = (type) => {
    pauseView = !pauseView
    if(pauseView){
        if(twentyMode){
            backgroundSFX(themes[0].off20Ambience, "pause")
        }else{
            backgroundSFX(themes[0].offAmbience, "pause")
        }
        pauseDiv.innerHTML += `
            <div class="pause">
                <h1>Paused</h1>
                <p class="cont">CONTINUE</p><br>
                <p class="exit">EXIT</p>
            </div>`
        stopRT("Pause")

        document.querySelector('.cont').addEventListener("click", () => {
            doPause()
        });

        document.querySelector('.exit').addEventListener("click", () => {
            doMenu()
            doPause("menu")
        });
    }else if(type == "menu"){
        pauseDiv.innerHTML = ``
    }else{
        doRTimer()
        doPowerCount()
        pauseDiv.innerHTML = ``
        if(twentyMode){
            backgroundSFX(themes[0].off20Ambience, "play")
        }else{
            backgroundSFX(themes[0].offAmbience, "play")
        }
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
        if(currentNight == 7 && twentyMode){
            let ending = 4
            doEnding(ending)
        }else if(currentNight == 7){
            let ending = 3
            doEnding(ending)
        }else if(currentNight == 6){
            let ending = 2
            doEnding(ending)
        }else if(currentNight == 5){
            let ending = 1
            doEnding(ending)
        }else if(currentNight <= 5){
            gameData[0].night++
            doMenu()
        }
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
    audio.addEventListener("ended", () => {
        doMenu()
    });
}

const doEnding = (type) => {
    viewEnding = !viewEnding
    if(type == "skip"){
        endingMusic.pause()
        endingMusic.currentTime = 0
        doMenu()
    }else{
        clearMain()
        for(let i = 0; i < type; i++){
            gameData[0].stars[i].star = true
        }
        endingMusic.play()
        gamePlay.innerHTML = `<div class="ending"></div>`
        document.querySelector('.ending').style.background = `url(files/images/menu/ending/ending0${type}.png)`
        document.querySelector('.ending').style.backgroundSize = `100% 100%`
        tabName.innerHTML = `The End`
        endingMusic.addEventListener("ended", () => {
            doMenu()
        });
    }
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
    for(let i = 0; i < characters.length; i++){
        animOffice(i)
    }
    doorPos()
}

const doorPos = () => {
    document.querySelector(`.door-left`).style.left = `${officePos * -1 + 5}%`
    document.querySelector(`.door-right`).style.left = `${officePos * -1 + 170}%`
    document.querySelector(`.door-button-left`).style.left = `${officePos * -1 + 33}%`
    document.querySelector(`.door-button-right`).style.left = `${officePos * -1 + 161}%`
}

const doDoorClose = (type, door, button) => {
    if(type){
        doPower("+")
        document.querySelector(`.${door}`).style.bottom = `0%`
        document.querySelector(`.${button}`).style.filter = `hue-rotate(90deg)`
    }else{
        doPower()
        document.querySelector(`.${door}`).style.bottom = `80%`
        document.querySelector(`.${button}`).style.filter = ``
    }
}

const doJumpscare = (char) => {
    let time = 50
    jumpSFX = new Audio(`${char.jumpScareSFX}`)
    if(camSEnable){
        enableCams()
        camTabOpen = !camTabOpen
        cameraMO = !cameraMO
        document.querySelector('.cam-hover').style.opacity = `0%`
    }
    officeView = false
    gamePlay.innerHTML += `<div class="jumpscare"></div>`
    let option = Math.floor(Math.random() * 2)
    let div = document.querySelector('.jumpscare')
    div.style.background = `url(${char.mMImage})`
    div.style.backgroundRepeat = `no-repeat`
    div.style.backgroundSize = `50% 50%`
    div.style.backgroundPosition = `50% 200%`
    jumpScareTimeout = setTimeout(() => {
        jumpSFX.play()
        div.style.width = `200%`
        div.style.height = `200%`
        div.style.transition = `background-position 0.125s, background-size 0.125s, rotate 0.125s`
        div.style.backgroundPosition = `0% 0%`
    }, 1 * time);
    for(let i = 2; i < 20; i++){
        option = 1 - option
        if(option == 1){
            jumpScareTimeout = setTimeout(() => {
                div.style.rotate = `15deg`
                div.style.backgroundSize = `75% 75%`
                gamePlay.style.filter = `contrast(5) brightness(5) invert(1)`
            }, i * time);
        }else{
            jumpScareTimeout = setTimeout(() => {
                div.style.rotate = `-15deg`
                div.style.backgroundSize = `50% 50%`
                gamePlay.style.filter = `contrast(1) brightness(0.2) invert(0)`
            }, i * time);
        }
    }
    jumpScareTimeout = setTimeout(() => {
        gamePlay.style.filter = `contrast(1) brightness(1) invert(0)`
        doGameOver()
    }, 20 * time);
}

//--CAMERA

const enableCams = () => {
    let audio = new Audio("files/sounds/sfx/cam.mp3")
    audio.play()
    clearTimeout(camTimeOut);
    if(camTabOpen && cameraMO){
        document.querySelector('.camera').style.top = `100%`
        document.querySelector('.camera').style.transform = `scale(0.9)`
        camSEnable = false
        enableCamScreen()
        doPower()
    }else{
        camTimeOut = setTimeout(() => {
            camSEnable = true
            enableCamScreen()
        }, 250);
        document.querySelector('.camera').style.top = `0%`
        document.querySelector('.camera').style.transform = `scale(1.11)`
        doPower("+")
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

const changeCam = (cam) => {
    clearTimeout(camEffect)
    if(currentCam == undefined){
        currentCam = cam
        document.querySelector(`.${currentCam}`).classList.add("button-clicked")
    }else{
        if(camTabOpen){
            let audio = new Audio("files/sounds/sfx/cam_change.mp3")
            audio.play()
        }
        document.querySelector(`.${currentCam}`).classList.remove("button-clicked")
        currentCam = cam
        document.querySelector(`.${currentCam}`).classList.add("button-clicked")
    }
    document.querySelector('.cam-change').style.display = `block`
    camEffect = setTimeout(() => {
        document.querySelector('.cam-change').style.display = `none`
        document.querySelector('.screen').style.background = `url(files/images/camera/${cam}.png)`
        document.querySelector('.screen').style.backgroundSize = `100% 100%`
        for(let i = 0; i < characters.length; i++){
            animCamera(i)
        }
    }, 50);
}

const doFlash = (type) => {
    if(type == "officeMove"){
        document.querySelector('.office-back').style.filter = `brightness(0)`
    }else if(type == "officeMoveLight"){
        document.querySelector('.office-back').style.filter = `brightness(0)`
    }else{
        officeLight = !officeLight
        if(officeLight){
            document.querySelector('.office-back').style.filter = `brightness(0.75)`
            doPower("+")
        }else{
            document.querySelector('.office-back').style.filter = `brightness(0)`
            doPower()
        }
    }
}

//ANIMATRONICS MOVE

// const showAnimatronic = (cam) => {
//     document.querySelector('.character-contain').innerHTML = ``
//     for(let i = 0; i < characters.length; i++){
//         if(characters[i].path >= Object.keys(characters[i].pathFind[0]).length){
//             characters[i].path = 0
//         }
//         if(Object.keys(characters[i].pathFind[0])[characters[i].path] == cam){
//             document.querySelector('.character-contain').innerHTML += `<div class="${characters[i].name}-character character"></div>`
//             document.querySelector(`.${characters[i].name}-character`).style.background = `url(${characters[i].pathFind[0][cam].image})`
//             document.querySelector(`.${characters[i].name}-character`).style.backgroundSize = `100% 100%`
//             document.querySelector(`.${characters[i].name}-character`).style.left = `${characters[i].pathFind[0][cam].pos[0]}%`
//             document.querySelector(`.${characters[i].name}-character`).style.top = `${characters[i].pathFind[0][cam].pos[1]}%`
//         }else if(Object.keys(characters[i].pathFind[0])[characters[i].path] == `office`){
//             console.log("In office")
//         }else if(Object.keys(characters[i].pathFind[0])[characters[i].path] == `innerOffice`){
//             console.log("Do jumpscare")
//         }
//     }
// }

const doAnimPath = (num) => {
    if(characters[num].path + 1 >= Object.keys(characters[num].pathFind[0]).length){
        if(Object.values(characters[num].pathFind[0])[characters[num].path].pos == "left" && !leftDoorClose){
            console.log("Left Jumpscare")
            doJumpscare(characters[num])
        }else if(Object.values(characters[num].pathFind[0])[characters[num].path].pos == "right" && !rightDoorClose){
            console.log("Right Jumpscare")
            doJumpscare(characters[num])
        }else{
            characters[num].path = 0
            animOffice(num, "first")
            console.log(document.querySelector(`.${characters[num].name}-office`))
            document.querySelector(`.${characters[num].name}-office`).remove()
        }
    }else{
        characters[num].path++
    }
    let checkArray = !Array.isArray(Object.values(characters[num].pathFind[0])[characters[num].path].pos)
    if(characters[num].path >= Object.keys(characters[num].pathFind[0]).length - 2){
        if(checkArray){
            changeCam(currentCam)
            animCamera(num)
            animOffice(num, "first")
        }
    }else{
        if(Object.keys(characters[num].pathFind[0])[characters[num].path] == currentCam || Object.keys(characters[num].pathFind[0])[characters[num].path - 1] == currentCam){
            changeCam(currentCam)
        }
        animCamera(num)
    }
}

const animCamera = (num) => {
    document.querySelector('.character-contain').innerHTML = ``
    if(Object.keys(characters[num].pathFind[0])[characters[num].path] == currentCam){
        document.querySelector('.character-contain').innerHTML += `<div class="${characters[num].name}-character character"></div>`
        document.querySelector(`.${characters[num].name}-character`).style.background = `url(${characters[num].pathFind[0][currentCam].image})`
        document.querySelector(`.${characters[num].name}-character`).style.backgroundSize = `100% 100%`
        document.querySelector(`.${characters[num].name}-character`).style.left = `${characters[num].pathFind[0][currentCam].pos[0]}%`
        document.querySelector(`.${characters[num].name}-character`).style.top = `${characters[num].pathFind[0][currentCam].pos[1]}%`
    }
}

const animOffice = (num, type) => {
    if(type == "first"){
            if(officeLight){
                officeLight = false
                doPower()
            }
            officeLightDelay = true
            doFlash("officeMove")
            setTimeout(() =>{
                officeLightDelay = false
                doFlash("officeMoveLight")
            }, 250)
            // document.querySelector(`.${characters[num].name}-office`).style.transition = `left 0.25s, top 0.25s`
            // setTimeout(() =>{
            //     document.querySelector(`.${characters[num].name}-office`).style.transition = `left 0s, top 0s`
            // }, 250)
    }
    if(characters[num].path >= Object.keys(characters[num].pathFind[0]).length - 2 && characters[num].path != 0){
        console.log(characters[num].name, characters[num].path)
        let place = Object.keys(characters[num].pathFind[0])[characters[num].path]
        let checkArray = !Array.isArray(Object.values(characters[num].pathFind[0])[characters[num].path].pos)
        if(checkArray && type == "first" && document.querySelector(`.${characters[num].name}-office`) == null){
            document.querySelector(`.character-office`).innerHTML += `<div class="${characters[num].name}-office anim-office"></div>`
            document.querySelector(`.${characters[num].name}-office`).style.background = `url(${characters[num].pathFind[0][place].image})`
            document.querySelector(`.${characters[num].name}-office`).style.backgroundSize = `100% 100%`
            // document.querySelector(`.${characters[num].name}-office`).style.transition = `left 0s, top 0s`
        }
        if(characters[num].pathFind[0][place].pos == "center"){
            document.querySelector(`.${characters[num].name}-office`).style.left = `${officePos * -1 + 87}%`
            document.querySelector(`.${characters[num].name}-office`).style.top = `25%`
        }else if(characters[num].pathFind[0][place].pos == "left"){
            document.querySelector(`.${characters[num].name}-office`).style.left = `${officePos * -1 + 5}%`
            document.querySelector(`.${characters[num].name}-office`).style.top = `50%`
        }else if(characters[num].pathFind[0][place].pos == "right"){
            document.querySelector(`.${characters[num].name}-office`).style.left = `${officePos * -1 + 170}%`
            document.querySelector(`.${characters[num].name}-office`).style.top = `50%`
        }
    }
}

//--TIMER

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
    if(time <= 9) {
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

const doRTimer = () => {
    timerInterval = setInterval(() => {
        gameTime++
        if(gameTime >= 360){
            stopRT("win")
        }else{
            document.querySelector('.time').innerHTML = `${doTimerHour(gameTime)}:${doTimerSec(Math.floor(((gameTime * 6) % 360) / 6))} AM`
            tabName.innerHTML = `${doTimerHour(gameTime)}:${doTimerSec(Math.floor(((gameTime * 6) % 360) / 6))} AM`
        }
    }, 1000 * gameSpeed);
}

//--POWER

const doPowerCount = () => {
    powerInterval = setInterval(() => {
        document.querySelector('.power-number').innerHTML = `${Math.floor(power / 10)}%`
        power--
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
    powerUsage = Math.min(5, Math.max(1, powerUsage));
    doPowerCount()
}

//--EXTRA FUNCTIONS

const doExtra = () => {
    clearMain()
    gamePlay.innerHTML = `
        <div class="navbar">
            <div class="nav-text">
                <div class="nav-selector"></div>
            </div>
        <div class="scene-show"></div>`

    for(let i = 0; i < extras[0].extraOp.length; i++){
        console.log(extras[0].extraOp[i].class, extras[0].extraOp[i].name)
        document.querySelector('.nav-selector').innerHTML += `<p class="${extras[0].extraOp[i].class} text">${extras[0].extraOp[i].name}</p>`
    }

    gamePlay.style.background = `url(files/images/camera/static.gif)`
    gamePlay.style.backgroundSize = `100% 100%`

    doEXTOpt(characterPic, "Characters")
    changeEXTPic("early", pictures)
    backgroundSFX(themes[0].extTheme, "play")

    document.querySelectorAll('.text').forEach(btn => {
        btn.addEventListener("mouseover", () => {
            let audio = new Audio("files/sounds/sfx/cam_change.mp3")
            audio.play()
        });
    });

    document.querySelector('.CHR').addEventListener("click", (event) => {
        doEXTOpt(characterPic, event.currentTarget.textContent)
        changeEXTPic("early", pictures)
    });

    document.querySelector('.SCN').addEventListener("click", (event) => {
        doEXTOpt(scenePic, event.currentTarget.textContent)
        changeEXTPic("early", pictures)
    });

    document.querySelector('.CTN').addEventListener("click", (event) => {
        doEXTOpt(scenePic, event.currentTarget.textContent)
        changeCTN()
    });

    document.querySelector('.CHT').addEventListener("click", (event) => {
        doEXTOpt(scenePic, event.currentTarget.textContent)
        changeCHT()
    });


    document.querySelector('.EXT').addEventListener("click", () => {
        doMenu()
    });
}

const doEXTOpt = (type, name) => {
    picCount = 0
    pictures = type
    for(let i = 0; i < extras[0].extraOp.length; i++){
        if(name == extras[0].extraOp[i].name){
            extraText = extras[0].extraOp[i].name
            console.log(extraText)
            tabName.innerHTML = extras[0].extraOp[i].name
        }
    }
}

const changeEXTPic = (type, pic) => {
    if(type == "early"){
        document.querySelector(".scene-show").innerHTML = `
            <div class="top-bar">
                <div class="scene-num"></div>
                <div class="extra-title"><p>${extraText}</p></div>
            </div>
            <div class="bottom-bar">
                <div class="arrow-left arrow">&lt;&lt;</div>
                <div class="arrow-right arrow">>></div>
                <div class="scene-container"></div>
            </div>`
        
        document.querySelector('.arrow-left').addEventListener("click", () => {
            changeEXTPic("left", pictures)
        });

        document.querySelector('.arrow-right').addEventListener("click", () => {
            changeEXTPic("right", pictures)
        });
    }else{
        let audio = new Audio("files/sounds/sfx/cam_change.mp3")
        audio.play()
    }
    if(type == "left"){
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
    if(extraText == "Characters"){
        document.querySelector(".scene-num").innerHTML = `${picCount + 1}/${pic.length} - ${characters[picCount].name}`
    }else{
        let splitTitle = pic[picCount].split("/")
        let splitName = splitTitle[splitTitle.length - 1]
        splitName = splitName.split(".")
        let name = splitName[0]
        document.querySelector(".scene-num").innerHTML = `${picCount + 1}/${pic.length} - ${name}`
    }
    document.querySelector(".scene").style.background = `url(${pic[picCount]})`
    document.querySelector(".scene").style.backgroundSize = `contain`
    document.querySelector(".scene").style.backgroundPosition = `center`
    document.querySelector(".scene").style.backgroundRepeat = `no-repeat`
}

const changeCTN = () => {
    document.querySelector(".scene-show").innerHTML = `
            <div class="top-bar">
                <div class="cn-modes">
                    <p class="cn-add set-0">Set 0 to all</p>
                    <p class="cn-add add-1">Add 1 to all</p>
                    <p class="cn-add add-5">Add 5 to all</p>
                    <p class="cn-add add-10">Add 10 to all</p>
                    <p class="cn-add set-20">Set 20 to all</p>
                </div>
                <div class="extra-title"><p>${extraText}</p></div>
            </div>
            <div class="bottom-bar">
                <div class="characters"></div>
            </div>`
    for(let i = 0;i < characters.length; i++){
        document.querySelector(".characters").innerHTML += `
                <div class="cn-character">
                    <p>${characters[i].name}</p>
                    <div class="${characters[i].name}-img character-img"></div>
                    <p>Difficulty</p>
                    <p class="${characters[i].name}-dif-text dif-text">${characters[i].difficulty.night7}</p>
                    <div class="cn-arrows">
                        <div class="${characters[i].name}-arLeft chr-arrow">&lt;&lt;</div>
                        <div class="${characters[i].name}-arRight chr-arrow">>></div>
                    </div>
                </div>
        `
        document.querySelector(`.${characters[i].name}-dif-text`).style.color = `hsl(0, 100%, ${100 / (characters[i].difficulty.night7 * 0.1)}%`
        document.querySelector(`.${characters[i].name}-img`).style.background = `url(${characters[i].mMImage})`
        document.querySelector(`.${characters[i].name}-img`).style.backgroundPosition = `center top`
        document.querySelector(`.${characters[i].name}-img`).style.backgroundPosition = `center top`
        changeCTNValue(characters[i], "early")
    }
    document.querySelector(".bottom-bar").innerHTML += `
        <div class="cn-begin"><p>Begin</p></div>`
    
    characters.forEach(char => {
        document.querySelector(`.${char.name}-arLeft`).addEventListener("click", () => {
            char.difficulty.night7--
            changeCTNValue(char)
        });
        document.querySelector(`.${char.name}-arRight`).addEventListener("click", () => {
            char.difficulty.night7++
            changeCTNValue(char)
        });
    });

    
    document.querySelector(".set-0").addEventListener("click", () => {
        for(let i = 0; i < characters.length; i++){
            characters[i].difficulty.night7 = 0
            changeCTNValue(characters[i])
        }
    });

    document.querySelector(".add-1").addEventListener("click", () => {
        for(let i = 0; i < characters.length; i++){
            characters[i].difficulty.night7 += 1
            changeCTNValue(characters[i])
        }
    });

    document.querySelector(".add-5").addEventListener("click", () => {
        for(let i = 0; i < characters.length; i++){
            characters[i].difficulty.night7 += 5
            changeCTNValue(characters[i])
        }
    });

    document.querySelector(".add-10").addEventListener("click", () => {
        for(let i = 0; i < characters.length; i++){
            characters[i].difficulty.night7 += 10
            changeCTNValue(characters[i])
        }
    });

    document.querySelector(".set-20").addEventListener("click", () => {
        for(let i = 0; i < characters.length; i++){
            characters[i].difficulty.night7 = 20
            changeCTNValue(characters[i])
        }
    });
    
    document.querySelector(".cn-begin").addEventListener("click", () => {
        let easterEgg = [2, 0, 6, 7]
        if(
            characters[0].difficulty.night7 == easterEgg[0] &&
            characters[1].difficulty.night7 == easterEgg[1] &&
            characters[2].difficulty.night7 == easterEgg[2] &&
            characters[3].difficulty.night7 == easterEgg[3]
        ){
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank').focus();
        }else{
            doNightShow("custom-night")
        }
    });
}

const changeCTNValue = (data, type) => {
    if(data.difficulty.night7 > Math.min(Math.max(data.difficulty.night7, 0), 20) || data.difficulty.night7 < Math.min(Math.max(data.difficulty.night7, 0), 20)){}else if(type == "early"){}else{
        let audio = new Audio("files/sounds/sfx/cam_change.mp3")
        audio.play()
    }
    data.difficulty.night7 = Math.min(Math.max(data.difficulty.night7, 0), 20)
    document.querySelector(`.${data.name}-dif-text`).innerHTML = `${data.difficulty.night7}`
    if(data.difficulty.night7 == 0){
        document.querySelector(`.${data.name}-dif-text`).style.color = `hsl(0, 0%, 100%)`
    }else{
        document.querySelector(`.${data.name}-dif-text`).style.color = `hsl(0, 100%, ${100 / (data.difficulty.night7 * 0.1)}%`
    }
    if(data.difficulty.night7 >= 10){
        document.querySelector(`.${data.name}-img`).style.filter = `grayscale(${(data.difficulty.night7 - 10) * 10}%) contrast(${1 + (data.difficulty.night7 - 10) / 5})`
    }else{
        document.querySelector(`.${data.name}-img`).style.filter = `grayscale(0%) contrast(1)`
    }
}

//CHEATS

const changeCHT = () => {
    document.querySelector(".scene-show").innerHTML = `
            <div class="top-bar">
                <div class="cn-modes">
                    <p class="cn-add tgl-cheats">Toggle all Cheats</p>
                </div>
                <div class="extra-title"><p>${extraText}</p></div>
            </div>
            <div class="bottom-bar">
                <div class="cheats"></div>
            </div>`

    for(let i = 0;i < extras[0].cheats.length; i++){
        document.querySelector('.cheats').innerHTML += `
                <div class="row ${extras[0].cheats[i].class} row-hover">
                    <div class="switch"></div><p class="cheat-text">${extras[0].cheats[i].text}</p>
                </div>`
        if(extras[0].cheats[i].enable){
            document.querySelector(`.${extras[0].cheats[i].class}`).classList.add('enabled')
        }
    }

    document.querySelector('.tgl-cheats').addEventListener("click", () => {
        for(let i = 0; i < extras[0].cheats.length; i++){
            changeCHTEnable(extras[0].cheats[i].class, i)
        }
    });

    document.querySelector('.fstngt').addEventListener("click", () => {
        changeCHTEnable("fstngt", 0)
    });

    document.querySelector('.unltpw').addEventListener("click", () => {
        changeCHTEnable("unltpw", 1)
    });
}

const changeCHTEnable = (cl, num) => {
    let audio = new Audio("files/sounds/sfx/cam_change.mp3")
    audio.play()
    document.querySelector(`.${cl}`).classList.toggle('enabled')
    extras[0].cheats[num].enable = !extras[0].cheats[num].enable
}

const konamiFunc = (word, event) => {
    if(officeView && !twentyMode){
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

// doMenu()
// doNightShow()
// doOffice()
// doExtra()

document.addEventListener('keydown', function(event) {
    if(event.key == 'Escape' && officeView){
        doPause()
    }
    if(event.key == 'Enter' && viewEnding){
        doEnding("skip")
    }
    if(event.key == 'Control' && officeView && !camSEnable && !pauseView && !officeLightDelay){
        doFlash()
    }
    if(event.key == 'Delete' && officeView && !pauseView){
        // doJumpscare(characters[0])
        for(let i = 0; i < characters.length; i++){
            doAnimPath(i)
        }
    }
    konamiFunc(konamiCode, event.key)
})