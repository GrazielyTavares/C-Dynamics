function exibirAlerta(id, mensagem){
    const erro = document.getElementById(id);
    if(elemento){
        elemento.textContent = mensagem;
        elemento.innerHTML = `<div class="alert alert-danger">${mensagem}</div>`
    }
}

function limpar(){
    const erros = document.querySelectorAll('.error');
    erros.forEach((element) => {
        element.textContent = '';
    })
}

function ValidarCampos(alerta){

    //Dom
    var fistName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var CPF = document.getElementById('CPF').value.trim();
    var telefone = document.getElementById('telefone').value;
    var tiposP = document.getElementById('tipos').value;
   

    // Validação dos campos
    if(fistName === '' && lastName === ''){
        console.log("Nome vazio/inválido");
        alerta('Erro no campo Nome', 'Campo de Nome é obrigatório');
    }


    if(CPF === '' || CPF.length !== 11 || isNaN(CPF)){
        console.log("CPF vazio/inválido, utilizar somente números");
        alerta('Erro no campo CPF', 'CPF inválido, utilizar somente números')
    }

    
    if(telefone === '' || telefone.length !== 11 || isNaN(telefone)){
        console.log("Telefone vazio/inválido");
        alerta('Erro no campo Telefone', 'Telefone inválido, utilizar somente números')
    }

} 

document.getElementById('butao').addEventListener('click', function(event) {
    event.preventDefault();
    ValidarCampos(alert);
})



