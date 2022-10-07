import styles from "./index.module.css";
import { Comment } from "../Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR"
import { ChangeEvent, FormEvent, useState } from "react";

//Letras Miusculas em interfaces
interface Author{
    name: string,
    role: string
    avatarUrl: string;
}

interface Content{
    type: "paragraph" | "link",
    content: string;
}

interface PostProps {
    author: Author,
    content: Content[];
    publishedAt: string;
}

export function Post({ author, content, publishedAt }: PostProps) {
    //Estado React
    const [comments, setComments] = useState(["Adorei seu novo trabalho !! 💜💜"])
    const [newComment, setNewComment] = useState('')

    const publicacaoFormatada = format(
        new Date(publishedAt), "d 'de' LLLL 'ás' HH:mm'h' ", {
        locale: ptBr,
    }
    )

    const publicacaoRelativaDeAgora = formatDistanceToNow(
        new Date(publishedAt), {
        locale: ptBr,
        addSuffix: true,
    })

    function handleCreateNewComment(e: FormEvent) {
        e.preventDefault();
        setComments([...comments, newComment]);

        setNewComment('')
    }

    function handleNewCommentChange( event: ChangeEvent<HTMLTextAreaElement>) {
        setNewComment(event.target.value);
        console.log("event.target.value")
        console.log(event.target.value)
    }

    function handlerDelete(comentToDelete: string){
        const NewCommetDelete = comments.filter(comment => {
            return comment !== comentToDelete
        });
        // setComments(NewCommetDelete)
        console.log(NewCommetDelete)
    }

    // console.log(author.avatarUrl)
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.profile}>
                    <img
                        className={styles.avatar}
                        src={author.avatarUrl} />
                    <div className={styles.description}>
                        <strong>{author.name}</strong>
                        <span>
                            {author.role}
                        </span>
                    </div>
                </div>
                {/* Como só renderiza em tela pode se chamar a função direto dessa forma onde a função é => () */}
                <time title={publicacaoFormatada} dateTime={new Date(publishedAt).toDateString()}>
                    Publicado {publicacaoRelativaDeAgora}
                </time>
            </header>

            {/* <div className={styles.content}>
                <p>Oii pessoal!! </p>
                <p>
                    Acabei de publicar mais um projeto no meu github, corre aqui pra ver
                    🚀
                </p>
                <p>
                    <a href="">https://github.com/TcharlesDaviLassen</a>
                </p>
                <p>
                    <a href="">#novoprojeto</a> <a href="">#git</a>{" "}
                    <a href="">#frontend</a>
                </p>
            </div> */}


            <div className={styles.content}>
                {content.map(line => {
                    switch (line.type) {
                        case 'paragraph':
                            return <p>{line.content}</p>;
                        case 'link':
                            return <p><a href="#">{line.content}</a></p>
                        default:
                            return "";
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment}>
                <strong>Deixe seu feedback</strong>

                <textarea name="comment" value={newComment} onChange={handleNewCommentChange} placeholder="Deixe um comentário" />

                <button type="submit">Publicar</button>
            </form>

            <div className={styles.comments}>
                {comments.map((comment) => {
                    console.log("comment") ;
                    console.log(comment) ;
                    return (<Comment handlerDelete={handlerDelete} content={comment} />)
                })}
            </div>
            
        </article>
    )
}






// import styles from './index.module.css'
// export function Postes() {
//     return (
//         <article className={styles.post}>
//             <header className={styles.cabecalho}>
//                 <div className={styles.profile}>
//                     <img className={styles.avatar} src="https://github.com/TcharlesDaviLassen.png" alt="" />

//                     <div className={styles.description}>
//                         <strong>Tcharles</strong>
//                         <span>Full developer</span>

//                     </div>
//                 </div>

//                 <time title='29 de setembro as 14:30' dateTime='2022-05-11 08:00:00'>
//                     Publicado a 10 hora
//                 </time>

//             </header>

//             <div className={styles.informations}>

//                 <span> Oii pessoal!!</span>
//                 <br />
//                 <br />
//                 <span>Acabei de publicar mais um projeto no meu figma, corre aqui pra ver 🚀 </span>
//                 <br />
//                 <br />

//                 <a href='#'> #novoprojeto #figma #ux/ui</a>


//             </div>


//             <button className={styles.line}></button>


//             <div className={styles.feed} >
//                 <h1 className={styles.feedback}>Deixe seu feedback</h1>
//             </div>

//             <div>
//                 <textarea placeholder='Deixe seu comentario' className={styles.textFild} name="Text"></textarea>
//             </div>

//             <div>
//                 <button className={styles.publicar}>Publicar</button>
//             </div>

//             <div>
//                 <div>
//                     <div className={styles.div1}>
//                         <img className={styles.div2} src="https://github.com/rafaballerini.png" />
//                         <div className={styles.div3}>
//                             <div className={styles.div4}>
//                                 <strong>Rafaela</strong>
//                                 <time>Comentado há 2h</time>
//                                 <span>Adorei seu novo trabalho</span>
//                                 <br></br>
//                             </div>
//                             <div>
//                                 <i class="fa-regular fa-trash-can"></i></div></div></div></div><div><div class="_containerLike_1ed0a_38">
//                                     <div class="_like_1ed0a_52"><i class="fa-regular fa-thumbs-up"></i>
//                                     </div>
//                                     <strong>03</strong>
//                                 </div>
//                     <div>
//                         <div class="_container_1ed0a_1">
//                             <img class="_avatar_1ed0a_7" src="https://github.com/diego3g.png" />
//                             <div class="_comment_1ed0a_15">
//                                 <div class="_user_1ed0a_27">
//                                     <strong>diego3g</strong>
//                                     <time>Comentado há 2h</time>
//                                     <span>Arrasou! 👏👏</span>
//                                     <br></br>
//                                 </div>
//                                 <div><i class="fa-regular fa-trash-can"></i></div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="_containerLike_1ed0a_38">
//                         <div class="_like_1ed0a_52"><i class="fa-regular fa-thumbs-up"></i>
//                         </div>
//                         <strong>33</strong>
//                     </div></div>
//                 <div>
//                     <div class="_container_1ed0a_1">
//                         <img class="_avatar_1ed0a_7" src="https://github.com/diego3g.png" />
//                         <div class="_comment_1ed0a_15">
//                             <div class="_user_1ed0a_27">
//                                 <strong>diego3g</strong>
//                                 <time>Comentado há 6h</time>
//                                 <span>Incrível, Parabéns!</span>
//                                 <br></br>
//                             </div>
//                             <div>
//                                 <i class="fa-regular fa-trash-can"></i>
//                             </div></div>
//                     </div>
//                     <div class="_containerLike_1ed0a_38">
//                         <div class="_like_1ed0a_52">
//                             <i class="fa-regular fa-thumbs-up"></i>
//                         </div>
//                         <strong>10</strong>
//                     </div>
//                 </div>
//             </div>

//         </article>

//     )
// }

