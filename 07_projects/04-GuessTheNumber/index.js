function guessTheNumber() {
    let randomNumber = Math.floor((Math.random() * 100 + 1))
    const submit = document.querySelector('#subt')
    const userInput = document.querySelector('#guessField')
    const guessSlot = document.querySelector('.guesses')
    const remaining = document.querySelector('.lastResult')
    const lowOrHi = document.querySelector('.lowOrHi')
    const startOver = document.querySelector('.resultParas')
    const p = document.createElement('p')
    console.log(randomNumber)

    let prevGuess = []
    let numGuess = 1
    let playGame = true

    if (playGame) {
        submit.addEventListener('click', (e) => {
            e.preventDefault()
            const guess = parseInt(userInput.value)
            validateGuess(guess)
        })
    }

    function validateGuess(guess) {
        if (isNaN(guess)) {
            alert('Please enter a valid number')
        }
        else if (guess < 1) {
            alert('Please enter a number greater than 0')
        }

        else if (guess > 100) {
            alert('Please enter a number less than 100')
        }

        else {
            prevGuess.push(guess)
            if (numGuess === 10) {
                displayguess(guess)
                displayMessage(`Game over. Random number was ${randomNumber}`)
                endGame()
            }
            else {
                displayguess(guess)
                checkGuess(guess)
            }
        }
    }

    function checkGuess(guess) {
        if (guess === randomNumber) {
            displayMessage(`You guessed it right`)
            endGame()
        }
        else if (guess < randomNumber) {
            displayMessage(`Your number is low`)
        }

        else if (guess > randomNumber) {
            displayMessage(`Your number is high`)
        }
    }


    function displayguess(guess) {
        userInput.value = ''
        guessSlot.innerHTML += `${guess},`
        numGuess++
        remaining.innerHTML = `${11 - numGuess}`
    }

    function displayMessage(message) {
        lowOrHi.innerHTML = `<p>${message}</p>`
    }

    function endGame() {
        userInput.value = ''
        userInput.setAttribute('disabled', '')
        p.classList.add('button')
        p.innerHTML = '<h2 id="newGame">Start new game</h2>'
        startOver.appendChild(p)
        playGame = false
        newGame()
    }

    function newGame() {
        const newGameBtn = document.querySelector('#newGame')
        newGameBtn.addEventListener("click", () => {
            randomNumber = Math.floor((Math.random() * 100 + 1))
            prevGuess = []
            numGuess = 1
            guessSlot.innerHTML = ''
            remaining.innerHTML = `${11 - numGuess}`
            userInput.removeAttribute('disabled')
            startOver.removeChild(p)
            playGame = true
        })
    }
}

guessTheNumber()