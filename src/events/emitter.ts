import { EventEmitter } from 'events';

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  return;
  console.log(`data received ${name} with id: ${id}`);
});

customEmitter.on('response', () => {
  // console.log(`data received 2`);
});

customEmitter.emit('response', 'john', 32);
