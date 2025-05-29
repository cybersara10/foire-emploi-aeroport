import listeEmplois from "@/public/json/offre d'emploi.json";
import DisplayEmploi from "./DisplayEmploi";

export default function Emplois() {
  return (
    <section className="p-6">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">Offres d'emploi</h1>
        <p className="text-gray-600">Découvrez les opportunités disponibles.</p>
      </div>

      {listeEmplois.map((emploi) => (
        <DisplayEmploi
          key={emploi.id}
          poste={emploi.poste}
          entreprise={emploi.entreprise}
          lieu={emploi.lieu}
          description={emploi.description}
        />
      ))}
    </section>
  );
}
