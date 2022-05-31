let res = 0
function sum(...args) {
    if (args.length == 0) return 0;
    return function (..._args) {
        if (_args.length == 0) {
            return addfn(...args);
        } else {
            return sum(...args, ..._args);
        }

    }
}


function addfn(...args) {
    return args.reduce((prev, cur) => prev + cur);
}

console.log(sum(12)(3)(4)(7, 5)())
console.log(sum())