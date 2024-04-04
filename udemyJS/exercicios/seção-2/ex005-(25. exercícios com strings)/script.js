const nome = prompt('Digite seu nome completo:');

document.body.innerHTML += `Seu nome é: ${nome}<br /> <br>`;
document.body.innerHTML += `Seu nome tem: ${nome.length} letras <br /> <br>`;
document.body.innerHTML += `A segunda letra do seu nome é: Letra ${nome[1].toUpperCase()} <br /> <br>`;
document.body.innerHTML += `Qual o primeiro índice da letra U no seu nome? ${nome.indexOf('u')} <br /> <br>`;
document.body.innerHTML += `Qual o último índice da letra S no seu nome? ${nome.lastIndexOf('s')} <br /> <br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)} <br /> <br>`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br /> <br>`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br /> <br>`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br /> <br>`;