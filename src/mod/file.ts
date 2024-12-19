// import { readFile, writeFile, readFileSync, writeFileSync } from 'fs';

// const one = readFileSync('./src/constants/one.txt', 'utf8');
// const two = readFileSync('./src/constants/two.txt', 'utf8');

// console.log(one, 'file.ts 🚀');
// console.log(two, 'file.ts 🚀');

// writeFileSync(
//   './src/constants/three.txt',
//   `Result of one and two: ${one} ${two}`,
//   { encoding: 'utf8' }
// );

// readFile('./src/constants/one.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data, 'file.ts 🚀');
//   const one = data;
//   readFile('./src/constants/two.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data, 'file.ts 🚀');
//     const two = data;
//     writeFile(
//       './src/constants/three.txt',
//       `Result of one and two: ${one} ${two}`,
//       { encoding: 'utf8' },
//       (err) => {
//         if (err) throw err;
//         console.log('file.ts 🚀');
//       }
//     );
//   });
// });
