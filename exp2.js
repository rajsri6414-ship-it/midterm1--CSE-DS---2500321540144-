console.log("1. Start");

setTimeout(() => {
    console.log("2. setTimeout 0");
}, 0);

setTimeout(() => {
    console.log("3. setTimeout 2 sec");
}, 2000);

setImmediate(() => {
    console.log("4. setImmediate");
});

process.nextTick(() => {
    console.log("5. process.nextTick");
});

console.log("6. End");