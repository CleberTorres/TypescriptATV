namespace Hospital{

    export class funcionario{

        private codFuncionario:number;
     
    getCodFuncionario(): number{
        return this.codFuncionario;
    }    
    setCodFuncionario(cod:number):void{
        this.codFuncionario = cod;
        }
    }
}