import _ from 'lodash';
import './style.css';

function component() {
    var element = document.createElement('div');
    element.innerHTML = 'hello san!';
    element.className = 'text';
    return element;
}

document.body.appendChild(component());
