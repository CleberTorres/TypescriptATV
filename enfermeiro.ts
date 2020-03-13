namespace Hospital{

    export class Enfermeiro extends funcionario{

        private coren:number;


        getCoren():number{
            return this.coren;
        }
        setCoren(coren:number):void{
            this.coren = coren;
        }
    }
}