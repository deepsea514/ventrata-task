import { ContactField, UnitID } from "../models/Enums";
import Product from "../models/Product";

export const products: Product[] = [
    {
        id: "product-1",
        name: "Product One",
        options: [
            {
                id: "option-1",
                name: "Option One",
                default: true,
                requiredContactFields: [
                    ContactField.fullName,
                    ContactField.emailAddress,
                    ContactField.phoneNumber,
                ],
                units: [
                    {
                        id: UnitID.adult,
                        name: "Adult",
                        pricing: [
                            {
                                currency: "EUR",
                                price: 5,
                                currencyPrecision: 1
                            }
                        ]
                    },
                    {
                        id: UnitID.child,
                        name: "Child",
                        pricing: [
                            {
                                currency: "EUR",
                                price: 2,
                                currencyPrecision: 1
                            }
                        ]
                    },
                    {
                        id: UnitID.senior,
                        name: "Senior",
                        pricing: [
                            {
                                currency: "EUR",
                                price: 4,
                                currencyPrecision: 1
                            }
                        ]
                    },
                    {
                        id: UnitID.infant,
                        name: "Infant",
                        pricing: [
                            {
                                currency: "EUR",
                                price: 1,
                                currencyPrecision: 1
                            }
                        ]
                    }
                ],
            },
            {
                id: "option-2",
                name: "Option Two",
                default: true,
                requiredContactFields: [
                    ContactField.fullName,
                    ContactField.emailAddress,
                    ContactField.phoneNumber,
                ],
                units: [
                    {
                        id: UnitID.adult,
                        name: "Adult",
                        pricing: [
                            {
                                currency: "EUR",
                                price: 10,
                                currencyPrecision: 1
                            }
                        ]
                    },
                    {
                        id: UnitID.child,
                        name: "Child",
                        pricing: [
                            {
                                currency: "EUR",
                                price: 4,
                                currencyPrecision: 1
                            }
                        ]
                    },
                    {
                        id: UnitID.senior,
                        name: "Senior",
                        pricing: [
                            {
                                currency: "EUR",
                                price: 8,
                                currencyPrecision: 1
                            }
                        ]
                    },
                    {
                        id: UnitID.infant,
                        name: "Infant",
                        pricing: [
                            {
                                currency: "EUR",
                                price: 2,
                                currencyPrecision: 1
                            }
                        ]
                    }
                ],
            }
        ],
        defaultCurrency: "EUR",
        availableCurrencies: ["EUR", "USD"]
    },
    {
        id: "product-2",
        name: "Product Two",
        options: [
            {
                id: "option-1",
                name: "Option One",
                default: true,
                requiredContactFields: [
                    ContactField.fullName,
                    ContactField.emailAddress,
                    ContactField.phoneNumber,
                ],
                units: [
                    {
                        id: UnitID.adult,
                        name: "Adult",
                        pricing: [
                            {
                                currency: "EUR",
                                price: 30,
                                currencyPrecision: 1
                            }
                        ]
                    },
                    {
                        id: UnitID.child,
                        name: "Child",
                        pricing: [
                            {
                                currency: "EUR",
                                price: 4,
                                currencyPrecision: 1
                            }
                        ]
                    },
                    {
                        id: UnitID.senior,
                        name: "Senior",
                        pricing: [
                            {
                                currency: "EUR",
                                price: 20,
                                currencyPrecision: 1
                            }
                        ]
                    },
                    {
                        id: UnitID.infant,
                        name: "Infant",
                        pricing: [
                            {
                                currency: "EUR",
                                price: 10,
                                currencyPrecision: 1
                            }
                        ]
                    }
                ],
            },
            {
                id: "option-2",
                name: "Option Two",
                default: true,
                requiredContactFields: [
                    ContactField.fullName,
                    ContactField.emailAddress,
                    ContactField.phoneNumber,
                ],
                units: [
                    {
                        id: UnitID.adult,
                        name: "Adult",
                        pricing: [
                            {
                                currency: "EUR",
                                price: 60,
                                currencyPrecision: 1
                            }
                        ]
                    },
                    {
                        id: UnitID.child,
                        name: "Child",
                        pricing: [
                            {
                                currency: "EUR",
                                price: 40,
                                currencyPrecision: 1
                            }
                        ]
                    },
                    {
                        id: UnitID.senior,
                        name: "Senior",
                        pricing: [
                            {
                                currency: "EUR",
                                price: 80,
                                currencyPrecision: 1
                            }
                        ]
                    },
                    {
                        id: UnitID.infant,
                        name: "Infant",
                        pricing: [
                            {
                                currency: "EUR",
                                price: 20,
                                currencyPrecision: 1
                            }
                        ]
                    }
                ],
            }
        ],
        defaultCurrency: "EUR",
        availableCurrencies: ["EUR", "USD"]
    }
]