import Pricing from './Pricing';
import UnitItem from './UnitItem';
import Contact from './Contact';

interface Booking {
    id: string;
    productId: string;
    optionId: string;
    pricing: Pricing;
    unitItems: UnitItem[];
    contact: Contact;
}

export default Booking;