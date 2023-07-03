import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/ViniciusSantanaL.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className={styles.authorAndTime}>
            <div>
              <strong>Vinicius Santana</strong>
              <time title="02 de Julho de 2023"dateTime="2022-07-02 22:41:30">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito Bom Devon, parabéns !!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
