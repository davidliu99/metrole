var target
var nGuesses
var gameState
var difficulty
var units
var pastDistances
var today
var timeoutID

// define useful constants
const kmToMiles = 1.60934
const successMessages = {1: "Genius!", 2: "Genius!", 3: "Magnificent!", 4: "Splendid!", 5: "Great!", 6: "Nice."}
const green = twemoji.parse("<span>\uD83D\uDFE9</span>")
const yellow = twemoji.parse("<span>\uD83D\uDFE8</span>")
const gray = twemoji.parse("<span>\u2B1C\uFE0F</span>")
const animationDelay = 400
const successImage = `<img alt="🎉" src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/party-popper_1f389.png" class="inline-block" style="width: 1em; height: 1em; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;">`

// compute distance and bearing from the guess to the target 
function feedback(guess, target) {
    if (guess == target) {
        return [0, 0]
    }

    let from = turf.point([guess.lon, guess.lat])
    let to = turf.point([target.lon, target.lat])

    return [turf.distance(from, to) / kmToMiles, turf.rhumbBearing(from, to)]
}

// parse a guess and return a city object if valid
function guessToObject(input) {
    input = input.toLowerCase()
    for (let i = 0; i < CITIES.length; i++) {
        let cityname = CITIES[i].City.toLowerCase()
        let fullname = CITIES[i].name.toLowerCase()
        if (input == cityname || input == fullname) {
            return CITIES[i]
        }
    }
    return
}

// treat Enter key presses as submissions
function handleKeyPress(event) {
    let key = event.keyCode || event.which;
    if (key == 13) {
        submit()
    }
}

// animate tiles upon guess
function animate(row, name, distance, bearing) {
    if (difficulty == "distances") {
        tile_index = 1
        let newHTML = `<div class="row-animate" id="row-${row}-animate">
            <div class="tile" id="row-${row}-tile-${tile_index}"></div>`
        tile_index += 1

        // compute number of green, yellow, and gray tiles based on distance
        let greenTiles, distanceBox
        if (distance == 0) {
            gameState = 1
            greenTiles = 10
            distanceBox = successImage
        }
        else {
            greenTiles = Math.min(9, (Math.max(0, Math.floor(2 * (5 - Math.log2(distance / 100))))))
            if (units == "miles") {
                distanceBox = `<span>${Math.round(distance)} miles</span>`
            }
            else {
                distanceBox = `<span>${Math.round(distance * kmToMiles)} km</span>`
            }
        }

        // generate tiles
        while (greenTiles > 1) { // green tiles
            newHTML += `<div class="tile" style="display:none" id="row-${row}-tile-${tile_index}">${green}</div>`
            greenTiles -= 2
            tile_index += 1
        }
        if (greenTiles > 0) { // yellow tiles
            newHTML += `<div class="tile" style="display:none" id="row-${row}-tile-${tile_index}">${yellow}</div>`
            greenTiles -= 1
            tile_index += 1
        }

        while (tile_index < 7) { // gray tiles
            newHTML += `<div class="tile" style="display:none" id="row-${row}-tile-${tile_index}">${gray}</div>`
            tile_index += 1
        }

        newHTML += `<div class="tile" id="row-${row}-tile-${tile_index}"></div>
        </div>`

        // generate detailed feedback
        newHTML += `<div class="box-4" style="display:none" id="name-${row}"><span>${name}</span></div> 
        <div class="box-2" style="display:none" id="distance-${row}">${distanceBox}</div>`

        document.getElementById(`row-${row}`).innerHTML = newHTML

        // animate tiles
        for (let i = 2; i < 7; i++) {
            $(`#row-${row}-tile-${i}`).delay((i-2) * animationDelay).show(0)
        }

        // display feedback
        $(`#row-${row}-animate`).delay(animationDelay * 6).hide(0)
        $(`#name-${row}`).delay(animationDelay * 6).show(0)
        $(`#distance-${row}`).delay(animationDelay * 6).show(0)
    }
    else if (difficulty == "bearings") {
        let bearingBox
        if (distance == 0) {
            gameState = 1
            bearingBox = successImage
        }
        else {
            bearingBox = `<span style="display:inline-block; transform:rotate(${bearing}deg)">&#x2191;</span>`
        }

        newHTML = `<div class="box-5" id="name-${row}"><span style="display:none">${name}</span></div>
        <div class="box-1" id="bearing-${row}">
            <div style="display:none">
                ${bearingBox}
            </div>
        </div>`

        document.getElementById(`row-${row}`).innerHTML = newHTML

        $(`#name-${row} > *`).fadeIn(animationDelay)
        $(`#bearing-${row} > *`).delay(animationDelay * 2).fadeIn(animationDelay)
    }
    else {
        tile_index = 1
        let newHTML = `<div class="row-animate" id="row-${row}-animate">
            <div class="tile" id="row-${row}-tile-${tile_index}"></div>`
        tile_index += 1

        // compute number of green, yellow, and gray tiles based on distance
        let greenTiles, bearingBox
        if (distance == 0) {
            gameState = 1
            greenTiles = 10
            bearingBox = successImage
        }
        else {
            greenTiles = Math.min(9, (Math.max(0, Math.floor(2 * (5 - Math.log2(distance / 100))))))
            bearingBox = `<span style="display:inline-block; transform:rotate(${bearing}deg)">&#x2191;</span>`
        }

        let distanceBox
        // convert distance, if necessary
        if (units == "miles") {
            distanceBox = `<span>${Math.round(distance)} miles</span>`
        }
        else {
            distanceBox = `<span>${Math.round(distance * kmToMiles)} km</span>`
        }

        // generate tiles
        while (greenTiles > 1) { // green tiles
            newHTML += `<div class="tile" style="display:none" id="row-${row}-tile-${tile_index}">${green}</div>`
            greenTiles -= 2
            tile_index += 1
        }
        if (greenTiles > 0) { // yellow tiles
            newHTML += `<div class="tile" style="display:none" id="row-${row}-tile-${tile_index}">${yellow}</div>`
            greenTiles -= 1
            tile_index += 1
        }

        while (tile_index < 7) { // gray tiles
            newHTML += `<div class="tile" style="display:none" id="row-${row}-tile-${tile_index}">${gray}</div>`
            tile_index += 1
        }

        newHTML += `<div class="tile" id="row-${row}-tile-${tile_index}"></div>
        </div>`

        // generate detailed feedback
        newHTML += `<div class="box-3" style="display:none" id="name-${row}"><span>${name}</span></div> 
        <div class="box-2" style="display:none" id="distance-${row}">
            ${distanceBox}
        </div>
        <div class="box-1" style="display:none" id="bearing-${row}">
            ${bearingBox}
        </div>`

        document.getElementById(`row-${row}`).innerHTML = newHTML

        // animate tiles
        for (let i = 2; i < 7; i++) {
            $(`#row-${row}-tile-${i}`).delay((i-2) * animationDelay).show(0)
        }

        // display feedback
        $(`#row-${row}-animate`).delay(animationDelay * 6).hide(0)
        $(`#name-${row}`).delay(animationDelay * 6).show(0)
        $(`#distance-${row}`).delay(animationDelay * 6).show(0)
        $(`#bearing-${row}`).delay(animationDelay * 6).show(0)
    }
}

// handle submission of a guess
function submit(input = document.getElementById("guess").value, auto=false) {
    if (input in duplicates && duplicates[input]) {
        // ambiguous input error
        Snackbar.show({pos: 'top-center', text: "Ambiguous city name. Try specifying a state.", duration: 2000, showAction: false, width: "max-content"})
    }
    else if (input && gameState == 0) {
        guess = guessToObject(input)
        if (guess) {
            // increment guesses
            nGuesses += 1

            // lock out settings changes upon first guess
            if (nGuesses == 1) {
                let buttons = document.getElementsByName("difficulty")
                for (let i = 0; i < buttons.length; i++) {
                    buttons[i].disabled = true
                }
            }

            // clear input field
            document.getElementById("guess").value = ""
            $("#guess").autocomplete("close")

            // save guess to local storage
            localStorage.setItem(`guess-${nGuesses}`, guess.name)

            // display feedback
            let dist, bear
            [dist, bear] = feedback(guess, target)
            pastDistances.push(dist)
            animate(nGuesses, guess.name, Math.round(dist), bear)

            if (nGuesses == 6 && gameState == 0) {
                gameState = 2
            }
            else if (gameState == 1) {
                timeoutID = setTimeout(function(){
                    Snackbar.show({pos: 'top-center', text: successMessages[nGuesses], duration: 5000, showAction: false, width: "max-content"})
                }, animationDelay * 6)
            }
        }
        else {
            // invalid input error
            Snackbar.show({pos: 'top-center', text: "Not on city list.", duration: 2000, showAction: false, width: "max-content"})
        }
    }

    // end-of-game handling
    if (gameState > 0) {
        document.getElementById("form").innerHTML = `<button onclick="share()" id="share-button">Share</button>`
        // loss
        if (gameState == 2) {
            setTimeout(function() {
                Snackbar.show({pos: 'top-center', text: target.name, duration: 5000, showAction: false, width: "max-content"})
            }, animationDelay * 6)
            localStorage.setItem("streak", 0)
            localStorage.setItem("maxStreak", Math.max(parseInt(localStorage.getItem("streak")) || 0, parseInt(localStorage.getItem("maxStreak")) || 0))
            if (!auto) {
                localStorage.setItem("failures", parseInt(localStorage.getItem("failures")) + 1 || 1)
            }
        }
        // win
        else {
            if (!auto) {
                localStorage.setItem("lastSuccess", today)
                localStorage.setItem(`successes-${nGuesses}`, parseInt(localStorage.getItem(`successes-${nGuesses}`)) + 1 || 1)
                localStorage.setItem("streak", parseInt(localStorage.getItem("streak")) + 1 || 1)
                localStorage.setItem("maxStreak", Math.max(parseInt(localStorage.getItem("streak")) || 0, parseInt(localStorage.getItem("maxStreak")) || 0))
            }
        }
        // post game data to server
        if (!auto) {
            let now = new Date().toUTCString()
            guesses = []
            for (let i = 1; i <= nGuesses; i++) {
                guesses.push(localStorage.getItem(`guess-${i}`))
            }
            post({
                time: now,
                IP: IP,
                target: target.name,
                success: gameState == 1,
                guesses: guesses
            })
        }
    }
}

// show and hide help window
function showHelp() {
    $("#container").hide()
    $("#how-to-play").show()
    Snackbar.close()
    clearTimeout(timeoutID)
}

function hideHelp() {
    $("#container").show()
    $("#how-to-play").hide()
}

// show and hide settings window
function showSettings() {
    $("#container").hide()
    $("#settings").show()
    Snackbar.close()    
    clearTimeout(timeoutID)
}

function hideSettings() {
    $("#container").show()
    $("#settings").hide()
}

// show and hide statistics window
function showStatistics() {
    clearTimeout(timeoutID)

    // compute statistics
    let failures = parseInt(localStorage.getItem("failures")) || 0    
    let totalSuccesses = 0
    let mode = 0
    for (let i = 1; i <= 6; i++) {
        let successes = parseInt(localStorage.getItem(`successes-${i}`)) || 0    
        totalSuccesses += successes
        mode = Math.max(mode, successes)
    }

    let gamesPlayed = failures + totalSuccesses
    if (gamesPlayed > 0) { // if at least one game has been completed
        document.getElementById("played-value").innerHTML = gamesPlayed
        document.getElementById("success-value").innerHTML = Math.round(totalSuccesses / gamesPlayed * 100)
        document.getElementById("streak-value").innerHTML = localStorage.getItem("streak") || 0
        document.getElementById("max-streak-value").innerHTML = localStorage.getItem("maxStreak") || 0

        for (let i = 1; i <= 6; i++) {
            let successes = parseInt(localStorage.getItem(`successes-${i}`)) || 0
            let width = successes ? Math.round(7 + 93 * successes / mode) : 7
            let flex = successes ? "flex-end; padding-right: 8px;" : "center"
            document.getElementById(`label-${i}`).innerHTML = successes
            document.getElementById(`bar-${i}`).setAttribute("style", `width:${width}%; justify-content:${flex}`)
        }    
    }

    $("#container").hide()
    $("#statistics").show()
    Snackbar.close()
}

function hideStatistics() {
    $("#container").show()
    $("#statistics").hide()
}

// store difficulty setting
function changeDifficulty() {
    difficulty = document.querySelector('input[name="difficulty"]:checked').getAttribute("id")
    localStorage.setItem("difficulty", difficulty)
}

// convert miles to kilometers, if prompted
function toMiles() {
    if (units != "miles" && difficulty != "bearings") {
        for (let i = 0; i < pastDistances.length; i++) {
            document.getElementById(`distance-${i+1}`).innerHTML = `<span>${Math.round(pastDistances[i])} miles</span>`
        }
    }    
    units = "miles"
    localStorage.setItem("units", units)
}

function toKilometers() {
    if (units != "kilometers" && difficulty != "bearings") {
        for (let i = 0; i < pastDistances.length; i++) {
            document.getElementById(`distance-${i+1}`).innerHTML = `<span>${Math.round(pastDistances[i] * kmToMiles)} km</span>`
        }
    }    
    units = "kilometers"
    localStorage.setItem("units", units)
}

function standardIcons() {
    localStorage.setItem("icons", "standard")
    document.getElementById("close-help").innerHTML = `<img alt="❌" src="https://twemoji.maxcdn.com/2/72x72/274c.png" style="width: 1em; height: 1em; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;">`
    document.getElementById("close-statistics").innerHTML = `<img alt="❌" src="https://twemoji.maxcdn.com/2/72x72/274c.png" style="width: 1em; height: 1em; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;">`
    document.getElementById("close-settings").innerHTML = `<img alt="❌" src="https://twemoji.maxcdn.com/2/72x72/274c.png" style="width: 1em; height: 1em; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;">`
    document.getElementById("help-button").innerHTML = `<img alt="❓" src="https://twemoji.maxcdn.com/2/72x72/2753.png" style="width: 1.5rem; height: 1.5rem; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;">`
    document.getElementById("statistics-button").innerHTML = `<img alt="📈" src="https://twemoji.maxcdn.com/2/72x72/1f4c8.png" style="width: 1.5em; height: 1.5em; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;">`
    document.getElementById("settings-button").innerHTML = `<img alt="⚙️" src="https://twemoji.maxcdn.com/2/72x72/2699.png" style="width: 1.5em; height: 1.5em; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;">`
    document.getElementById("submit-button").innerHTML = `<img alt="🏙" src="https://images.emojiterra.com/twitter/v13.1/512px/1f3d9.png" class="inline-block" style="width: 1em; height: 1em; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;"> Guess`
}

function minimalist() {
    localStorage.setItem("icons", "minimalist")
    document.getElementById("close-help").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="5 5 18 18" style="width: 1rem; height: 1rem; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;">
        <path fill="var(--color-tone-1)" d="M 22.8 7.692 L 21.108 6 L 14.4 12.708 L 7.692 6 L 6 7.692 L 12.708 14.4 L 6 21.108 L 7.692 22.8 L 14.4 16.092 L 21.108 22.8 L 22.8 21.108 L 16.092 14.4 z"></path>
    </svg>`
    document.getElementById("close-statistics").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="5 5 18 18" style="width: 1rem; height: 1rem; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;">
        <path fill="var(--color-tone-1)" d="M 22.8 7.692 L 21.108 6 L 14.4 12.708 L 7.692 6 L 6 7.692 L 12.708 14.4 L 6 21.108 L 7.692 22.8 L 14.4 16.092 L 21.108 22.8 L 22.8 21.108 L 16.092 14.4 z"></path>
    </svg>`    
    document.getElementById("close-settings").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="5 5 18 18" style="width: 1rem; height: 1rem; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;">
        <path fill="var(--color-tone-1)" d="M 22.8 7.692 L 21.108 6 L 14.4 12.708 L 7.692 6 L 6 7.692 L 12.708 14.4 L 6 21.108 L 7.692 22.8 L 14.4 16.092 L 21.108 22.8 L 22.8 21.108 L 16.092 14.4 z"></path>
    </svg>`
    document.getElementById("help-button").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path fill="var(--color-tone-1)" d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
    </svg>`
    document.getElementById("statistics-button").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path fill="var(--color-tone-1)" d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"></path>
    </svg>`
    document.getElementById("settings-button").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path fill="var(--color-tone-1)" d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"></path>
    </svg>`
    document.getElementById("submit-button").innerHTML = `Guess`
}

// close autocomplete menu upon window resize 
window.addEventListener('resize', function() {
    $("#guess").autocomplete("close")
}, true);

// open autocomplete menu when input box is clicked
function openAutocomplete() {
    if (document.getElementById("guess").value) {
        $("#guess").autocomplete("search")
    }
}

// load stored session into window
function load() {
    // default variable values
    units = "miles"
    difficulty = "both"
    nGuesses = 0
    gameState = 0
    pastDistances = []

    // generate target city
    today = new Date().toISOString().slice(0, 10)
    let nDays = Math.floor((new Date().getTime() - new Date("2022-03-28").getTime()) / 3600 / 24 / 1000)
    target = eligibleCities[sequence[nDays - 1]]

    // load settings
    let storedUnits = localStorage.getItem("units")
    if (storedUnits == "kilometers") {
        document.getElementById("kilometers").checked = true
        units = storedUnits
    }

    let storedDifficulty = localStorage.getItem("difficulty")
    if (storedDifficulty == "distances") {
        document.getElementById("distances").checked = true
        difficulty = storedDifficulty 
    }
    else if (storedDifficulty == "bearings") {
        document.getElementById("bearings").checked = true
        difficulty = storedDifficulty
    }

    let storedIconStyle = localStorage.getItem("icons")
    if (storedIconStyle == "minimalist") {
        document.getElementById("minimalist").checked = true
        minimalist()
    }

    // load previous guesses
    let lastPlayed = localStorage.getItem("date")
    let lastSuccess = localStorage.getItem("lastSuccess")
    if (lastPlayed == today) {
        let i = 1
        while (localStorage.getItem(`guess-${i}`)) {
            submit(localStorage.getItem(`guess-${i}`), auto=true)
            i++
        }
    }
    else {
        localStorage.setItem("date", today)
        for (let i = 1; i <= 6; i++) {
            localStorage.removeItem(`guess-${i}`)
        }
        if (!lastSuccess || new Date(today) - new Date(lastSuccess) > 86400000) { // if more than a day has elapsed between the last game
            localStorage.setItem("streak", 0)
            localStorage.setItem("maxStreak", Math.max(parseInt(localStorage.getItem("streak")) || 0, parseInt(localStorage.getItem("maxStreak")) || 0))
        }
    }
}

// generate copyable text representing a game
function share() {
    let nDays = Math.floor((new Date().getTime() - new Date("2022-03-28").getTime()) / 3600 / 24 / 1000)
    let text = `Metrole ${nDays} ${gameState == 1 ? nGuesses : "X"}/6\n`

    for (let i = 0; i < pastDistances.length; i++) {
        let row = ""
        let tiles = 0
        let greenTiles
        if (pastDistances[i] > 0) {
            greenTiles = Math.min(9, (Math.max(0, Math.floor(2 * (5 - Math.log2(pastDistances[i] / 100))))))
        }
        else {
            greenTiles = 10
        }

        while (greenTiles > 1) {
            row += "🟩"
            greenTiles -= 2
            tiles += 1
        }
        if (greenTiles > 0) {
            row += "🟨"
            greenTiles -= 1
            tiles += 1
        }
        while (tiles < 5) {
            row += "⬜"
            tiles += 1
        }
        row += "\n"
        text += row
    }

    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
        Snackbar.show({pos: 'top-center', text: "Copied game to clipboard!", duration: 2000, showAction: false, width: "max-content"})
    }
    else {
        Snackbar.show({pos: 'top-center', text: "Clipboard API not working.", duration: 2000, showAction: false, width: "max-content"})
    }
}

function post(data) {
    fetch("https://dqrjrkjg7z2rdp7oszdlrf776q0qqpuj.lambda-url.us-east-2.on.aws/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        }, 
        mode: 'no-cors',
        body: JSON.stringify(data)
    })
}
