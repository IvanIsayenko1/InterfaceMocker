export const DEFAULT_ARRAY_LENGTH = 1;

export const DEFAULT_INTERFACE_CODE = `interface Person {
    name: string;
    age: number;
    adress: Adress;
    hobbies: Hobby[];
}

interface Adress {
    street: string;
    number: number;
    neighbours: Neighbour[];
}

interface Neighbour {
    name: string;
    age: number;
    maried: boolean;
    bordDate: Date;
}

interface Hobby {
    name: string;
}`;
