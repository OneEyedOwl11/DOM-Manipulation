const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redPara = document.createElement('p');
redPara.style.cssText = "color: red";
redPara.textContent = 'Hey I\'m red';
container.appendChild(redPara);

const blueHeader = document.createElement('h3');
blueHeader.style.cssText = "color: blue";
blueHeader.textContent = 'Hey I\'m blue';
container.appendChild(blueHeader);

const colDiv = document.createElement('div');
colDiv.style.background = "pink";
colDiv.style.border = "1px solid black";
container.appendChild(colDiv);

const headInDiv = document.createElement('h1');
headInDiv.textContent = "I'm in a div";

const pInDiv = document.createElement('p');
pInDiv.textContent = "ME TOO!";

colDiv.appendChild(headInDiv);
colDiv.appendChild(pInDiv);
