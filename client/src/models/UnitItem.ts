import type { UnitID } from './Enums';

interface UnitItem {
    unitId: UnitID; // enum
    quantity: number;
    price: number; // 1499 - represents 14.99 eur
}

export default UnitItem;