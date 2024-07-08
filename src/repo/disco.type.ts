type DescType = {
  "short": string
}

export type DiscoType = {
    "id": number,
    "name": string,
    "coverImage": string,
    "date": string,
    "data" : string,
    "ora" : string,
    "description": DescType,
    "dresscode": string,
    "price": number,
    "includedDrinks": [],
    "tags": string[],
    "isAperitivoIncluded": boolean
  }