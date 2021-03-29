import {sum} from './math';
import './css/base.css';
import seoyeji from './images/seoyeji2.jpeg';

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `<img src=${seoyeji} />`
});

console.log(sum(10, 15));
