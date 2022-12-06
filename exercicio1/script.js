let conta = 0
let quant = 0
let confirm = prompt("Deseja uma coxinha?\nS para sim e N para não").toUpperCase()

while (confirm == "S"){
    conta += 2.5
    quant += 1
    confirm = prompt(`${quant} coxinha na conta, deseja mais uma?
    S para sim e N para não`).toUpperCase()
}

console.log("Valor a pagar no caixa:","R$"+conta.toFixed(2))