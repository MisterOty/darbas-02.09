// Minigame Web (Point and click game)

const loadGame = (restart) => {
    const data = localStorage.getItem("gameData");
    if(data && !restart){
        return JSON.parse(data);
    }else{
        return{
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
    }
}

const saveGame = (data) => {
    localStorage.setItem("gameData", JSON.stringify(data));
}

let gameData = loadGame();

saveGame(gameData);

let konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"]

// const doMax = () => {
//     gameData = {
//         night: 5,
//         nightSix: true,
//         extraMenu: true,
//         stars: {
//             star1: true,
//             star2: true,
//             star3: true,
//             star4: true,
//         }
//     }
//     saveGame(gameData);
//     doMenu()
// }

let characters = [
    {
        name: "Direktorius",
        mMImage: "files/images/characters/direktorius/main.png",
        jumpScareSFX: "files/sounds/sfx/jumpscare.mp3",
        path: 0,
        moveInt: 5,
        isProgressive: false,
        pathFind: {
            r21: {
                image: "files/images/characters/direktorius/cameras/r21.png",
                pos: [25, 50]
            },
            b1: {
                image: "files/images/characters/direktorius/cameras/b1.png",
                pos: [50, 30]
            },
            a1: {
                image: "files/images/characters/direktorius/cameras/a1.png",
                pos: [15, 50]
            },
            r14: {
                image: "files/images/characters/direktorius/cameras/r14.png",
                pos: [25, 35]
            },
            a2: {
                image: "files/images/characters/direktorius/cameras/a2.png",
                pos: [50, 35]
            },
            office: {
                image: "files/images/characters/direktorius/main.png",
                pos: "center"
            },
            innerOffice: {
                image: "files/images/characters/direktorius/main.png",
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
        name: "Titas",
        mMImage: "files/images/characters/titas/main.png",
        jumpScareSFX: "files/sounds/sfx/jumpscare.mp3",
        path: 0,
        moveInt: 5,
        isProgressive: false,
        pathFind: {
            r24: {
                image: "files/images/characters/titas/cameras/r24.png",
                pos: [15, 35]
            },
            t1: {
                image: "files/images/characters/titas/cameras/t1.png",
                pos: [50, 30]
            },
            r11: {
                image: "files/images/characters/titas/cameras/r11.png",
                pos: [25, 20]
            },
            r12: {
                image: "files/images/characters/titas/cameras/r12.png",
                pos: [25, 20]
            },
            office: {
                image: "files/images/characters/titas/main.png",
                pos: "center"
            },
            innerOffice: {
                image: "files/images/characters/titas/main.png",
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
        name: "Mantas",
        mMImage: "files/images/characters/mantas/main.png",
        jumpScareSFX: "files/sounds/sfx/jumpscare.mp3",
        path: 0,
        moveInt: 5,
        isProgressive: false,
        pathFind: {
            r23: {
                image: "files/images/characters/mantas/cameras/r23.png",
                pos: [15, 50]
            },
            r22: {
                image: "files/images/characters/mantas/cameras/r22.png",
                pos: [20, 35]
            },
            q1: {
                image: "files/images/characters/mantas/cameras/q1.png",
                pos: [25, 20]
            },
            innerOffice: {
                image: "files/images/characters/mantas/main.png",
                pos: "left"
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
        name: "Aidas",
        mMImage: "files/images/characters/aidas/main.png",
        jumpScareSFX: "files/sounds/sfx/jumpscare.mp3",
        path: 0,
        moveInt: 5,
        isProgressive: true,
        pathFind: {
            r13_00: {
                image: "files/images/characters/aidas/cameras/r13_00.png",
                pos: [75, 50]
            },
            r13_01: {
                image: "files/images/characters/aidas/cameras/r13_01.png",
                pos: [50, 50]
            },
            r13_02: {
                image: "files/images/characters/aidas/cameras/r13_02.png",
                pos: [25, 50]
            },
            r13_03: {
                image: "files/images/characters/aidas/cameras/r13_03.png",
                pos: [0, 50]
            },
            innerOffice: {
                image: "files/images/characters/aidas/main.png",
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

let cameras = {
    first: {
        a1: "Hallway A1",
        a2: "Hallway A2",
        t1: "Toilet Hallway",
        q1: "Question Room",
        r11: "Room 101",
        r12: "Room 102",
        r13: "Room 103",
        r14: "Room 104"
    },
    second: {
        b1: "Hallway B1",
        r21: "Room 201",
        r22: "Room 202",
        r23: "Room 203",
        r24: "Room 204",
    },
}

const body = document.querySelector('body')
const tabName = document.querySelector('.tab-title')
const gamePlay = document.querySelector('main')
const copyRight = document.querySelector('footer')
const pauseDiv = document.querySelector('.pause-div')

let settingsMenu = [
    {
        name: "Gameplay",
        class: "CHR",
        gameplayControl: {
            reduceFL: {
                text: "Reduce Flashing Lights",
                value: false
            },
        }
    },
    {
        name: "Audio",
        class: "SCN",
        volumeControl: {
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
    },
    {
        name: "Keybinds",
        class: "KBNDS",
        keyBindControl: {
            pauseMenu: {
                name: "Open Pause Menu/Close Menu",
                bind: "Escape",
            },
            skipScene: {
                name: "Skip Ending Screen",
                bind: "Enter",
            },
            light: {
                name: "Turn On/Off Office Light",
                bind: "w",
            },
            leftDoor: {
                name: "Close/Open Left Door",
                bind: "a",
            },
            rightDoor: {
                name: "Close/Open Right Door",
                bind: "d",
            }
        }
    },
    {
        name: "Game Data",
        class: "GDT",
        dataCheck: 0,
        dataControl: {
            name: "Reset Data",
            text: ["Are You Sure?", "One more time"]
        }
    },
]

let extras = {
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
    }],
    extraPics: {
        char: {
            picCount: 0,
            pictures: []
        },
        scene: {
            picCount: 0,
            pictures: []
        }
    },
    cheats: [{
        text: "Faster Nights",
        class: "fstngt",
        enable: false
    },
    {
        text: "Unlimited Power",
        class: "unltpw",
        enable: false
    },
    {
        text: "No Power Box",
        class: "nopwbx",
        enable: false
    }]
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
        sixAM: new Audio("files/sounds/sfx/6am.mp3"),
        shortcircuit: new Audio("files/sounds/sfx/shortcircuit.mp3"),
        boxCharge: new Audio("files/sounds/sfx/boxCharge.mp3"),
    },
    characterSounds: {
        footsteps: new Audio("files/sounds/sfx/footsteps.mp3"),
        goldenRobert: new Audio("files/sounds/sfx/goldenrobertscream.mp3"),
        jumpSFX: new Audio(""),
        phoneCall: new Audio(""),
    },
    ambienceSounds: {
        mMTheme: new Audio("files/sounds/background/theme.mp3"),
        extTheme: new Audio("files/sounds/background/extras.mp3"),
        offAmbience: new Audio("files/sounds/background/officeAmbience.mp3"),
        off20Ambience: new Audio("files/sounds/background/office20mode.mp3"),
        endingMusic: new Audio("files/sounds/background/music.mp3")
    },
}

let images = {
    camera: [
        "files/images/camera/changecam.gif",
        "files/images/camera/radar0.png",
        "files/images/camera/radar1.png",
        "files/images/camera/static.gif",
        "files/images/camera/images/a1.png",
        "files/images/camera/images/a2.png",
        "files/images/camera/images/b1.png",
        "files/images/camera/images/q1.png",
        "files/images/camera/images/r11.png",
        "files/images/camera/images/r12.png",
        "files/images/camera/images/r13.png",
        "files/images/camera/images/r14.png",
        "files/images/camera/images/r15.png",
        "files/images/camera/images/r21.png",
        "files/images/camera/images/r22.png",
        "files/images/camera/images/r23.png",
        "files/images/camera/images/r24.png",
        "files/images/camera/images/t1.png"
    ],
    characters: [
        "files/images/characters/aidas/main.png",
        "files/images/characters/aidas/cameras/r13_00.png",
        "files/images/characters/aidas/cameras/r13_01.png",
        "files/images/characters/aidas/cameras/r13_02.png",
        "files/images/characters/aidas/cameras/r13_03.png",
        "files/images/characters/direktorius/main.png",
        "files/images/characters/direktorius/cameras/a1.png",
        "files/images/characters/direktorius/cameras/a2.png",
        "files/images/characters/direktorius/cameras/b1.png",
        "files/images/characters/direktorius/cameras/r14.png",
        "files/images/characters/direktorius/cameras/r21.png",
        "files/images/characters/mantas/main.png",
        "files/images/characters/mantas/cameras/q1.png",
        "files/images/characters/mantas/cameras/r22.png",
        "files/images/characters/mantas/cameras/r23.png",
        "files/images/characters/robert/main.png",
        "files/images/characters/robert/scare.png",
        "files/images/characters/titas/main.png",
        "files/images/characters/titas/cameras/r11.png",
        "files/images/characters/titas/cameras/r12.png",
         "files/images/characters/titas/cameras/r24.png",
          "files/images/characters/titas/cameras/t1.png",
    ],
    menu: [
        "files/images/menu/gameover.png",
        "files/images/menu/newspaper.png",
        "files/images/menu/star.png",
        "files/images/menu/ending/ending01.png",
        "files/images/menu/ending/ending02.png",
        "files/images/menu/ending/ending03.png",
        "files/images/menu/ending/ending04.png"
    ],
    office: [
        "files/images/office/arrow.png",
        "files/images/office/button.png",
        "files/images/office/calender.png",
        "files/images/office/camera.png",
        "files/images/office/door.png",
        "files/images/office/lightbutton.png",
        "files/images/office/office_back.png",
        "files/images/office/office_front.png",
        "files/images/office/pausebutton.png",
        "files/images/office/calender/01.png",
        "files/images/office/calender/02.png",
        "files/images/office/calender/03.png",
        "files/images/office/calender/04.png",
        "files/images/office/calender/05.png",
        "files/images/office/calender/06.png",
        "files/images/office/calender/07.png"
    ],
    misc: ["files/images/icon.png"]
}

let gameSpeed = 1;
let gameTime = 0;
let power = 600;
let powerUsage = 1;
let currentNight = 0;
let cameraFloor = 0;
let officePos = 50;
let secretCount = 0;
let picCount = 0;
let settingCount = 0;
let extraSelectCount = 0;
let extraCount = 0;
let easterEgg = 2067;
let boxWind = 360;
let progress = 0;
let progressLoad = 0;

let activeSounds = new Set();

let settingsView = false
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
let chargingBox = false
let holdingDown = false
let boxFlash = false

let intervalId
let timerInterval
let moveInterval
let powerInterval
let boxInterval
let chargeInterval
let jumpScareTimeout
let camTimeOut
let camEffect
let currentCam
let settingText
let extraText
let jumpSFX
let callSFX

const doSoundPlay = (category, sound, type, isLoop) => {
    let audioObject = settingsMenu.findIndex(item => item.name == "Audio");
    let audio = soundEffects[category][sound]
    let master = settingsMenu[audioObject].volumeControl.masterVolume.value
    if(category == "gameSounds"){
        audio.volume = settingsMenu[audioObject].volumeControl.gameVolume.value * master
    }else if(category == "characterSounds"){
        audio.volume = settingsMenu[audioObject].volumeControl.characterVolume.value * master
    }else if(category == "ambienceSounds"){
        audio.volume = settingsMenu[audioObject].volumeControl.ambienceVolume.value * master
    }
    if (type === "play") {
        audio.play().catch(() => {});
        activeSounds.add(audio);
    }
    if(type == "loadPlay"){
        audio.currentTime = 0;
        audio.play().catch(() => {});
    }
    if (type === "stop") {
        audio.pause();
        audio.currentTime = 0;
        activeSounds.delete(audio);
    }
    if (type === "pause") {
        audio.pause();
    }
    if(isLoop){
        audio.loop = true
    }
}

const clearMain = () => {
    saveGame(gameData);
    clearInterval(timerInterval)
    clearInterval(powerInterval)
    clearInterval(boxInterval)
    clearInterval(chargeInterval)
    clearTimeout(jumpScareTimeout)
    clearInterval(intervalId)
    for(let i = 0; i < Object.keys(soundEffects).length; i++){
        for(let e = 0; e < Object.keys(soundEffects[Object.keys(soundEffects)[i]]).length; e++){
            doSoundPlay(Object.keys(soundEffects)[i], Object.keys(soundEffects[Object.keys(soundEffects)[i]])[e], "stop")
        }
    }
    for(let i = 0; i < characters.length; i++){
        if(characters[i].moveInt !== 5){
            characters[i].moveInt = 5
        }
    }
    body.style.background = ``
    gamePlay.style.background = ``
    gamePlay.style.filter = ``
    gamePlay.style.backdropFilter = ``
    gamePlay.innerHTML = ``
    copyRight.innerHTML = ``
    for(let i = 0; i < characters.length; i++){
        characters[i].path = 0
    }
    if(powerOutage){
        powerOutage = false
    }
    if(soundEffects.characterSounds.jumpSFX !== new Audio("")){
        soundEffects.characterSounds.jumpSFX = new Audio("")
    }
    if(soundEffects.characterSounds.phoneCall !== new Audio("")){
        soundEffects.characterSounds.phoneCall = new Audio("")
    }
    gameSpeed = 1
    gameTime = 0
    power = 600
    powerUsage = 1
    officePos = 50
    cameraFloor = 0
    boxWind = 360
    settingsView = false
    cameraView = false
    officeView = false
    mouseOver = false
    cameraMO = false
    camTabOpen = false
    camSEnable = false
    lButEnable = false
    leftDoorClose = false
    rightDoorClose = false
    officeLight = false
    officeLightDelay = false
    chargingBox = false
    holdingDown = false
    boxFlash = false
    currentCam = undefined
    jumpSFX = undefined
    activeSounds = new Set()
}

const loadTextures = (type) => {
    for(let i = 0; i < Object.keys(images).length; i++){
        for(let e = 0; e < images[Object.keys(images)[i]].length; e++){
            if(type == "progressBar"){
                progress++
            }else{
                let img = new Image
                img.src = images[Object.keys(images)[i]][e]
                img.onload = function() {
                    doProgressBar()
                };
            }
        }
    }
}

const doProgressBar = () => {
    progressLoad++
    if(progressLoad == progress){
        doMenu()
    }else{
        document.querySelector(".warning").textContent = `Loading [`
        for(let i = 0; i < 10; i++){
            if(Math.floor(progressLoad / progress * 10) > i){
                document.querySelector(".warning").textContent += `O`
            }else{
                document.querySelector(".warning").textContent += `-`
            }
        }
        document.querySelector(".warning").textContent += `] (${Math.round((progressLoad / progress) * 100)}%)`
    }
}

//CHANGE SCENE

const newGame = (choose) => {   
    if(choose == 0){
        newsPaperView = !newsPaperView
        gamePlay.innerHTML +=`
        <div class="newspaper"></div>`
        setTimeout(() => {
            document.querySelector(".newspaper").classList.add("visible")
        }, 0);
    }else{
        gameData.night = 1
        newsPaperView = !newsPaperView
        doNightShow()
    }
    document.addEventListener("keydown", function(event) {
        if(event.key = "String" && newsPaperView){
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
        </div>
        <div class="settings-button">Settings</div>`
    copyRight.innerHTML = `
        <p class="Name">Oskaras Venzlauskas GJSM23</p>`
    tabName.innerHTML = `Five Night's at KITM`

    for(let i = 0; i < Object.values(gameData.stars).length; i++){
        if(gameData.stars[`star${i + 1}`]){
            document.querySelector(".stars").innerHTML += `<div></div>`
        }
    }

    body.style.background = `url(files/images/camera/static.gif)`
    body.style.backgroundSize = `100% 100%`
    gamePlay.style.background = ``
    gamePlay.style.backdropFilter = `brightness(0.5)`
    doMenuImg()
    doSoundPlay("ambienceSounds", "mMTheme", "play", true)

    if(gameData.night >= 1){
        document.querySelector(".MMSelector").innerHTML += `
        <p class="CTN text">Continue</p>`
    }
    if(gameData.nightSix){
        document.querySelector(".MMSelector").innerHTML += `
        <p class="night-six text">6th Night</p>`
    }
    if(gameData.extraMenu){
        document.querySelector(".MMSelector").innerHTML += `
        <p class="EXT text">Extra </p>`
    }


    document.querySelector(".MMSelector").addEventListener("click", (e) => {
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

    document.querySelector(".settings-button").addEventListener("click", () => {
        doSettings()
    });

    document.querySelectorAll(".text").forEach(btn => {
        btn.addEventListener("mouseover", () => {
            doSoundPlay("gameSounds", "click", "loadPlay")
        });
    });
}

const doMenuImg = () => {
    let chrImgRight = 0
    let chrImgBottom = 0
    let zIndex = characters.length
    for(let i = 0; i < characters.length; i++){
        if(gameData.night > i + 1){
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
            chrImgBottom -= 25 / zIndex
            zIndex -= 1
        }
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
    for(let i = 0; i < extras.cheats.length; i++){
        if(!extras.cheats[i].enable){
            cheatCheck++
        }
    }
    if(twentyModeCheck == characters.length && cheatCheck == extras.cheats.length){
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
        <div class="robert"></div>
        <div class="timer">
            <h3 class="night">Night ${currentNight}</h3>
            <p class="time">${doTimerHour(gameTime)}:${doTimerSec(Math.floor(((gameTime * 6) % 360) / 6))} AM</p>
        </div>
        <p class="power-number-lost"></p>
        <div class="power">
            <div class="power-text">
                <p>Power left:</p>
                <p class="power-number">${Math.floor(power / 6)}%</p>
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
            <div class="music-box">
                <div class="circle"></div>
                <div class="music-button">Hold to Maintain Power in building</div>
            </div>
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
    
    if(extras.cheats[0].enable){
        gameSpeed = 0.5
    }
    if(extras.cheats[1].enable){
        power = Infinity;
        document.querySelector(".power-number").innerHTML = `∞%`
    }
    document.querySelector(".calender-day").style.background = `url(files/images/office/calender/0${currentNight}.png)`
    document.querySelector(".calender-day").style.backgroundSize = `200% 100%`
    doMoveInterval()
    changeCamFloor()
    doFlash("officeMove")
    doDoorClose(leftDoorClose, "door-left", "door-button-left")
    doDoorClose(rightDoorClose, "door-right", "door-button-right")
    doTwentyCheck()
    enableCamHover()
    doRTimer()
    changePos()
    changeCam(Object.keys(Object.values(cameras)[cameraFloor])[0])
    doBox()

    // if(currentNight <= 5){
    //     document.querySelector(".office").innerHTML += `<div class="call-button">MUTE CALL</div>`
    //     soundEffects.characterSounds.phoneCall = new Audio(`files/sounds/phone/night0${currentNight}.mp3`)
    //     doSoundPlay("characterSounds", "phoneCall", "play")

    //     soundEffects.characterSounds.phoneCall.addEventListener("ended", () => {
    //         document.querySelector(".call-button").style.display = `none`
    //         soundEffects.characterSounds.phoneCall = new Audio("")
    //     });

    //     document.querySelector(".call-button").addEventListener("click", () => {
    //         document.querySelector(".call-button").style.display = `none`
    //         doSoundPlay("characterSounds", "phoneCall", "stop")
    //         soundEffects.characterSounds.phoneCall = new Audio("")
    //     });
    // }
    if(twentyMode){
        doSoundPlay("ambienceSounds", "off20Ambience", "play", true)
    }else{
        doSoundPlay("ambienceSounds", "offAmbience", "play", true)
    }

    officeView = true
    cameraMO = true

    document.querySelector(".pause-button").addEventListener("click", () => {
        if(officeView){
            doPause()
        }
    });

    
    document.querySelector(".light-div").addEventListener("click", () => {
        if(officeView && !camSEnable && !pauseView && !officeLightDelay){
            doFlash()
        }
    });

    document.querySelector(".change-floor-button").addEventListener("click", () => {
        cameraFloor = 1 - cameraFloor
        changeCamFloor()
    });

    document.querySelector(".door-button-left").addEventListener("click", () => {
        if(!powerOutage){
            leftDoorClose = !leftDoorClose
        }
        doDoorClose(leftDoorClose, "door-left", "door-button-left")
    });

    document.querySelector(".door-button-right").addEventListener("click", () => {
        if(!powerOutage){
            rightDoorClose = !rightDoorClose
        }
        doDoorClose(rightDoorClose, "door-right", "door-button-right")
    });

    document.querySelector(".left").addEventListener("mouseenter", event => {
        mouseOver = true
        changePosLeft()
    });

    document.querySelector(".left").addEventListener("mouseleave", event => {
        mouseOver = false
    });

    document.querySelector(".right").addEventListener("mouseenter", event => {
        mouseOver = true
        changePosRight()
    });

    document.querySelector(".right").addEventListener("mouseleave", event => {
        mouseOver = false
    });
}

const doBox = () => {
    if(!extras.cheats[2].enable){
        chargeInterval = setInterval(() => {
            if(chargingBox && holdingDown){
                boxWind += Math.round(10 / (Math.min(Math.max(5, 1), 5) + 1) * 9)
                doSoundPlay("gameSounds", "boxCharge", "play")
                doBoxAlert()
            }
        }, 250);
        boxInterval = setInterval(() => {
            if(!chargingBox || !holdingDown){
                boxWind -= Math.round(3 * (Math.min(Math.max(currentNight, 1), 5)))
            }
            if(boxWind > 360) {
                boxWind = 360;
            }
            if(boxWind <= 0){
                let powerLoss = Math.floor(Math.random() * (300 - 100 + 1)) + 100
                power -= powerLoss
                doSoundPlay("gameSounds", "shortcircuit", "play")
                document.querySelector('.power-number-lost').style.filter = `opacity(1)`
                document.querySelector('.power-number-lost').style.bottom = `8.4%`
                document.querySelector('.power-number-lost').style.opacity = `0%`
                document.querySelector('.power-number-lost').textContent = `-${Math.floor(powerLoss / 6)}%`
                document.querySelector(".power-number").innerHTML = `${Math.floor(power / 6)}%`
                changeCam(currentCam)
                setTimeout(() => {
                    document.querySelector('.power-number-lost').style.filter = `opacity(0)`
                    document.querySelector('.power-number-lost').style.bottom = `6.4%`
                    document.querySelector('.power-number-lost').style.opacity = `100%`
                }, 5000)
                if(power !== 0){
                    if(!settingsMenu[0].gameplayControl.reduceFL.value){
                        if(power >= 2){
                            for(let i = 0; i <= 50; i++){
                                if(i < 50){
                                    setTimeout(() => {
                                        gamePlay.style.filter = `brightness(${(Math.floor(Math.random() * 10) + 1) * 0.1})`
                                    }, 10 * i)
                                }else{
                                    setTimeout(() => {
                                        gamePlay.style.filter = ``
                                    }, 10 * i)
                                }
                            }
                        }
                    }else{
                        gamePlay.style.filter = `brightness(${(Math.floor(Math.random() * 10) + 1) * 0.1})`
                        setTimeout(() => {
                                gamePlay.style.filter = ``
                            }, 500)
                    }
                    boxWind = 360
                }else{
                    clearInterval(chargeInterval)
                    clearInterval(boxInterval)
                }
            }
            doBoxAlert()
        }, 1000)
        if(!officeView){
            document.querySelector('.music-button').addEventListener("mousedown", () => {
                if(camTabOpen){
                    holdingDown = true
                }
            })

            document.querySelector('.music-button').addEventListener("mouseenter", () => {
                if(camTabOpen){
                    chargingBox = true
                }
            })

            document.querySelector('.music-button').addEventListener("mouseup", () => {
                holdingDown = false
            })

            document.querySelector('.music-button').addEventListener("mouseleave", () => {
                holdingDown = false
            })

            document.querySelector('.music-button').addEventListener("mouseleave", () => {
                chargingBox = false
            })
        }
    }
}

const doBoxAlert = () => {
    if(boxWind <= 45 && !boxFlash){
        boxFlash = !boxFlash
        if(boxFlash){
            if(cameraFloor == 0){
                document.querySelector('.change-floor-button').style.border = `0.2vmax solid red`
            }
            if(currentCam !== `r22` && camSEnable){
                document.querySelector('.r22').style.border = `0.2vmax solid red`
            }
            if(!camSEnable){
                document.querySelector('.cam-hover').style.filter = `opacity(0.5) saturate(2) brightness(1)`
            }
            if(currentCam == `r22` && camSEnable){
                document.querySelector('.music-button').style.border = `0.25vmax solid rgb(255, 0, 0)`
                document.querySelector('.circle').style.background = `conic-gradient(hsl(0, 100%, ${boxWind}%) 0deg ${boxWind}deg, rgba(255, 255, 255, 0) 0deg 360deg)`;
            }
        }
    }else{
        if(boxFlash){
            boxFlash = !boxFlash
            document.querySelector('.change-floor-button').style.border = `0.2vmax solid white`
            document.querySelector('.cam-hover').style.filter = `opacity(0.5) saturate(0) brightness(5)`
            document.querySelector('.r22').style.border = `0.2vmax solid white`
            document.querySelector('.music-button').style.border = `0.25vmax solid rgb(0, 125, 0)`
        }
        document.querySelector('.circle').style.background = `conic-gradient(rgba(255, 255, 255, 1) 0deg ${boxWind}deg, rgba(255, 255, 255, 0) 0deg 360deg)`;
    }
}

const doPause = (type) => {
    pauseView = !pauseView
    doMoveInterval()
    if(pauseView){
        holdingDown = false
        chargingBox = false
        if(!powerOutage){
            if(twentyMode){
                doSoundPlay("ambienceSounds", "off20Ambience", "pause", true)
            }else{
                doSoundPlay("ambienceSounds", "offAmbience", "pause", true)
            }
            if(officeLight){
                doSoundPlay("gameSounds", "lightSFX", "pause", true)
            }
            if(currentNight <= 5){
                doSoundPlay("characterSounds", "phoneCall", "pause")
            }
        }else{
            doSoundPlay("gameSounds", "powerOutageSFX", "pause")
        }
        pauseDiv.innerHTML += `
            <div class="pause">
                <h1>Paused</h1>
                <p class="cont text">Continue</p><br>
                <p class="sett text">Settings</p><br>
                <p class="exit text">Exit</p>
            </div>`
        document.querySelector(".pause-button").style.display = `none`
        stopRT("Pause")

        document.querySelector(".cont").addEventListener("click", () => {
            doPause()
        });

        document.querySelector(".sett").addEventListener("click", () => {
            doSettings()
        });

        document.querySelector(".exit").addEventListener("click", () => {
            doMenu()
            doPause("menu")
        });
    }else if(type == "menu"){
        pauseDiv.innerHTML = ``
    }else{
        doRTimer()
        doPowerCount()
        doBox()
        pauseDiv.innerHTML = ``
        document.querySelector(".pause-button").style.display = `block`
        if(!powerOutage){
            if(twentyMode){
                doSoundPlay("ambienceSounds", "off20Ambience", "play", true)
            }else{
                doSoundPlay("ambienceSounds", "offAmbience", "play", true)
            }
            if(officeLight){
                doSoundPlay("gameSounds", "lightSFX", "play", true)
            }
            if(currentNight <= 5){
                doSoundPlay("characterSounds", "phoneCall", "play")
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
        document.querySelector(".timeText").innerHTML = ``
    }, 900);
    setTimeout(() => {
        document.querySelector(".timeText").innerHTML = `5:59 AM`
    }, 1850);
    setTimeout(() => {
        document.querySelector(".timeText").innerHTML = ``
    }, 2800);
    setTimeout(() => {
        document.querySelector(".timeText").innerHTML = `6:00 AM`
        tabName.innerHTML = `6:00 AM`
    }, 4500);
    setTimeout(() => {
        document.querySelector(".timeText").style.transform = `scale(2)`
    }, 5400);
    setTimeout(() => {
        document.querySelector(".timeText").style.transform = `scale(3)`
    }, 6300);
    setTimeout(() => {
        switch(currentNight){
            case 7:
                if(twentyMode){
                    doEnding(4)
                }else{
                    doEnding(3)
                }
                break
            case 6:
                gameData.extraMenu = true
                doEnding(2)
                break
            case 5:
                gameData.nightSix = true
                doEnding(1)
                break
            default:
                gameData.night++
                doMenu()
                break
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
        for(let i = 1; i <= type; i++){
            gameData.stars[`star${i}`] = true
        }
        doSoundPlay("ambienceSounds", "endingMusic", "play")
        gamePlay.innerHTML = `<div class="ending"></div>`
        document.querySelector(".ending").style.background = `url(files/images/menu/ending/ending0${type}.png)`
        document.querySelector(".ending").style.backgroundSize = `100% 100%`
        tabName.innerHTML = `The End`
        soundEffects.ambienceSounds.endingMusic.addEventListener("ended", () => {
            doMenu()
        });
    }
}

//SETTINGS

const doSettings = () => {
    if(!settingsView){
        settingsMenu.find(section => section.name == `Game Data`).dataCheck = 0
        settingsView = !settingsView
        document.querySelector(".settings").style.display = `flex`
        document.querySelector(".settings").innerHTML = `
            <div class="settings-text">
                <div class="settings-selector"></div>
            </div>
            <div class="settings-container"></div>`

        for(let i = 0; i <= settingsMenu.length; i++){
            if(i !== settingsMenu.length){
                document.querySelector(".settings-selector").innerHTML += `<p class="${settingsMenu[i].class} text">${settingsMenu[i].name}</p>`
            }else{
                document.querySelector(".settings-selector").innerHTML += `<p class="Exit text">Exit</p>`
            }
        }

        for(let i = 0; i < settingsMenu.length; i++){
            settingText = settingsMenu[i].name
            switch(i){
                case 0:
                    doGPSChange()
                    break
                case 1:
                    doVolumeSlider()
                    break
                case 2:
                    doKeybinds()
                    break
                case 3:
                    doGameData()
                    break
            }
        }

        doSettingSelect(settingCount, true)

        document.querySelectorAll(".text").forEach(btn => {
            btn.addEventListener("mouseover", () => {
                doSoundPlay("gameSounds", "click", "loadPlay")
            });
        });

        window.addEventListener("wheel", doSetScrollFunc);

        document.querySelector(".settings-selector").addEventListener("mouseup", (event) => {
            let children = document.querySelector(".settings-selector").children
            let number = Array.from(children).indexOf(event.target)
            doSettingSelect(number)
        });
    }else{
        settingsView = !settingsView
        document.querySelector(".settings").innerHTML = ``
        document.querySelector(".settings").style.display = `none`
    }
}

const doSetScrollFunc = (event) => {
    let container = document.querySelector(".settings-container");
    let height = container.scrollHeight;
    let pos = container.scrollTop;
    let hCalc = height / extras.extraOp.length - 1;
    let currentEvent = Math.floor(pos / hCalc);
    let cEFwrd = Math.floor((pos + hCalc / 1.25) / hCalc);
    if(currentEvent < cEFwrd && event.deltaY < 0){
        doSettingSelect(cEFwrd - 1)
    }else if(currentEvent < cEFwrd && event.deltaY > 0){
        doSettingSelect(cEFwrd)
    }
}

const doSettingSelect = (num, isFirst) => {
    settingCount = Math.max(0, Math.min(settingCount, settingsMenu.length - 1));
    if(extras.extraOp.length > num){
        let child = Array.from(document.querySelector(".settings-selector").children)
        let classFind = Array.from(document.querySelector(".settings-container").children)[num].classList[1]
        for(let i = 0; i < extras.extraOp.length; i++){
            if(child[i].classList.contains("enabled")){
                child[i].classList.toggle("enabled")
                child[i].classList.toggle("text")
            }
        }
        settingCount = num
        child[num].classList.toggle("enabled")
        child[num].classList.toggle("text")
        tabName.innerHTML = Object.values(settingsMenu)[num].name
        if(!isFirst && isFirst !== "scroll"){
            document.querySelector(`.${classFind}`).scrollIntoView({
                behavior: 'smooth'
            });
        }else if(isFirst && isFirst !== "scroll"){
            document.querySelector(`.${classFind}`).scrollIntoView({});
        }
    }else{
        doSettings()
        tabName.innerHTML = `Five Night's at KITM`
        window.removeEventListener("wheel", doSetScrollFunc);
    }
}

const doVolumeSlider = () => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("settings-show", `doVolumeSlider`)
    document.querySelector(".settings-container").appendChild(newDiv)
    let section = settingsMenu.find(section => section.name == `${settingText}`);

    document.querySelector(`.doVolumeSlider`).innerHTML += `<h1>${settingText}</h1>`
    document.querySelector(`.doVolumeSlider`).innerHTML += `<div class="volume-slider-master"></div>`
    document.querySelector(`.volume-slider-master`).innerHTML += `
        <div class="volume-main ${Object.keys(section.volumeControl)[0]}">
                <p>${section.volumeControl[Object.keys(section.volumeControl)[0]].text}</p>
                <input type="number" id="volume-input-${Object.keys(section.volumeControl)[0]}" min="0"/><p>%</p>
                <p class="volume-button volume-add">+</p>
                <p class="volume-button volume-remove">-</p>
        </div>`
    document.querySelector(`.doVolumeSlider`).innerHTML += `<div class="volume-slider"></div>`
    for(let i = 1; i < Object.keys(section.volumeControl).length; i++){
        document.querySelector(`.volume-slider`).innerHTML += `
            <div class="volume-main ${Object.keys(section.volumeControl)[i]}">
                    <p>${section.volumeControl[Object.keys(section.volumeControl)[i]].text}</p>
                    <input type="number" id="volume-input-${Object.keys(section.volumeControl)[i]}" min="0"/><p>%</p>
                    <p class="volume-button volume-add">+</p>
                    <p class="volume-button volume-remove">-</p>
            </div>`
    }

    for(let i = 0; i < Object.keys(section.volumeControl).length; i++){
        doVolumeChange("start", `${Object.keys(section.volumeControl)[i]}`, section.volumeControl[Object.keys(section.volumeControl)[i]].value)

        document.querySelector(`.${Object.keys(section.volumeControl)[i]}`).addEventListener("input", () => {
            doVolumeChange("typein", Object.keys(section.volumeControl)[i], section.volumeControl[Object.keys(section.volumeControl)[i]].value)
        });

        document.querySelectorAll(`.${Object.keys(section.volumeControl)[i]} .volume-button`).forEach(btn => {
            btn.addEventListener("click", () => {
                doVolumeChange(btn.textContent, Object.keys(section.volumeControl)[i], section.volumeControl[Object.keys(section.volumeControl)[i]].value)
            });
        });
    }
}

const doVolumeChange = (type, classVolume, value) => {
    let tempValue
    let section = settingsMenu.find(section => section.name == `Audio`);
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
    section.volumeControl[classVolume].value = tempValue / 100
    doSoundPlay("gameSounds", "click", "loadPlay")
    if(classVolume !== "masterVolume"){
        for(let i = 0; i < Object.keys(soundEffects[`${classVolume.split("Volume")[0]}Sounds`]).length; i++){
            doSoundPlay(`${classVolume.split("Volume")[0]}Sounds`, Object.keys(soundEffects[`${classVolume.split("Volume")[0]}Sounds`])[i], "refresh")
        }
    }else{
        for(let i = 0; i < Object.keys(soundEffects).length; i++){
            for(let e = 0; e < Object.keys(soundEffects[Object.keys(soundEffects)[i]]).length; e++){
                doSoundPlay(Object.keys(soundEffects)[i], Object.keys(soundEffects[Object.keys(soundEffects)[i]])[e], "refresh")
            }
        }
    }
}

const doGPSChange = () => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("settings-show", `set-${settingText}`)
    document.querySelector(".settings-container").appendChild(newDiv)
    let section = settingsMenu.find(section => section.name == `${settingText}`);

    document.querySelector(`.set-${settingText}`).innerHTML += `<h1>${settingText}</h1>`
    document.querySelector(`.set-${settingText}`).innerHTML += `<div class="gpSettings-master"></div>`
    for(let i = 0; i < Object.keys(section.gameplayControl).length; i++){
        document.querySelector(`.gpSettings-master`).innerHTML += `
            <div class="gpSetting ${Object.keys(section.gameplayControl)[i]}">
                    <p>${section.gameplayControl[Object.keys(section.gameplayControl)[i]].text}</p><div class="switch"></div>
            </div>`
        if(section.gameplayControl[Object.keys(section.gameplayControl)[i]].value){
            document.querySelector(`.${Object.keys(section.gameplayControl)[i]} .switch`).classList.add("enabled")
        }
    }
    document.querySelectorAll(`.gpSettings-master .gpSetting`).forEach(btn => {
        btn.addEventListener("click", (event) => {
            let classDiv = event.currentTarget.classList[1]
            section.gameplayControl[classDiv].value = !section.gameplayControl[classDiv].value
            document.querySelector(`.${classDiv} .switch`).classList.toggle("enabled")
            doSoundPlay("gameSounds", "click", "loadPlay")
        });
    });
}

const doKeybinds = () => {  
    let newDiv = document.createElement("div");
    newDiv.classList.add("settings-show", `doKeybinds`)
    document.querySelector(".settings-container").appendChild(newDiv)
    let section = settingsMenu.find(section => section.name == `${settingText}`);

    document.querySelector(`.doKeybinds`).innerHTML += `<h1>${settingText}</h1>`
    document.querySelector(`.doKeybinds`).innerHTML += `<div class="gpSettings-master master-doKeybinds"></div>`
    for(let i = 0; i < Object.keys(section.keyBindControl).length; i++){
        document.querySelector(`.master-doKeybinds`).innerHTML += `<div class="keyBind"><p>${section.keyBindControl[Object.keys(section.keyBindControl)[i]].name}:</p><p class="keyBind-highlight">${section.keyBindControl[Object.keys(section.keyBindControl)[i]].bind}</p></div>`
    }
}

const doGameData = () => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("settings-show", `doGameData`)
    document.querySelector(".settings-container").appendChild(newDiv)
    let section = settingsMenu.find(section => section.name == `${settingText}`);
    
    document.querySelector(`.doGameData`).innerHTML += `<h1>${settingText}</h1>`
    document.querySelector(`.doGameData`).innerHTML += `<div class="gpSettings-master master-doGameData"></div>`
    document.querySelector(`.master-doGameData`).innerHTML += `<div class="${section.class}-reset"><p>>>${section.dataControl.name}<<</p></div>`

    document.querySelector(`.${section.class}-reset`).addEventListener("click", () => {
        if(section.dataCheck == section.dataControl.text.length){
            section.dataCheck = 0
            gameData = loadGame(true);
            document.querySelector(`.${section.class}-reset`).innerHTML = `<p>>>${section.dataControl.name}<<</p>`
            doSettings()
            doMenu()
        }else{
            document.querySelector(`.${section.class}-reset`).innerHTML = `<p>${section.dataControl.text[section.dataCheck]}</p>`
            section.dataCheck++
        }
    });
}

//OFFICE FUNCTIONS

const changePosLeft = () => {
    if(mouseOver){
        officePos--
        changePos()
        requestAnimationFrame(changePosLeft)
    }
}

const changePosRight = () => {
    if(mouseOver){
        officePos++
        changePos()
        requestAnimationFrame(changePosRight)
    }
}

const changePos = () => {
    if(officePos >= 30 && 70 >= officePos && !powerOutage){
        document.querySelector(".cam-hover").style.display = `block`
    }else if(document.querySelector(".cam-hover").style.display = `block`){
        document.querySelector(".cam-hover").style.display = `none`
    }
    officePos = Math.min(100, Math.max(0, officePos));
    document.querySelector(".calender-day").style.backgroundPosition = `${officePos}%`
    document.querySelector(".office-front-calendar").style.backgroundPosition = `${officePos}%`
    document.querySelector(".office-front").style.backgroundPosition = `${officePos}%`
    if(officeLight){
        document.querySelector(".office-back").style.backgroundPosition = `${officePos}%`
    }
    for(let i = 0; i < characters.length; i++){
        animOffice(i)
    }
    doorPos()
}

const doorPos = () => {
    document.querySelector(`.door-left`).style.left = `${officePos * -1 + 4}%`
    document.querySelector(`.door-right`).style.left = `${officePos * -1 + 165}%`
    document.querySelector(`.door-button-left`).style.left = `${officePos * -1 + 33}%`
    document.querySelector(`.door-button-right`).style.left = `${officePos * -1 + 161}%`
}

const doDoorClose = (type, door, button) => {
    if(!powerOutage){
        if(type){
            doPower("+")
            document.querySelector(`.${door}`).style.bottom = `17%`
            document.querySelector(`.${button}`).style.filter = `hue-rotate(90deg)`
        }else{
            doPower()
            document.querySelector(`.${door}`).style.bottom = `78%`
            document.querySelector(`.${button}`).style.filter = ``
        }
        if(officeView){
            doSoundPlay("gameSounds", "door", "loadPlay")
        }
    }else{
        doSoundPlay("gameSounds", "powerOutageDoorSFX", "loadPlay")
    }
}

const doJumpscare = (char) => {
    let time = 50
    soundEffects.characterSounds.jumpSFX = new Audio(`${char.jumpScareSFX}`)
    if(camSEnable){
        enableCams()
        camTabOpen = !camTabOpen
        cameraMO = !cameraMO
        document.querySelector(".cam-hover").style.opacity = `0%`
    }
    officeView = false
    gamePlay.innerHTML += `<div class="jumpscare"></div>`
    let option = Math.floor(Math.random() * 2)
    let div = document.querySelector(".jumpscare")
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
                if(!settingsMenu[0].gameplayControl.reduceFL.value){
                    gamePlay.style.filter = `contrast(5) brightness(5) invert(1)`
                }
            }, i * time);
        }else{
            jumpScareTimeout = setTimeout(() => {
                div.style.rotate = `-15deg`
                div.style.backgroundSize = `50% 50%`
                if(!settingsMenu[0].gameplayControl.reduceFL.value){
                    gamePlay.style.filter = `contrast(1) brightness(0.2) invert(0)`
                }
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
            document.querySelector(".camera").style.top = `100%`
            document.querySelector(".camera").style.transform = `scale(0.9)`
            camSEnable = false
            if((Math.floor(Math.random() * 10) + 1) == 1){
                doGoldenRobertEG("office")
            }
            enableCamScreen()
            doPower()
        }else{
            camTimeOut = setTimeout(() => {
                camSEnable = true
                enableCamScreen()
            }, 250);
            document.querySelector(".camera").style.top = `0%`
            document.querySelector(".camera").style.transform = `scale(1.11)`
            doPower("+")
        }
        doSoundPlay("gameSounds", "cameraFlip", "loadPlay")
    }
}

const enableCamScreen = () => {
    if(camSEnable){
        document.querySelector(".cam-screen").style.display = `block`
        changeCam(currentCam)
    }else{
        document.querySelector(".cam-screen").style.display = `none`
    }
}

const enableCamHover = () => {
    document.querySelector(".cam-hover").addEventListener("mouseenter", () => {
        enableCams()
        camTabOpen = !camTabOpen
        document.querySelector(".cam-hover").style.opacity = `0%`
        cameraMO = !cameraMO
    });

    document.querySelector(".cam-hover").addEventListener("mouseleave", () => {
        document.querySelector(".cam-hover").style.opacity = `100%`
        cameraMO = !cameraMO
    });
}

const changeCamFloor = () => {
    document.querySelector(".map").innerHTML = ``
    currentCam = Object.keys(Object.values(cameras)[cameraFloor])[0]
    for(let i = 0;i < Object.keys(Object.values(cameras)[cameraFloor]).length; i++){
        document.querySelector(".map").innerHTML += `
                <div class="${Object.keys(Object.values(cameras)[cameraFloor])[`${i}`]} button">
                    <p>CAM</p>
                    <p>${Object.keys(Object.values(cameras)[cameraFloor])[`${i}`].toUpperCase()}</p>
                </div>`
    }
    document.querySelector(".map").style.background = `url(files/images/camera/radar${cameraFloor}.png)`
    document.querySelector(".map").style.backgroundSize = `100% 100%`
    changeCam(currentCam)
    document.querySelectorAll(".button").forEach(btn => {
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
            doSoundPlay("gameSounds", "click", "loadPlay")
        }
        document.querySelector(`.${currentCam}`).classList.remove("button-clicked")
        currentCam = cam
        document.querySelector(`.${currentCam}`).classList.add("button-clicked")
        document.querySelector(`.current-cam-text`).innerHTML = `${Object.values(cameras)[cameraFloor][`${currentCam}`]}`
    }
    if(currentCam == `r22` && camTabOpen){
        document.querySelector('.music-box').style.display = `flex`
    }else{
        document.querySelector('.music-box').style.display = `none`
    }
    document.querySelector(".cam-change").style.display = `block`
    camEffect = setTimeout(() => {
        document.querySelector(".cam-change").style.display = `none`
        document.querySelector(".screen").style.background = `url(files/images/camera/images/${cam}.png)`
        document.querySelector(".screen").style.backgroundSize = `100% 100%`
        animCamera()
    }, 50);
}

const doFlash = (type) => {
    doSoundPlay("gameSounds", "lightSFX", "pause")
    if(type == "officeMove"){
        document.querySelector(".office-back").style.filter = `brightness(0)`
        document.querySelector(".light-div").style.filter = ``
    }else{
        if(!powerOutage){
            officeLight = !officeLight
            if(officeLight){
                document.querySelector(".office-back").style.filter = `brightness(0.75)`
                document.querySelector(".light-div").style.filter = `hue-rotate(90deg)`
                doPower("+")
                doSoundPlay("gameSounds", "lightSFX", "play")
                soundEffects.gameSounds.lightSFX.loop = true
            }else{
                document.querySelector(".office-back").style.filter = `brightness(0)`
                document.querySelector(".light-div").style.filter = ``
                doPower()
            }
            changePos()
        }
    }
}

//ANIMATRONICS MOVE

const doMoveInterval = () => {
    if(pauseView){
        clearInterval(intervalId)
    }else{
        intervalId = setInterval(() => {
            for(let i = 0; i < characters.length; i++){
                let chrMoveInt = characters[i].difficulty[`night${currentNight}`];
                if(chrMoveInt !== 0){
                    if(characters[i].moveInt == 0){
                        characters[i].moveInt = 5
                        let randomInt = Math.floor(Math.random() * 20) + 1;
                        if(chrMoveInt >= randomInt){
                            doAnimPath(i)
                        }
                    }else{
                        let randomInt = Math.floor(Math.random() * 100) + 1;
                        if(randomInt == 100){
                            characters[i].moveInt--
                        }
                        characters[i].moveInt--
                        if(characters[i].moveInt <= -1){
                            characters[i].moveInt = 0
                        }
                    }
                }
            }
        }, 1000 * gameSpeed);
    }
}

const doAnimPath = (num) => {
    if(characters[num].path >= Object.keys(characters[num].pathFind).length){
        console.log("Unknown")
    }else if(characters[num].path + 1 >= Object.keys(characters[num].pathFind).length){
        if(Object.values(characters[num].pathFind)[characters[num].path].pos == "left" && !leftDoorClose){
            doJumpscare(characters[num])
        }else if(Object.values(characters[num].pathFind)[characters[num].path].pos == "right" && !rightDoorClose){
            doJumpscare(characters[num])
        }else{
            characters[num].path = 0
            animOffice(num, "first")
            document.querySelector(`.${characters[num].name}-office`).remove()
            doSoundPlay("characterSounds", "footsteps", "play")
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
                if(chrCM[characters[num].path - 1].split("_")[0] == currentCam){
                    changeCam(currentCam)
                }
            }else{
                if(chrCM[characters[num].path - 1] == currentCam){
                    changeCam(currentCam)
                }
            }
            animOffice(num, "first")
            doSoundPlay("characterSounds", "footsteps", "play")
        }
    }else{
        if(characters[num].isProgressive){
            if(chrCM[characters[num].path].split("_")[0] == currentCam || chrCM[characters[num].path - 1].split("_")[0] == currentCam){
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
    document.querySelector(".character-contain").innerHTML = ``
    for(let i = 0; i < characters.length; i++){
        if(characters[i].difficulty[`night${currentNight}`] !== 0){
            if(Object.keys(characters[i].pathFind)[characters[i].path] == currentCam){
                document.querySelector(".character-contain").innerHTML += `<div class="${characters[i].name}-character character"></div>`
                document.querySelector(`.${characters[i].name}-character`).style.background = `url(${characters[i].pathFind[currentCam].image})`
                document.querySelector(`.${characters[i].name}-character`).style.backgroundSize = `100% 100%`
                document.querySelector(`.${characters[i].name}-character`).style.left = `${characters[i].pathFind[currentCam].pos[0]}%`
                document.querySelector(`.${characters[i].name}-character`).style.top = `${characters[i].pathFind[currentCam].pos[1]}%`
            }else if(Object.keys(characters[i].pathFind)[characters[i].path].split("_")[0] == currentCam){
                document.querySelector(".character-contain").innerHTML += `<div class="${characters[i].name}-character character"></div>`
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
    if(characters[num].path >= Object.keys(characters[num].pathFind).length - 2 && characters[num].path !=  0){
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
    clearInterval(boxInterval)
    clearInterval(chargeInterval)
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
                document.querySelector(".time").innerHTML = `${doTimerHour(gameTime)}:${doTimerSec(Math.floor(((gameTime * 6) % 360) / 6))} AM`
                tabName.innerHTML = `${doTimerHour(gameTime)}:${doTimerSec(Math.floor(((gameTime * 6) % 360) / 6))} AM`
            }
        }
    }, 1000 * gameSpeed);
}

//--POWER

const doPowerCount = () => {
    if(!powerOutage){
        if(power !== Infinity){
            document.querySelector(".power-number").innerHTML = `${Math.floor(power / 6)}%`
            power--
            if(power <= 0){
                doPowerOutage()
                return
            }
        }else{
            document.querySelector(".power-number").innerHTML = `∞%`
        }
        powerInterval = setInterval(() => {
            if(power !== Infinity){
                document.querySelector(".power-number").innerHTML = `${Math.floor(power / 6)}%`
                power--
                if(power <= 0){
                    doPowerOutage()
                    return
                }
            }else{
                document.querySelector(".power-number").innerHTML = `∞%`
            }
        }, (1000 / powerUsage) * gameSpeed);
        doPowerBar()
    }
}

const doPowerBar = () => {
    document.querySelector(".usage").innerHTML = ``
    for(let i = 0; i < powerUsage; i++){
        document.querySelector(".usage").innerHTML += `<div></div>`
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
    if(leftDoorClose){
        leftDoorClose = false
        doDoorClose(leftDoorClose, "door-left", "door-button-left")
    }
    if(rightDoorClose){
        rightDoorClose = false
        doDoorClose(rightDoorClose, "door-right", "door-button-right")
    }
    for(let i = 0; i < characters.length; i++){
        characters[i].path = 0
        doAnimPath(i)
    }
    characters[0].path = 5
    powerOutage = true
    gamePlay.style.filter = `brightness(0.1)`
    document.querySelector(".power").style.display = `none`
    document.querySelector(".cam-hover").style.display = `none`
    document.querySelector(".timer").style.display = `none`
    tabName.innerHTML = `0% Power`
    doFlash("officeMove")
    doAnimPath(0)
    clearInterval(powerInterval)
    clearInterval(moveInterval)
    doSoundPlay("ambienceSounds", "offAmbience", "stop")
    doSoundPlay("ambienceSounds", "off20Ambience", "stop")
    doSoundPlay("gameSounds", "powerOutageSFX", "play")
}

//--EXTRA FUNCTIONS

const doExtra = () => {
    clearMain()
    gamePlay.innerHTML = `
        <div class="navbar">
            <div class="nav-text">
                <div class="nav-selector"></div>
            </div>
        <div class="extra-container"></div>`

    for(let i = 0; i <= extras.extraOp.length; i++){
        if(i !== extras.extraOp.length){
            document.querySelector(".nav-selector").innerHTML += `<p class="${extras.extraOp[i].class} text">${extras.extraOp[i].name}</p>`
        }else{
            document.querySelector(".nav-selector").innerHTML += `<p class="Exit text">Exit</p>`
        }
    }

    gamePlay.style.background = `url(files/images/camera/static.gif)`
    gamePlay.style.backgroundSize = `100% 100%`
    
    doSoundPlay("ambienceSounds", "extTheme", "play", true)

    document.querySelectorAll(".text").forEach(btn => {
        btn.addEventListener("mouseover", () => {
            doSoundPlay("gameSounds", "click", "loadPlay")
        });
    });

    for(let i = 0; i < extras.extraOp.length; i++){
        extraText = Object.values(extras.extraOp)[i].name
        switch(i){
            case 0:
                changeEXTPic("early", "char")
                break
            case 1:
                changeEXTPic("early", "scene")
                break
            case 2:
                changeCTN()
                break
            case 3:
                changeCHT()
                break
        }
    }

    doExtraSelect(extraCount, true)

    window.addEventListener("wheel", doScrollFunc);

    document.querySelector(".nav-selector").addEventListener("mouseup", (event) => {
        let children = document.querySelector(".nav-selector").children
        let number = Array.from(children).indexOf(event.target)
        doExtraSelect(number)
    });
}

const doScrollFunc = (event) => {
    let container = document.querySelector(".extra-container");
    let height = container.scrollHeight;
    let pos = container.scrollTop;
    let hCalc = height / extras.extraOp.length - 1;
    let currentEvent = Math.floor(pos / hCalc);
    let cEFwrd = Math.floor((pos + hCalc / 1.25) / hCalc);
    if(currentEvent < cEFwrd && event.deltaY < 0){
        doExtraSelect(cEFwrd - 1)
    }else if(currentEvent < cEFwrd && event.deltaY > 0){
        doExtraSelect(cEFwrd)
    }
}

const doExtraSelect = (num, isFirst) => {
    extraCount = Math.max(0, Math.min(extraCount, extras.extraOp.length - 1));
    if(extras.extraOp.length > num){
        let child = Array.from(document.querySelector(".nav-selector").children)
        let classFind = Array.from(document.querySelector(".extra-container").children)[num].classList[1]
        for(let i = 0; i < extras.extraOp.length; i++){
            if(child[i].classList.contains("enabled")){
                child[i].classList.toggle("enabled")
                child[i].classList.toggle("text")
            }
        }
        extraCount = num
        child[num].classList.toggle("enabled")
        child[num].classList.toggle("text")
        tabName.innerHTML = Object.values(extras.extraOp)[num].name
        if(!isFirst && isFirst !== "scroll"){
            document.querySelector(`.${classFind}`).scrollIntoView({
                behavior: 'smooth'
            });
        }else if(isFirst && isFirst !== "scroll"){
            document.querySelector(`.${classFind}`).scrollIntoView({});
        }
    }else{
        doMenu()
        window.removeEventListener("wheel", doScrollFunc);
    }
}

const changeEXTPic = (type, pic) => {
    let selector = extras.extraPics[`${pic}`]
    if(type == "early"){
        selector.picCount = 0
        selector.pictures = []
        if(pic == "char"){
            for(let i = 0;i < characters.length; i++){
                selector.pictures.push(characters[i].mMImage)
            }
        }else{
            selector.pictures = ["files/images/office/office_front.png", "files/images/camera/radar0.png", "files/images/camera/radar1.png"]
            for(let i = 0; i < Object.keys(cameras).length; i++){
                for(let e = 0; e < Object.keys(Object.values(cameras)[i]).length; e++){
                    selector.pictures.push(`files/images/camera/images/${Object.keys(Object.values(cameras)[i])[e]}.png`)
                }
            }
        }
        let newDiv = document.createElement("div");
        newDiv.classList.add("scene-show", `change${pic}`)
        newDiv.innerHTML = `
                <div class="top-bar">
                    <div class="scene-num"></div>
                    <div class="extra-title"><p>${extraText}</p></div>
                </div>
                <div class="bottom-bar">
                    <div class="arrow-left arrow">&lt;&lt;</div>
                    <div class="arrow-right arrow">>></div>
                    <div class="scene-container"></div>
                </div>`
        
        document.querySelector(".extra-container").appendChild(newDiv)

        document.querySelector(`.change${pic} .arrow-left`).addEventListener("click", () => {
            changeEXTPic("left", `${pic}`)
        });

        document.querySelector(`.change${pic} .arrow-right`).addEventListener("click", () => {
            changeEXTPic("right", `${pic}`)
        });
    }else{
        doSoundPlay("gameSounds", "click", "loadPlay")
    }
    if(type == "left"){
        selector.picCount--
    }else if(type == "right"){
        selector.picCount++
    }
    if(selector.picCount == -1){
        selector.picCount = selector.pictures.length - 1
    }else if(selector.picCount == selector.pictures.length){
        selector.picCount = 0
    }
    document.querySelector(`.change${pic} .scene-container`).innerHTML = `<a target="_blank" href="${selector.pictures[selector.picCount]}"><div class="scene"></div></a>`
    if(pic == "char"){
        document.querySelector(".scene-num").innerHTML = `${selector.picCount + 1}/${selector.pictures.length} - ${characters[selector.picCount].name}`
    }else{
        let splitTitle = selector.pictures[selector.picCount].split("/")
        let splitName = splitTitle[splitTitle.length - 1]
        splitName = splitName.split(".")
        let name = splitName[0]
        document.querySelector(`.change${pic} .scene-num`).innerHTML = `${selector.picCount + 1}/${selector.pictures.length} - ${name}`
    }
    document.querySelector(`.change${pic} .scene`).style.background = `url(${selector.pictures[selector.picCount]})`
    document.querySelector(`.change${pic} .scene`).style.backgroundSize = `contain`
    document.querySelector(`.change${pic} .scene`).style.backgroundPosition = `center`
    document.querySelector(`.change${pic} .scene`).style.backgroundRepeat = `no-repeat`
}

const changeCTN = () => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("scene-show", "changeCTN")
    newDiv.innerHTML = `
        <div class="top-bar">
            <div class="cn-modes">
                <p class="cn-add set-0">Set 0 to all</p>
                <p class="cn-add add-1">Add 1 to all</p>
                <p class="cn-add add-5">Add 5 to all</p>
                <p class="cn-add set-20">Set 20 to all</p>
            </div>
            <div class="extra-title"><p>${extraText}</p></div>
        </div>
        <div class="bottom-bar">
            <div class="characters"></div>
        </div>`

    document.querySelector(".extra-container").appendChild(newDiv)

    for(let i = 0;i < characters.length; i++){
        document.querySelector(".characters").innerHTML += `
                <div class="cn-character cn-char-${characters[i].name}">
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
    document.querySelector(".changeCTN .bottom-bar").innerHTML += `
        <div class="cn-begin"><p>Begin</p></div>`
    
    document.querySelectorAll(`.cn-modes p`).forEach(btn => {
        btn.addEventListener('click', (event) => {
            for(let i = 0; i < characters.length; i++){
                if(event.target.classList[1].split("-")[0] == "set"){
                    characters[i].difficulty.night7 = Number(event.target.classList[1].split("-")[1])
                }else{
                    characters[i].difficulty.night7 += Number(event.target.classList[1].split("-")[1])
                }
                changeCTNValue(characters[i])
            }
            doSoundPlay("gameSounds", "click", "loadPlay")
        })
    });
    
    characters.forEach(char => {
        document.querySelector(`.${char.name}-arLeft`).addEventListener("click", () => {
            doSoundPlay("gameSounds", "click", "loadPlay")
            char.difficulty.night7--
            changeCTNValue(char)
        });
        document.querySelector(`.${char.name}-arRight`).addEventListener("click", () => {
            doSoundPlay("gameSounds", "click", "loadPlay")
            char.difficulty.night7++
            changeCTNValue(char)
        });
    });
    
    document.querySelector(".cn-begin").addEventListener("click", () => {
        let eGNums = easterEgg.toString().split("")
        if(
            characters[0].difficulty.night7 == eGNums[0] &&
            characters[1].difficulty.night7 == eGNums[1] &&
            characters[2].difficulty.night7 == eGNums[2] &&
            characters[3].difficulty.night7 == eGNums[3]
        ){
            doGoldenRobertEG("custom")
        }else{
            doNightShow("custom-night")
        }
    });
}

const changeCTNValue = (data) => {
    data.difficulty.night7 = Math.min(Math.max(data.difficulty.night7, 0), 20)
    document.querySelector(`.${data.name}-dif-text`).innerHTML = `${data.difficulty.night7}`
    if(data.difficulty.night7 == 0){
        document.querySelector(`.${data.name}-dif-text`).style.color = `hsl(0, 0%, 100%)`
        document.querySelector(`.cn-char-${data.name}`).style.border = `0.25vmax solid hsla(0, 100%, 100%, 0.1)`
        document.querySelector(`.cn-char-${data.name}`).style.backgroundColor = `hsla(0, 100%, 0%, 0.5)`
    }else{
        document.querySelector(`.${data.name}-dif-text`).style.color = `hsl(0, 100%, ${100 / (data.difficulty.night7 * 0.1)}%`
        document.querySelector(`.cn-char-${data.name}`).style.border = `0.25vmax solid hsla(0, 100%, ${100 / (data.difficulty.night7 * 0.1)}%, 0.1)`
        document.querySelector(`.cn-char-${data.name}`).style.backgroundColor = `hsla(0, 100%, ${Math.min(Math.max((data.difficulty.night7 - 10) / (20 - 10) * 50, 0), 50)}%, 0.1)`
    }
    if(data.difficulty.night7 >= 10){
        document.querySelector(`.${data.name}-img`).style.filter = `grayscale(${(data.difficulty.night7 - 10) * 10}%) contrast(${1 + (data.difficulty.night7 - 10) / 5})`
    }else{
        document.querySelector(`.${data.name}-img`).style.filter = `grayscale(0%) contrast(1)`
    }
}

const doGoldenRobertEG = (type) => {
    if(type == "custom"){
        clearMain()
        gamePlay.innerHTML = `<div class="golden-robert"></div>`
        doSoundPlay("characterSounds", "goldenRobert", "play")
        setTimeout(() => {
            doMenu()
        }, 3000);
    }else{
        document.querySelector('.robert').style.display = `block`
        setTimeout(() => {
            document.querySelector('.robert').style.display = `none`
        }, 100)
    }
}

//CHEATS

const changeCHT = () => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("scene-show", "changeCHT")
    newDiv.innerHTML = `
        <div class="top-bar">
            <div class="cn-modes">
                <p class="cn-add tgl-cheats">Toggle all Cheats</p>
            </div>
            <div class="extra-title"><p>${extraText}</p></div>
        </div>
        <div class="bottom-bar">
            <div class="cheats"></div>
        </div>`

    document.querySelector(".extra-container").appendChild(newDiv)

    for(let i = 0;i < extras.cheats.length; i++){
        document.querySelector(".cheats").innerHTML += `
                <div class="row ${extras.cheats[i].class} row-hover">
                    <div class="switch"></div><p class="cheat-text">${extras.cheats[i].text}</p>
                </div>`
        if(extras.cheats[i].enable){
            document.querySelector(`.${extras.cheats[i].class}`).classList.add("enabled")
        }
    }

    document.querySelectorAll(".cheats .row").forEach((row, index) => {
        row.addEventListener("click", (e) => {
            const classes = [...e.currentTarget.classList];
            const cheatClass = classes.find(c => c !== "row" && c !== "row-hover");
            changeCHTEnable(cheatClass, index)
        });
    });

    document.querySelector(".tgl-cheats").addEventListener("click", () => {
        for(let i = 0; i < extras.cheats.length; i++){
            changeCHTEnable(extras.cheats[i].class, i)
        }
    });
}

const changeCHTEnable = (cl, num) => {
    doSoundPlay("gameSounds", "click", "loadPlay")
    document.querySelector(`.${cl}`).classList.toggle("enabled")
    extras.cheats[num].enable = !extras.cheats[num].enable
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

loadTextures("progressBar")

document.addEventListener("keydown", (event) => {
    if(event.key == settingsMenu[2].keyBindControl.pauseMenu.bind){
        if(settingsView){
            doSettings()
        }else if(officeView){
            doPause()
        }
    }
    if(event.key == settingsMenu[2].keyBindControl.skipScene.bind && viewEnding){
        doEnding("skip")
    }
    if(officeView){
        if(!pauseView){
            if(event.key == settingsMenu[2].keyBindControl.light.bind && officeView && !camSEnable && !officeLightDelay){
                doFlash()
            }else if(event.key == settingsMenu[2].keyBindControl.leftDoor.bind && officePos <= 30){
                leftDoorClose = !leftDoorClose
                doDoorClose(leftDoorClose, "door-left", "door-button-left")
            }else if(event.key == settingsMenu[2].keyBindControl.rightDoor.bind && officePos >= 70){
                rightDoorClose = !rightDoorClose
                doDoorClose(rightDoorClose, "door-right", "door-button-right")
            }
        }
    }
    if(!pauseView){
        konamiFunc(konamiCode, event.key)
    }
})