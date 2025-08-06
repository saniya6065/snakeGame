
let snakeArray = [
    {x:10, y:15},
    
]
food = {x:5, y:10}
let gameBody = document.getElementById("gameBody")
let changedCordinate = {x:0, y:0}
let a = 2
let b = 28
let isMovingUp = false
let isMovingDown = false
let isMovingLeft = false
let isMovingRight = false
let prevTime = 0
let speed = 6

// reques animation code 
 function mainFun(currentTime) {
     requestAnimationFrame(mainFun)
   if ((currentTime  - prevTime) / 1000 > 1 / speed) {
      gameFunc()
      prevTime = currentTime
   }
   else{
    return
   }

 }
requestAnimationFrame(mainFun)




function gameFunc(params) {

     if (gameOver()) {
        alert("game over")
        snakeArray = [{x:10, y:15}]
        changedCordinate = {x:0, y:0}
     }

     // moving the snake body if (snakeArray.length  2) {
        for (let i = snakeArray.length - 2; i >=0 ; i--) {
             snakeArray[i +1] = {...snakeArray[i]}
            
           

     }
    // moving the snake head
    snakeArray[0].x += changedCordinate .x
    snakeArray[0].y += changedCordinate .y
   // dispalying the snakebody and head
   gameBody.innerHTML = ""
    for (let i = 0; i < snakeArray.length; i++) {
        let element = document.createElement("div")
        element.style.gridColumnStart = snakeArray[i].x
        element.style.gridRowStart = snakeArray[i].y
       
        if (i == 0) {
           element.classList.add("head") 
        }

        else{

            element.classList.add("snakeBody")
        }
        
        
        gameBody.appendChild(element)

       
        
    }
    
    // displaying food here
    let foodElm = document.createElement("div")
    foodElm.style.gridColumnStart = food.x
    foodElm.style.gridRowStart = food.y
    foodElm.style.backgroundColor = "indigo"
    gameBody.appendChild(foodElm)

    // when snake will eat food this code will run

    if (snakeArray[0].x == food.x && snakeArray[0].y == food.y) {
       
        snakeArray.push({x:snakeArray[0].x + changedCordinate.x ,y:snakeArray[0].y + changedCordinate.y})
        food = {x:Math.round(Math.random() * (b - a) +a ), y:Math.round(Math.random() * (b -a) +a )}
        // while (snakeArray[i].x == food.x || snakeArray[i].y == food.y) {
        //     food = {x:Math.round(Math.random() * (b - a) +a ), y:Math.round(Math.random() * (b -a) +a )}
        // }
       
    }

     window.addEventListener("keydown" , (e) =>{
        switch (e.key) {
            case "ArrowUp":
                isMovingUp = true
                isMovingLeft =false
                isMovingRight =  false
                if (!isMovingDown || snakeArray.length == 1) {
                    changedCordinate = {x: 0, y: -1}
                }
                break;
          case "ArrowDown":
            isMovingDown = true
            isMovingLeft = false
            isMovingRight = false
            if (!isMovingUp  || snakeArray.length  == 1) {
                changedCordinate  = {x: 0, y: 1}
            }
              break;

          case "ArrowLeft":
            isMovingLeft = true
            isMovingUp = false
            isMovingDown = false
            if (!isMovingRight  || snakeArray.length ==  1) {
                changedCordinate  = {x: -1, y: 0}
            }
              break;

          case "ArrowRight":
            isMovingRight  = true
            isMovingUp = false 
            isMovingDown = false
            if (!isMovingLeft  || snakeArray.length ==  1) {
                changedCordinate  = {x: 1, y: 0}
            }
              break;
        }
     })
      
    
    
}




function gameOver(){

    for (let i = 1; i < snakeArray.length; i++) {
       if (snakeArray[i].x == snakeArray[0].x && snakeArray[i].y == snakeArray[0].y) {
        return true
       }
       if (food.x == snakeArray[i] && food.y == snakeArray[i].y) {
        food = {x:Math.round(Math.random() * (b - a) +a ), y:Math.round(Math.random() * (b -a) +a )}
        
    } 
    }
    if (snakeArray[0].x == 1 || snakeArray[0].x == 30 || snakeArray[0].y == 1 || snakeArray[0].y == 30 ) {
      return true
    }
   
    
  return false
   
    
}
