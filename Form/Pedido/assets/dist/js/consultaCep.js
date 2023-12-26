function buscarCEP(){

    const cep = document.getElementById('cepInput').value.trim().replace('-', '');
    // const cepInput = document.getElementById('cepInput');

    // cepInput.addEventListener('input', () => {
    //     buscarCEP();
    // });

    // document.getElementById('busque').addEventListener('click', () => {
    //     buscarCEP();
    // })

    if (cep.length !== 8 || isNaN(cep)){
        alertError('error', 'CEP inválido');
        limparOpera();
        return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(response => {
            if(!response.ok){
                throw new Error('CEP não encontrado');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('logradouro').value = data.logradouro || '';
            document.getElementById('bairro').value = data.bairro || '';
            document.getElementById('cidade').value = data.localidade || '';
            document.getElementById('estado').value = data.uf || '';

            //limpar os erros
            limpar('error');
        })
        .catch(error => {
            showError('error', error.message);
            limparOpera();
        });

    }


function alertError(id, errorMessage){
    const erro = document.getElementById(id);
    erro.textContent = errorMessage;
}

function limpar(id){
    const erros = document.getElementById(id);
    erros.textContent = '';
}

function limparOpera(){
    document.getElementById('logradouro').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';

}