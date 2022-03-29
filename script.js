var target
var nGuesses
var gameState
var difficulty
var units
var pastDistances

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
function submit(input = document.getElementById("guess").value) {
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
                setTimeout(function(){
                    Snackbar.show({pos: 'top-center', text: successMessages[nGuesses], duration: 5000, showAction: false, width: "max-content"})
                }, animationDelay * 6)
            }
        }
        else {
            // invalid input error
            Snackbar.show({pos: 'top-center', text: "Not on city list.", duration: 2000, showAction: false, width: "max-content"})
        }
    }

    if (gameState > 0) {
        document.getElementById("form").innerHTML = `<button onclick="share()" id="share-button">Share</button>`
        if (gameState == 2) {
            setTimeout(function() {
                Snackbar.show({pos: 'top-center', text: target.name, duration: 5000, showAction: false, width: "max-content"})
            }, animationDelay * 6)
        }
    }
}

// show and hide help window
function showHelp() {
    $("#container").hide()
    $("#how-to-play").show()
    Snackbar.close()
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
}

function hideSettings() {
    $("#container").show()
    $("#settings").hide()
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
    let today = new Date().toISOString().slice(0, 10)
    target = eligibleCities[Math.floor(new Math.seedrandom(today+".")() * eligibleCities.length)]

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

    // load previous guesses
    let lastPlayed = localStorage.getItem("date")
    if (lastPlayed == today) {
        let i = 1
        while (localStorage.getItem(`guess-${i}`)) {
            submit(localStorage.getItem(`guess-${i}`))
            i++
        }
    }
    else {
        localStorage.setItem("date", today)
        for (let i = 1; i <= 6; i++) {
            localStorage.removeItem(`guess-${i}`)
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