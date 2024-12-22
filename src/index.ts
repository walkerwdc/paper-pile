import express, {Express, Request, Response, NextFunction} from 'express';

const app: Express = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
