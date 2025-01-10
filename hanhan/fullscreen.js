let is_fullscreen = false

function toggleFullscreen() {
    is_fullscreen = !is_fullscreen
    is_fullscreen ? document.documentElement.requestFullscreen() : document.exitFullscreen()
    console.log('is_fullscreen', is_fullscreen)
}


function enterFullscreen() {
    is_fullscreen = true
    document.documentElement.requestFullscreen()
}

function exitFullscreen() {
    is_fullscreen = false
    document.exitFullscreen()
}