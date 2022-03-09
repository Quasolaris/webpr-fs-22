/*
|===========================================|
|           TOOLBOX SEBASTIAN GRAU          |
|                   WEBPR                   |
|===========================================|
*/
//-------------------------------------------
// Key input
// Reading user input with arrow keys (here for orientation)
// List of key codes is at the EOF

const north = {dx:  0, dy: -1};
const east  = {dx:  1, dy:  0};
const south = {dx:  0, dy:  1};
const west  = {dx: -1, dy:  0};

let direction = north;

const rightArrow = 39;
const leftArrow  = 37;
const downArrow = 40;
const upArrow = 38;
window.onkeydown = evt => {
    const code = evt.keyCode;
    if(code === rightArrow) {direction = east;}
    else if (code == leftArrow) {direction = west;}
    else if (code == downArrow) {direction = south;}
    else {direction = defaultDirection;}
    moves++;
};
//-------------------------------------------
//Different Lambda functions (taken from week2/lambda/lamda.js)
const id = x => x;
const konst = x => y => x;
const snd = x => y => y;
const M = f => f(f);
const yCombinator = M(M);

// TRUE FALSE
const T = konst;
const F = snd;

const and = p => q => p (q) (p);
const or  = p => q => p (p) (q);
const not = p => p(F)(T);
const xor = p => q => p(not (q)) (q)

// datastructures
const Pair = x => y => f => f(x)(y);
const firstname = konst;
const lastname = snd;

const Left   = x => f => g => f(x);
const Right  = x => f => g => g(x);
const either = id;

const Triple = x => y => z => Pair(Pair(x) (y)) (z);
const tfirstname = konst (konst);
const tlastname = konst (snd);
const tage = snd;
//-------------------------------------------
//Log levels
console.error("error", longRunning("error"));
console.warn ("warn",  longRunning("warn") );
console.info ("info",  longRunning("info") );
console.log  ("log",   longRunning("log")  );
console.debug("debug", longRunning("debug"));
//-------------------------------------------
// Test construction
ok.push(condition);
//-------------------------------------------
// Generate test result report (Taken from week3/lambdaTest.js)
if ( ok.every( elem => elem) ) {
    document.writeln("All "+ ok.length +" tests ok.");
} else {
    document.writeln("Not all tests ok! Details:");
    for (let i = 0; i<ok.length; i++) {
        if(ok[i]) {
            document.writeln("Test "+ i +" ok");
        } else {
            document.writeln("Test "+ i +" failed");
        }
    }
}
//-------------------------------------------


//-------------------------------------------


//-------------------------------------------


//-------------------------------------------


//-------------------------------------------


//-------------------------------------------


//-------------------------------------------


//-------------------------------------------

//-------------------------------------------
// List of key codes for input
/*
alt  18
tab  9
shift   16
enter   13
ctrl   17
home  36
page down  34
end    35
escape  27
page up    33
caps lock   20
pause/break  19
backspace   8
delete  46
right arrow   39
down arrow  40
left arrow  37
up arrow  38
insert  45
0   48
1   49
2   50
3   51
4   52
5   53
6   54
7   55
8   56
9   57
a   65
b   66
c   67
d   68
e   69
f   70
g   71
h   72
i   73
j   74
k   75
l   76
m   77
n   78
o   79
p   80
q   81
r   82
s   83
t   84
u   85
v   86
w   87
x   88
y   89
z   90
select key  93
left window key    91
right window key   92
numpad 0   96
numpad 1   97
numpad 2   98
numpad 3   99
numpad 4   100
numpad 5   101
numpad 6   102
numpad 7   103
numpad 8  104
numpad 9  105
multiply    106
divide  111
decimal point  110
add     107
subtract  109
f1  112
f2  113
f3  114
f4  115
f5  116
f6  117
f7  118
f8  119
f9  120
f10  121
f11  122
f12  123
single quote   222
close bracket   221
open bracket   219
back slash  220
equal sign  187
comma   188
dash    189
period  190
forward slash  191
grave accent  192
num lock  144
scroll lock   145
semi-colon  186
*/
