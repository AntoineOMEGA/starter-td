//Player Data
var playerOne = {
    position: {
        x: 320,
        y: 0
    },
    rotation: 180
}

var playerTwo = {
    position: {
        x: -320,
        y: 0
    },
    rotation: 0
}



//Player Functionality
function move (player) {
    player.position.x += 10 * Math.cos(player.rotation * Math.PI / 180);
    player.position.y += 10 * Math.sin(player.rotation * Math.PI / 180);
}

function rotate (player, direction) {
    if ( direction == 0 ) {
        player.rotation += 360/16;
    } else if ( direction == 1 ) {
        player.rotation -= 360/16;
    }
}

//Update Display
setInterval(function () {
    var playerObject = document.getElementById("playerOne");
    playerObject.style.transform = "translate(" + (window.innerWidth/2 - playerOne.position.x) + "px ," + (window.innerHeight/2 - playerOne.position.y) + "px ) rotate(" + (playerOne.rotation + 90) + "deg)";
    var playerObject = document.getElementById("playerTwo");
    playerObject.style.transform = "translate(" + (window.innerWidth/2 - playerTwo.position.x) + "px ," + (window.innerHeight/2 - playerTwo.position.y) + "px ) rotate(" + (playerTwo.rotation + 90) + "deg)";
}, 100);