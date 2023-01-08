class Ninja{
    constructor(nombre){
        this.nombre= nombre;
        this.salud= 50;
        this.velocidad= 3;
        this.fuerza= 3;
    }
    
    sayName(){
        console.log(`nombre: ${this.nombre}`);
    }

    showStats(){
        console.log(`nombre: ${this.nombre}\nsalud: ${this.salud}\nvelocidad: ${this.velocidad}\nfuerza: ${this.fuerza}`);
    }

    drinkSake(){
        this.salud+=10;
    }
}
class Sensei extends Ninja{
    constructor(nombre){
        super(nombre);
        this.salud= 200;
        this.velocidad= 10;
        this.fuerza= 10;
        this.sabiduria= 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }

    showStats(){
        console.log(`nombre: ${this.nombre}\nsalud: ${this.salud}\nvelocidad: ${this.velocidad}\nfuerza: ${this.fuerza}\nsabiduria: ${this.sabiduria}`);
    }
}