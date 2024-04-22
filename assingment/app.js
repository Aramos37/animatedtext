document.getElementById("#container");
document.querySelector("#container");
document.querySelectorAll('.second');
document.querySelector('ol .third');
let section = document.querySelector("#container");

section.innerText = "Hello";

let div = document.querySelector('.footer');

div.classList.add('main');

div.classList.remove('main');

let newli = document.createElement('li');

newli.innerText('four');

let ul = document.querySelector('ul');

ul.appendChild(newli);

let li = document.querySelectorAll('ol li');

for (let i = 0; i < li.length; i++){
    li[i].style.backgroundcolor = 'green';

}div.remove();


