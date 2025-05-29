export default function DisplayEmploi({ poste, entreprise, lieu, description }) {
  return (
    <div className="border rounded-2xl shadow p-4 mb-4">
      <h2 className="text-xl font-semibold">{poste}</h2>
      <p className="text-gray-700">{entreprise} – {lieu}</p>
      <p className="text-sm text-gray-600 mt-2 mb-4">{description}</p>
      <button className="bg-blue-700 text-white py-1 px-4 rounded-xl hover:bg-blue-800">
        Postuler
      </button>
    </div>
  );
}
