console.log("Square Pattren:")
let size = 5;
for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
        row += '* ';
    }
    console.log(row);
}
console.log("Triangle Pattern:")
let height = 5;
for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 1; j <= height - i; j++) {
        row += ' ';
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += '*';
    }
    console.log(row);
}
console.log("Diamond Pattern:")
let n = 5;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += '*';
    }
    console.log(row);
}
for (let i = n - 1; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
        row += ' ';
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += '*';
    }
    console.log(row);
}