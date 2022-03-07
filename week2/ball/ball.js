
const radius = 10;
const ball = {x:20, y:0, dx: 5, dy: 1};
let   old  = {x: ball.x, y: ball.y};

function start() {
    const canvas  = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    context.fillStyle = "black";

    setInterval(() => {
        nextBoard();
        display(context);
    }, 1000 / 20);
}

function nextBoard() {
    // keep old ball values for the sake of efficient clearing of the old display

    // handle ball is hitting the bounds
    //   reverse direction
    //   lose some energy relative to the current inertia (only velocity varies)

    // calculate new position
    // calculate any changes in velocity due to gravitational pull or medium resistance

    old.x = ball.x;
    old.y = ball.y;

    if(ball.y >= 390 && ball.dy > 0) {
        ball.dy -= 4;
        ball.dy *= 1;
    }


    if(ball.y <= 10 && ball.dy < 0 || ball.x >= 390 && ball.dx > 0) {
        ball.dx -= 4;
        ball.dx *= 1;
    }

    ball.x += ball.dx;
    ball.y = ball.dy;
    ball.y = Math.min(390, ball.y);
    ball.dy += 1.5 ;
}

function display(context) {
    context.clearRect(old.x - radius - 1 , old.y - radius -1 , 22, 22 );
    fillBox(context)
}

function fillBox(context) {
    context.beginPath();
    context.arc(ball.x, ball.y, radius, 0, 6.3, false);
    context.fill();
}


