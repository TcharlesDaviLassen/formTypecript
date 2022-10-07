import styles from "./index.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react"

import { Post } from "../Post"

interface CommentProps {
    content: string,
    handlerDelete: (content: string) => void;
}


export function Comment({ content, handlerDelete}: CommentProps) {
    //Estado setLikes é uma função 
    const [likes, setLikes] = useState(0);

    function handlerDeleteComment() {
        handlerDelete(content)
        console.log("Mensagem a ser apagada!")
        console.log(content)
    }

    // function handlerNewLikes() {
    //     setLikes(likes + 1)
    // }

    return (
        <div className={styles.comment}>
            <img
                src="https://github.com/rafaballerini.png" alt=""
            />

            <div className={styles.commentArea}>
                <div className={styles.content}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Wade Warren</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                                Comentado há 1h
                            </time>
                        </div>

                        <button title="Deletar comentário" onClick={handlerDeleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>

                    {/* <p>Adorei seu novo trabalho !! 💜💜</p> */}
                    <p>{content}</p>

                </div>

                <footer>
                    {/* Quando é uma execução de função se chama dessa forma */}
                    <button onClick={() => setLikes(likes+1) }>
                        <ThumbsUp />
                        <span>{likes}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}