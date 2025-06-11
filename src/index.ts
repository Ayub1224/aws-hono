import {Hono} from 'hono';
import {handle} from 'hono/aws-lambda';

const app = new Hono();

app.get('/', (resp)=> {
    return resp.text("Hello on Ayub's code base")
})

// if(process.env.N)

export const handler = handle(app);