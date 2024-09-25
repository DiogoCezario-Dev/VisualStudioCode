const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
//const pipe2 = document.querySelector('.pipe2')

const jump = () => {
mario.classList.add('jump');

setTimeout(() => {
mario.classList.remove('jump'); 
}, 500); 
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetleft;

    if (pipePosition <= 120)
}, interval); 

document.addEventListener("keydown" , jump); 
