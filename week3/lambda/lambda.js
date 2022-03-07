const id = x => x;
const konst = x => y => x;
const snd = x => y => y;
//const M = f => f(f);
//const yCombinator = M(M);

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
// ----- special -----

const Tuple = n => [
    parmStore (n + 1) ( [] ) (parms => parms.reduce( (accu, it) => accu(it), parms.pop() ) ), // ctor
    ...Array.from( {length:n}, (it, idx) => iOfN (n) (idx) () )                    // selectors
];

const iOfN = n => i => value => // from n curried params, take argument at position i,
    n === 0
    ? value
    : x => iOfN (n-1) (i-1) ( i === 0 ? x : value );


const parmStore = n => args => onDone =>  // n args to come
    n === 0
    ? onDone(args)
    : arg => parmStore(n - 1)([...args, arg]) (onDone); // store parms in array

const Choice = n => [
    ...Array.from( {length:n}, (it, idx) => parmStore(n+1) ([]) (parms => parms[idx+1] (parms[0]) ) ), // ctors
    id
];




