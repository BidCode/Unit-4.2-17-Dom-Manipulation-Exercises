const mycontainer = document.getElementById('container');

const mycontainer2 = document.querySelector('section');

const listSeconds = document.querySelectorAll('.second')

const olThirdLi = document.querySelector('ol .third');

const footerDiv = document.querySelector('.footer');

console.log(mycontainer);
console.log(mycontainer2);
console.log(listSeconds);
console.log(olThirdLi);

mycontainer.prepend('Hello!');

console.log(mycontainer);

footerDiv.classList.add('main');

console.log(footerDiv);

footerDiv.classList.remove('main');

const newLi = document.createElement('li');

console.log(newLi)

newLi.textContent = 'four';

const ul = document.querySelector('ul');

ul.append(newLi);

console.log(ul);

const myOl = document.querySelectorAll('ol li');

console.log(myOl);

for (li of myOl) {
    li.style.backgroundColor = 'green';
}
footerDiv.remove();
