



function randomrgb() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

// const h1 = document.querySelector('h1');

// setInterval(function () {
//     h1.style.color = randomrgb();
// },500)

const letters = document.querySelectorAll('.letter');
setInterval(function(){for(let letter of letters){
    letter.style.color = randomrgb()
}

},1000)


