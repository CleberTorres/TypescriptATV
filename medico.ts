namespace Hospital{
    export class Medico extends Funcionario{

        private crm:number;
        private especialidade:string;

        getcrm(): number{
        return this.crm;
        }
        setcrm(crm:number):void{
            this.crm = crm;
        }

        getespecialidade(): string{
        return this.especialidade;
        }
        setespecialidade(especialidade:string):void{
            this.especialidade = especialidade;
        }
    }
}