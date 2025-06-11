import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.text('hello There !!!'));

export const handler = app.fetch;
