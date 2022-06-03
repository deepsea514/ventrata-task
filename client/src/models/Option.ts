import type { ContactField } from './Enums';
import type Unit from './Unit';

interface Option {
    id: string;
    default: boolean;
    name: string;
    requiredContactFields: ContactField[], // enum
    units: Unit[]
}

export default Option;