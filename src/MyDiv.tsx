interface IUser {
  firstName: string;
  lastName: string;
  age: number;
  address: string;
}

const users: IUser[] = [
  {
    firstName: "João",
    lastName: "Silva",
    age: 25,
    address: "Rua A, 123",
  },
  {
    firstName: "Maria",
    lastName: "Santos",
    age: 30,
    address: "Rua B, 456",
  },
  {
    firstName: "Pedro",
    lastName: "Garcia",
    age: 28,
    address: "Rua C, 789",
  },
  {
    firstName: "Ana",
    lastName: "Lima",
    age: 22,
    address: "Rua D, 1011",
  },
  {
    firstName: "Carlos",
    lastName: "Ferreira",
    age: 35,
    address: "Rua E, 1213",
  },
  {
    firstName: "Carlos",
    lastName: "Ferreira",
    age: 35,
    address: "Rua E, 1213",
  },
  {
    firstName: "Carlos",
    lastName: "Ferreira",
    age: 35,
    address: "Rua E, 1213",
  },
  {
    firstName: "Carlos",
    lastName: "Ferreira",
    age: 35,
    address: "Rua E, 1213",
  },
  {
    firstName: "Carlos",
    lastName: "Ferreira",
    age: 35,
    address: "Rua E, 1213",
  },
  {
    firstName: "Carlos",
    lastName: "Ferreira",
    age: 35,
    address: "Rua E, 1213",
  },
  {
    firstName: "Carlos",
    lastName: "Ferreira",
    age: 35,
    address: "Rua E, 1213",
  },
  {
    firstName: "Carlos",
    lastName: "Ferreira",
    age: 35,
    address: "Rua E, 1213",
  },
  {
    firstName: "Carlos",
    lastName: "Ferreira",
    age: 35,
    address: "Rua E, 1213",
  },
  {
    firstName: "Carlos",
    lastName: "Ferreira",
    age: 35,
    address: "Rua E, 1213",
  },
  {
    firstName: "Carlos",
    lastName: "Ferreira",
    age: 35,
    address: "Rua E, 1213",
  },
  {
    firstName: "Carlos",
    lastName: "Ferreira",
    age: 35,
    address: "Rua E, 1213",
  },
  {
    firstName: "Carlos",
    lastName: "Ferreira",
    age: 35,
    address: "Rua E, 1213",
  },
  {
    firstName: "Carlos",
    lastName: "Ferreira",
    age: 35,
    address: "Rua E, 1213",
  },
  {
    firstName: "Carlos",
    lastName: "Ferreira",
    age: 35,
    address: "Rua E, 1213",
  },
  {
    firstName: "Carlos",
    lastName: "Ferreira",
    age: 35,
    address: "Rua E, 1213",
  },
  {
    firstName: "Carlos",
    lastName: "Ferreira",
    age: 35,
    address: "Rua E, 1213",
  },
];
const flexBetween = "flex items-center justify-between";
const usersInformation = () => {
  return (
    <div className="grid gap-4 grid-cols-4 grid-flow-row  ">
      {users.map((user) => (
        <>
          <div className={`${flexBetween} p-3 m-5 bg-white w-3/6 rounded-md`}>
            <span>
              Nome: {user.firstName} {user.lastName} <br />
              Idade: {user.age} <br />
              Endereco: {user.address} <br />
              <br />
            </span>
          </div>
        </>
      ))}
    </div>
  );
};

export default usersInformation;
