const btn = document.getElementById('btn')
const inputs = document.querySelectorAll('.input')
const errorMessage = document.querySelectorAll('span')

btn.addEventListener('click', validate)

function validate() {
    inputs.forEach((input, index) => {
        const value = input.value

        if (value.trim() === '') {
            input.classList.add('error')
            errorMessage[index].classList.remove('desativado')
        } else {
            input.classList.add('preenchido')
            errorMessage[index].classList.add('desativado')
        }
    })
}