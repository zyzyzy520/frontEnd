function add(...args) {
    const fn = function (..._args) {
        return add(...args, ..._args)
    }
    fn.sumOf = function () {
        console.log(addfn(...args));
    }
    return fn;
}
function addfn(...args) {
    return args.reduce((prev, cur) => prev + cur);
}
add(1, 2, 3).sumOf()
add(1)(2)(3).sumOf()
add(1, 2)(3).sumOf()
add(4, 5)(1)(2, 3).sumOf()
add(1, 1)(3)(6).sumOf()
