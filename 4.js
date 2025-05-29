
const protoGreet = {
    sayHi(msg) {
        return msg + ', ' + this.toString() + '!';
    }
};

function makeGreetObj(nameStr) {
    let obj = Object.create(protoGreet);
    obj._name = nameStr;
    obj.toString = function() {
        return this._name;
    };
    return obj;
}

const person = makeGreetObj('Oleg');
console.log(person.sayHi('Hello'));