import { ContactField } from './Enums';
import Unit from './Unit';

interface Option {
    id: string;
    default: boolean;
    name: string;
    requiredContactFields: ContactField[], // enum
    units: Unit[]
}

export default Option;