import styles from './index.module.css'
export function Body() {
    return (
        <article className={styles.post}>
            <header className={styles.cabecalho}>
                <div className={styles.profile}>
                    {/* <img className={styles.avatar} src="https://github.com/TcharlesDaviLassen.png" alt="" /> */}

                    <div className={styles.description}>
                        <strong>Tcharles</strong>
                        <span>Full developer</span>

                    </div>
                </div>

                <time title='29 de setembro as 14:30' dateTime='2022-05-11 08:00:00'>
                    Publicado a 1 hora
                </time>

            </header>

            <div className={styles.informations}>

                <span> Oii pessoal!!</span>
                <br />
                <br />
                <span>Acabei de publicar mais um projeto no meu figma, corre aqui pra ver 🚀 </span>
                <br />
                <br />

                <a href='#'> #novoprojeto #figma #ux/ui</a>   
          

            </div>


            <div className={styles.lineDiv}>
                <button className={styles.line}></button>
            </div>

            <div className={styles.feed}>
                <h1 className={styles.feedback}>Deixe seu feedback</h1>
            </div>

            <div>
                <textarea placeholder='Deixe seu comentário' className={styles.textFild} name="Text"></textarea>
            </div>

            <div>
                <button className={styles.buttons}>Publicar</button>
            </div>
            
        </article>

    )
}