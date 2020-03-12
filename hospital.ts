namespace Hospital{

    export class Hospital{

        private Nome:string;
        private enfermeiros:Array<Enfermeiro> = [];
        private Medicos:Array<Medico> = [];
        private Pacientes:Array<Paciente> = [];

        getNome():string{
            return this.Nome;
        }

        setNome(Nome:string):void{
            this.Nome = Nome;
        }
     
        addEnfermeiro(Enfermeiro:Enfermeiro):void{
            this.enfermeiros.push(Enfermeiro)
        }
           getEnfermeiro(){
            return this.enfermeiros;
        } 
            addMedicos(medico:Medico):void{
                this.Medicos.push(medico)
            }
            getMedicos(){
                return this.Medicos;
            }
            addPacientes(paciente:Paciente):void{
                this.Pacientes.push(paciente)
            }
            getPacientes(){
                return this.Pacientes;
            }
        }
    }
