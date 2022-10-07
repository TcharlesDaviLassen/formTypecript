import styles from './index.module.css'
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80" alt="" />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/TcharlesDaviLassen.png" alt="" />

                <div className={styles.description}>
                    <strong> Tcharles</strong>
                    <span> Full developer</span>
                </div>
            </div>

        </aside>


    )
}