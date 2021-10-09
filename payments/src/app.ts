import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@jmstickets/common';
import { createChargeRouter } from './routes/new';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: false,
    }),
);
app.use(currentUser);

app.use(createChargeRouter);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.all('*', async (_req, _res) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };
