namespace Hospital{

    export class Enfermeiro extends pessoa{

        private coren:number;


        getCoren():number{
            return this.coren;
        }
        setCoren(coren:number):void{
            this.coren = coren;
        }
    }
}