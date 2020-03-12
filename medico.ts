namespace Hospital{
    export class Medico extends pessoa{

        private crm:number;
        private especialidade:number;

        getcrm(): number{
        return this.crm;
        }
        setcrm(crm:number):void{
            this.crm = crm;
        }

        getespecialidade(): number{
        return this.especialidade;
        }
        setespecialidade(especialidade:number):void{
            this.especialidade = especialidade;
        }
    }
}