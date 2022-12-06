const num = prompt("Insira um número para obter sua tabuada")

console.log(`Tabuada do ${num}:`)

for(let n = 1; n<=10; n++){
    console.log(`${num}x${n}=${num*n}`)
}