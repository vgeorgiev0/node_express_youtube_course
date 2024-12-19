// import { log } from '../util/log';
// import * as fs from 'fs';

//setTimeout
// setTimeout(() => {
//   console.log(1);
// }, 1000);

// // nested setTimeouts
// setTimeout(() => {
//   console.log(2);
//   setTimeout(() => {
//     console.log(3);
//     setTimeout(() => {
//       console.log(4);
//     }, 1000);
//   }, 1000);
// }, 1000);

// button event handler in browser

// const button = document.querySelector('button')!;
// button.addEventListener('click', () => {
//   console.log('Button clicked!');
// });

// error first callback
// fs.readFile('src/constants/text.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// const myPromise = new Promise((resolve, reject) => {
//   const randomNumber = Math.floor(Math.random() * 2);
//   if (randomNumber === 0) {
//     resolve('Success! Random number is 0!');
//   } else {
//     reject(`Random number is ${randomNumber} and it's not 0!`);
//   }
// });

// myPromise
//   .then((data) => {
//     log({
//       type: 'bg',
//       message: data,
//       background: 'green',
//     });
//   })
//   .catch((err) => {
//     log({
//       type: 'bg',
//       message: err,
//       background: 'red',
//     });
//   });

// fs readFile with promises
// fs.promises
//   .readFile('src/constants/text.txt', 'utf-8')
//   .then((data) => {
//     log({
//       message: data,
//     });
//   })
//   .catch((err) => {
//     log({
//       message: err,
//     });
//   });

//fetch with promises
// fetch('https://jsonplaceholder.typicode.com/posts/1').then((response) => {
//   response.json().then((data) => {
//     log({
//       message: data,
//       type: 'text',
//     });
//   });
// }
// ).catch((err) => {
//   log({
//     message: err,
//     type: 'text',
//   });
// });

// async/await

// load file with async/await

// (async () => {
//   try {
//     const data = await fs.promises.readFile('src/constants/text.txt', {
//       encoding: 'utf-8',
//     });
//     log({
//       message: data,
//       type: 'text',
//       color: 'cyan',
//     });
//   } catch (error) {
//     log({
//       message: error,
//       type: 'text',
//       color: 'red',
//     });
//   }
// })();

// // async/await with fetch
// const fetchData = async (id: number) => {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${id}`
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };
