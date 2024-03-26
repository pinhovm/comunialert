import { Person } from "./person";

export interface Family {
  id: number;
  headOfFamilyName: string;
  cellphoneHOF: string;
  address: string;
  people: Person[];
}
export const families: Family[] = [
  {
    id: 1,
    headOfFamilyName: "Doe",
    cellphoneHOF: "123-456-7890",
    address: "123 Main St, City, State, Zip",
    people: [
      { id: 1, name: "John", age: 30 },
      { id: 2, name: "Jane", age: 28 },
    ], // Assigning people to family 1
  },
  {
    id: 2,
    headOfFamilyName: "Smith",
    cellphoneHOF: "987-654-3210",
    address: "456 Elm St, City, State, Zip",
    people: [
      { id: 3, name: "Mary", age: 12 },
      { id: 4, name: "Christmas", age: 34 },
    ],
  },
];
