import {sum} from './math';
import './css/base.css';
import './scss/normalize.scss';
import seoyeji from './images/seoyeji2.jpeg';

document.addEventListener('DOMContentLoaded', () => {
    const img = document.createElement('img');
    img.src = seoyeji;
    document.getElementById('main').appendChild(img);
});

// console.log(sum(10, 15));
console.log('process.env.NODE_ENV =', process.env.NODE_ENV);
console.log('TWO =', TWO);
console.log('api.domain =', api.domain);
const p = new Promise((resolve, reject) => {
    resolve('111');
})