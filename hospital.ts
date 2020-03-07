namespace Hospital{

    export class Hospital{

        private Nome:string;
        private Enfermeiros:Array<Enfermeiro> = [];
        private Medicos:Array<Medico> = [];
        private Pacientes:Array<Paciente> = [];

        getNome():string{
            return this.Nome;
        }

        setNome(Nome:string):void{
            this.Nome = Nome;
        }
        getEnfermeiro():string{
            return this.Enfermeiro;
        } 
        addNome(Enfermeiro:Enfermeiro):void{
            this.Enfermeiros.push(Enfermeiro)
        }
    }
}