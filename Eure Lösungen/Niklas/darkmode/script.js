darkMode = false

if (darkMode) {
    document.getElementById("bodyId").style.backgroundColor = "black"
    // If the site is in dark mode by default, the background set to black.
} else {
    document.getElementById("bodyId").style.backgroundColor = "white"
    // If the site is not in dark mode by default, the background is set to white.
}

function toggleDarkMode() {
    if (darkMode) {
        document.getElementById("bodyId").style.backgroundColor = "white"
        darkMode = false
    } else {
        document.getElementById("bodyId").style.backgroundColor = "black"
        darkMode = true
    }
}
