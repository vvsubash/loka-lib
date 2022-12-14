import { Hono } from "hono";

const app = new Hono();

app.get('/', (c) => c.json({name: 'subash'}))

app.get('/:id', (c) => {
    // GET /book/:id
    const id = c.req.param('id')
    return c.text('Get Book: ' + id)
  })

// app.put('')

export default app