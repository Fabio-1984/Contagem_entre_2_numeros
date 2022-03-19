

function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Não é possível contar!`
        //window.alert('[ERRO] Verifique se todos os campos foram preenchidos.')
    } else {
        res.innerHTML = `Contando: <br> `
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido: Sera considerado o passo 1')
            p = 1
        }

        if (i < f) {
             //Contagem em ordem crescente
            for (var c = i; c <= f; c += p) {

                res.innerHTML += ` ${c} ➡️ `

            }

           

        } else {
            //Contagem em ordem decrescente
            for (var c = i; c >= f; c -= p) {

                res.innerHTML += ` ${c} ➡️ `

            }

           

        }

        res.innerHTML += `🏁`

    }

}