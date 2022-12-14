// /**
//  * Welcome to Cloudflare Workers! This is your first worker.
//  *
//  * - Run `wrangler dev src/index.ts` in your terminal to start a development server
//  * - Open a browser tab at http://localhost:8787/ to see your worker in action
//  * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
//  *
//  * Learn more at https://developers.cloudflare.com/workers/
//  */

// export interface Env {
// 	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
// 	// MY_KV_NAMESPACE: KVNamespace;
// 	//
// 	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
// 	// MY_DURABLE_OBJECT: DurableObjectNamespace;
// 	//
// 	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
// 	// MY_BUCKET: R2Bucket;
// }
// export interface Env {
// 	DB: D1Database;
// }

// export default {
// 	async fetch(request: Request, env: Env) {
// 		const { pathname } = new URL(request.url);
// 		if (pathname === "/api/beverages") { const { results } = await env.DB.prepare("SELECT * FROM Customers WHERE CompanyName = ?").bind("Bs Beverages").all(); return Response.json(results); }
// 		return new Response("Call /api/beverages to see everyone who works at Bs Beverages");
// 	},
// };

import { Hono } from "hono";

const app = new Hono();

app.get('/coustomer', (c) => {
    c.json({name: 'subash'})
})

// app.put('')

export default app
