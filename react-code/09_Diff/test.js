// * promise
function foo() {
    console.log(1)
    setTimeout(() => {
        console.log(2)
    }, 0)
    new Promise(() => console.log(3))
    console.log(4)
}

foo()
  // 1 3 4 2