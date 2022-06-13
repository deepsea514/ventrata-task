import { Router } from 'itty-router'
import { products } from './mockups/products';
import {
    getAssetFromKV,
    mapRequestToAsset,
    serveSinglePageApp,
    NotFoundError,
    MethodNotAllowedError
} from '@cloudflare/kv-asset-handler'
import manifestJSON from '../client/public/manifest.json';
const assetManifest = JSON.stringify(manifestJSON)

const router = Router();

export interface Env {
    // Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
    KVNamespace: KVNamespace;
    //
    // Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
    // MY_DURABLE_OBJECT: DurableObjectNamespace;
    //
    // Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
    // MY_BUCKET: R2Bucket;
}

router.all('/api/products', () => {
    return new Response(JSON.stringify(products), {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        }
    })
});

router.all('/api/product/:id', ({ params }) => {
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

router.all("*", async () => {
    new Response("404, not found!", { status: 404 })
})


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

        if (!request.url.includes('/api')) {
            try {
                return await getAssetFromKV(
                    {
                        request,
                        waitUntil: (promise) => ctx.waitUntil(promise),
                    },
                    // { mapRequestToAsset: serveSinglePageApp, }
                    // { mapRequestToAsset: mapRequestToAsset }
                    {
                        // ASSET_NAMESPACE: env.KVNamespace,
                        // ASSET_MANIFEST: assetManifest,
                        cacheControl: {
                            bypassCache: true,
                        }
                    }
                )
            } catch (error) {
                if (error instanceof NotFoundError) {
                    return new Response("404, not found!", { status: 404 })
                } else if (error instanceof MethodNotAllowedError) {
                    return new Response("404, not found!", { status: 404 })
                } else {
                    console.error(error)
                    return new Response('An unexpected error occurred', { status: 500 })
                }
            }
        }

        return router.handle(request);
    },
};
