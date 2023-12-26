function ValidarNome(exectionContext){

    if(exectionContext === null)
        return;

        // declarando as variáveis de contexto do Formulário
        var formContext = exectionContext.getFormContext();
        var nome = exectionContext.getEventSource().getValue();
        var label = exectionContext.getEventSource().getName();

        var validade = true;
        if(nome !== null && nome !==""){
            nome = nome.replace(/[^\d]+/g,'');
            var Soma;
            var Resto;
            Soma = 0;
        }
        if(validade){
            validade = false;
        }

        if(validade){
            nome = formContext.getAttribute(label).setValue(nome);
        }
        else{
            //chama o camponente
            Xrm.Navigation.openAlertDialog(( corfirmButtonLabel: 'OK', text:"Nome Inválido/Vazio"), {height:100, width:300})
            .then(
                function sucesso(result){
                    nome = formContext.getAttribute(label).setValue("");
                }
            );
        }

}