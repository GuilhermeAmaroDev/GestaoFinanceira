


function calculaSalario (){
    let salario = document.getElementById('txt1')
    let salario2 = Number(salario.value)
    let contas = document.getElementById ('txt2')
    let contas2 = Number(contas.value)
    let semanas = document.getElementById('txt3')
    let semanas2 = Number(semanas.value)

    let saldo = salario2 - contas2;
    let saldoSemanal;
   let res = document.getElementById ('res')
   
    if (semanas2 === 5)
    {  saldoSemanal = saldo / 5
    res.innerHTML = `Você possui R$ ${saldoSemanal} por semana, gaste com consciência`
    if (saldoSemanal < 0) {
        res.innerHTML = `<p>
        Poxa, você está negativo neste mês. Cuide da sua saúde financeira! <br>
        Você possui R$ ${saldoSemanal} por semana, gaste com consciência`
    }
         } 
     else if (semanas2 === 4)
    {  saldoSemanal = saldo / 4
        res.innerHTML = `Você possui R$ ${saldoSemanal} por semana, gaste com consciência `
    if (saldoSemanal < 0) {
        res.innerHTML = `<p>
        Poxa, você está negativo neste mês. Cuide da sua saúde financeira! <br>
        Você possui R$ ${saldoSemanal} por semana.`
    }
    } 
     else if (semanas != 5 && 4) {
    res.innerHTML = `Confira a quantidade de semanas entre o recebimento do salário atual e o próximo e calcule novamente`
       
    }
}


