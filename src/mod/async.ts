import { log } from '../util/log';

//setTimeout
setTimeout(() => {
  console.log(1);
}, 1000);

// nested setTimeouts
setTimeout(() => {
  console.log(2);
  setTimeout(() => {
    console.log(3);
    setTimeout(() => {
      console.log(4);
    }, 1000);
  }, 1000);
}, 1000);

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

const myPromise = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 2);
  if (randomNumber === 0) {
    resolve('Success! Random number is 0!');
  } else {
    reject(`Random number is ${randomNumber} and it's not 0!`);
  }
});

myPromise
  .then((data) => {
    log({ message: data, background: 'purple', color: 'yellow' });
  })
  .catch((err) => {
    log({ message: err, background: 'purple', color: 'yellow' });
  });

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
