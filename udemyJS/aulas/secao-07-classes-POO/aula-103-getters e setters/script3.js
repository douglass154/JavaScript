class Empresa{
	nome = 'Treinaweb'
	#cnpj = '99.999.999/0001-99' // atributo privado

	atualizarSalario(){
		return this.#calcularSalario()
	}

	#calcularSalario(){ // método privado
		return 1 + 1
	}

    fazerConta() {
        for (let i = 0; i < 200; i++) {
            console.log(i);
        }
    }
}

let empresa = new Empresa();
// console.log(emrpesa.#cnpj); //undefined

/*
Agora com os novos recursos do ECMAScript 2022 podemos definir valores privados, tanto em métodos quanto em atributos.

*/