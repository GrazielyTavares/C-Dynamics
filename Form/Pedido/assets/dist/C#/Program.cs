internal class Program{
    static void Main(string[] args){
        //conectando para realizar a ação pela conexao
        var crmService = new Conexao().ObterConexao();
        //DeleteEntity(crmService, new Guid("fecth id do GUID"))
        DataModel model = new DataModelModel();
        model.fecthXML(crmService);
    }
}