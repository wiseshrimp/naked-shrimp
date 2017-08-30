var isActive = null
var isCleared = false
var bottom = document.getElementById('bottom')
var bottomLeft = document.getElementById('bottom-left')
var bottomRight = document.getElementById('bottom-right')
var middle = document.getElementById('center')
var fullscreen = document.getElementById('fullscreen')
var fullscreenImage = document.getElementById('fullscreen-image')
var logoContainer = document.getElementById('logo-container')
var right = document.getElementById('right')
var topRight = document.getElementById('top-right')

var socialMediaLinks = document.getElementById('sm-container')

var displays = [
  { id: 'center', el: middle },
  { id: 'top-right', el: topRight },
  { id: 'right', el: right },
  { id: 'bottom-right', el: bottomRight },
  { id: 'bottom', el: bottom },
  { id: 'bottom-left', el: bottomLeft }
]

var works = {
  museum: {
    background: '../images/museum-me/preloads/center.png',
    title: 'museum.me',
    text: `a virtual reality web gallery made for you and only you... log onto facebook and see your glorious photos on display, but don't stare too hard or else dangerous heads will emerge and you will have to defeat then.head over to the wise chimp for a live reading of your statuses.`,
    technologies: 'three.js',
    links: [{ type: 'link', link: 'http://museum-me.me/museum' }, { type: 'github', link: 'https://github.com/wiseshrimp/museum-me' }]
  },
  player: {
    background: '../images/ep-player/preloads/center.png',
    title: 'entrypoint:player',
    text: `a web 360/VR player, meaning no app download required on the user's end, to help spread webVR content. record 180 & 360 gifs during the experience. multi-platform, mobile-first development.`,
    technologies: 'react, redux, three.js, aws, serverless, ffmpeg, mpeg-dash, graphql, sql',
    links: [{ type: 'entrypoint', link: 'https://entrypointvr.com' }]
  },
  editor: {
    background: '../images/ep-editor/preloads/center.png',
    title: 'entrypoint:editor',
    text: `an editor that allows content creators to drag-and-drop elements, such as images, gifs, text, and portals, onto a 360 video to teleport to other 360 videos, creating a powerful means of 360/VR storytelling. content creators are able to create immersive, interactive experiences without programming and distribute their content anywhere on the web to wherever their audience is.`,
    technologies: 'react, redux, three.js, aws, serverless, ffmpeg, mpeg-dash, graphql, sql',
    links: [{ type: 'entrypoint', link: 'https://entrypointvr.com' }]
  }
}

function init () {
  let headers = document.getElementsByClassName('work-header')
  let navs = document.getElementsByClassName('nav')
  Array.prototype.map.call(headers, header => {
    if (!isTouch) {
      header.addEventListener('mouseenter', onMouseEnter)
    }
    header.addEventListener('click', onActivateWork)
  })
  Array.prototype.map.call(navs, nav => {
    nav.addEventListener('click', onNavClick)
  })
}

function clear () {
  displays.forEach(display => {
    display.el.classList.remove('fade')
    display.el.style.background = 'none'
    display.el.innerHTML = ''
  })
  displays[0].el.classList.remove('grow')
  displays[0].el.removeEventListener('click', onPlayerDemo)
  displays[0].el.removeEventListener('click', onFullScreen)
  if (document.getElementById('resume')) {
    document.getElementById('resume').removeEventListener('click', onResumeFullScreen)
  }
  isCleared = true
}

function is_touch_device() {
  return 'ontouchstart' in window        // works on most browsers 
      || navigator.maxTouchPoints       // works on IE10/11 and Surface
}

var isTouch = is_touch_device()

function goHome () {
  clear()
  logoContainer.classList.remove('minimize')
  logoContainer.classList.add('center')
  socialMediaLinks.style.visibility = 'visible'
  isActive = null
}

function quitFullscreen() {
  fullscreen.style.visibility = 'hidden'
  fullscreen.removeEventListener('click', quitFullscreen)
}

function onActivateWork(ev) {
  if (logoContainer.classList.contains('center')) {
    socialMediaLinks.style.visibility = 'hidden'
    logoContainer.classList.remove('center')
    logoContainer.classList.add('minimize')
  }
  let type
  if (typeof ev === 'string') {
    type = ev
  } else {
    type = ev.target.dataset.type
    ev.target.removeEventListener('mouseout', onMouseOut)
  }
  clear()
  isActive = type
  middle.style.background = `url(${works[type].background}) center no-repeat`
  middle.style.backgroundSize = 'cover'
  displays[1].el.innerText = works[type].title
  if (isActive === 'player') {
    displays[0].el.innerHTML += `<div id="player-overlay">Click here for a screencast demo of the player.</div>`
    displays[0].el.addEventListener('click', onPlayerDemo)
  } else {
    displays[0].el.addEventListener('click', onFullScreen)
  }
  middle.classList.add('grow')
  displays[2].el.innerHTML = `
    <div class="work-text">${works[type].text}
      <div class="technologies">
      <b>technologies:</b> ${works[type].technologies}
      </div>
    </div>
  `

  works[type].links.forEach(link => {
    let aLink = document.createElement('a')
    let linkText = document.createTextNode(link.type)
    aLink.appendChild(linkText)
    aLink.href = link.link
    displays[4].el.appendChild(aLink)
  })
  isCleared = false
}

function onFullScreen () {
  let prefix = isActive === 'museum' ? '' : 'ep-'
  let suffix = isActive === 'museum' ? '-me' : ''
  fullscreenImage.style.background = `url(../images/${prefix}${isActive}${suffix}/preloads/center.png) center no-repeat`
  fullscreenImage.style.backgroundSize = 'contain'
  fullscreen.style.visibility = 'visible'
  fullscreen.addEventListener('click', quitFullscreen)
}

function onResumeFullScreen () {
  fullscreenImage.style.background = 'url(../images/resume.png) center no-repeat'
  fullscreenImage.style.backgroundSize = 'contain'
  fullscreen.style.visibility = 'visible'
}

function onMouseEnter(ev) {
  if (!isCleared) {
    clear()
  }
  if (logoContainer.classList.contains('center')) {
    socialMediaLinks.style.visibility = 'hidden'
    logoContainer.classList.remove('center')
    logoContainer.classList.add('minimize')
  }
  switch (ev.target.dataset.type) {
    case 'museum':
      displays.forEach(display => {
        display.el.classList.add('fade')
        display.el.innerHTML = ''
        display.el.style.background = `url(../images/museum-me/preloads/${display.id}.png) center no-repeat`
        display.el.style.backgroundSize = 'cover'
      })
      break
    case 'editor':
    case 'player':
      displays.forEach(display => {
        display.el.classList.add('fade')
        display.el.innerHTML = ''
        display.el.style.background = `url(../images/ep-${ev.target.dataset.type}/preloads/${display.id}.png) center no-repeat`
        display.el.style.backgroundSize = 'cover'
      })
      break
    default:
      break
  }
  ev.target.addEventListener('mouseout', onMouseOut)
  isCleared = false
}

function onMouseOut(ev) {
  clear()
  onActivateWork(ev.target.dataset.type)
  ev.target.removeEventListener('mouseout', onMouseOut)
}

function onNavClick (ev) {
  if (isActive) {
    clear()
  }
  if (logoContainer.classList.contains('center')) {
    logoContainer.classList.remove('center')
    logoContainer.classList.add('minimize')
    socialMediaLinks.style.visibility = 'hidden'
  }
  let type = typeof ev === 'string' ? ev : ev.target.dataset.type
  isActive = type
  switch (type) {
    case 'about':
      middle.innerHTML = `<div id="about"><div class="cell">freelance software developer / multimedia artist <br>b. 1994 in los angeles / lives in new york city<br>mostly working with software, hardware, projections, sound, video, polyethylene, acrylic, virtual spaces, & wood <br>open to collaborations :)</div></div>`
      break
    case 'resume':
      middle.innerHTML = `<div class="full"><div class="resume-container full"><div id="resume" class="border"></div><br><a href="./Roh_Sue.pdf" download>download</a></div></div>`
      document.getElementById('resume').addEventListener('click', onResumeFullScreen)
      break
    case 'contact':
      middle.innerHTML = `
        <div class="contact">
          please e-mail <a href="mailto:sueroh@gmail.com">sueroh@gmail.com</a> for any inquiries
        </div>
      `
  }
}

function onPlayerDemo () {
  displays[0].el.innerHTML = `<iframe src="https://player.vimeo.com/video/231238151" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`
  displays[0].el.removeEventListener('click', onPlayerDemo)
}

init()
