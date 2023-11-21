let start_btn = document.getElementById("start")
let start_game = document.getElementById("start_game")
let done = document.getElementById("done")
let round = document.getElementById("round")


let name_html = document.getElementById('name')
let user_text = document.getElementById("user_text")
let computer_text = document.getElementById("computer_text")
let choose_key_computer = document.getElementById("choose_key_computer")
let choose_key_user = document.getElementById("choose_key_user")
let user_img = document.getElementById("user_img")
let comp_img = document.getElementById("comp_img")


let user_score = document.getElementById("user_score")
let comp_score = document.getElementById("comp_score")


let options = ['r', 'p', 's']
let userCount = 0;
let compCount = 0;

function computerOption() {
    let computer_option_index = Math.floor(Math.random() * options.length);
    return options[computer_option_index]
}

function whoWinShow(userWin, compWin) {
    if (userWin) {
        user_text.innerText = "Win"
        computer_text.innerText = "Loose"
        user_text.style.color = "#557C55"
        computer_text.style.color = "#FA7070"
    }
    if (compWin) {
        computer_text.innerText = "Win"
        user_text.innerText = "Loose"
        computer_text.style.color = "#557C55"
        user_text.style.color = "#FA7070"
    }
    if (!userWin && !compWin) {
        computer_text.innerText = "Draw"
        user_text.innerText = "Draw"
        computer_text.style.color = "#435585"
        user_text.style.color = "#435585"
    }
}

function findWinner(userChoose, computerChoose) {
    let userWin
    let compWin
    if (userChoose === 's' && computerChoose === 'p') {
        userWin = true
        compWin = false
        whoWinShow(userWin, compWin)
    } else if (userChoose === 'p' && computerChoose === 'r') {
        userWin = true
        compWin = false
        whoWinShow(userWin, compWin)
    } else if (userChoose === 'r' && computerChoose === 's') {
        userWin = true
        compWin = false
        whoWinShow(userWin, compWin)
    } else if (userChoose === computerChoose) {
        userWin = false
        compWin = false
        whoWinShow(userWin, compWin)
    } else {
        userWin = false
        compWin = true
        whoWinShow(userWin, compWin)
    }
    return {userWin, compWin}
}

function showImage(userChoose, computerChoose) {
    user_img.src = `image/${userChoose}.png`
    comp_img.src = `image/${computerChoose}.png`
}

start_btn.addEventListener('click', function (e) {

    // Show game card
    start_game.classList.add("show")

    // entering user name
    let userName = prompt('Enter your name')
    name_html.innerText = userName;


    let countGame = 0
    // game section
    window.addEventListener('keypress', function (e) {
        let userChoose = e.key;
        let winner
        if (options.indexOf(userChoose) === -1) {
            alert("Please choose right key")
        } else {
            let computerChoose = computerOption()
            let {userWin, compWin} = findWinner(userChoose, computerChoose)
            showImage(userChoose, computerChoose)
            choose_key_computer.innerText = computerChoose
            choose_key_user.innerText = userChoose;
            countGame = countGame + 1
            round.innerText = countGame;
            if (userWin) {
                userCount += 1
                user_score.innerText = userCount
            } else if (compWin) {
                compCount += 1
                comp_score.innerText = compCount
            }
        }
        if (countGame === 10) {
            if(userCount > compCount){
                winner = userName
            }else{
                winner = "Computer"
            }
            start_game.style.display = 'none'
            done.innerText = `Oyun bitdi!!!! The winner is ${winner} `
        }
    })
    // after click btn hide
    start_btn.style.display = 'none'
})
