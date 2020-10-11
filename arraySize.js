// Реализовать свойство `size`  у всех массивов,
// которое работало бы точно так же, как и `length`.

const MAX_SIZE = 4294967296; // pow(2, 32)

Object.defineProperty(Array.prototype, 'size', {
    get: function() {
        return this.length;
    },

    set: function(newSize) {
        const oldSize = this.size;

        if (newSize < 0 || newSize > MAX_SIZE) {
            throw new RangeError('Invalid array size');
        }

        if (newSize < this.size) {
            for (let i = 0; i < (oldSize - newSize); i++) {
                this.pop();
            }
        }

        if (newSize > this.size) {
            for (let i = 0; i < (newSize - oldSize); i++) {
                this.push(undefined);
            }
        }
    }
});

// #1
console.log([0, 1].size); // 2

// #2
var arr = [0, 1, 2];
arr.size = 0;
console.log(arr); // []
