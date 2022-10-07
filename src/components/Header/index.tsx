import styles from './index.module.css';
import crieTi from '../../assets/logo-crie-ti.png'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={crieTi} alt="LogoCrieTI" />
            {/* <h1> Aloooo </h1> */}
        </header>
    )
}