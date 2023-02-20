let guestScore = document.getElementById("guest-score")
let homeScore = document.getElementById("home-score")
let initialHomeScore = 0
let initialGuestScore = 0

function haddone() {
    initialHomeScore += 1
    homeScore.textContent = initialHomeScore
}

function gaddone() {
    initialGuestScore +=1
    guestScore.textContent = initialGuestScore
}

function haddtwo() {
    initialHomeScore += 2
    homeScore.textContent = initialHomeScore
}

function gaddtwo() {
    initialGuestScore +=2
    guestScore.textContent = initialGuestScore
}

function haddthree() {
    initialHomeScore += 3
    homeScore.textContent = initialHomeScore
}

function gaddthree() {
    initialGuestScore +=3
    guestScore.textContent = initialGuestScore
}