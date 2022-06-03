import Products from './routes/Products.svelte';
import Product from './routes/Product.svelte';
import Success from './routes/Success.svelte';
import NotFound from './routes/NotFound.svelte';
import Contact from './routes/Contact.svelte';

export default {
    '/': Products,
    '/success': Success,
    '/contact': Contact,
    '/product/:product_id': Product,
    '*': NotFound
};
