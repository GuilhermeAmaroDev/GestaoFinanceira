function calculaSemana () {
    let item = document.getElementById('txt1').value
    let valor = document.getElementById ('txt2')
    let valor2 = Number(valor.value)

    let orcSemanal = document.getElementById ('txt3')
    let orcSemanal2 = Number(orcSemanal.value)

    let res = document.getElementById ('res')
    let saldo2 = orcSemanal2 - valor2
    localStorage.setItem("orçamento", saldo2)
    let compras = localStorage.getItem("orçamento")
    
    
   if (!item || !valor2 || !orcSemanal2 ) {
    res.innerHTML += ""
    res.innerHTML += `Adicione as informações para calcular seu orçamento semanal`
   }
    else if  (saldo2 < 0) {
        res.innerHTML += ""
        res.innerHTML = `Você está negativado nesta semana! Você já gastou mais do que poderia e agora possui R$ ${saldo2}`
    } else  {
        res.innerHTML += "<br>"
        res.innerHTML += `Você comprou o item ${item} e possui agora R$ ${saldo2} no seu saldo semanal`
    } 
   
}

