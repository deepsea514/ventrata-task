import type Pricing from './Pricing';
import type { UnitID } from './Enums';

interface Unit {
    id: UnitID; // enum
    name: string;
    pricing: Pricing[];
}

export default Unit;