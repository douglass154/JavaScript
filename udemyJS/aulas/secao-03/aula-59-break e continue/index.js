
/*

---> Break:
• termina o loop atual e pula para a próxima instrução no script.

---> Continue:
• termina a iteração atual, salta, volta e executa a próxima iteração.

*/


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let value of numeros) { 
    if (value === 5) {
        continue;
    } else {
        console.log(value);
    };
};



/* 
O exemplo abaixo mostra um laço while que tem um continue que será executado quando o valor de i for 3. Assim, n terá os valores 1, 3, 7, e 12. 
*/

var i = 0;
var n = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  n += i;
  console.log(n);
}



/*
No exemplo abaixo, um laço rotulado como checkiandj contém o laço rotulado checkj. Se o continue for alcançado, o programa continua a execução voltando ao topo do rótulo checkj. Cada vez que o continue for alcançado, checkj reiterará até sua condição for falsa. Quando retornar false, o restante de checkiandj será executado.

Se o continue tivesse o rótulo checkiandj, o programa iria continuar retornando a execução ao label checkiandj.
*/
var i = 0;
var j = 8;

checkiandj: while (i < 4) {
    console.log(`i: ${i}`);
    i++;


    checkj: while (j > 4) {
        console.log(`j: ${j}`);
        j--;


        if (j % 2 === 0) continue checkj;
        console.log(`${j} é impar`);
    }


    console.log(`i = ${i}`);
    console.log(`j = ${j}`);
}
