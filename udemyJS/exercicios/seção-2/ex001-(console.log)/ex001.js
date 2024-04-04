let hour = new Date();
let minutes = new Date();
let currentTime = hour.getHours();
let currentMinute = minutes.getMinutes();

if(currentTime < 5) {
    console.log(`Meu nome é "Nome". Estou aprendendo JavaScript às ${currentTime}:${currentMinute} da Madrugada.`);
} else if(currentTime < 12) {
    console.log(`Meu nome é "Nome". Estou aprendendo JavaScript às ${currentTime}:${currentMinute} da Manhã.`);
} else if(currentTime < 18) {
    console.log(`Meu nome é "Nome". Estou aprendendo JavaScript às ${currentTime}:${currentMinute} da Tarde.`);
} else {
    console.log(`Meu nome é "Nome". Estou aprendendo JavaScript às ${currentTime}:${currentMinute} da Noite.`)
}