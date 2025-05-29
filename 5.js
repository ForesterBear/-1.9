
function makeSeq(init = 0, delta = 1) {
    let val = init;
    return function() {
        val += delta;
        return val;
    };
}

const seq = makeSeq(10, 3);
console.log(seq());
console.log(seq());
console.log(seq());