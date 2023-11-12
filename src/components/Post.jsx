import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/evandrolugli.png" />
                    <div className={styles.authorInfo}>
                        <strong>Evandro Lugli</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="Nov 12th at 17:50" dateTime="2023-11-12 17:50:00">Published 1 hour ago</time>
            </header>

            <div className={styles.content}>
                <p>Hi everyone,</p>
                <p>I have just to realized a new project in my profile. It is a NWL project in AI.</p>
                <p><a href="#">evandrolugli/nwl-ai</a></p>
                <p>
                    <a href="#">#newproject</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#ai</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Type your comment</strong>
                <textarea
                    placeholder="Type your comment"
                />

                <footer>
                    <button type="submit">Post</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}