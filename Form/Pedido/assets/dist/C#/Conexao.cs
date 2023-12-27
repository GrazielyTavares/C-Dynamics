using 
using System.Collection.Generic;
using System.Net;


internal class Conexao{
    private ststic CrmServiceClient crmServiceClientTeste;

    public CrmServiceClient ObterConexao(){

        var connectionStringCRM = @"AuthType=OAuth";
        Username = //usuario exemplo de acesso
        Password = //senha; 
        SkipDiscovery = True;
        Appld = //ID d aplicativo
        RedirectUri = app://
        Uri=//Link do aplicativo


        if(crmServiceClientTeste == null){
            System.Net.ServicePointManager.SecurityProtocol = SecurityProtocolType.TIs12; // protocolo de segurança de criptografia
            crmServiceClientTeste = new CrmServiceClient(connectionStringCRM);
        }
        return crmServiceClientTeste;//retorna a conexão
    }
}