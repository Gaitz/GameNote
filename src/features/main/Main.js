import React from "react"
import styles from "./Main.style.css"
import GameNoteAuthentication from "game-note/features/authentication/GameNoteAuthentication"

export default function Main() {
  return (
    <article>
      <h1 className={styles.h1}>Game Note</h1>
      <GameNoteAuthentication />
    </article>
  )
}
