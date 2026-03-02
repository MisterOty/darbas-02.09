// Minigame Web (Point and click game)

let gameData = {
    night: 0,
    nightSix: false,
    extraMenu: false,
    stars: {
        star1: false,
        star2: false,
        star3: false,
        star4: false,
    }
}

gameData = {
    night: 5,
    nightSix: true,
    extraMenu: true,
    stars: {
        star1: true,
        star2: true,
        star3: true,
        star4: true,
    }
}

let characters = [
    {
        name: "Speedster",
        mMImage: "files/images/characters/justas.png",
        tauntSFX: ["files/sounds/sfx/characters/justas/taunt01.mp3"],
        jumpScareSFX: "files/sounds/sfx/characters/justas/jumpscare.mp3",
        path: 0,
        isProgressive: false,
        pathFind: {
            r04: {
                image: "files/images/characters/justas.png",
                pos: [50, 50]
            },
            b1: {
                image: "files/images/characters/justas.png",
                pos: [50, 30]
            },
            a1: {
                image: "files/images/characters/justas.png",
                pos: [50, 0]
            },
            a2: {
                image: "files/images/characters/justas.png",
                pos: [50, 35]
            },
            office: {
                image: "files/images/characters/justas.png",
                pos: "center"
            },
            innerOffice: {
                image: "files/images/characters/justas.png",
                pos: "left"
            }
        },
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
        tauntSFX: ["files/sounds/sfx/characters/kajus/taunt01.mp3", "files/sounds/sfx/characters/kajus/taunt02.mp3"],
        jumpScareSFX: "files/sounds/sfx/characters/kajus/jumpscare.mp3",
        path: 0,
        isProgressive: false,
        pathFind: {
            r01: {
                image: "files/images/characters/kajus.png",
                pos: [30, 25]
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
        },
        difficulty: {
            night1: 0,
            night2: 2,
            night3: 5,
            night4: 9,
            night5: 13,
            night6: 16,
            night7: 0,
        }
    },
    {
        name: "BusinessMan",
        mMImage: "files/images/characters/saulius.png",
        tauntSFX: ["files/sounds/sfx/characters/saulius/taunt01.mp3", "files/sounds/sfx/characters/saulius/taunt02.mp3"],
        jumpScareSFX: "files/sounds/sfx/characters/saulius/jumpscare.mp3",
        path: 0,
        isProgressive: false,
        pathFind: {
            r04: {
                image: "files/images/characters/saulius.png",
                pos: [15, 50]
            },
            b1: {
                image: "files/images/characters/saulius.png",
                pos: [10, 35]
            },
            b2: {
                image: "files/images/characters/saulius.png",
                pos: [25, 20]
            },
            r06: {
                image: "files/images/characters/saulius.png",
                pos: [30, 40]
            },
            innerOffice: {
                image: "files/images/characters/saulius.png",
                pos: "right"
            }
        },
        difficulty: {
            night1: 0,
            night2: 0,
            night3: 5,
            night4: 7,
            night5: 10,
            night6: 14,
            night7: 0,
        }
    },
    {
        name: "HelloWorld",
        mMImage: "files/images/characters/giedrius.png",
        tauntSFX: ["files/sounds/sfx/characters/giedrius/taunt01.mp3"],
        jumpScareSFX: "files/sounds/sfx/characters/giedrius/jumpscare.mp3",
        path: 0,
        isProgressive: true,
        pathFind: {
            r05_00: {
                image: "files/images/characters/giedrius.png",
                pos: [0, 50]
            },
            r05_01: {
                image: "files/images/characters/giedrius.png",
                pos: [25, 50]
            },
            r05_02: {
                image: "files/images/characters/giedrius.png",
                pos: [50, 50]
            },
            r05_03: {
                image: "files/images/characters/giedrius.png",
                pos: [75, 50]
            },
            innerOffice: {
                image: "files/images/characters/giedrius.png",
                pos: "right"
            }
        },
        difficulty: {
            night1: 0,
            night2: 0,
            night3: 0,
            night4: 3,
            night5: 7,
            night6: 10,
            night7: 0,
        }
    }
]

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

let pictures = []

let characterPic = []

let scenePic = [ "files/images/office/office_front.png", "files/images/camera/radar0.png", "files/images/camera/radar1.png"]

let cameras = {
    first: {
        a1: "Hallway A1",
        a2: "Hallway A2",
        b2: "Hallway B2",
        r01: "Room 101",
        r02: "Room 102",
        r05: "Room 105",
        r06: "Room 106"
    },
    second: {
        b1: "Hallway B1",
        r03: "Room 103",
        r04: "Room 104",
    },
}

for(let i = 0;i < characters.length; i++){
    characterPic.push(characters[i].mMImage)
}

for(let i = 0;i < Object.keys(cameras.first).length; i++){
    scenePic.push(`files/images/camera/${Object.keys(Object.values(cameras)[0])[i]}.png`)
}

for(let i = 0;i < Object.keys(cameras.second).length; i++){
    scenePic.push(`files/images/camera/${Object.keys(Object.values(cameras)[1])[i]}.png`)
}

let konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"]

const body = document.querySelector('body')
const tabName = document.querySelector('.tab-title')
const gamePlay = document.querySelector('main')
const copyRight = document.querySelector('footer')
const pauseDiv = document.querySelector('.pause-div')

let volumeControl = {
    masterVolume: {
        text: "Master Volume",
        value: 1
    },
    gameVolume: {
        text: "Game Volume",
        value: 1
    },
    characterVolume: {
        text: "Character Volume",
        value: 1
    },
    ambienceVolume: {
        text: "Ambience Volume",
        value: 1
    }
}

let soundEffects = {
    gameSounds: {
        click: new Audio("files/sounds/sfx/cam_change.mp3"),
        door: new Audio("files/sounds/sfx/door_close.mp3"),
        cameraFlip: new Audio("files/sounds/sfx/cam.mp3"),
        lightSFX: new Audio("files/sounds/sfx/lighthum.mp3"),
        powerOutageSFX: new Audio("files/sounds/sfx/poweroutage.mp3"),
        powerOutageDoorSFX: new Audio("files/sounds/sfx/disabledclick.mp3"),
        gameOver: new Audio("files/sounds/sfx/gameover.mp3"),
        SixAM: new Audio("files/sounds/sfx/6am.mp3"),
    },
    characterSounds: {
        jumpSFX: new Audio("files/sounds/sfx/cam_change.mp3"),
        goldenRobert: new Audio("files/sounds/sfx/goldenrobertscream.mp3"),
    },
    ambienceSounds: {
        mMTheme: new Audio("files/sounds/background/theme.mp3"),
        extTheme: new Audio("files/sounds/background/extras.mp3"),
        offAmbience: new Audio("files/sounds/background/officeAmbience.mp3"),
        off20Ambience: new Audio("files/sounds/background/office20mode.mp3"),
        endingMusic: new Audio("files/sounds/background/music.mp3")
    },
}

let gameSpeed = 1;
let gameTime = 0;
let power = 1000;
let powerUsage = 1;
let officePos = 50;
let currentNight = 0;
let secretCount = 0;
let picCount = 0;
let volume = 1;
let easterEgg = 2067;
let cameraFloor = 0;

let allAudio = []
let movementInterval = []
let movementTimeout = []

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
let powerOutage = false
let leftDoorClose = false
let rightDoorClose = false
let officeLight = false
let officeLightDelay = false

let timerInterval
let moveInterval
let powerInterval
let jumpScareTimeout
let phoneTimeout
let phoneTimeoutStart
let phoneTimeRemaining
let camTimeOut
let camEffect
let currentCam
let extraText
let jumpSFX
let callSFX

const doSoundPlay = (category, sound, type) => {
    let audio = soundEffects[category][sound]
    let master = volumeControl.masterVolume.value
    if(category == "gameSounds"){
        audio.volume = volumeControl.gameVolume.value * master
    }else if(category == "characterSounds"){
        audio.volume = volumeControl.characterVolume.value * master
    }else if(category == "ambienceSounds"){
        audio.volume = volumeControl.ambienceVolume.value * master
    }
    if(type == "play"){
        audio.play()
    }else if(type == "loadPlay"){
        audio.load()
        audio.play()
    }else if(type == "stop"){
        audio.currentTime = 0
        audio.pause()
    }else if(type == "pause"){
        audio.pause()
    }
}

const clearMain = () => {
    clearInterval(timerInterval)
    clearInterval(powerInterval)
    clearTimeout(jumpScareTimeout)
    clearTimeout(movementTimeout)
    for(let i = 0; i < Object.keys(soundEffects).length; i++){
        for(let e = 0; e < Object.keys(soundEffects[Object.keys(soundEffects)[i]]).length; e++){
            doSoundPlay(Object.keys(soundEffects)[i], Object.keys(soundEffects[Object.keys(soundEffects)[i]])[e], "stop")
        }
    }
    stopMoveTimeout()
    body.style.background = ``
    gamePlay.style.background = ``
    gamePlay.style.filter = ``
    gamePlay.style.backdropFilter = ``
    gamePlay.innerHTML = ``
    copyRight.innerHTML = ``
    for(let i = 0; i < characters.length; i++){
        characters[i].path = 0
    }
    if(callSFX != undefined){
        clearTimeout(phoneTimeout)
        callSFX = undefined
        phoneTimeout = undefined
        phoneTimeoutStart = undefined
        phoneTimeRemaining = undefined
    }
    if(powerOutage){
        powerOutage = false
    }
    gameSpeed = 1
    gameTime = 0
    power = 1000
    powerUsage = 1
    officePos = 50
    cameraFloor = 0
    leftDoorClose = false
    rightDoorClose = false
    cameraMO = false
    officeView = false
    currentCam = undefined
    jumpSFX = undefined
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
        gameData.night = 1
        newsPaperView = !newsPaperView
        doNightShow()
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
            </div>
        </div>`
    copyRight.innerHTML = `
        <p class="Name">Oskaras Venzlauskas GJSM23</p>`
    tabName.innerHTML = `Five Night's at KITM`

    for(let i = 0; i < Object.values(gameData.stars).length; i++){
        if(gameData.stars[`star${i + 1}`]){
            document.querySelector('.stars').innerHTML += `<div></div>`
        }
    }

    body.style.background = `url(files/images/camera/static.gif)`
    body.style.backgroundSize = `100% 100%`
    gamePlay.style.background = ``
    gamePlay.style.backdropFilter = `brightness(0.5)`
    doVolumeSlider(gamePlay)
    doMenuImg()
    doSoundPlay("ambienceSounds", "mMTheme", "play")

    if(gameData.night >= 1){
        document.querySelector('.MMSelector').innerHTML += `
        <p class="CTN text">Continue</p>`
    }
    if(gameData.nightSix){
        document.querySelector('.MMSelector').innerHTML += `
        <p class="night-six text">6th Night</p>`
    }
    if(gameData.extraMenu){
        document.querySelector('.MMSelector').innerHTML += `
        <p class="EXT text">Extra </p>`
    }


    document.querySelector('.MMSelector').addEventListener('click', (e) => {
        let classes = e.target.classList
        if(classes[0] == "NG"){
            newGame(0)
        }else if(classes[0] == "CTN"){
            doNightShow("continue")
        }else if(classes[0] == "night-six"){
            doNightShow("night-6")
        }else if(classes[0] == "EXT"){
            doExtra()
        }
    });

    document.querySelectorAll('.text').forEach(btn => {
        btn.addEventListener("mouseover", () => {
            doSoundPlay("gameSounds", "click", "play")
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
        document.querySelector(`.${character}`).style.backgroundPosition = `center top`
        document.querySelector(`.${character}`).style.backgroundSize = `150% 150%`
        document.querySelector(`.${character}`).style.filter = `brightness(${1 / (characters.length / zIndex)})`
        document.querySelector(`.${character}`).style.bottom = `${chrImgBottom}%`
        document.querySelector(`.${character}`).style.right = `${chrImgRight}%`
        document.querySelector(`.${character}`).style.zIndex = `${zIndex}`
        chrImgRight += 35 / zIndex
        chrImgBottom -= 10 / zIndex
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
        currentNight = gameData.night
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
        currentNight = gameData.night
        currentNight = Math.min(currentNight, 5)
    }
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
                <div class="door-button door-button-left"></div>
                <div class="door-button door-button-right"></div>
            </div>
            <div class="office-front"></div>
            <div class="office-front-calendar">
                <div class="calender-day"></div>
            </div>
        </div>
        <div class="move-divs">
            <div class="left"></div>
            <div class="right"></div>
        </div>
        <div class="pause-button"></div>
        <div class="light-div"></div>
        <div class="camera"></div>
        <div class="cam-hover"></div>
        <div class="cam-screen">
            <div class="screen">
                <div class="character-contain"></div>
            </div>
            <div class="screen-border"></div>
            <div class="static"></div>
            <div class="cam-change"></div>
            <div class="radar">
                <div class="radar-top">
                    <p class="current-cam-text"></p>
                    <div class="change-floor-button">Change Floor</div>
                </div>
                <div class="map"></div>
            </div>
        </div>`
    
    if(extras[0].cheats[0].enable){
        gameSpeed = 0.5
    }
    if(extras[0].cheats[1].enable){
        power = Infinity;
        document.querySelector('.power-number').innerHTML = `∞%`
    }
    document.querySelector('.calender-day').style.background = `url(files/images/office/calender/0${currentNight}.png)`
    document.querySelector('.calender-day').style.backgroundSize = `200% 100%`
    for(let i = 0; i < characters.length; i++){
        doMoveInterval(i)
    }
    changeCamFloor()
    doFlash("officeMove")
    doDoorClose(leftDoorClose, "door-left", "door-button-left")
    doDoorClose(rightDoorClose, "door-right", "door-button-right")
    doTwentyCheck()
    enableCamHover()
    doRTimer()
    changePos()
    changeCam(Object.keys(Object.values(cameras)[cameraFloor])[0])

    if(currentNight <= 5){
        document.querySelector('.office').innerHTML += `<div class="call-button">MUTE CALL</div>`
        doPhoneCall()

        document.querySelector('.call-button').addEventListener("click", () => {
            document.querySelector('.call-button').style.display = `none`
            clearTimeout(phoneTimeout)
            callSFX.pause()
            callSFX.currentTime = 0
            phoneTimeout = undefined
            phoneTimeoutStart = undefined
            phoneTimeRemaining = undefined
        });
    }
    if(twentyMode){
        doSoundPlay("ambienceSounds", "off20Ambience", "play")
    }else{
        doSoundPlay("ambienceSounds", "offAmbience", "play")
    }

    officeView = true
    cameraMO = true

    document.querySelector('.pause-button').addEventListener("click", () => {
        if(officeView){
            doPause()
        }
    });

    
    document.querySelector('.light-div').addEventListener("click", () => {
        if(officeView && !camSEnable && !pauseView && !officeLightDelay){
            doFlash()
        }
    });

    document.querySelector('.change-floor-button').addEventListener("click", () => {
        cameraFloor = 1 - cameraFloor
        changeCamFloor()
    });

    document.querySelector('.door-button-left').addEventListener("click", () => {
        leftDoorClose = !leftDoorClose
        doDoorClose(leftDoorClose, "door-left", "door-button-left")
    });

    document.querySelector('.door-button-right').addEventListener("click", () => {
        rightDoorClose = !rightDoorClose
        doDoorClose(rightDoorClose, "door-right", "door-button-right")
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
        if(!powerOutage){
            if(twentyMode){
                doSoundPlay("ambienceSounds", "off20Ambience", "pause")
            }else{
                doSoundPlay("ambienceSounds", "offAmbience", "pause")
            }
            if(officeLight){
                doSoundPlay("gameSounds", "lightSFX", "pause")
            }
            if(callSFX !== undefined){
                pausePhoneTimeout()
            }
        }else{
            doSoundPlay("gameSounds", "powerOutageSFX", "pause")
        }
        pauseDiv.innerHTML += `
            <div class="pause">
                <h1>Paused</h1>
                <p class="cont">CONTINUE</p><br>
                <p class="exit">EXIT</p>
            </div>`
        document.querySelector('.pause-button').style.display = `none`
        stopRT("Pause")
        doVolumeSlider(pauseDiv)

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
        for(let i = 0; i < characters.length; i++){
            doMoveInterval(i)
        }
        pauseDiv.innerHTML = ``
        document.querySelector('.pause-button').style.display = `block`
        if(!powerOutage){
            if(twentyMode){
                doSoundPlay("ambienceSounds", "off20Ambience", "play")
            }else{
                doSoundPlay("ambienceSounds", "offAmbience", "play")
            }
            if(officeLight){
                doSoundPlay("gameSounds", "lightSFX", "play")
            }
            if(callSFX !== undefined){
                resumePhoneTimeout()
            }
        }else{
            doSoundPlay("gameSounds", "powerOutageSFX", "play")
        }
    }
}

const do6am = () => {
    clearMain()
    doSoundPlay("gameSounds", "sixAM", "play")
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
            gameData.extraMenu = true
            doEnding(ending)
        }else if(currentNight == 5){
            let ending = 1
            gameData.nightSix = true
            doEnding(ending)
        }else if(currentNight <= 5){
            gameData.night++
            doMenu()
        }
    }, 10000);
}

const doGameOver = () => {
    clearMain()
    doSoundPlay("gameSounds", "gameOver", "play")
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
    soundEffects.gameSounds.gameOver.addEventListener("ended", () => {
        doMenu()
    });
}

const doEnding = (type) => {
    viewEnding = !viewEnding
    if(type == "skip"){
        doSoundPlay("ambienceSounds", "endingMusic", "stop")
        doMenu()
    }else{
        clearMain()
        for(let i = 0; i < type; i++){
            gameData.stars[`star${i + 1}`] = true
        }
        doSoundPlay("ambienceSounds", "endingMusic", "play")
        gamePlay.innerHTML = `<div class="ending"></div>`
        document.querySelector('.ending').style.background = `url(files/images/menu/ending/ending0${type}.png)`
        document.querySelector('.ending').style.backgroundSize = `100% 100%`
        tabName.innerHTML = `The End`
        soundEffects.ambienceSounds.endingMusic.addEventListener("ended", () => {
            doMenu()
        });
    }
}

//VOLUME

const doVolumeSlider = (div) => {
    div.innerHTML += `<div class="volume-slider"></div>`
    for(let i = 0; i < Object.keys(volumeControl).length; i++){
        document.querySelector(`.volume-slider`).innerHTML += `
            <div class="volume-main ${Object.keys(volumeControl)[i]}">
                    <p>${volumeControl[Object.keys(volumeControl)[i]].text}</p>
                    <input type="number" id="volume-input-${Object.keys(volumeControl)[i]}"/><p>%</p>
                    <p class="volume-button volume-add">+</p>
                    <p class="volume-button volume-remove">-</p>
            </div>`
    }

    for(let i = 0; i < Object.keys(volumeControl).length; i++){
        doVolumeChange("start", `${Object.keys(volumeControl)[i]}`, volumeControl[Object.keys(volumeControl)[i]].value)

        document.querySelector(`.${Object.keys(volumeControl)[i]}`).addEventListener("input", () => {
            doVolumeChange("typein", Object.keys(volumeControl)[i], volumeControl[Object.keys(volumeControl)[i]].value)
        });

        document.querySelectorAll(`.${Object.keys(volumeControl)[i]} .volume-button`).forEach(btn => {
            btn.addEventListener("click", () => {
                doVolumeChange(btn.textContent, Object.keys(volumeControl)[i], volumeControl[Object.keys(volumeControl)[i]].value)
            });
        });
    }
}

const doVolumeChange = (type, classVolume, value) => {
    let tempValue
    if(type == "start"){
        tempValue = value * 100
        tempValue = Number(Math.round(Math.min(100, Math.max(0, tempValue))))
        document.querySelector(`.${classVolume} #volume-input-${classVolume}`).value = tempValue
        return
    }
    if(type !== "typein"){
        tempValue = value * 100
        if(type == "-"){
            tempValue -= 1
        }else{
            tempValue += 1
        }
    }else{
        tempValue = document.querySelector(`.${classVolume} #volume-input-${classVolume}`).value
        tempValue = tempValue.replace(/\D/g, "");
    }
    tempValue = Number(Math.round(Math.min(100, Math.max(0, tempValue))))
    document.querySelector(`.${classVolume} #volume-input-${classVolume}`).value = tempValue
    volumeControl[classVolume].value = tempValue / 100
    doSoundPlay("gameSounds", "click", "play")
    if(classVolume !== "masterVolume"){
        for(let i = 0; i < Object.keys(soundEffects[`${classVolume.split('Volume')[0]}Sounds`]).length; i++){
            doSoundPlay(`${classVolume.split('Volume')[0]}Sounds`, Object.keys(soundEffects[`${classVolume.split('Volume')[0]}Sounds`])[i], "refresh")
        }
    }
}

//PHONE CALL

const doPhoneCall = () => {
    callSFX = new Audio(`files/sounds/phone/night0${currentNight}.mp3`)
    callSFX.volume = volume
    callSFX.addEventListener('loadedmetadata', () => {
        let callDuration = callSFX.duration * 1000
        phoneTimeRemaining = callDuration
        startPhoneTimeout()
    });
}

const startPhoneTimeout = () => {
    callSFX.play()
    timeoutStart = Date.now()
        phoneTimeout = setTimeout(() => {
        document.querySelector('.call-button').style.display = `none`
        callSFX = undefined
        phoneTimeout = undefined
        phoneTimeoutStart = undefined
        phoneTimeRemaining = undefined
    }, phoneTimeRemaining);
}

const pausePhoneTimeout = () => {
    callSFX.pause()
    clearTimeout(phoneTimeout);
    phoneTimeRemaining -= Date.now() - timeoutStart;
}

const resumePhoneTimeout = () => {
    startPhoneTimeout()
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
    if(officePos >= 30 && 70 >= officePos && !powerOutage){
        document.querySelector('.cam-hover').style.display = `block`
    }else{
        document.querySelector('.cam-hover').style.display = `none`
    }
    officePos = Math.min(100, Math.max(0, officePos));
    document.querySelector('.calender-day').style.backgroundPosition = `${officePos}%`
    document.querySelector('.office-front-calendar').style.backgroundPosition = `${officePos}%`
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
    if(!powerOutage){
        if(type){
            doPower("+")
            document.querySelector(`.${door}`).style.bottom = `17%`
            document.querySelector(`.${button}`).style.filter = `hue-rotate(90deg)`
            if(officeView){
                doSoundPlay("gameSounds", "door", "play")
            }
        }else{
            doPower()
            document.querySelector(`.${door}`).style.bottom = `78%`
            document.querySelector(`.${button}`).style.filter = ``
            if(officeView && !powerOutage){
                doSoundPlay("gameSounds", "door", "play")
            }else{
                if(leftDoorClose || rightDoorClose){
                    doSoundPlay("gameSounds", "door", "play")
                }
            }
        }
    }else{
        doSoundPlay("gameSounds", "powerOutageDoorSFX", "loadplay")
    }
}

const doJumpscare = (char) => {
    stopMoveTimeout()
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
        doSoundPlay("characterSounds", "jumpSFX", "play")
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
    if(!powerOutage){
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
        doSoundPlay("gameSounds", "cameraFlip", "play")
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
    document.querySelector('.cam-hover').addEventListener("mouseenter", () => {
        enableCams()
        camTabOpen = !camTabOpen
        document.querySelector('.cam-hover').style.opacity = `0%`
        cameraMO = !cameraMO
    });

    document.querySelector('.cam-hover').addEventListener("mouseleave", () => {
        document.querySelector('.cam-hover').style.opacity = `100%`
        cameraMO = !cameraMO
    });
}

const changeCamFloor = () => {
    document.querySelector('.map').innerHTML = ``
    currentCam = Object.keys(Object.values(cameras)[cameraFloor])[0]
    for(let i = 0;i < Object.keys(Object.values(cameras)[cameraFloor]).length; i++){
        document.querySelector('.map').innerHTML += `
                <div class="${Object.keys(Object.values(cameras)[cameraFloor])[`${i}`]} button">
                    <p>CAM</p>
                    <p>${Object.keys(Object.values(cameras)[cameraFloor])[`${i}`].toUpperCase()}</p>
                </div>`
    }
    document.querySelector('.map').style.background = `url(files/images/camera/radar${cameraFloor}.png)`
    document.querySelector('.map').style.backgroundSize = `100% 100%`
    changeCam(currentCam)
    document.querySelectorAll('.button').forEach(btn => {
        btn.addEventListener("click", event => {
            const camClass = event.currentTarget.classList[0]
            changeCam(camClass);
        });
    });
}

const changeCam = (cam) => {
    if(currentCam == undefined){
        currentCam = cam
        document.querySelector(`.${currentCam}`).classList.add("button-clicked")
    }else{
        if(camTabOpen){
            doSoundPlay("gameSounds", "click", "play")
        }
        document.querySelector(`.${currentCam}`).classList.remove("button-clicked")
        currentCam = cam
        document.querySelector(`.${currentCam}`).classList.add("button-clicked")
        document.querySelector(`.current-cam-text`).innerHTML = `${Object.values(cameras)[cameraFloor][`${currentCam}`]}`
    }
    document.querySelector('.cam-change').style.display = `block`
    camEffect = setTimeout(() => {
        document.querySelector('.cam-change').style.display = `none`
        document.querySelector('.screen').style.background = `url(files/images/camera/${cam}.png)`
        document.querySelector('.screen').style.backgroundSize = `100% 100%`
        animCamera()
    }, 50);
}

const doFlash = (type) => {
    doSoundPlay("gameSounds", "lightSFX", "pause")
    if(type == "officeMove"){
        document.querySelector('.office-back').style.filter = `brightness(0)`
        document.querySelector('.light-div').style.filter = ``
    }else{
        if(!powerOutage){
            officeLight = !officeLight
            if(officeLight){
                document.querySelector('.office-back').style.filter = `brightness(0.75)`
                document.querySelector('.light-div').style.filter = `hue-rotate(90deg)`
                doPower("+")
                doSoundPlay("gameSounds", "lightSFX", "play")
                soundEffects.gameSounds.lightSFX.loop = true
            }else{
                document.querySelector('.office-back').style.filter = `brightness(0)`
                document.querySelector('.light-div').style.filter = ``
                doPower()
            }
        }
    }
}

//ANIMATRONICS MOVE

const doMoveInterval = (num) => {
    const intervalId = setInterval(() => {
        let randomTime = Math.floor(Math.random() * (100 - 50)) + 50;
        let characterTime = characters[num].difficulty[`night${currentNight}`];
        let randomTimeout = Math.floor(Math.random() * (2500 - 250)) + 250;
        if (characterTime !== 0) {
            const timeoutDelay = Math.round(randomTimeout * (randomTime / characterTime));
            const timeoutId = setTimeout(() => {
                doAnimatronicMove(num)
            }, timeoutDelay);
            movementTimeout.push(timeoutId);
        }
    }, 5000);
    movementInterval.push(intervalId);
};

const stopMoveTimeout = () => {
    for(let i = 0; i < movementInterval.length; i++){
        clearInterval(movementInterval[i])
    }
    for(let i = 0; i < movementTimeout.length; i++){
        clearTimeout(movementTimeout[i])
    }
    movementInterval = []
    movementTimeout = []
}

const doAnimatronicMove = (num) => {
    let randomInt = Math.floor(Math.random() * 20) + 1;
    if(characters[num].difficulty[`night${currentNight}`] >= randomInt){
        doAnimPath(num)
    }
}

const doAnimPath = (num) => {
    if(characters[num].path >= Object.keys(characters[num].pathFind).length){

    }else if(characters[num].path + 1 >= Object.keys(characters[num].pathFind).length){
        if(Object.values(characters[num].pathFind)[characters[num].path].pos == "left" && !leftDoorClose){
            doJumpscare(characters[num])
        }else if(Object.values(characters[num].pathFind)[characters[num].path].pos == "right" && !rightDoorClose){
            doJumpscare(characters[num])
        }else{
            let randomTaunt = Math.floor(Math.random() * characters[num].tauntSFX.length);
            let audio = new Audio(`${characters[num].tauntSFX[randomTaunt]}`)
            characters[num].path = 0
            animOffice(num, "first")
            document.querySelector(`.${characters[num].name}-office`).remove()
            audio.volume = volume
            audio.play()
        }
    }else{
        let rng = Math.floor(Math.random() * 100) + 1;
        if(rng <= 15 && characters[num].path !== 0 && !characters[num].isProgressive){
            characters[num].path--
        }else{
            characters[num].path++
        }
        if(Object.keys(characters[num].pathFind)[characters[num].path] == currentCam || Object.keys(characters[num].pathFind)[characters[num].path + 1] == currentCam){
            changeCam(currentCam)
        }
    }
    let checkArray = !Array.isArray(Object.values(characters[num].pathFind)[characters[num].path].pos)
    let chrCM = Object.keys(characters[num].pathFind)
    if(characters[num].path >= chrCM.length - 2 && checkArray){
        if(checkArray){
            if(characters[num].isProgressive){
                if(chrCM[characters[num].path - 1].split('_')[0] == currentCam){
                    changeCam(currentCam)
                }
            }else{
                if(chrCM[characters[num].path - 1] == currentCam){
                    changeCam(currentCam)
                }
            }
            animOffice(num, "first")
        }
    }else{
        if(characters[num].isProgressive){
            if(chrCM[characters[num].path].split('_')[0] == currentCam || chrCM[characters[num].path - 1].split('_')[0] == currentCam){
                changeCam(currentCam)
            }
        }else{
            if(chrCM[characters[num].path] == currentCam || chrCM[characters[num].path - 1] == currentCam){
                changeCam(currentCam)
            }
        }
    }
}

const animCamera = () => {
    document.querySelector('.character-contain').innerHTML = ``
    for(let i = 0; i < characters.length; i++){
        if(characters[i].difficulty[`night${currentNight}`] !== 0){
            if(Object.keys(characters[i].pathFind)[characters[i].path] == currentCam){
                document.querySelector('.character-contain').innerHTML += `<div class="${characters[i].name}-character character"></div>`
                document.querySelector(`.${characters[i].name}-character`).style.background = `url(${characters[i].pathFind[currentCam].image})`
                document.querySelector(`.${characters[i].name}-character`).style.backgroundSize = `100% 100%`
                document.querySelector(`.${characters[i].name}-character`).style.left = `${characters[i].pathFind[currentCam].pos[0]}%`
                document.querySelector(`.${characters[i].name}-character`).style.top = `${characters[i].pathFind[currentCam].pos[1]}%`
            }else if(Object.keys(characters[i].pathFind)[characters[i].path].split('_')[0] == currentCam){
                document.querySelector('.character-contain').innerHTML += `<div class="${characters[i].name}-character character"></div>`
                document.querySelector(`.${characters[i].name}-character`).style.background = `url(${characters[i].pathFind[`${currentCam}_0${characters[i].path}`].image})`
                document.querySelector(`.${characters[i].name}-character`).style.backgroundSize = `100% 100%`
                document.querySelector(`.${characters[i].name}-character`).style.left = `${characters[i].pathFind[`${currentCam}_0${characters[i].path}`].pos[0]}%`
                document.querySelector(`.${characters[i].name}-character`).style.top = `${characters[i].pathFind[`${currentCam}_0${characters[i].path}`].pos[1]}%`
            }
        }
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
                doFlash("officeMove")
            }, 250)
    }
    if(characters[num].path >= Object.keys(characters[num].pathFind).length - 2 && characters[num].path != 0){
        let place = Object.keys(characters[num].pathFind)[characters[num].path]
        let checkArray = !Array.isArray(Object.values(characters[num].pathFind)[characters[num].path].pos)
        if(checkArray && type == "first" && document.querySelector(`.${characters[num].name}-office`) == null){
            document.querySelector(`.character-office`).innerHTML += `<div class="${characters[num].name}-office anim-office"></div>`
            document.querySelector(`.${characters[num].name}-office`).style.background = `url(${characters[num].pathFind[place].image})`
            document.querySelector(`.${characters[num].name}-office`).style.backgroundSize = `100% 100%`
        }
        if(characters[num].pathFind[place].pos == "center"){
            document.querySelector(`.${characters[num].name}-office`).style.left = `${officePos * -1 + 87}%`
            document.querySelector(`.${characters[num].name}-office`).style.bottom = `25%`
        }else if(characters[num].pathFind[place].pos == "left"){
            document.querySelector(`.${characters[num].name}-office`).style.left = `${officePos * -1 + 5}%`
            document.querySelector(`.${characters[num].name}-office`).style.bottom = `17%`
        }else if(characters[num].pathFind[place].pos == "right"){
            document.querySelector(`.${characters[num].name}-office`).style.left = `${officePos * -1 + 170}%`
            document.querySelector(`.${characters[num].name}-office`).style.bottom = `17%`
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
    stopMoveTimeout()
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
            if(!powerOutage){
                document.querySelector('.time').innerHTML = `${doTimerHour(gameTime)}:${doTimerSec(Math.floor(((gameTime * 6) % 360) / 6))} AM`
                tabName.innerHTML = `${doTimerHour(gameTime)}:${doTimerSec(Math.floor(((gameTime * 6) % 360) / 6))} AM`
            }
        }
    }, 1000 * gameSpeed);
}

//--POWER

const doPowerCount = () => {
    if(!powerOutage){
            powerInterval = setInterval(() => {
            if(power !== Infinity){
                document.querySelector('.power-number').innerHTML = `${Math.floor(power / 10)}%`
                power--
                if(power == 0){
                    doPowerOutage()
                    return
                }
            }else{
                document.querySelector('.power-number').innerHTML = `∞%`
            }
        }, (1000 / powerUsage) * gameSpeed);
        doPowerBar()
    }
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

const doPowerOutage = () => {
    if(camTabOpen && cameraMO){
        enableCams()
    }
    powerOutage = true
    leftDoorClose = false
    rightDoorClose = false
    gamePlay.style.filter = `brightness(0.1)`
    document.querySelector(".power").style.display = `none`
    document.querySelector(".cam-hover").style.display = `none`
    document.querySelector(".timer").style.display = `none`
    doDoorClose(leftDoorClose, "door-left", "door-button-left")
    doDoorClose(rightDoorClose, "door-right", "door-button-right")
    tabName.innerHTML = `0% Power`
    doFlash("officeMove")
    clearInterval(powerInterval)
    doSoundPlay("ambienceSounds", "offAmbience", "play")
    doSoundPlay("ambienceSounds", "off20Ambience", "play")
    doSoundPlay("gameSounds", "powerOutage", "play")
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
        document.querySelector('.nav-selector').innerHTML += `<p class="${extras[0].extraOp[i].class} text">${extras[0].extraOp[i].name}</p>`
    }

    gamePlay.style.background = `url(files/images/camera/static.gif)`
    gamePlay.style.backgroundSize = `100% 100%`

    doEXTOpt(characterPic, "Characters")
    changeEXTPic("early", pictures)
    doSoundPlay("ambienceSounds", "extTheme", "play")

    document.querySelectorAll('.text').forEach(btn => {
        btn.addEventListener("mouseover", () => {
            doSoundPlay("gameSounds", "click", "play")
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
        doSoundPlay("gameSounds", "click", "play")
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
        document.querySelector(`.${characters[i].name}-img`).style.backgroundSize = `150% 150%`
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

    characters.forEach(char => {
        document.querySelector(`.${char.name}-img`).addEventListener("click", () => {
            let randomTaunt = Math.floor(Math.random() * char.tauntSFX.length);
            let audio = new Audio(`${char.tauntSFX[randomTaunt]}`)
            audio.volume = volume
            audio.play()
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
        let eGNums = easterEgg.toString().split('')
        if(
            characters[0].difficulty.night7 == eGNums[0] &&
            characters[1].difficulty.night7 == eGNums[1] &&
            characters[2].difficulty.night7 == eGNums[2] &&
            characters[3].difficulty.night7 == eGNums[3]
        ){
            doGoldenRobertEG()
        }else{
            doNightShow("custom-night")
        }
    });
}

const changeCTNValue = (data, type) => {
    if(data.difficulty.night7 > Math.min(Math.max(data.difficulty.night7, 0), 20) || data.difficulty.night7 < Math.min(Math.max(data.difficulty.night7, 0), 20)){}else if(type == "early"){}else{
        doSoundPlay("gameSounds", "click", "play")
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

const doGoldenRobertEG = () => {
    clearMain()
    gamePlay.innerHTML = `<div class="golden-robert"></div>`
    doSoundPlay("characterSounds", "goldenRobert", "play")
    setTimeout(() => {
        doMenu()
    }, 3000);
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
    doSoundPlay("gameSounds", "click", "play")
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

document.addEventListener('keydown', function(event) {
    if(event.key == 'Escape' && officeView){
        doPause()
    }
    if(event.key == 'Enter' && viewEnding){
        doEnding("skip")
    }
    if(officeView){
        if(!pauseView){
            if(event.key == 'w' && officeView && !camSEnable && !officeLightDelay){
                doFlash()
            }else if(event.key == 'a' && officePos <= 30){
                leftDoorClose = !leftDoorClose
                doDoorClose(leftDoorClose, "door-left", "door-button-left")
            }else if(event.key == 'd' && officePos >= 70){
                rightDoorClose = !rightDoorClose
                doDoorClose(rightDoorClose, "door-right", "door-button-right")
            }
        }else{
            if(event.key == "-" || event.key == "=" || event.key == "+"){
                doVolumeChange(event.key)
            }
        }
    }
    konamiFunc(konamiCode, event.key)
})

doMenu()