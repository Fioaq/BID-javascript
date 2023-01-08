class Ninja{
    constructor(nombre, salud){
        this.nombre= nombre;
        this.salud= salud;
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