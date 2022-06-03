import type Pricing from './Pricing';
import type UnitItem from './UnitItem';
import type Contact from './Contact';

interface Booking {
    id: string;
    productId: string;
    optionId: string;
    pricing: Pricing;
    unitItems: UnitItem[];
    contact: Contact;
}

export default Booking;