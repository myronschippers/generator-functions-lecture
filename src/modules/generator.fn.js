
function* myGenerator() {
    yield true
    yield 100
    yield 'Hello'
    yield [1, 2, 3,]
    yield { key: 'value' }
}

const goKittyGo = myGenerator();

console.log(goKittyGo.next());
console.log(goKittyGo.next());
console.log(goKittyGo.next());
console.log(goKittyGo.next());
console.log(goKittyGo.next());
console.log(goKittyGo.next());

function* countDownGenerator() {
    let count = 10;
    while (count > 0) {
        yield `Launching in ${count}`;
        count -= 1;
    }
    yield `Take OFF!!!`;
}

const countDownNow = countDownGenerator();
console.log(countDownNow.next());
console.log(countDownNow.next());
console.log(countDownNow.next());
console.log(countDownNow.next());
console.log(countDownNow.next());
console.log(countDownNow.next());
console.log(countDownNow.next());
console.log(countDownNow.next());
console.log(countDownNow.next());
console.log(countDownNow.next());
console.log(countDownNow.next());
console.log(countDownNow.next());







export {};