
class Conta {
    constructor(agencia, conta, saldo) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    };

    sacar(valor) {
        if (this.saldo < valor) {
            console.log(`Saldo insuficiente para o saque: ${this.saldo}`);
            return;
        }

        this.saldo -= valor;
        this.verSaldo();
    };

    depositar(valor) {
        this.saldo += valor;
        this.verSaldo();
    };

    verSaldo() {
        console.log(`Saldo total: ${this.saldo}`);
    };
};

class ContaCorrente extends Conta {
    constructor(agencia, conta, saldo, limite) {
        super(agencia, conta, saldo);
        this.limite = limite;
    };

    sacar(valor) {
        if (valor > (this.saldo + this.limite)) {
            console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`)
            return;
        }

        this.saldo -= valor
        this.verSaldo();
    };
};

const contaC1 = new ContaCorrente(11, 22, 0, 100);
console.log(contaC1);

contaC1.depositar(100);
contaC1.sacar(80);
contaC1.sacar(100);
contaC1.sacar(300);