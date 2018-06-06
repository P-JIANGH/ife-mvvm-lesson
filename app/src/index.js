import './style.css';

function component() {
    var element = document.createElement('div');
    element.innerHTML = 'hello world for san !';
    element.className = 'text';
    return element;
}

document.body.appendChild(component());
