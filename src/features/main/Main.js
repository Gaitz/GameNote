import React from "react"
import styles from "./Main.style.css"
import { useSelector } from "react-redux"

export default function Main () {
    React.useEffect(
        () => {
            const ORIGIN_X = 0
            const ORIGIN_Y = 0
            window.scrollTo(ORIGIN_X, ORIGIN_Y)
        },
        []
    )

    const userInfo = useSelector((state) => state.authentication.user)

    return (
        <>
            <article>
                <h1 className={styles.h1}>Game Note</h1>
                <p>Welcome: {userInfo?.email}</p>
            </article>
        </>
    )
}
