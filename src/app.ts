import express, { Request, Response } from 'express';

// Initialize the app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Example route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Node.js!');
});




export default app;