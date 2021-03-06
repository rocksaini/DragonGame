console.log("Welcome to Game ")
score = 0;
cross = true;

heading = document.getElementsByClassName('heading')
sound = new Audio("gameMusic.mp3")

setTimeout(() => {
    sound.play()
}, 1000);

// function for various key 
document.onkeydown = function (e) {
    // console.log("key code is : ", e.keyCode)

    // for uparrow key 
    if (e.keyCode == 38) {
        character = document.querySelector(".character")
        character.classList.add('animateChar')
        setTimeout(() => {
            character.classList.remove('animateChar')
        }, 700);

    }
    // for space bar 
    if (e.keyCode == 32) {
        character = document.querySelector(".character")
        character.classList.add('animateChar')
        setTimeout(() => {
            character.classList.remove('animateChar')
        }, 700);

    }
    // for right key 
    if (e.keyCode == 39) {
        character = document.querySelector(".character");
        cx = parseInt(window.getComputedStyle(character, null).getPropertyValue('left'));
        character.style.left = cx + 110 + "px"
        character.classList.remove('transform')

    }

    // for left key 
    if (e.keyCode == 37) {
        character = document.querySelector(".character");
        cx = parseInt(window.getComputedStyle(character, null).getPropertyValue('left'));
        character.style.left = (cx - 110) + "px"
        character.classList.add('transform')
    }
}

// for determine whether character cross the obstacle or not 
setInterval(() => {
    character = document.querySelector(".character");
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector(".obstacle");
    head = document.querySelector(".heading");

    cx = parseInt(window.getComputedStyle(character, null).getPropertyValue('left'));
    cy = parseInt(window.getComputedStyle(character, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(cx - ox);
    offsetY = Math.abs(cy - oy);

    // console.log(offsetX, offsetY)

    // when charcacter hit obstacle 
    if (offsetX < 90 && offsetY < 115) {
        gameOver.style.visibility = 'visible';
        console.log("game over")
        obstacle.classList.remove('obstacleAni')
        head.classList.remove('headAni')
        sound.pause();
  }

    // when character cross obstacle then update score 
    else if (offsetX < 130 && cross) {
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true
        }, 1000);

        // change aniamtion time 

        setTimeout(() => {
            aniDuration = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDuration = aniDuration - 0.1;
            obstacle.style.animationDuration = newDuration + 's'
            // console.log("new duration is :", newDuration);

            //  slowing obstacle 
            if (newDuration < 3) {
                obstacle.style.animationDuration = 4.25 + 's'
            }
        }, 500);

    }
}, 10);

//  restart relod the page 
function reloadPage() {
    gameOver.style.visibility = 'hidden';
    console.log(" New game")
    obstacle.classList.add('obstacleAni')
    head.classList.add('headAni')
    sound.play();
    score = 0;
    updatescore(score);
}

//  updating score when character cross the obstacle 
function updatescore(score) {
    scoreCount = document.querySelector('.scoreCount')
    scoreCount.innerHTML = "Your score : " + score
}

// function for start game 
function startGame() {
    var x = document.getElementById("help");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    console.log(" New game")
    obstacle.classList.add('obstacleAni')
    head.classList.add('headAni')
    sound.play();
}

