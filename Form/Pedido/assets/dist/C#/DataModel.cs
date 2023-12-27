static void fecthXML(CrmServiceClient crmService){

        string query = @"fecth";
        EntityCollection colecao = crmService.RetrieveMultiple(new FetchExpression(query));
        foreach(var item in colecao.Entities){
            Console.WriteLine(item["name"]);
            if (item.Attributes.Contains("telephones")){
                Console.WriteLine(item["telephone"]);
            }
        }
        Console.ReadLine();
    }

    //Modulo de criação
    static void Create(CrmServiceClient crmService){
        for(int i = 0; i<2; i++){
            Guid newRecord = new Guid();
            Entitity newEntity = new Entitity("account");
            newEntity.Attributes.Add("name", "Teste " + DateTime.Now.ToString());
            newEntity.Attributes.Add("CPF", "50698521556");
            
        }
    }



    //Modulo de edição
    static void UpdateEntity(CrmServicesClient crmServices, Guid guiAddcount){
        
        UpdateEntity upEntity = new UpdateEntity("account", guiAddcount);
        upEntity["name"] = "Registro Alterado";
        upEntity["CPF"] = "5069874563211";
        crmService.update(upEntity);
        Console.WriteLine("Update finalizado");
        Console.ReadKey();
    }

    //Modulo de exclusão
    static void DeleteEntity(){

        DeleteEntity entityDelete = crmService.Retrieve("account", guiAccount, new ColumnSet("name"));
       
       Console.WriteLine("Confirma a exclusão da conta: " + entityDelete["name"] + " ?(S/N)");
       var Confirm = Console.ReadLine();

       if(Confirm == "s" || Confirm == "S"){

      
        if(entityDelete.Attributes.Count > 0){
            crmService.Delete("account", guiAccoundt);
            Console.WriteLine("Conta excluida");
            Console.WriteLine("Pressione qualquer tecla para continuar");
            Console.ReadKey();
        }
    }
    }
    