import styles from './Accueil.module.css';
import Annonce from './Annonce'; 

export default function Accueil() {
    return (
        <>
            <Annonce auteur='Foire Emploi Aéroport'>
                Décollez vers votre avenir professionnel !
            </Annonce>
            <div className={styles.welcome}>
                Soyez la bienvenue sur la plateforme de la foire d'emploi à l'aéroport !
            </div>
        </>
    );
}
