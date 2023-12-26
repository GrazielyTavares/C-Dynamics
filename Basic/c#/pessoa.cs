using System;
using System.Collections.Generic;
using System.Ling;
using System.Threading.Tasks;

namespace Dyna.Basic.c#
{
    
    //estrutura classe
    public class Pessoa{

        public string Name { get; set; }
        public int Idade { get; set; }

        //metodo
        public void Apresen(){

            Console.WriteLine($"Olá, my name {Nome}, i am {idade} years old")
        }

    }
}


//saida
Console.WriteLine(".")