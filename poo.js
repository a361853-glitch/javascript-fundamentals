// Programaciòn orientada a objetos

// 4 Principios

// Abstracciòn -> Representar la realidad mediante còdigo.

// Encapsulamiento -> Forma en la que definimos o
//                    modificamos el alcance de un elemento.

// Herencia -> La capacidad de un elemento para reutilizar las
//             caracteristicas de otros de forma jerarquica.

// Polimorfismo -> Es la capacidad de diferentes elementos de
//                 realizar una misma acciòn de formas diferentes.

class Animal {
    constructor(name, soundToEmit){
        this._name = name;
        this._soundToEmit = soundToEmit;
    }

    sound(){
        return this._soundToEmit();
    }

    comer(){
        console.log("Estoy comiendo");
    }
    //Get
    get name(){
        return this._name;
    }
    //Set
    set name(v){
        this._name = v;
    }

    static isAnimal(obj){
        return obj instanceof Animal;
    }
}

class Robot{
}

let a = new Animal("Perro");
let x = {"_name": "Perro"};
let r = new Robot();

console.log(a);
console.log(x);

a.name = "Gato";
console.log(a);
 
a.comer();

//Concatenaciòn
console.log("El objeto es un animal? " + Animal.isAnimal(a));
console.log("El objeto es un animal? " + Animal.isAnimal(r));

// Interpolaciòn
console.log(`El objeto es un animal? ${Animal.isAnimal(a)}`)

class Dog extends Animal{
   constructor(name, soundToEmit, type){
        super(name, soundToEmit);
        this._type = type;
    }
    get type(){
        return this._type;
    }
    set type(v){
        this._type = v;
    }
}

class Cat extends Animal {
    constructor(name, soundToEmit, type){
        super(name, soundToEmit);
        this._type = type;
    }
    get type(){
        return this._type;
    }
    set type(v){
        this._type = v;
    }
}

let dog = new Dog("Wawa", ()=>{
    return "Guau guau!"
}, "Shiba Inu");

let cat = new Cat("Limon", ()=>{
    return "Miau miau!"
}, "Naranjoso");

let animals = [dog, cat];

animals.forEach(animal => console.log(animal.sound()));