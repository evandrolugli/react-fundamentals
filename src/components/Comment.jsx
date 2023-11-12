import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Evandro Lugli</strong>
                            <time title="Nov 12th at 17:50" dateTime="2023-11-12 17:50:00">Around 1 hour ago</time>
                        </div>

                        <button title="delete comment">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Well Done. Congratulations!!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Claps <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}