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
                                currencyPrecision: 2
                            },
                            {
                                currency: "USD",
                                price: 4.5,
                                currencyPrecision: 2
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
                                currencyPrecision: 2
                            },
                            {
                                currency: "USD",
                                price: 1.8,
                                currencyPrecision: 2
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
                                currencyPrecision: 2
                            },
                            {
                                currency: "USD",
                                price: 3.6,
                                currencyPrecision: 2
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
                                currencyPrecision: 2
                            },
                            {
                                currency: "USD",
                                price: 0.92,
                                currencyPrecision: 2
                            }
                        ]
                    }
                ],
            },
            {
                id: "option-2",
                name: "Option Two",
                default: false,
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
                                currencyPrecision: 2
                            },
                            {
                                currency: "USD",
                                price: 9.2,
                                currencyPrecision: 2
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
                                currencyPrecision: 2
                            },
                            {
                                currency: "USD",
                                price: 3.6,
                                currencyPrecision: 2
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
                                currencyPrecision: 2
                            },
                            {
                                currency: "USD",
                                price: 7.4,
                                currencyPrecision: 2
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
                                currencyPrecision: 2
                            },
                            {
                                currency: "USD",
                                price: 1.8,
                                currencyPrecision: 2
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
                                currencyPrecision: 2
                            },
                            {
                                currency: "USD",
                                price: 26,
                                currencyPrecision: 2
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
                                currencyPrecision: 2
                            },
                            {
                                currency: "USD",
                                price: 3.8,
                                currencyPrecision: 2
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
                                currencyPrecision: 2
                            },
                            {
                                currency: "USD",
                                price: 18,
                                currencyPrecision: 2
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
                                currencyPrecision: 2
                            },
                            {
                                currency: "USD",
                                price: 9.2,
                                currencyPrecision: 2
                            }
                        ]
                    }
                ],
            },
            {
                id: "option-2",
                name: "Option Two",
                default: false,
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
                                currencyPrecision: 2
                            },
                            {
                                currency: "USD",
                                price: 54,
                                currencyPrecision: 2
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
                                currencyPrecision: 2
                            },
                            {
                                currency: "USD",
                                price: 36,
                                currencyPrecision: 2
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
                                currencyPrecision: 2
                            },
                            {
                                currency: "USD",
                                price: 72,
                                currencyPrecision: 2
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
                                currencyPrecision: 2
                            },
                            {
                                currency: "USD",
                                price: 18,
                                currencyPrecision: 2
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