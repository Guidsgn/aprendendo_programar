console.log(" ");
console.log("------------------------------");
console.log(" ");

// Orientação a Objetos
// Quem "guia" o código são objetos

// Simulação de um objeto da vida real

// Programação Orientada a Objetos (POO - OOP)
// Programação Procedural
// Programação Funcional (PF - FP) - (Functional Programming)

// Prototype-based procedural language

// Classes
// Funções/Objetos



class User { // "Template"

    steps = 0;

    // Propiedades e Ações

    constructor(name, age) {
        this.name = name; // this = isso (está perto/comigo)
        this.age = age;
    }

    takeStep() {
        this.steps++;
    }

    setAge(newAge) {
        if(typeof newAge === 'number') {
            this.age = newAge;
        } else {
            console.log('! Idade não aceita !')
        };
    }

}

let u1 = new User("Bonieky", 20);
let u2 = new User("Mayk", 23);
let u3 = new User("Maria", 20);

u1.takeStep();

console.log(`O ${u1.name} tem ${u1.age} anos e deu ${u1.steps} passos.`);
console.log(`O ${u2.name} tem ${u2.age} anos e deu ${u2.steps} passos.`);
console.log(`A ${u3.name} tem ${u3.age} anos e deu ${u3.steps} passos.`);

console.log(" ");
console.log("------------------------------")