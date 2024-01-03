interface IUser {
    firstName: string;
    lastName: string;
    age : number;
    address : string
}

const users: IUser[] = [
    {
        firstName: 'João',
        lastName: 'Silva',
        age: 25,
        address: 'Rua A, 123',
      },
      {
        firstName: 'Maria',
        lastName: 'Santos',
        age: 30,
        address: 'Rua B, 456',
      },
      {
        firstName: 'Pedro',
        lastName: 'Garcia',
        age: 28,
        address: 'Rua C, 789',
      },
      {
        firstName: 'Ana',
        lastName: 'Lima',
        age: 22,
        address: 'Rua D, 1011',
      },
      {
        firstName: 'Carlos',
        lastName: 'Ferreira',
        age: 35,
        address: 'Rua E, 1213',
      },
]

const usersInformation = () =>{
    return(
        <div>
            <h2 className="font-bold">{users.map(user=>(
                <><span>Nome: {user.firstName} {user.lastName} <br /> 
                Idade: {user.age} <br />
                Endereco: {user.address} <br /> <br /><br /></span></> 
            ))}</h2>
        </div>
    )
}

export default usersInformation;
