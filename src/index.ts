import { Router } from 'itty-router'
import { products } from './mockups/products';
const router = Router();

export interface Env {
    // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
    NAMESPACE: KVNamespace;
    //
    // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
    // MY_DURABLE_OBJECT: DurableObjectNamespace;
    //
    // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
    // MY_BUCKET: R2Bucket;
}

router.all('/products', () => {
    return new Response(JSON.stringify(products), {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        }
    })
});

router.all('/product/:id', ({ params }) => {
    const product = products.find(product => product.id == params?.id);
    if (product)
        return new Response(JSON.stringify(product), {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true'
            }
        });
    new Response("404, not found!", { status: 404 })
})

router.all("*", () => new Response("404, not found!", { status: 404 }))


export default {
    async fetch(
        request: Request,
        env: Env,
        ctx: ExecutionContext
    ): Promise<Response> {
        if (request.method === 'OPTIONS') {
            return new Response(null, {
                status: 204,
                headers: {
                    'Access-Control-Allow-Credentials': 'true',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Origin': '*/*',
                    'Access-Control-Allow-Headers': 'Content-Type'
                }
            });
        }
        return router.handle(request);
    },
};
