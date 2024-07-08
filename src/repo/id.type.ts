type descriptionType = {
    long : [];
    short : string;
}

type dishesType = {
    name: string;
    description: string;
    allergens : string[];
};

export type IdType = {
    id: number;
    name: string;
    coverImage: string;
    date: string;
    data: string;
    ora: string[];
    description: descriptionType;
    dresscode: string;
    price: number;
    includedDrinks: [];
    tags: [];
    isAperitivoIncluded: boolean;
    includedDishes: dishesType[];
};
