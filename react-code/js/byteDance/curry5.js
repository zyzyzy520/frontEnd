function wrap(fn) {
    console.dir(fn)
}
function add(x, y) {
    return x + y
}
add(1, 2)  //3
wrap(add)

add(1, 2, 3)  // 3
wrap(add)  //6

add(1, 2, 3, 4)
wrap(add)  //10