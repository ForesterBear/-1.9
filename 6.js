
const heroes = [
    { name: 'barney', age: 36 },
    { name: 'fred', age: 40 }
];

function getField(arr, key) {
    return arr.map(item => item[key]);
}

console.log(getField(heroes, 'name'));
