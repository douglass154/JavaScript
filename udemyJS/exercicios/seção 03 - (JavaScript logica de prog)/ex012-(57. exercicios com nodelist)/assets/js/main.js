const paragrafosContainer = document.querySelector('.paragrafos');
const paragrafos = paragrafosContainer.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backGroundColorBody = estilosBody.backgroundColor;
console.log(backGroundColorBody);

for(let value of paragrafos) {
    value.style.backgroundColor = backGroundColorBody;
    value.style.color = 'white';
    value.style.borderRadius = '13px';
    value.style.padding = '10px'
};