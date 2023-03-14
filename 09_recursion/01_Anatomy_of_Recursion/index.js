let counter = 0;
function recursion() {
    console.log(counter);
    if(counter > 3) {
        return "done!";
    }
    counter++;

    // return recursion()としないとdone!は帰ってこない
    recursion();
}

// 1 recursion(recursion(recursion(recursion())))
// 2 recursion(recursion(recursion(done!)))
// 3 recursion(recursion(none))
// 4 recursion(none)
