import listeDocuments from "@/public/json/Emploi";
import DisplayEmploi from "./DisplayEmploi"; // ✅ Utilise bien le bon composant

export default function Document() {
    return (
        <section>
            {listeDocuments.map((doc) => (
                <DisplayEmploi
                    key={doc.id}
                    titre={doc.titre}
                    auteur={doc.auteur}
                    annee={doc.annee}
                    genre={doc.genre}
                    description={doc.description}
                />
            ))}
        </section>
    );
}
