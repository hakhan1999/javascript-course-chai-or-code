const buttons = document.querySelectorAll('.button')
const body = document.body

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonColor = button.getAttribute('id')
        body.style.backgroundColor = `${buttonColor}`
    })
})