document.addEventListener('DOMContentLoaded', ()=> {
    const scoreDisplay=document.getElementById('score')
    const width=28
    let score=0
    const grid=document.querySelector('.grid')
    //0- pac-dots
    //1- wall
    //2-gost-lair
    //3-power-pellet
    //4-empty
    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]
//create board
    const squares=[]
    function createBoard(){
        for (let i=0;i<layout.length;i++){
         const square=document.createElement('div')
            square.id =  i;
            grid.appendChild(square)
            squares.push(square)

            //add  layout to square
            if(layout[i]===0){
                squares[i].classList.add('pac-dot')
            }
            if(layout[i]===1){
                squares[i].classList.add('wall')
            }
            if(layout[i]===2){
                squares[i].classList.add('gost-lair')
            }
            if(layout[i]===3){
                squares[i].classList.add('power-pellet')
            }
        }
    }
    createBoard()

    //create characters
    // draw pac man to the board
    let pacmanCurrentIndex=490
    squares[pacmanCurrentIndex].classList.add('pac-man')

    function movePacman(e){
          squares[pacmanCurrentIndex].classList.remove('pac-man')
          switch (e.key){
              case 'ArrowLeft':
                  if( pacmanCurrentIndex % width !==0 &&
                      !squares[pacmanCurrentIndex -1].classList.contains('wall') &&
                      !squares[pacmanCurrentIndex -1].classList.contains('ghost-lair')){
                      pacmanCurrentIndex -= 1
                  }
                  if(squares[pacmanCurrentIndex -1] === squares[363]){
                      pacmanCurrentIndex = 391
                  }
                  break
              case 'ArrowRight':
                  if ( pacmanCurrentIndex % width < width -1 &&
                      !squares[pacmanCurrentIndex +1].classList.contains('wall') &&
                      !squares[pacmanCurrentIndex +1].classList.contains('ghost-lair')
                  ){
                      pacmanCurrentIndex +=1
                  }
                  if(squares[pacmanCurrentIndex +1] === squares[392]){
                      pacmanCurrentIndex = 364
                  }
                  break
              case 'ArrowUp':
                  if(
                      pacmanCurrentIndex - width >= 0 &&
                      !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
                      !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')
                  ){
                      pacmanCurrentIndex -= width
                  }

                  break
              case 'ArrowDown':
                  if(
                      pacmanCurrentIndex + width < width * width  &&
                      !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
                      !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')
                  ){
                      pacmanCurrentIndex +=width
                  }

                  break
          }
          squares[pacmanCurrentIndex].classList.add('pac-man')
           pacDotEaten()
           powerPelletEaten()
          // checkForGameOver()
          checkForWin()
    }
    document.addEventListener('keyup',movePacman)


   //what Happens When Eaten a pacdot
    function pacDotEaten(){
        if(squares[pacmanCurrentIndex].classList.contains('pac-dot')){
            score++
            scoreDisplay.innerHTML = score
            squares[pacmanCurrentIndex].classList.remove('pac-dot')
        }
    }

    //what Happens When Eaten a powerPelletEaten
    function powerPelletEaten(){
        if(squares[pacmanCurrentIndex].classList.contains('power-pellet')){
            score+=10
            scoreDisplay.innerHTML = score
            ghosts.forEach(ghost =>ghost.isScared = true)
            setTimeout(unScareGhost, 10000)
            squares[pacmanCurrentIndex].classList.remove('power-pellet')
        }
    }

    //make gost stop flash
    function unScareGhost(){
        ghosts.forEach(ghost=>ghost.isScared = false)
    }
    //create ghosts using constructor
    class  Ghost{
        constructor(className,startIndex,speed) {
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.isScared = false
            this.timerId = NaN
        }
    }

    const ghosts = [
        new Ghost ('blinky1',348,258),
        new Ghost ('pinky',378,400),
        new Ghost ('inky',351,300),
        new Ghost ('clyde',379,500)
    ]

    //draw ghosts in the board

    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className,'ghost')

    })

    //move ghosts randomly
    ghosts.forEach(ghost => moveGhost(ghost))

    function moveGhost(ghost){
        //console.log(ghost)
        const directions = [-1,+1,-width,+width]
        let direction=directions[Math.floor(Math.random() * directions.length)]

        ghost.timerId = setInterval(function (){
            //no ghost no wall
            if(
                !squares[ghost.currentIndex + direction].classList.contains('ghost') &&
                !squares[ghost.currentIndex + direction].classList.contains('wall')
            ){
                squares[ghost.currentIndex].classList.remove(ghost.className,'ghost','scared-ghost')
                ghost.currentIndex += direction
                squares[ghost.currentIndex].classList.add(ghost.className,'ghost')
            }else direction=directions[Math.floor(Math.random() * directions.length)]
            //only if ghost is scared
            if(ghost.isScared){
                squares[ghost.currentIndex].classList.add('scared-ghost')
            }

            //if ghost is scared and pacman on it

            if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')){
                ghost.isScared = false
                squares[ghost.currentIndex].classList.remove(ghost.className,'ghost','scared-ghost')
                ghost.currentIndex = ghost.startIndex
                score +=100
                scoreDisplay.innerHTML = score
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')

            }

            //check for game over
            checkForGameOver()
        },ghost.speed)

        //check for game over
        function checkForGameOver(){
            if(squares[pacmanCurrentIndex].classList.contains('ghost') &&
             !squares[pacmanCurrentIndex].classList.contains('scared-ghost'))
            {
                ghosts.forEach(ghost => clearInterval(ghost.timerId))
                document.removeEventListener('keyup',movePacman)
                setTimeout(function (){alert('Game Over')},500)

            }
        }



    }
    function checkForWin()
    {
        if(score >= 274){
            ghosts.forEach(ghost=> clearInterval(ghost.timerId))
            document.removeEventListener('keyup',movePacman)
            setTimeout(function (){alert('You Win')},500)

        }
    }
})