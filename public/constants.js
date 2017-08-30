const fullscreen = document.getElementById('fullscreen')
const fullscreenImage = document.getElementById('fullscreen-image')
const center = document.getElementById('center')
const topRight = document.getElementById('top-right')
const right = document.getElementById('right')
const bottomRight = document.getElementById('bottom-right')
const bottom = document.getElementById('bottom')
const bottomLeft = document.getElementById('bottom-left')

const displays = [
  { id: 'center', el: center },
  { id: 'top-right', el: topRight },
  { id: 'right', el: right },
  { id: 'bottom-right', el: bottomRight },
  { id: 'bottom', el: bottom },
  { id: 'bottom-left', el: bottomLeft }
]

const works = {
  museum: {
    background: '../images/museum-me/preloads/center.png',
    title: 'museum.me',
    text: `a virtual reality web gallery made for you and only you... log onto facebook and see your glorious photos on display, but don't stare too hard or else dangerous heads will emerge and you will have to defeat then.head over to the wise chimp for a live reading of your statuses.`,
    technologies: 'three.js',
    links: [{ type: 'github', link: 'https://github.com/wiseshrimp' }]
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
