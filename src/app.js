import './css/app.css';
import cat from './images/cat.jpg';

document.addEventListener('DOMContentLoaded', () => {
    document.body.innerHTML = `<img src=${cat} />`
})

console.log('NODE_ENV = ', process.env.NODE_ENV);
console.log(buildVersion);
console.log(api.domain);
console.log(process.env.mode);