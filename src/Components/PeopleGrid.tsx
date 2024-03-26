import { useParams } from "react-router-dom";
import { Family, families } from "../fakeAPI/families";
export interface Params {
  [key: string]: string | undefined;
  familyId: string;
}

export default function PeopleGrid() {
  const { familyId } = useParams<Params>();
  const selectedFamily = families.find(
    (family: Family) => family.id === Number(familyId)
  );

  if (!selectedFamily) {
    return <div>Family not found.</div>;
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">{`People in Family ${selectedFamily.headOfFamilyName}`}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedFamily.people.map((person, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <p>
              <strong>Name:</strong> {person.name}
            </p>
            <p>
              <strong>Age:</strong> {person.age}
            </p>
            {/* Other person details */}
          </div>
        ))}
      </div>
    </div>
  );
}
