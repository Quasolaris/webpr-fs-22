const snakeOk = [];

const a = Pair(0)(1);
const b = Pair(2)(3);
const c = Pair(2)(4);


//  before start, snake is in start position
    snakeOk.push(pairEq(c) (c));


//  after one step, snake has moved up
    nextBoard();
    snakeOk.push(pairEq(b ) (b));

//  before eating food, snake is of size 4
    snakeOk.push(snake.length === 4);

//  after eating food, snake has grown in size
    food = Pair(10)(3);
    nextBoard();
    snakeOk.push(snake.length === 5);

//  current direction is north
    snakeOk.push(direction === north);

//  when I go clockwise, I end up east
    changeDirection(clockwise);
    snakeOk.push(direction === east);

//  going counterclockwise, we end up north again
    changeDirection(countercw);
    snakeOk.push(direction === north);

// test result report
if ( snakeOk.every(elem => elem) ) {
    document.writeln("All " + snakeOk.length + " tests ok.");
} else {
    document.writeln("Not all tests ok! Details:");
    for (let i = 0; i < snakeOk.length; i++) {
        if(snakeOk[i]) {
            document.writeln("Test "+ i +" ok");
        } else {
            document.writeln("Test "+ i +" failed");
        }
    }
}