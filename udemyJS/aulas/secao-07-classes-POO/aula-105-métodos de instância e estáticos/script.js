class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Métodos de instância;
    aumentar() {
        this.volume++;
    }

    diminuir() {
        this.volume--;
    }

    // Método estático
    static trocarPilha() {
        console.log('OK, Vou trocar!');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentar();
controle1.aumentar();
controle1.aumentar();
console.log(controle1);
ControleRemoto.trocarPilha();