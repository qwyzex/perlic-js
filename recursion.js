const foo = () => {
    var n = 1;       // initial value
    console.log(n); 
    foo()            // recursion loop
}

foo()                // calling the function