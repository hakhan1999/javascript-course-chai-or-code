// My Own Method 
function calculateBMI() {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const weight = parseFloat(document.querySelector('#weight').value)
        const height = parseFloat(document.querySelector('#height').value)
        const result = document.querySelector('#results')
        const resultGuide = document.querySelector('#weight-guide p')
        const resultValue = (weight / ((height / 100) ** 2)).toFixed(2)

        if (weight === '' || weight <= 0 || isNaN(weight)) {
            result.innerHTML = `Please enter valid weight`
        }

        else if (height === '' || height <= 0 || isNaN(height)) {
            result.innerHTML = `Please enter valid height`
        }

        else {
            result.innerHTML = `Your BMI is ${resultValue}`
        }

        if (resultValue <= 18.6) {
            resultGuide.textContent = 'You are under weight. BMI is less than or equal to 18.6'
        }

        else if (resultValue > 18.6 && resultValue <= 24.9) {
            resultGuide.textContent = "Your BMI is normal (Between 18.6 and 24.9)"
        }

        else if (resultValue > 24.9) {
            resultGuide.textContent = 'You are overweight. BMI is greater than 24.9'
        }

        else {
            resultGuide.textContent = ''
        }
    })
}

calculateBMI()