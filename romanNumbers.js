// Реализовать создание следующей записи ;]
// ...

const fromRoman = (number) => {
    const ROMAN_ALPHABET = {I: 1, II: 2, III: 3, IV: 4, V: 5,
                            VI: 6, VII: 7, VIII: 8, IX: 9, X: 10,
                            L: 50, C: 100, D: 500, M: 1000};
    const DIGITS = Object.keys(ROMAN_ALPHABET);

    return number.toUpperCase()
        .split('')
        .reduce((result, current, index) => {
            (DIGITS.indexOf(current) < DIGITS.indexOf(number.charAt(index + 1).toUpperCase())) ?
                result -= ROMAN_ALPHABET[current] :
                result += ROMAN_ALPHABET[current];
            return result;
        }, 0);
}

const createArray = (start, end) => {
    const arr = [];
    for (let i = start; i < end; i++) {
        arr.push(i);
    }
    return arr;
}

const handler = {
    get: function (target, name, receiver) {
        const value = fromRoman(name);
        if (value) {
            return createArray(receiver.valueOf(), value);
        }
        return target[name];
    }
}

Number.prototype.__proto__ = new Proxy(Number.prototype.__proto__, handler);


console.log(0..V); // [0, 1, 2, 3, 4];
console.log(0..VII); // [0, 1, 2, 3, 4, 5, 6];
