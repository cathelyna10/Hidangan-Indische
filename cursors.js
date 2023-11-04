const cursorTag = document.querySelector("div.cursors")
const ball = cursorTag.querySelectorAll("div")

let aimX = 0
let aimY = 0

balls.forEach(ball, index) => {
let currentX = 0
let currentY = 0

let speed = 0.03 - index * 0.015
const animate = function(){
	currentX+= (aimX - current X * speed
	currentY += (aimY - currentY *speed)


ball.style.left = currentX+"px"
ball.style.top = currentY + "px"
	requestAnimationFrame(animate)
}
})





document.addEventListener("mousemove", function(event){
	aimX = event.pageX 
aimY = event.pageY 
})