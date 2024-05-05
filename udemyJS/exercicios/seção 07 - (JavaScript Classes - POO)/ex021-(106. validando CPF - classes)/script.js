// 705.484.450-52;  070.987.720-03;

/*

7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0  =  237;

11 - (237 % 11) = 5 (Primeiro dígito);
Se o dígito for maior que 9, consideramos 0;

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0   10 = 284;

11 - (284 % 11) = 2 (Segundo dígito)

*/

class ValidacaoCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            writable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    };

    valida() {
        if(!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return 'sequencia';

        console.log(this.geraNovoCPF())
        const resultado = this.geraNovoCPF() === this.cpfLimpo;
        return resultado ? 'CPF válido' : 'CPF inválido';
    }

    geraNovoCPF() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidacaoCPF.pegarDigito(cpfParcial);
        const digito2 = ValidacaoCPF.pegarDigito(cpfParcial + String(digito1));

        const cpfCompleto = cpfParcial + String(digito1) + String(digito2);
        return cpfCompleto;
    }

    static pegarDigito(cpfParcial) {
        let acumulador = 0;
        let reverso = cpfParcial.length + 1;

        for (let numero of cpfParcial) {
            acumulador += Number(numero) * reverso;
            reverso--;
        };

        let digito = 11 - (acumulador % 11)
        return digito >= 10 ? 0 : digito;
    }

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }
}

let cpf = new ValidacaoCPF('070.987.720-03');
console.log(cpf);
console.log(cpf.valida());