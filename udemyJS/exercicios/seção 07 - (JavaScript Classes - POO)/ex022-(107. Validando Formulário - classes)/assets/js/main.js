class ValidaFormulario {
    constructor() {
        this.fomulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.fomulario.addEventListener('submit', (event) => {
            this.handleSubmit(event);
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if (camposValidos && senhasValidas) {
            alert('Formulário enviado!!');
            this.fomulario.submit();
        }
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.fomulario.querySelector('.password');
        const confirmarSenha = this.fomulario.querySelector('.confirm-password');

        if (senha.value.length < 6 || senha.value.length > 12) {
            this.createError(senha, 'A senha deve conter entre 6 à 12 caracteres!!');
            valid = false;
        }

        if (confirmarSenha.value !== senha.value) {
            this.createError(confirmarSenha, 'As senhas inseridas devem ser identicas!!');
            this.createError(senha, 'As senhas inseridas devem ser identicas!!');
            valid = false;
        }

        return valid;
    }

    camposSaoValidos() {
        let valid = true;

        for (let errorText of this.fomulario.querySelectorAll('.msg-erro')) {
            errorText.remove();
        }

        for (let campo of this.fomulario.querySelectorAll('.validar')) {
            let label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.createError(
                    campo,
                    `Campo "${label}" não pode estar em branco.`
                );
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }
    
    validaCPF(campo) {
        const cpf = new ValidacaoCPF(campo.value);

        if (!cpf.valida()) {
            this.createError(campo, 'CPF inválido!!');
            return false;
        }

        return true;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if (usuario.length < 3 || usuario.length > 12) {
            this.createError(campo, "Usuário precisa ter entre 3 e 12 caracteres!!");
            valid = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(campo, "Usuário deve conter apenas números e/ou letras!!");
        }
        
        return valid;
    }

    createError(campo, mensagem) {
        const div = document.createElement('div');
        div.innerHTML = mensagem;
        div.classList.add('msg-erro');

        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();
