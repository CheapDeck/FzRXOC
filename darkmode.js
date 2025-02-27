let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

// Check if the cookie is set to "dark=false"
if (!document.cookie.includes('dark=false')) 
    enableDarkmode()

function enableDarkmode() {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
    document.cookie = 'dark=true'
}

function disableDarkmode() {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
    document.cookie = 'dark=false'
}

function toggleDarkmode() {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
}