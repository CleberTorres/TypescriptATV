namespace Hospital{
 export class Paciente extends pessoa {
    
    CodPaciente:number;

    getCodPaciente():number{
        return this.CodPaciente;
    }
    setCodPaciente(Cod:number):void{
        this.CodPaciente = Cod;
        }
    }
}