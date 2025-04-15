import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Gamon' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
