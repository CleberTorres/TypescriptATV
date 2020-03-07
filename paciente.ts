namespace Hospital{
 export class Paciente{
    
    private CodPaciente:number;

    getCodPaciente():number{
        return this.CodPaciente;
    }
    setCodFuncionario(CodPaciente:number):void{
        this.CodPaciente = CodPaciente;
        }
    }
}