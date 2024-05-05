class ValidacaoCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    };

    valida() {
        if(!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false;

        const resultado = this.geraNovoCPF() === this.cpfLimpo;
        return resultado
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