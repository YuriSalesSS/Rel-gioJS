let relogio = document.getElementById('relogio')
let display = document.getElementById('display')



function horario(){
    let data = new Date()
let horas = String (data.getHours()).padStart(2, "0")
let minutos = String(data.getMinutes()).padStart(2, "0")
let segundos = String (data.getSeconds()).padStart(2, "0")

    display.textContent = `${horas}:${minutos}:${segundos}`
}

setInterval(horario, 1000)