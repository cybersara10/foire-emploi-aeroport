import styles from './MenuNav.module.css';

export default function MenuNav() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Entreprises</a></li>
                <li><a href="#">Offres d'emploi</a></li>
                <li><a href="#">Postuler</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}