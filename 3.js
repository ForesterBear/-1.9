
class Rand {
    
    static float(min, max) {
        return min + Math.random() * (max - min);
    }
    
    static int(min, max) {
        return Math.floor(min + Math.random() * (max - min));
    }
    
    static pick(arr) {
        if (!arr.length) throw new Error('Масив порожній');
        return arr[Rand.int(0, arr.length)];
    }
}

console.log(Rand.float(5, 10));
console.log(Rand.int(5, 10));
console.log(Rand.pick([5, 10, 15, 15]));