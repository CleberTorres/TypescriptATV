namespace Hospital{

    export class Enfermeiro{

        private coren:number;


        getCoren():number{
            return this.coren;
        }
        setCoren(coren:number):void{
            this.coren = coren;
        }
    }
}