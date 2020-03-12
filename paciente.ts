namespace Hospital{
 export class Paciente extends pessoa {
    
    private CodPaciente:number;

    getCodPaciente():number{
        return this.CodPaciente;
    }
    setCodPaciente(CodPaciente:number):void{
        this.CodPaciente = CodPaciente;
        }
    }
}