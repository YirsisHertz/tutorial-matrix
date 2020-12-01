const element = document.querySelector("#canvas")
const ctx = element.getContext('2d')

const width = document.body.clientWidth
const height = document.body.clientHeight

element.width = width
element.height = height

const position = Array(300).join(0).split('')

const initMatrix = () => {
  
  ctx.fillStyle = 'rgba(0,25,2,0.15)'
  ctx.fillRect(0, 0, width, height)
  ctx.fillStyle = '#4caf50'

  ctx.font = '11pt'

  position.map((y, index) => {
    const text = String.fromCharCode(1e5 + Math.random() * 30)
    const x = (index * 15) + 15

    canvas.getContext('2d').fillText(text, x, y);

    (y > 100 + Math.random() * 1e5) ? position[index] = 0 : position[index] = y + 15 

  })

}

setInterval(initMatrix, 50)
