//Boolean

let muted : boolean = true;
muted = false;

//Numbers
let numerador : number = 42;
let denominador : number = 3;
let resultado = numerador / denominador;

//string
let nombre: string = "Richard";
let saludo = `Me llamo ${nombre}`;

//Arrray
let people: string[] = [];
people = ["Lalo", "Luis", "Pepe"];
people.push("200");

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("ricardo");
peopleAndNumbers.push(300);

// Enum
enum Color{
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
};

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

//Any
let comodin: any = "joker";
comodin = { type: "wildcard" };

//Object
let someObject: object = { type: 'Woldcard'};

// Functions

function add(a: number, b : number): number{
    return a + b;
}

const sum = add(4, 6);

function createAdder(a: number): (number) => number {
    return function (b: number){
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);


//Argumnto opcional
function fullName(firstname: string, lastname?: string): string{
    return `${firstname} ${lastname}`;
}

const richard = fullName('Richard');

//Valor por default
function fullName1(firstname: string, lastname: string = 'smith'): string{
    return `${firstname} ${lastname}`;
}

const richard1 = fullName1('Agente');
console.log(richard1);


//Interfaces

enum Color1 {
    Rojo = "Rojo",
    Verde = "Azul"
}

interface Rectangulo{
    ancho: number;
    alto: number;
    color?: Color; // ?  maneja el elemento opcional
}

function area(r: Rectangulo): number{
    return r.alto * r.ancho;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Rojo,
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
    return this.color ? `Un rectangulo color ${this.color}` : "Un rectangulo";
}

console.log(rect.toString());
