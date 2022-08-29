
function foo() {
    const v = 3;
    return () => {
        console.log(v);
    }
}

const x = foo();
