import styles from './Header.module.css';
import Image from 'next/image';
import logo from '@/public/react.webp';
import MenuNav from './MenuNav';

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.title}>
            <Image
                src={logo}
                alt="Logo React"
                width={80}
            />
            <h1>Foire d'emploi aeroport</h1>
        </div>
        <MenuNav/>
    </header>
}