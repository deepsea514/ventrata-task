import Pricing from './Pricing';
import { UnitID } from './Enums';

interface Unit {
    id: UnitID; // enum
    name: string;
    pricing: Pricing[];
}

export default Unit;