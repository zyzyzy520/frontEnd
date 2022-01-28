function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c;
        }
    }
}
const fn1 = sum(1);
const fn2 = fn1(2);
const fn3 = fn2(3);

console.log(fn3);