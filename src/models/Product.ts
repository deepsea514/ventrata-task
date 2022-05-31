import Option from './Option';

interface Product {
    id: string;
    name: string;
    options: Option[];
    defaultCurrency: string; // "EUR
    availableCurrencies: string[] // ["EUR", "USD"]
}

export default Product;