let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

// Check if dark mode is the one used before
if (!document.cookie.includes('dark=false')) 
    enableDarkmode()

function enableDarkmode() {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
    document.cookie = 'dark=true' // Set cookie
}

function disableDarkmode() {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
    document.cookie = 'dark=false' // Set cookie
}

function toggleDarkmode() {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
}