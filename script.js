// Minigame Web (Point and click game)

let gameData = [{
    night: 1
}]

const body = document.querySelector('body')
const tabName = document.querySelector('.tab-title')
const gamePlay = document.querySelector('main')
const copyRight = document.querySelector('footer')

const newGame = () => {
    
}

const doNightShow = (data, tab, copy, gp) => {
    gp.innerHTML = `
        <div class="nightShow">
            <h1>Night ${data[0].night}</h1>
            <p>12:00</p>
        </div>`
    tab.innerHTML = `Night ${data[0].night}`
    copy.style.display = `none`
}


document.querySelector('.NG').addEventListener('click', function () {
    console.log("New Game")
    doNightShow(gameData, tabName, copyRight, gamePlay)
});

document.querySelector('.NG').addEventListener('click', function () {
    console.log("New Game")
    doNightShow(gameData, tabName, copyRight, gamePlay)
});