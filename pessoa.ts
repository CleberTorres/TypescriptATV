namespace Hospital{
    export class pessoa{

        private NomePessoa:string;
        private CpfPessoa: string;

        constructor(NomePessoa:string, CpfPessoa:string){
            this.CpfPessoa = CpfPessoa; 
            this.NomePessoa = NomePessoa;
        }

        getCpf():string{
            return this.CpfPessoa;
        }
        
        getNome():string{
            return this.NomePessoa;
        }
        
        setNome(NomePessoa:string):void{
            this.NomePessoa = NomePessoa;
        }
    }
}