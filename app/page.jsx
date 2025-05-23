import styles from "./page.module.css";
import Accueil from "@/components/Accueil";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Bienvenue à la foire d'emploi Aéroport</h1>
      <p>
        Cet espace présente les opportunités d'emploi, les entreprises participantes
        et permet aux candidats de postuler en ligne.
      </p>
    </main>
  );
}
