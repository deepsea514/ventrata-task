import Products from './routes/Products.svelte';
import Product from './routes/Product.svelte';
import Success from './routes/Success.svelte';
import NotFound from './routes/NotFound.svelte';

export default {
    '/': Products,
    '/:product_id': Product,
    '/success': Success,
    '*': NotFound
};
