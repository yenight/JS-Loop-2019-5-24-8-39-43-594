for (let i = 1; i <= 9; i++) {
    var arr = []
    for (let j = 1; j<= i; j++) {
        arr.push(i + "*" + j + "=" + i * j)
    }
    console.log(arr.join(' ') + '\n')
}
