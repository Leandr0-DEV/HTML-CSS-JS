class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom() {
        console.log("Som genérico");
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log("Au Au");
    }
}

let meuCachorro = new Cachorro("Buddy");
meuCachorro.fazerSom(); // Saída: Au Au
