const daysContainer = document.querySelector('#days')
const hoursContainer = document.querySelector('#hours')
const minutesContainer = document.querySelector('#minutes')
const secondsContainer = document.querySelector('#seconds')
const winterContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')


const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const countdownInterface = ({days, hours, minutes, seconds}) => {
     daysContainer.textContent =  getTimeUnit(days)
     hoursContainer.textContent = getTimeUnit(hours)
     minutesContainer.textContent = getTimeUnit(minutes)
     secondsContainer.textContent = getTimeUnit(seconds)
}

const winter = new Date().getFullYear()
const winterTime = new Date(`June 21 ${winter} 00:00:00`)

winterContainer.textContent = winter

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = winterTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60
    
    countdownInterface({ days, hours, minutes, seconds })
}

const handleCountdownDisplay = () => {
    spinnerLoading.remove()
    countdownContainer.style.display = 'flex'
}

setTimeout(handleCountdownDisplay, 1000)
setInterval(updateCountdown, 1000)