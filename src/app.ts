import express, { Request, Response } from 'express';
import { createReadStream } from 'fs';

// Initialize the app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Example route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Node.js!');
});

app.get('/big-file', (req: Request, res: Response) => {
  // res.download('./src/constants/big.txt');
  const fileStream = createReadStream('./src/constants/big.txt', 'utf-8');
  fileStream.on('open', () => {
    fileStream.pipe(res);
  });

  fileStream.on('error', (error) => res.send(`Error, ${error}`));
});




export default app;