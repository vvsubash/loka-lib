
export interface Env {
	DB: D1Database;
}

export default defineEventHandler(()=> {
    console.log(env.DB.prepare);
    
    return ['wealth of natons', 'theory of moral sentiments']
})