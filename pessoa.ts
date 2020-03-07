namespace Hospital{
    export class pessoa{

        private NomePessoa:string;
        private CpfPessoa: string;

        constructor(NomePessoa:string, Cpfpessoa:string){
            this.CpfPessoa;
            this.NomePessoa;
        }

        getNomePessoa(): string{
            return this.NomePessoa;
        }
        setNomePessoa(nome:string):void{
            this.NomePessoa
        }
        
        getCpfPessoa(): string{
            return this.CpfPessoa;
        }
        setCpfPessoa(Cpf:string){
            this.CpfPessoa = Cpf;
        }
    }
}