
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix
// console.log(data.toString());

// const data = new Date(2024, 3, 12, 18, 41, 30, 500); a, m, d, h, M, s, ms

const data = new Date // ('2024-04-12 18:44:39');
console.log(`Dia: ${data.getDate()}`);
console.log(`Mês: ${data.getMonth() + 1}`);
console.log(`Ano: ${data.getFullYear()}`);
console.log(`Hora: ${data.getHours()}`);
console.log(`Min: ${data.getMinutes()}`);
console.log(`Segundos: ${data.getSeconds()}`);
console.log(`ms: ${data.getMilliseconds()}`);
console.log(`Dia semana: ${data.getDay() + 1}`);
console.log(data.toString());
// console.log(Date.now())