
/*for(var i = 0; i < num.length; i++) {
    console.log(`${i + 1}º valor: ${num[i]}`)
} */

var count = 1
for(let pos in num) {
    console.log(`${count++}º valor: ${num[pos]}`)
}