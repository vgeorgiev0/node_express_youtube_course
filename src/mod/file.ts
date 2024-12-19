// import { readFile, writeFile, readFileSync, writeFileSync } from 'fs';
// import * as util from 'util';

// // const one = readFileSync('./src/constants/one.txt', 'utf8');
// // const two = readFileSync('./src/constants/two.txt', 'utf8');

// // console.log(one, 'file.ts 🚀');
// // console.log(two, 'file.ts 🚀');

// // writeFileSync(
// //   './src/constants/three.txt',
// //   `Result of one and two: ${one} ${two}`,
// //   { encoding: 'utf8' }
// // );

// // readFile('./src/constants/one.txt', 'utf8', (err, data) => {
// //   if (err) throw err;
// //   console.log(data, 'file.ts 🚀');
// //   const one = data;
// //   readFile('./src/constants/two.txt', 'utf8', (err, data) => {
// //     if (err) throw err;
// //     console.log(data, 'file.ts 🚀');
// //     const two = data;
// //     writeFile(
// //       './src/constants/three.txt',
// //       `Result of one and two: ${one} ${two}`,
// //       { encoding: 'utf8' },
// //       (err) => {
// //         if (err) throw err;
// //         console.log('file.ts 🚀');
// //       }
// //     );
// //   });
// // });

// // async/await version

// // const getText = (path: string): Promise<string> => {
// //   return new Promise((resolve, reject) => {
// //     readFile(path, 'utf8', (err, data) => {
// //       if (err) {
// //         reject(err);
// //       }
// //       resolve(data);
// //     });
// //   });
// // };

// // getText('./src/constants/one.txt').then((result) => {
// //   console.log(result, 'file.ts 🚀');
// // });

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
//   try {
//     const first = await readFilePromise('./src/constants/one.txt', 'utf-8');
//     const second = await readFilePromise('./src/constants/two.txt', 'utf-8');
//     console.log(first, 'file.ts 🚀');
//     console.log(second, 'file.ts 🚀');
//     await writeFilePromise(
//       './src/constants/three.txt',
//       `Result of one and two: ${first} ${second}`,
//       { encoding: 'utf8' }
//     );
//   } catch (error) {
//     console.error(error);
//   }
// };
// // start();
