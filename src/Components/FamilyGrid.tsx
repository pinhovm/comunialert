import { Family, families } from "../fakeAPI/families";
import { useNavigate } from "react-router-dom";

export default function FamilyGrid() {
  const navigate = useNavigate();

  const handleFamilyClick = (familyId: number) => {
    navigate(`/family/${familyId}`); // Navigate to the family's people grid
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {families.map((family: Family, index: number) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">{`Familia ${family.headOfFamilyName}`}</h2>
            <p className="mb-2">
              <strong>Chefe de familia:</strong> {family.headOfFamilyName}
            </p>
            <p className="mb-2">
              <strong>Celular:</strong> {family.cellphoneHOF}
            </p>
            <p className="mb-2">
              <strong>Endereço:</strong> {family.address}
            </p>
            <p className="mb-2">
              <strong>Numero de familiares:</strong> {family.people.length}
            </p>
            <button
              className="h-8 w-8 flex justify-end items-end"
              onClick={() => handleFamilyClick(family.id)}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2235/2235742.png"
                alt="Botao visitar\"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
